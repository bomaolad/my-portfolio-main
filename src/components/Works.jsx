import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Schoolportal from '../assets/schoolporalImage.png';
import Foody from '../assets/food-landing-page.avif';
import Todo from '../assets/Todo App.jpeg';
import QuoteGenerator from '../assets/Quote genrator.png';
import DiceGame from '../assets/Dice game.jpeg';
import DrumKit from '../assets/Drum kit.jpeg';

const Works = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'School Portal',
      image: Schoolportal,
      demo: '/',
      code: 'https://github.com/Hammad153/University-portal.git',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 100
    },
    {
      title: 'Foody Website',
      image: Foody,
      demo: '/',
      code: 'https://github.com/Hammad153/Foody-site',
      gradient: 'from-orange-500 to-red-500',
      delay: 200
    },
    {
      title: 'Todo List App',
      image: Todo,
      demo: 'https://my-todo-app-gold-phi.vercel.app/',
      code: 'https://github.com/Hammad153/TodoList-App',
      gradient: 'from-purple-500 to-pink-500',
      delay: 300
    },
    {
      title: 'Random Quote Generator',
      image: QuoteGenerator,
      demo: 'https://random-quote-generator-seven-ashen.vercel.app/',
      code: 'https://github.com/Hammad153/Random-quote-Generator',
      gradient: 'from-cyan-500 to-blue-500',
      delay: 400
    },
    {
      title: 'JS Dice Game',
      image: DiceGame,
      demo: 'https://dice-game-i6kj.vercel.app/',
      code: 'https://github.com/Hammad153/Dice-Game-',
      gradient: 'from-green-500 to-emerald-500',
      delay: 500
    },
    {
      title: 'Drum Kit App',
      image: DrumKit,
      demo: 'https://drum-kit-app-nu.vercel.app/',
      code: 'https://github.com/Hammad153/Drum-kit-app',
      gradient: 'from-pink-500 to-rose-500',
      delay: 600
    }
  ];

  return (
    <div name='work' className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-full min-h-screen relative overflow-hidden'>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-20 -right-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-20 -left-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className='max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 flex flex-col justify-center w-full min-h-screen relative z-10'>
        
        {/* Section Header */}
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block relative mb-4">
            <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              My Work
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
          </div>
          <p className='text-xl text-gray-300 max-w-2xl'>
            Here's a showcase of my recent projects. Check them out!
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${project.delay}ms` }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition duration-500`}></div>
              
              {/* Card */}
              <div className="relative h-full bg-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-transparent transition-all duration-300">
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-20`}></div>
                </div>

                {/* Content */}
                <div className="relative p-6 bg-gradient-to-b from-slate-800 to-slate-900">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a 
                      href={project.demo} 
                      target='_blank' 
                      rel="noopener noreferrer"
                      className="flex-1 group/btn"
                    >
                      <button className={`w-full bg-gradient-to-r ${project.gradient} text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300`}>
                        <FaExternalLinkAlt className="text-sm" />
                        Demo
                      </button>
                    </a>
                    
                    <a 
                      href={project.code} 
                      target='_blank' 
                      rel="noopener noreferrer"
                      className="flex-1 group/btn"
                    >
                      <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-500 transform hover:scale-105 transition-all duration-300">
                        <FaGithub className="text-lg" />
                        Code
                      </button>
                    </a>
                  </div>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-4 rounded-full border border-purple-500/30">
              <p className="text-gray-300 text-sm sm:text-base font-medium">
                More projects coming soon! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works