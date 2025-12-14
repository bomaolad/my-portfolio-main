import React, { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import myImage from '../assets/myImage.png';

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div name='home' className='w-full min-h-screen bg-surface relative overflow-hidden'>
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute w-96 h-96 -top-48 -left-48 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-96 h-96 -bottom-48 -right-48 bg-secondary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      <motion.div 
        className='max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center min-h-screen relative z-10 py-20'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Profile Image */}
        <motion.div className="my-8" variants={imageVariants}>
          <motion.div 
            className="relative w-[160px] h-[160px] group"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="absolute inset-0 bg-primary rounded-full blur-md opacity-60"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <img 
              src={myImage} 
              className='relative rounded-full w-[150px] h-[150px] object-cover border-4 border-surface shadow-2xl' 
              alt="Muhammed Bello" 
            />
          </motion.div>
        </motion.div>

        {/* Greeting */}
        <motion.p 
          className='text-lg sm:text-xl text-primary-light font-medium mb-2'
          variants={itemVariants}
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1 
          className='text-5xl sm:text-7xl lg:text-8xl font-bold mb-4'
          variants={itemVariants}
        >
          <span className="text-secondary-light">
            Muhammed Bello
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2 
          className='text-3xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6'
          variants={itemVariants}
        >
          I'm a <span className="text-primary-light">FullStack Developer</span>
        </motion.h2>

        {/* Description paragraphs */}
        <motion.div className="space-y-4 max-w-[800px]" variants={itemVariants}>
          <motion.p 
            className='text-text-secondary text-base sm:text-lg leading-relaxed backdrop-blur-sm bg-surface-light/30 p-4 rounded-lg border border-border hover:border-primary/40 transition-all duration-300'
            whileHover={{ x: 5, borderColor: 'rgba(13, 148, 136, 0.4)' }}
          >
            I'm a full-stack developer fueled by a passion for crafting user-friendly and visually captivating websites. I'm a detail-oriented, collaborative, results-driven problem-solver who thrives on creating solutions that meet both user needs and business objectives.
          </motion.p>

          <motion.p 
            className='text-text-secondary text-base sm:text-lg leading-relaxed backdrop-blur-sm bg-surface-light/30 p-4 rounded-lg border border-border hover:border-primary/40 transition-all duration-300'
            whileHover={{ x: 5, borderColor: 'rgba(13, 148, 136, 0.4)' }}
          >
            I've honed my skills in these technologies: 
            <span className="text-primary-light font-semibold"> HTML5, CSS3, JavaScript, Node.js, React, and JavaScript Frameworks</span>, working with various technologies including APIs (REST, GraphQL), backend development, and cloud technologies.
          </motion.p>

          <motion.p 
            className='text-text-secondary text-base sm:text-lg leading-relaxed backdrop-blur-sm bg-surface-light/30 p-4 rounded-lg border border-border hover:border-primary/40 transition-all duration-300'
            whileHover={{ x: 5, borderColor: 'rgba(13, 148, 136, 0.4)' }}
          >
            I have more than <span className="text-secondary-light font-bold">2 years of experience</span> building responsive websites, e-commerce platforms, and web applications with user-centered design.
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.div className="mt-8" variants={itemVariants}>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            <motion.button 
              className='group relative px-8 py-4 text-lg font-semibold text-text-primary bg-primary hover:bg-primary-dark overflow-hidden rounded-lg transition-colors duration-300'
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(13, 148, 136, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative flex items-center gap-3">
                View My Work
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <HiArrowNarrowRight size={24} />
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home