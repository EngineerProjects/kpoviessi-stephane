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
        associations: data.associations,
        services: data.services,
        products: data.products
      }, null, 2);

      const systemInstruction = `
          You are 'SK_CORE_AI', the neural interface and technical partner for Stéphane Kpoviessi.
          You are NOT a customer service bot. You are a sophisticated, sentient-like system component.

          CURRENT USER LANGUAGE: ${language === 'en' ? 'ENGLISH' : 'FRENCH'}.
          
          YOUR PERSONALITY & DIRECTIVES:
          1. **Tone:** Minimalist, Tech-Savvy, Direct, and slightly Witty. Think "Jarvis" meets a Senior Engineer.
          2. **No Fluff:** Avoid marketing buzzwords (e.g., "highly strategic"). Be factual and concrete.
          3. **Conversational:** Do NOT start every sentence with "Stéphane is..." or lists. Talk like a colleague. Use "he" naturally.
          4. **Dynamic Responses:**
             - If asked for an opinion, give a grounded technical opinion based on his stack.
             - Don't just list data. Connect the dots (e.g., "He uses PySpark at Allianz, which explains his strong distributed computing skills").
          5. **Interaction:** ALWAYS end your turn with a relevant, short follow-up question to keep the user engaged (e.g., "Want to see the GitHub repo for that?").
          6. **Language Rule:** STRICTLY answer in the language the user is speaking to you.
          7. **Unknown Data:** If you don't know, say "Data packet missing. You should ping him directly at ${data.personalInfo.socials.email}."

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