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
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10' 
        : 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'
    }`}> 

      <div className="relative group">
        <h1 className='text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse'>
          Muhammed
        </h1>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
      </div>

      <ul className='hidden md:flex gap-8'>
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item} className='text-lg font-medium relative group cursor-pointer'>
            <Link to={item} smooth={true} duration={500} className='text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300'>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </li>
        ))}
      </ul>

      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors duration-300'>
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      <div className={`${
        !nav ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } md:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-opacity duration-300`}>
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
                className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400 transition-all duration-300'
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-40'>
        <ul>
         
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-gray-800 to-gray-700 rounded-r-lg shadow-lg hover:shadow-gray-700/50 mt-2'>
            <a className='flex justify-between items-center w-full text-white px-4 font-medium' href="https://github.com/bomaolad" target='_blank' rel='noopener noreferrer'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-r-lg shadow-lg hover:shadow-emerald-500/50 mt-2'>
            <a className='flex justify-between items-center w-full text-white px-4 font-medium' href="mailto:bellomuhammadoladimeji@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-sky-500 to-sky-400 rounded-r-lg shadow-lg hover:shadow-sky-500/50 mt-2'>
            <a className='flex justify-between items-center w-full text-white px-4 font-medium' href="https://x.com/muhammedbello_" target='_blank' rel='noopener noreferrer'>
              Twitter <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div> */}

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