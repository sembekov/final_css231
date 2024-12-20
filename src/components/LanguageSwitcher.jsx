import React, { useState } from "react";

function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    console.log(`Language switched to: ${lang}`);
  };

  return (
    <div className="flex space-x-4 items-center">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`px-4 py-2 rounded ${
          language === "en"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        English
      </button>
      <button
        onClick={() => handleLanguageChange("es")}
        className={`px-4 py-2 rounded ${
          language === "es"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        Español
      </button>
    </div>
  );
}

export default LanguageSwitcher;
