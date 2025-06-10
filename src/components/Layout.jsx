import './Layout.css';
import { Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import LanguageSelector from './LanguageSelector';
import TypewriterFade from './TypewriterFade';
import blackImg from '../assets/black.jpeg';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const translations = {
  es: {
    welcome: "¡Hola! Soy Gonzalo o DevMartinese. Desarrollador creativo explorando la magia entre juegos de mesa y web. Three.js + GSAP = 🎲✨",
    usefulLinks: "Enlaces útiles",
    moreComing: "Más experiencias próximamente"
  },
  en: {
    welcome: "Hi! I'm Gonzalo or DevMartinese. Creative developer exploring the magic between board games and web. Three.js + GSAP = 🎲✨",
    usefulLinks: "Useful Links",
    moreComing: "More experiences coming soon"
  }
};

const usefulLinks = [
  { name: 'Chess Puzzle Configurator', url: 'https://inquisitive-semifreddo-af9fd5.netlify.app/', emoji: '♟️' },
  { name: 'Game Jam Project - Paisanos', url: 'https://peppy-cat-710a5b.netlify.app/', emoji: '🎮' },
  { name: 'Chess960 Puzzle Configurator', url: 'https://6841dd863cc8df0077449491--cheery-croquembouche-cebcfc.netlify.app/', emoji: '♞' },
  { name: 'Abstract + Strategy = Abstractegy [WIP]', url: 'https://lucky-alpaca-c8cac1.netlify.app/', emoji: '🎲' },
];

const LinkIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="link-icon">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" />
  </svg>
);

const titles = [
  'FRONT-END DEVELOPER',
  'BACK-END DEVELOPER',
  'PROMPT-END DEVELOPER (?'
];

function AnimatedPhotoTitles() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    if (titleIndex < titles.length - 1) {
      const timeout = setTimeout(() => {
        setTitleIndex((prev) => prev + 1);
      }, 2200); // Pausa visible
      return () => clearTimeout(timeout);
    }
  }, [titleIndex]);

  return (
    <div className="animated-photo-titles-card">
      <AnimatePresence mode="wait">
        <motion.div
        style={{fontSize: 'small'}}
          key={titles[titleIndex]}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {titles[titleIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-card-row">
        <img src={blackImg} alt="Foto de perfil" className="profile-photo large" />
        <div className="profile-card-info">
          <AnimatedPhotoTitles />
          <div className="profile-socials">
            <a href="https://github.com/DevMartinese" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.instagram.com/gonzalo.martinese/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/gonzamartinesse/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Layout = () => {
  const [language, setLanguage] = useState('en');

  return (
    <div className="layout-root">
      <div className="layout-center">
        <div className="logo-box">
          <TypewriterFade text="DEVMARTINESE" className="logo-text-brutal" />
        </div>
      <ProfileCard />
        <div className="welcome-card">
          <div className="welcome-header">
            <p className="welcome-main">{translations[language].welcome}</p>
            <LanguageSelector onLanguageChange={setLanguage} language={language} />
          </div>
        </div>
        <div className="links-section">
          <h2 className="links-title">{translations[language].usefulLinks}</h2>
          <div className="links-list">
            {usefulLinks.map(link => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="useful-link-card"
              >
                <span><LinkIcon /></span>
                <span className="useful-link-text">{link.name}</span>
                <span className="useful-link-emoji">{link.emoji}</span>
              </a>
            ))}
          </div>
          <div className="next-experiences">{translations[language].moreComing}</div>
        </div>
      </div>
      {/* Aquí va el contenido de las páginas, si lo necesitas */}
      {/* <div className="w-full max-w-2xl mx-auto mt-12">
        <Outlet />
      </div> */}
    </div>
  );
};

export default Layout; 