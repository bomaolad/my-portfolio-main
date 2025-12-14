import React from 'react'
import { motion } from 'framer-motion'
import Html from '../assets/html.png';
import Css from '../assets/CSS-Logo.png';
import Tailwind from '../assets/images.jpeg';
import Reactlogo from '../assets/react.jpeg';
import ReactNative from '../assets/react-native.png';
import Postgres from '../assets/postgresql.png';
import Express from '../assets/Express.jpeg';
import Mongo from '../assets/Mongo.png';
import JS_TS from '../assets/js-ts.png';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: Html },
    { name: 'CSS', icon: Css },
    { name: 'JS/TS', icon: JS_TS },
    { name: 'TAILWIND CSS', icon: Tailwind },
    { name: 'REACT', icon: Reactlogo },
    { name: 'REACT NATIVE', icon: ReactNative },
    { name: 'POSTGRESQL', icon: Postgres },
    { name: 'MONGO DB', icon: Mongo },
    { name: 'EXPRESS JS', icon: Express },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div name='skills' className='w-full min-h-screen bg-surface-light relative overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 top-1/4 -left-48 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-96 h-96 bottom-1/4 -right-48 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <motion.div 
        className='max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 flex flex-col justify-center min-h-screen relative z-10'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Section Header */}
        <motion.div className="mb-12" variants={itemVariants}>
          <div className="inline-block relative mb-4">
            <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-light'>
              Skills
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
            These are the technologies I'm proficient in and work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8'
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="group relative">
                <motion.div 
                  className="absolute -inset-1 bg-primary rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition duration-300"
                />
                
                <div className="relative bg-surface backdrop-blur-sm p-8 rounded-2xl border border-border group-hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                  
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-20 rounded-xl blur-md transition-opacity duration-300"></div>
                    <div className="relative bg-surface-lighter/30 p-4 rounded-xl flex items-center justify-center">
                      <motion.img 
                        className='w-16 h-16 object-contain' 
                        src={skill.icon} 
                        alt={`${skill.name} icon`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  <p className='text-center font-semibold text-text-secondary group-hover:text-text-primary transition-colors duration-300'>
                    {skill.name}
                  </p>

                  <motion.div 
                    className="mt-4 h-1.5 bg-border rounded-full overflow-hidden"
                  >
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      style={{ originX: 0 }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div 
          className="mt-16 flex justify-center"
          variants={itemVariants}
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-primary blur-xl opacity-30"></div>
            <div className="relative bg-surface px-8 py-4 rounded-full border border-primary/30">
              <p className="text-text-secondary text-sm sm:text-base font-medium">
                Constantly learning and expanding my tech stack 🚀
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Skills