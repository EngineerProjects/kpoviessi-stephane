"use client";

import React from 'react';
import { education } from '@/data/education';
import { experiences } from '@/data/experience';
import { associations } from '@/data/associations';
import { personalInfo } from '@/data/personal';
import { useLanguage } from '@/i18n/LanguageContext';
import { getLocalizedText, getLocalizedArray } from '@/utils/helpers';

export default function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-32 pb-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{t('about.title')}</h1>
          
          <div className="prose prose-lg max-w-none bg-white rounded-xl p-8 shadow-md">
            <p className="text-lg text-gray-700 mb-6">
              {getLocalizedText(personalInfo.bio, language)}
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">{t('about.education')}</h2>
            <ul className="space-y-4 mb-8">
              {education.map((edu, index) => (
                <li key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-bold">{getLocalizedText(edu.degree, language)} - {getLocalizedText(edu.field, language)}</h3>
                    <span className="text-primary-600 font-medium">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <p className="text-gray-700">{edu.institution}{edu.location ? `, ${getLocalizedText(edu.location, language)}` : ''}</p>
                </li>
              ))}
            </ul>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">{t('about.experience')}</h2>
            <div className="space-y-6 mb-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-bold">{getLocalizedText(exp.title, language)}</h3>
                    <span className="text-primary-600 font-medium">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{exp.company}, {getLocalizedText(exp.location, language)}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {getLocalizedArray(exp.description, language).map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  {exp.skills && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">{t('about.associations')}</h2>
            <div className="space-y-6 mb-8">
              {associations.map((association, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-bold">{getLocalizedText(association.title, language)}</h3>
                    <span className="text-green-600 font-medium">{association.startDate} - {association.endDate || t('experience.present')}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{association.organization}, {getLocalizedText(association.location, language)}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {getLocalizedArray(association.description, language).map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  {association.skills && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {association.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {personalInfo.hobbies && personalInfo.hobbies.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mt-12 mb-4">{t('about.hobbies')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {personalInfo.hobbies.map((hobby, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-r from-primary-100 to-secondary-100 p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="text-sm font-medium text-gray-800">{hobby}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
