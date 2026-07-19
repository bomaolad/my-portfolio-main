import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/portfolio';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section name='skills' className='w-full bg-base py-24 px-6 sm:px-8 lg:px-12'>
      <motion.div
        className='max-w-[1440px] w-full mx-auto'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div className='mb-16' variants={itemVariants}>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight'>
            Technical Arsenal
          </h2>
        </motion.div>

        {/* Skills typographic list — data driven from /src/data/portfolio.js */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16'>
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div key={category.title} variants={itemVariants} className='space-y-6'>

              <div className='flex items-center gap-4'>
                <span className='text-accent-primary text-lg font-mono'>0{idx + 1}</span>
                <h3 className='text-xl sm:text-2xl font-bold text-text-primary uppercase tracking-wide'>
                  {category.title}
                </h3>
              </div>

              <div className='flex flex-col gap-0 border-t border-text-muted/10'>
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className='group flex justify-between items-center py-4 border-b border-text-muted/10 hover:border-accent-primary/40 transition-colors duration-300'
                  >
                    <span className='text-lg text-text-secondary group-hover:text-text-primary transition-colors duration-300'>
                      {skill}
                    </span>
                    <span className='w-1.5 h-1.5 rounded-full bg-text-muted/20 group-hover:bg-accent-primary transition-colors duration-300' />
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
