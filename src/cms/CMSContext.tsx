import React, { createContext, useContext, useState, useEffect } from 'react';
import { CMSData } from './types';
import { defaultCMSData } from './defaultData';

interface CMSContextType {
  cmsData: CMSData;
  updateCMS: (patch: Partial<CMSData>) => void;
  resetCMS: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cmsData, setCmsData] = useState<CMSData>(() => {
    const DATA_VERSION = 'v4_remove_personal_site';
    try {
      const currentVer = localStorage.getItem('portfolio-cms-version');
      if (currentVer !== DATA_VERSION) {
        localStorage.setItem('portfolio-cms-version', DATA_VERSION);
        localStorage.setItem('portfolio-cms-data', JSON.stringify(defaultCMSData));
        return defaultCMSData;
      }
      const stored = localStorage.getItem('portfolio-cms-data');
      if (stored) {
        const parsed = JSON.parse(stored) as CMSData;
        return {
          ...defaultCMSData,
          ...parsed,
          hero: { ...defaultCMSData.hero, ...(parsed.hero || {}) },
          about: { ...defaultCMSData.about, ...(parsed.about || {}) },
          contact: { ...defaultCMSData.contact, ...(parsed.contact || {}) },
          footer: { ...defaultCMSData.footer, ...(parsed.footer || {}) },
          meta: { ...defaultCMSData.meta, ...(parsed.meta || {}) },
        };
      }
    } catch (e) {
      console.error('Error loading CMS data from localStorage:', e);
    }
    return defaultCMSData;
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio-cms-data', JSON.stringify(cmsData));
    } catch (e) {
      console.error('Error saving CMS data to localStorage:', e);
    }
  }, [cmsData]);

  const updateCMS = (patch: Partial<CMSData>) => {
    setCmsData(prev => ({ ...prev, ...patch }));
  };

  const resetCMS = () => {
    setCmsData(defaultCMSData);
    localStorage.removeItem('portfolio-cms-data');
  };

  return (
    <CMSContext.Provider value={{ cmsData, updateCMS, resetCMS }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
