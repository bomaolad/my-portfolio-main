import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const NAV_ITEMS = ['home', 'about', 'skills', 'work', 'contact'];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      id='site-header'
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base/95 backdrop-blur-md border-b border-text-muted/10 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label='Main navigation'
        className='max-w-[1440px] mx-auto h-full px-6 sm:px-8 lg:px-12 flex items-center justify-between'
      >
        {/* Logo / Wordmark */}
        <Link to='home' smooth duration={500} className='cursor-pointer'>
          <span className='text-xl font-bold text-text-primary tracking-tight hover:text-accent-primary transition-colors duration-200'>
            MB
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className='hidden md:flex items-center gap-8'>
          {NAV_ITEMS.map((item) => (
            <li key={item} className='list-none px-0'>
              <Link
                to={item}
                smooth
                duration={500}
                className='text-sm font-medium text-text-secondary hover:text-text-primary cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary rounded'
                activeClass='text-text-primary'
                spy
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme toggle + mobile hamburger */}
        <div className='flex items-center gap-4'>
          <button
            id='theme-toggle'
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className='p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-elevate transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary'
          >
            <AnimatePresence mode='wait' initial={false}>
              {isDark ? (
                <motion.span key='sun' initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FaSun size={16} />
                </motion.span>
              ) : (
                <motion.span key='moon' initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FaMoon size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            id='mobile-menu-toggle'
            className='md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary rounded-md'
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label='Toggle mobile menu'
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key='mobile-menu'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className='md:hidden bg-base border-b border-text-muted/10 overflow-hidden'
          >
            <ul className='flex flex-col py-4'>
              {NAV_ITEMS.map((item) => (
                <li key={item} className='list-none px-0'>
                  <Link
                    to={item}
                    smooth
                    duration={500}
                    onClick={() => setMobileOpen(false)}
                    className='block px-6 py-3 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-elevate cursor-pointer transition-all duration-150'
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
