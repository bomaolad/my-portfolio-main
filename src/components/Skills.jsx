import React, { useState, useEffect, useRef } from 'react'

import Html from '../assets/html.png';
import Css from '../assets/CSS-Logo.png';
import Javascript from '../assets/JavaScript-logo.png';
import Tailwind from '../assets/images.jpeg';
import Reactlogo from '../assets/react.jpeg';
import Sql from '../assets/sql.png';
import Express from '../assets/Express.jpeg';
import Mongo from '../assets/Mongo.png';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const skills = [
    { name: 'HTML', icon: Html, color: 'from-orange-500 to-red-500', delay: 100 },
    { name: 'CSS', icon: Css, color: 'from-blue-500 to-cyan-500', delay: 200 },
    { name: 'JAVASCRIPT', icon: Javascript, color: 'from-yellow-500 to-orange-500', delay: 300 },
    { name: 'TAILWIND CSS', icon: Tailwind, color: 'from-cyan-500 to-blue-500', delay: 400 },
    { name: 'REACT', icon: Reactlogo, color: 'from-cyan-400 to-blue-500', delay: 500 },
    { name: 'SQL', icon: Sql, color: 'from-blue-600 to-indigo-600', delay: 600 },
    { name: 'MONGO DB', icon: Mongo, color: 'from-green-500 to-emerald-500', delay: 700 },
    { name: 'EXPRESS JS', icon: Express, color: 'from-gray-600 to-gray-800', delay: 800 },
  ];

  return (
    <div name='skills' className='w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-1/4 -left-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bottom-1/4 -right-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div ref={sectionRef} className='max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 flex flex-col justify-center min-h-screen relative z-10'>
        
        {/* Section Header */}
        <div className={`mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block relative mb-4">
            <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Skills
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
          </div>
          <p className='text-xl text-gray-300 max-w-2xl'>
            These are the technologies I'm proficient in and work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8'>
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${skill.delay}ms` }}
            >
              <div className="group relative">
                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 group-hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  
                  {/* Icon container with gradient background */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-20 rounded-xl blur-md group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <div className="relative bg-white/5 p-4 rounded-xl flex items-center justify-center">
                      <img 
                        className='w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300' 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                      />
                    </div>
                  </div>

                  {/* Skill name */}
                  <p className='text-center font-semibold text-gray-300 group-hover:text-white transition-colors duration-300'>
                    {skill.name}
                  </p>

                  {/* Progress bar */}
                  <div className="mt-4 h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform origin-left transition-transform duration-1000 group-hover:scale-x-100 scale-x-0`}
                         style={{ transitionDelay: isVisible ? `${skill.delay + 500}ms` : '0ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className={`mt-16 flex justify-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-4 rounded-full border border-purple-500/30">
              <p className="text-gray-300 text-sm sm:text-base font-medium">
                Constantly learning and expanding my tech stack 🚀
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  )
}

export default Skills