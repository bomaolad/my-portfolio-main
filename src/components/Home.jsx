import React, { useState, useEffect } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import myImage from '../assets/myImage.png';

const Home = () => {
  const [nav, setNav] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div name='home' className='w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute w-64 h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className='max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center min-h-screen relative z-10 py-20'>
        
        {/* Profile Image with gradient border */}
        <div className={`my-8 transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative w-[160px] h-[160px] group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow blur-md"></div>
            <img 
              src={myImage} 
              className='relative rounded-full w-[150px] h-[150px] object-cover border-4 border-slate-900 shadow-2xl hover:scale-105 transition-transform duration-300' 
              alt="Muhammed Bello" 
            />
          </div>
        </div>

        {/* Greeting */}
        <p className={`text-lg sm:text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium mb-2 transform transition-all duration-1000 delay-100 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Hi, my name is
        </p>

        {/* Name with gradient */}
        <h1 className={`text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 transform transition-all duration-1000 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            Muhammed Bello
          </span>
        </h1>

        {/* Role */}
        <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transform transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          I'm a <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">FullStack Developer</span>
        </h2>

        {/* Description paragraphs with card-like background */}
        <div className="space-y-4 max-w-[800px]">
          <p className={`text-gray-300 text-base sm:text-lg leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-400`}>
            I'm a full-stack developer fueled by a passion for crafting user-friendly and visually captivating websites. I'm a detail-oriented, collaborative, results-driven problem-solver who thrives on creating solutions that meet both user needs and business objectives.
          </p>

          <p className={`text-gray-300 text-base sm:text-lg leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-500`}>
            I've honed my skills in these technologies: 
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold"> HTML5, CSS3, JavaScript, Node.js, React, and JavaScript Frameworks</span>, working with various technologies including APIs (REST, GraphQL), backend development, and cloud technologies.
          </p>

          <p className={`text-gray-300 text-base sm:text-lg leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-600`}>
            I have more than <span className="text-yellow-400 font-bold">2 years of experience</span> building responsive websites, e-commerce platforms, and web applications with user-centered design.
          </p>
        </div>

        {/* CTA Button */}
        <div className={`mt-8 transform transition-all duration-1000 delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            <button className='group relative px-8 py-4 text-lg font-semibold text-white overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50'>
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-300"></div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button content */}
              <span className="relative flex items-center gap-3">
                View My Work
                <HiArrowNarrowRight className='group-hover:translate-x-2 transition-transform duration-300' size={24} />
              </span>
            </button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  )
}

export default Home