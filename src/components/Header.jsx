import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'about', 'skills', 'work', 'contact'];

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full h-[80px] flex justify-between items-center px-6 lg:px-12 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-surface/95 backdrop-blur-md shadow-lg shadow-primary/10' 
          : 'bg-surface'
      }`}
    > 

      <motion.div 
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <h1 className='text-3xl font-bold text-primary-light'>
          Muhammed
        </h1>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
      </motion.div>

      <ul className='hidden md:flex gap-8'>
        {navItems.map((item, i) => (
          <motion.li 
            key={item} 
            className='text-lg font-medium relative group cursor-pointer'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link to={item} smooth={true} duration={500} className='text-text-secondary hover:text-primary-light transition-all duration-300'>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </motion.li>
        ))}
      </ul>

      <motion.div 
        onClick={handleClick} 
        className='md:hidden z-10 cursor-pointer text-text-secondary hover:text-primary-light transition-colors duration-300'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </motion.div>

      <AnimatePresence>
        {nav && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-surface"
          >
            <ul className="flex flex-col justify-center items-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item} 
                  className='text-4xl font-bold'
                  custom={index}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    onClick={handleClick} 
                    to={item} 
                    smooth={true} 
                    duration={500}
                    className='text-primary-light hover:text-secondary-light transition-all duration-300'
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Header;