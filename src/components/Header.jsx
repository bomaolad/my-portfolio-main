import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll'

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

  return (
    <div className={`fixed w-full h-[80px] flex justify-between items-center px-6 lg:px-12 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-surface/95 backdrop-blur-md shadow-lg shadow-primary/10' 
        : 'bg-surface'
    }`}> 

      <div className="relative group">
        <h1 className='text-3xl font-bold text-primary-light'>
          Muhammed
        </h1>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
      </div>

      <ul className='hidden md:flex gap-8'>
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item} className='text-lg font-medium relative group cursor-pointer'>
            <Link to={item} smooth={true} duration={500} className='text-text-secondary hover:text-primary-light transition-all duration-300'>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </li>
        ))}
      </ul>

      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer text-text-secondary hover:text-primary-light transition-colors duration-300'>
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      <div className={`${
        !nav ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } md:hidden fixed top-0 left-0 w-full h-screen bg-surface transition-opacity duration-300`}>
        <ul className="flex flex-col justify-center items-center h-full gap-8">
          {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
            <li key={item} className='text-4xl font-bold transform transition-all duration-300 hover:scale-110'
                style={{ 
                  animation: nav ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none' 
                }}>
              <Link 
                onClick={handleClick} 
                to={item} 
                smooth={true} 
                duration={500}
                className='text-primary-light hover:text-secondary-light transition-all duration-300'
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Header;