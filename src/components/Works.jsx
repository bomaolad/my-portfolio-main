import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaTimes } from 'react-icons/fa';
import Scanner from '../assets/scanner.png';
import Portal from '../assets/portal.png';
import Gemini from '../assets/gemini.png';
import Hrs from '../assets/hrs.png';
import DiceGame from '../assets/Dice game.jpeg';
import Linkup from '../assets/linkup.png';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Barcode Scanner App',
      image: Scanner,
      demo: 'https://drive.google.com/drive/folders/1aBmXOo3XxE_ADhKiCiWuxh67S19TQ3J_?usp=sharing',
      code: 'https://github.com/muhammed-codes/scan-item',
      technologies: ['React Native', 'Expo', 'Camera API', 'CSS'],
      description: 'A mobile application that scans barcodes and QR codes to retrieve product information instantly.',
      problemsSolved: [
        'Eliminated manual product lookup by automating barcode scanning',
        'Reduced inventory management time by 60%',
        'Provided real-time product data access for better decision making'
      ]
    },
    {
      title: 'Family Portal',
      image: Portal,
      demo: 'https://royal-chuckles-family-portal.vercel.app/',
      code: 'https://github.com/bomaolad/royal-chuckles-family-portal',
      technologies: ['React', 'Typescript', 'RESTAPI', 'Next JS'],
      description: 'A family communication and organization platform for keeping loved ones connected.',
      problemsSolved: [
        'Centralized family communication in one secure platform',
        'Simplified event planning and coordination among family members',
        'Created a private space for sharing memories and updates'
      ]
    },
    {
      title: 'Gemini Clone',
      image: Gemini,
      demo: 'https://gemini-clone-ruby-eight.vercel.app/',
      code: 'https://github.com/bomaolad/gemini-clone',
      technologies: ['React', 'Gemini API', 'Tailwind', 'JavaScript'],
      description: 'A functional clone of Google Gemini AI assistant with conversation capabilities.',
      problemsSolved: [
        'Demonstrated integration of AI APIs into web applications',
        'Created an intuitive conversational user interface',
        'Implemented real-time streaming responses for better UX'
      ]
    },
    {
      title: 'HRS App',
      image: Hrs,
      demo: '',
      code: 'https://github.com/bomaolad/hrs-app',
      technologies: ['React Native', 'Tailwind', 'TypeScript'],
      description: 'A human resource management system for streamlining HR operations.',
      problemsSolved: [
        'Automated employee attendance and leave management',
        'Simplified payroll processing and record keeping',
        'Improved HR workflow efficiency with digital solutions'
      ]
    },
    {
      title: 'JS Dice Game',
      image: DiceGame,
      demo: 'https://dice-game-i6kj.vercel.app/',
      code: 'https://github.com/bomaolad/dicee-challenge',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description: 'An interactive dice rolling game with fun animations and score tracking.',
      problemsSolved: [
        'Created an engaging multiplayer game experience',
        'Implemented fair randomization for dice rolls',
        'Designed responsive UI that works across all devices'
      ]
    },
    {
      title: 'Linkup Social Media App',
      image: Linkup,
      demo: '',
      code: 'https://github.com/bomaolad/linkup',
      technologies: ['React', 'Supabase', 'Tailwind', 'Next JS'],
      description: 'A modern social media platform for connecting people and sharing moments.',
      problemsSolved: [
        'Built real-time social interactions with live updates',
        'Implemented secure user authentication and data privacy',
        'Created an engaging feed algorithm for personalized content'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div name='work' className='bg-surface w-full min-h-screen relative overflow-hidden'>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 top-20 -right-48 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-96 h-96 bottom-20 -left-48 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <motion.div 
        className='max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 flex flex-col justify-center w-full min-h-screen relative z-10'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Section Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="inline-block relative mb-4">
            <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-light'>
              My Work
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
          <p className='text-xl text-text-secondary max-w-2xl'>
            Here's a showcase of my recent projects. Check them out!
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="group relative h-full">
                <motion.div 
                  className="absolute -inset-1 bg-primary rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition duration-500"
                />
                
                <div className="relative h-full bg-surface-light backdrop-blur-sm rounded-2xl overflow-hidden border border-border group-hover:border-primary/50 transition-all duration-300">
                  
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-20"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 bg-surface-light">
                    <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary-light transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <motion.a 
                        href={project.demo} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className="flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button className="w-full bg-primary hover:bg-primary-dark text-text-primary font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
                          <FaExternalLinkAlt className="text-sm" />
                          Demo
                        </button>
                      </motion.a>
                      
                      <motion.a 
                        href={project.code} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className="flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button className="w-full bg-surface-lighter hover:bg-border text-text-primary font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 border border-border hover:border-primary/50 transition-all duration-300">
                          <FaGithub className="text-lg" />
                          Code
                        </button>
                      </motion.a>

                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/30 hover:border-secondary/60 font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300"
                      >
                        <FaInfoCircle className="text-lg" />
                      </motion.button>
                    </div>

                    {/* Technologies */}
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.3, 
                              delay: techIndex * 0.1,
                              ease: "easeOut"
                            }}
                            whileHover={{ 
                              scale: 1.1, 
                              y: -2,
                              boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)"
                            }}
                            className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full 
                                       bg-primary/20 text-primary-light border border-primary/30
                                       hover:bg-primary/30 hover:border-primary/60
                                       transition-all duration-300 cursor-default
                                       backdrop-blur-sm shadow-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse"></span>
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary opacity-20 blur-2xl rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-primary blur-xl opacity-30"></div>
            <div className="relative bg-surface px-8 py-4 rounded-full border border-primary/30">
              <p className="text-text-secondary text-sm sm:text-base font-medium">
                More projects coming soon! 🚀
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface-light rounded-2xl border border-border shadow-2xl"
            >
              {/* Close Button */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(null);
                }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="sticky top-4 float-right mr-4 mt-4 z-50 w-10 h-10 bg-surface-lighter hover:bg-border rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-300 border border-border cursor-pointer"
                type="button"
              >
                <FaTimes className="text-lg" />
              </motion.button>

              {/* Modal Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-surface-light via-transparent to-transparent z-10"></div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 -mt-8 relative z-20">
                <h3 className="text-3xl sm:text-4xl font-bold text-primary-light mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/20 text-primary-light border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Problems Solved */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
                    Key Problems Solved
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.problemsSolved.map((problem, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-text-primary"
                      >
                        <span className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-base">{problem}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-border/50">
                  {selectedProject.demo && (
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button className="w-full bg-primary hover:bg-primary-dark text-text-primary font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
                        <FaExternalLinkAlt className="text-sm" />
                        View Demo
                      </button>
                    </motion.a>
                  )}
                  <motion.a
                    href={selectedProject.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button className="w-full bg-surface-lighter hover:bg-border text-text-primary font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 border border-border hover:border-primary/50 transition-all duration-300">
                      <FaGithub className="text-lg" />
                      View Code
                    </button>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Works