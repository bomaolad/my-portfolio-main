import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Scanner from '../assets/scanner.png';
import Portal from '../assets/portal.png';
import Gemini from '../assets/gemini.png';
import Hrs from '../assets/hrs.png';
import DiceGame from '../assets/Dice game.jpeg';
import Linkup from '../assets/linkup.png';

const Works = () => {
  const projects = [
    {
      title: 'Barcode Scanner App',
      image: Scanner,
      demo: 'https://drive.google.com/drive/folders/1aBmXOo3XxE_ADhKiCiWuxh67S19TQ3J_?usp=sharing',
      code: 'https://github.com/muhammed-codes/scan-item',
    },
    {
      title: 'Family Portal',
      image: Portal,
      demo: '/',
      code: 'https://github.com/bomaolad/the_royal_chuckles',
    },
    {
      title: 'Gemini Clone',
      image: Gemini,
      demo: '',
      code: 'https://github.com/bomaolad/gemini-clone',
    },
    {
      title: 'HRS App',
      image: Hrs,
      demo: '',
      code: 'https://github.com/bomaolad/hrs-app',
    },
    {
      title: 'JS Dice Game',
      image: DiceGame,
      demo: 'https://dice-game-i6kj.vercel.app/',
      code: 'https://github.com/bomaolad/dicee-challenge',
    },
    {
      title: 'Linkup Social Media App',
      image: Linkup,
      demo: '',
      code: 'https://github.com/bomaolad/linkup',
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
                    <div className="flex gap-4">
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
    </div>
  )
}

export default Works