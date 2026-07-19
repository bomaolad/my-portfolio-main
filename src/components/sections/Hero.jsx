import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import myImage from '../../assets/myImage.png';

const Hero = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      name='home' 
      className='w-full min-h-screen bg-base relative overflow-hidden flex items-center pt-16'
    >
      {/* Background gradients for subtle depth */}
      <div className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-20">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-accent-primary/10 rounded-bl-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-accent-primary/5 rounded-tr-full blur-[80px]" />
      </div>

      <div className='max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 z-10'>
        <motion.div 
          className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Typographic Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <p className='text-xl sm:text-2xl text-accent-primary font-medium tracking-wide'>
                Hi, I'm
              </p>
              <h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight'>
                Muhammed Bello
              </h1>
              <h2 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-text-secondary leading-[1.2]'>
                FullStack Developer
              </h2>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className='text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl font-light mt-4'
            >
              I build robust, visually captivating applications that solve complex problems. 
              Specializing in modern web technologies to deliver seamless digital experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-8">
              <Link to='work' smooth={true} duration={500} className="inline-block cursor-pointer">
                <motion.div 
                  className='group flex items-center gap-4 bg-surface hover:bg-elevate border border-text-muted/20 px-8 py-4 rounded-md transition-all duration-300 shadow-sm'
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <span className="text-lg font-medium text-text-primary">
                    View My Work
                  </span>
                  <motion.span
                    className="text-accent-primary"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <HiArrowNarrowRight size={24} />
                  </motion.span>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Minimalist Metrics & Photo Grid */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Photo Box */}
              <motion.div 
                variants={itemVariants}
                className="col-span-2 sm:col-span-1 md:col-span-2 xl:col-span-1 aspect-square rounded-lg overflow-hidden bg-surface border border-text-muted/10 relative"
              >
                <img 
                  src={myImage} 
                  alt="Muhammed Bello" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* Metrics Grid */}
              <div className="col-span-2 sm:col-span-1 md:col-span-2 xl:col-span-1 grid grid-rows-2 gap-4">
                {/* Metric 1 */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-surface rounded-lg p-6 border border-text-muted/10 flex flex-col justify-center shadow-sm hover:border-accent-primary/30 transition-colors"
                >
                  <span className="text-4xl font-bold text-text-primary mb-2">2+</span>
                  <span className="text-sm text-text-secondary uppercase tracking-wider font-medium">Years Experience</span>
                </motion.div>

                {/* Metric 2 */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-surface rounded-lg p-6 border border-text-muted/10 flex flex-col justify-center shadow-sm hover:border-accent-primary/30 transition-colors"
                >
                  <span className="text-4xl font-bold text-text-primary mb-2">30+</span>
                  <span className="text-sm text-text-secondary uppercase tracking-wider font-medium">Projects Shipped</span>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
