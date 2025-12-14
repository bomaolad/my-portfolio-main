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
    { name: 'HTML', icon: Html, delay: 100 },
    { name: 'CSS', icon: Css, delay: 200 },
    { name: 'JAVASCRIPT', icon: Javascript, delay: 300 },
    { name: 'TAILWIND CSS', icon: Tailwind, delay: 400 },
    { name: 'REACT', icon: Reactlogo, delay: 500 },
    { name: 'SQL', icon: Sql, delay: 600 },
    { name: 'MONGO DB', icon: Mongo, delay: 700 },
    { name: 'EXPRESS JS', icon: Express, delay: 800 },
  ];

  return (
    <div name='skills' className='w-full min-h-screen bg-surface-light relative overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-1/4 -left-48 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bottom-1/4 -right-48 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div ref={sectionRef} className='max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 flex flex-col justify-center min-h-screen relative z-10'>
        
        {/* Section Header */}
        <div className={`mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block relative mb-4">
            <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-light'>
              Skills
            </h2>
            <div className="h-1.5 bg-primary rounded-full"></div>
          </div>
          <p className='text-xl text-text-secondary max-w-2xl'>
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
                <div className="absolute -inset-1 bg-primary rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition duration-500"></div>
                
                {/* Card */}
                <div className="relative bg-surface backdrop-blur-sm p-8 rounded-2xl border border-border group-hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 opacity-20 rounded-xl blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative bg-surface-lighter/30 p-4 rounded-xl flex items-center justify-center">
                      <img 
                        className='w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300' 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                      />
                    </div>
                  </div>

                  {/* Skill name */}
                  <p className='text-center font-semibold text-text-secondary group-hover:text-text-primary transition-colors duration-300'>
                    {skill.name}
                  </p>

                  {/* Progress bar */}
                  <div className="mt-4 h-1.5 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transform origin-left transition-transform duration-1000 group-hover:scale-x-100 scale-x-0"
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
            <div className="absolute inset-0 bg-primary blur-xl opacity-30"></div>
            <div className="relative bg-surface px-8 py-4 rounded-full border border-primary/30">
              <p className="text-text-secondary text-sm sm:text-base font-medium">
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