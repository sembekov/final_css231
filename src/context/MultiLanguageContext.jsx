import React, { createContext, useState, useContext } from "react";

const MultiLanguageContext = createContext();

export const MultiLanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <MultiLanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </MultiLanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(MultiLanguageContext);

export default MultiLanguageContext;
