import { useState } from 'react';
import { LANGUAGE_VERSIONS } from "../constants/constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 flex items-center">
      <p className="mb-2 text-xl text-white font-bold mr-4">Language:</p>
      <div className="relative inline-block">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {language}
        </button>
        {isOpen && (
          <div className="absolute mt-2 w-full bg-gray-800 rounded shadow-lg z-10">
            {languages.map(([lang, version]) => (
              <div
                key={lang}
                className={`px-4 py-2 cursor-pointer ${
                  lang === language ? "bg-gray-900 text-blue-400" : "text-white"
                } hover:bg-gray-900 hover:text-blue-400`}
                onClick={() => {
                  onSelect(lang);
                  setIsOpen(false);
                }}
              >
                {lang}
                &nbsp;
                <span className="text-gray-600 text-sm">({version})</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
