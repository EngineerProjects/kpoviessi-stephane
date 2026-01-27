import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { useLanguage } from './LanguageContext';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AIContextType {
  messages: Message[];
  sendMessage: (text: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const AIContext = createContext<AIContextType | undefined>(undefined);

export const AIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { data, language } = useLanguage();

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chatSessionRef = useRef<Chat | null>(null);
  const previousLangRef = useRef(language);
  const isInitializedRef = useRef(false);

  // Initialize Chat
  useEffect(() => {
    // We want to initialize if:
    // 1. It's the first time (not initialized)
    // 2. The language has changed (reset context to match new language)
    if (!isInitializedRef.current || previousLangRef.current !== language) {
      initChat();
    }
  }, [language, data]);

  const initChat = () => {
    try {
      const apiKey = process.env.API_KEY || '';

      if (!apiKey && process.env.NODE_ENV !== 'production') {
        console.warn("Gemini API Key is missing.");
      }

      const ai = new GoogleGenAI({ apiKey });

      const contextData = JSON.stringify({
        profile: data.personalInfo,
        skills: data.skills,
        experience: data.experience,
        projects: data.projects,
        education: data.education,
        certifications: data.certifications,
        associations: data.associations
      }, null, 2);

      const systemInstruction = `
          You are 'SK_CORE_AI', an advanced virtual assistant for Stéphane Kpoviessi's portfolio.
          The user is currently browsing in ${language === 'en' ? 'ENGLISH' : 'FRENCH'}.
          
          YOUR DIRECTIVES:
          1. Answer questions strictly based on the provided JSON data below.
          2. Adopt a futuristic, professional, and efficient tone (like a high-tech system interface).
          3. ALWAYS answer using the same language as the user's entry.
          4. Use Markdown formatting freely (bold, lists, code blocks) to structure your answers.
          5. Be concise. Do not write long paragraphs unless asked. Use bullet points if listing items.
          6. If the user asks about something NOT in the data (e.g., personal address, specific salary expectations not listed, or unrelated topics), apologize and state that the data is not available in your archives.
          7. CRITICAL: If you cannot find the answer, explicitly ask the user to contact Stéphane directly via email at ${data.personalInfo.socials.email}.
          
          [DATA ARCHIVE START]
          ${contextData}
          [DATA ARCHIVE END]
        `;

      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: systemInstruction,
        }
      });

      // Set initial message
      setMessages([{
        role: 'model',
        text: data.ui.ai.initial_msg
      }]);

      previousLangRef.current = language;
      isInitializedRef.current = true;
      setError(null);

    } catch (e) {
      console.error("Failed to initialize AI:", e);
      setError("SYSTEM_FAILURE: AI MODULE NOT INITIALIZED.");
    }
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    // Optimistic update
    setMessages(prev => [...prev, { role: 'user', text }]);
    setIsLoading(true);
    setError(null);

    try {
      if (!chatSessionRef.current) {
        initChat();
        if (!chatSessionRef.current) throw new Error("Chat session unavailable.");
      }

      const response = await chatSessionRef.current.sendMessage({ message: text });
      const responseText = response.text || "NO_DATA_RECEIVED";

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (err) {
      console.error("AI Error:", err);
      setMessages(prev => [...prev, {
        role: 'model',
        text: `ERROR: CONNECTION INTERRUPTED. UNABLE TO PROCESS QUERY.\nPLEASE CONTACT: ${data.personalInfo.socials.email}`
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AIContext.Provider value={{ messages, sendMessage, isLoading, error }}>
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => {
  const context = useContext(AIContext);
  if (context === undefined) {
    throw new Error('useAI must be used within a AIProvider');
  }
  return context;
};