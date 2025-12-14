import React, { useState, useEffect, useRef } from 'react'

function About() {
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

  return (
    <div name='about' className='w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-20 -left-48 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-20 -right-48 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className='flex flex-col justify-center items-center w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-[1200px] w-full'>
          
          {/* Section Header */}
          <div className={`mb-16 text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block relative">
              <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4'>
                About Me
              </h2>
              <div className="h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
            </div>
          </div>

          {/* Content Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
            
            {/* Left Column - Main Statement */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
                
                {/* Content card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Hi, I'm <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Muhammed Bello</span>
                      </h3>
                      <p className="text-cyan-400 font-semibold">FullStack Developer</p>
                    </div>
                  </div>
                  
                  <p className='text-gray-300 text-lg leading-relaxed'>
                    Look around my portfolio website and enjoy exploring my work, projects, and the digital experiences I've crafted with passion and precision.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/20">
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">2+</div>
                      <div className="text-gray-400 text-sm">Years Experience</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-4 rounded-lg border border-purple-500/20">
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">∞</div>
                      <div className="text-gray-400 text-sm">Projects Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Detailed Description */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative group h-full">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
                
                {/* Content card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">My Passion</h3>
                  </div>

                  <div className="space-y-4">
                    <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                      I'm a FullStack developer with a passion for building <span className="text-cyan-400 font-semibold">user-friendly websites</span> and crafting <span className="text-purple-400 font-semibold">engaging digital experiences</span>.
                    </p>

                    <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                      I excel at <span className="text-pink-400 font-semibold">solving complex problems with code</span>, driven by a desire to create innovative solutions that make a real impact.
                    </p>

                    <div className="pt-4 border-t border-gray-700">
                      <h4 className="text-lg font-semibold text-white mb-3">I help businesses:</h4>
                      <ul className="space-y-2">
                        {[
                          'Grow their online presence',
                          'Build scalable web applications',
                          'Create memorable user experiences',
                          'Make a positive impact with technology'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative line */}
          <div className={`mt-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform transition-all duration-1000 delay-600 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>
      </div>
    </div>
  )
}

export default About