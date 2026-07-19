import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const listItems = [
    'Grow their online presence',
    'Build scalable web applications',
    'Create memorable user experiences',
    'Make a positive impact with technology'
  ];

  return (
    <section name='about' className='w-full min-h-screen bg-base py-24 px-6 sm:px-8 lg:px-12'>
      <motion.div 
        className='max-w-[1440px] w-full mx-auto'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-2 tracking-tight'>
            About Me
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16'>
          
          {/* Left Column */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
              Passionate about creating digital experiences that leave a lasting impact.
            </h3>
            <p className='text-text-secondary text-lg leading-relaxed'>
              I am a FullStack Developer with a deep-rooted passion for building intuitive, high-performance web applications. My journey in tech is driven by an insatiable curiosity and a desire to solve complex problems through clean, efficient code.
            </p>
            <p className='text-text-secondary text-lg leading-relaxed'>
              Whether it's crafting seamless user interfaces on the frontend or architecting robust APIs on the backend, I believe in bridging the gap between design and engineering to deliver holistic digital products.
            </p>

            <div className="pt-6">
              <h4 className="text-lg font-bold text-text-primary mb-4">I help businesses:</h4>
              <ul className="space-y-3">
                {listItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-4 text-text-secondary font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-accent-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column (Metrics / Stats blocks) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-center gap-6">
            {/* Redesigned Stat Blocks - Purpose-built, distinct from generic text cards */}
            
            <div className="bg-accent-primary/5 border-l-4 border-accent-primary p-8 rounded-r-lg hover:bg-accent-primary/10 transition-colors duration-300">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-6xl font-bold text-accent-primary tracking-tighter">2+</span>
                <span className="text-xl font-medium text-text-primary">Years</span>
              </div>
              <p className="text-text-secondary text-sm uppercase tracking-widest font-semibold">
                Professional Experience
              </p>
            </div>

            <div className="bg-elevate p-8 rounded-lg border border-text-muted/10 hover:border-text-muted/30 transition-colors duration-300">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-6xl font-bold text-text-primary tracking-tighter">10+</span>
              </div>
              <p className="text-text-secondary text-sm uppercase tracking-widest font-semibold">
                Projects Delivered Successfully
              </p>
            </div>

            <div className="bg-elevate p-8 rounded-lg border border-text-muted/10 hover:border-text-muted/30 transition-colors duration-300">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-6xl font-bold text-text-primary tracking-tighter">15+</span>
              </div>
              <p className="text-text-secondary text-sm uppercase tracking-widest font-semibold">
                Technologies Mastered
              </p>
            </div>
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
