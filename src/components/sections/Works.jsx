import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS } from '../../data/portfolio';

const Works = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section name='work' className='w-full min-h-screen bg-base py-24 px-6 sm:px-8 lg:px-12'>
      <motion.div
        className='max-w-[1440px] w-full mx-auto'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div className='mb-16' variants={itemVariants}>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight'>
            Selected Work
          </h2>
        </motion.div>

        {/* Projects — data driven from /src/data/portfolio.js */}
        <div className='flex flex-col gap-16 lg:gap-28'>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`flex flex-col gap-8 lg:gap-12 lg:items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Browser mockup frame (replace inner content with real screenshots) */}
              <div className='w-full lg:w-3/5'>
                <div className='relative aspect-video rounded-lg overflow-hidden border border-text-muted/10 bg-surface shadow-sm group'>
                  {/* Browser chrome bar */}
                  <div className='h-8 border-b border-text-muted/10 bg-elevate flex items-center px-4 gap-1.5'>
                    <div className='w-2.5 h-2.5 rounded-full bg-text-muted/30' />
                    <div className='w-2.5 h-2.5 rounded-full bg-text-muted/30' />
                    <div className='w-2.5 h-2.5 rounded-full bg-text-muted/30' />
                  </div>
                  {/* Placeholder — replace with real <img src={screenshot} /> */}
                  <div className='absolute inset-0 top-8 bg-elevate/30 flex flex-col items-center justify-center gap-4 transition-transform duration-700 group-hover:scale-[1.02] p-8'>
                    <span className='text-text-muted text-xs font-mono tracking-widest uppercase'>
                      Project Screenshot
                    </span>
                    <h3 className='text-4xl font-bold text-text-primary/10 text-center'>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Mini case-study copy */}
              <div className='w-full lg:w-2/5 flex flex-col justify-center space-y-6'>
                <h3 className='text-3xl font-bold text-text-primary'>{project.title}</h3>

                <div className='space-y-3 text-text-secondary text-base leading-relaxed'>
                  <p>
                    <span className='text-text-primary font-semibold'>Context — </span>
                    {project.context}
                  </p>
                  <p>
                    <span className='text-text-primary font-semibold'>Role — </span>
                    {project.role}
                  </p>
                  <p>
                    <span className='text-text-primary font-semibold'>Outcome — </span>
                    {project.outcome}
                  </p>
                </div>

                {/* Tech tags — secondary to case-study copy */}
                <div className='flex flex-wrap gap-2 pt-2'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 text-xs font-mono tracking-wide rounded-md bg-elevate text-text-secondary border border-text-muted/10'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className='flex gap-6 pt-6 border-t border-text-muted/10'>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary rounded'
                    >
                      Live Demo
                      <FaExternalLinkAlt className='text-xs text-text-muted group-hover:text-accent-primary transition-colors duration-200' />
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary rounded'
                    >
                      Source Code
                      <FaGithub className='text-text-muted group-hover:text-accent-primary transition-colors duration-200' />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Works;
