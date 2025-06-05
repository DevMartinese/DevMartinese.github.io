import { useState } from 'react';

const LanguageSelector = ({ onLanguageChange, language }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' }
  ];

  return (
    <div className="language-selector">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="language-button"
      >
        {language.toUpperCase()}
      </button>
      {isOpen && (
        <div className="language-dropdown">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className="language-option"
            >
              <span className="language-code">{lang.code.toUpperCase()}</span>
              <span className="language-name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 