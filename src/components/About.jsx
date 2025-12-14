import React from 'react'
import { motion } from 'framer-motion'

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const listItems = [
    'Grow their online presence',
    'Build scalable web applications',
    'Create memorable user experiences',
    'Make a positive impact with technology'
  ];

  return (
    <div name='about' className='w-full min-h-screen bg-surface relative overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 top-20 -left-48 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-96 h-96 bottom-20 -right-48 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <motion.div 
        className='flex flex-col justify-center items-center w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative z-10'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='max-w-[1200px] w-full'>
          
          {/* Section Header */}
          <motion.div className="mb-16 text-center lg:text-left" variants={itemVariants}>
            <div className="inline-block relative">
              <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-light mb-4'>
                About Me
              </h2>
              <motion.div 
                className="h-1.5 bg-primary rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ originX: 0 }}
              />
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
            
            {/* Left Column */}
            <motion.div variants={cardVariants}>
              <motion.div 
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-1 bg-primary rounded-2xl blur-lg opacity-0 group-hover:opacity-25 transition duration-500"></div>
                
                <div className="relative bg-surface-light backdrop-blur-sm p-8 rounded-2xl border border-border group-hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
                        Hi, I'm <span className="text-secondary-light">Muhammed Bello</span>
                      </h3>
                      <p className="text-primary-light font-semibold">FullStack Developer</p>
                    </div>
                  </div>
                  
                  <p className='text-text-secondary text-lg leading-relaxed'>
                    Look around my portfolio website and enjoy exploring my work, projects, and the digital experiences I've crafted with passion and precision.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <motion.div 
                      className="bg-primary/10 p-4 rounded-lg border border-primary/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl font-bold text-primary-light">2+</div>
                      <div className="text-text-muted text-sm">Years Experience</div>
                    </motion.div>
                    <motion.div 
                      className="bg-secondary/10 p-4 rounded-lg border border-secondary/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl font-bold text-secondary-light">10+</div>
                      <div className="text-text-muted text-sm">Projects Delivered</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div variants={cardVariantsRight}>
              <motion.div 
                className="relative group h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-1 bg-secondary rounded-2xl blur-lg opacity-0 group-hover:opacity-25 transition duration-500"></div>
                
                <div className="relative bg-surface-light backdrop-blur-sm p-8 rounded-2xl border border-border group-hover:border-secondary/50 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary">My Passion</h3>
                  </div>

                  <div className="space-y-4">
                    <p className='text-text-secondary text-base sm:text-lg leading-relaxed'>
                      I'm a FullStack developer with a passion for building <span className="text-primary-light font-semibold">user-friendly websites</span> and crafting <span className="text-secondary-light font-semibold">engaging digital experiences</span>.
                    </p>

                    <p className='text-text-secondary text-base sm:text-lg leading-relaxed'>
                      I excel at <span className="text-accent-light font-semibold">solving complex problems with code</span>, driven by a desire to create innovative solutions that make a real impact.
                    </p>

                    <div className="pt-4 border-t border-border">
                      <h4 className="text-lg font-semibold text-text-primary mb-3">I help businesses:</h4>
                      <ul className="space-y-2">
                        {listItems.map((item, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-center gap-3 text-text-secondary"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom decorative line */}
          <motion.div 
            className="mt-16 h-1 bg-primary/50"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default About