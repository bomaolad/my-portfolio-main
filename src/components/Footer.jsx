import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  const socialLinks = [
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://api.whatsapp.com/send?phone=2348160374083' },
    { name: 'Github', icon: FaGithub, url: 'https://github.com/bomaolad' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/muhammedbello_' },
    { name: 'Email', icon: HiOutlineMail, url: 'mailto:bellomuhammadoladimeji@gmail.com' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className='bg-surface relative overflow-hidden'>
      {/* Decorative top border */}
      <motion.div 
        className="h-1 bg-primary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-64 h-64 -bottom-32 -left-32 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute w-64 h-64 -bottom-32 -right-32 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>

      <motion.div 
        className='max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-12 relative z-10'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          
          {/* Brand Section */}
          <motion.div className='space-y-4' variants={itemVariants}>
            <h3 className='text-3xl font-bold text-primary-light'>
              Muhammed Bello
            </h3>
            <p className='text-text-muted text-sm max-w-xs'>
              FullStack Developer passionate about creating beautiful, functional web experiences that make a difference.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className='space-y-4' variants={itemVariants}>
            <h4 className='text-lg font-semibold text-text-primary mb-4'>Quick Links</h4>
            <nav className='flex flex-col space-y-2'>
              {['Home', 'About', 'Skills', 'Work', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='text-text-muted hover:text-primary-light transition-all duration-300 w-fit'
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div className='space-y-4' variants={itemVariants}>
            <h4 className='text-lg font-semibold text-text-primary mb-4'>Connect With Me</h4>
            <div className='flex flex-wrap gap-4'>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative'
                    aria-label={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className='absolute inset-0 bg-primary rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300'></div>
                    <div className='relative bg-surface-light p-3 rounded-lg border border-border group-hover:border-primary/50 hover:text-primary-light transition-all duration-300'>
                      <Icon size={24} className='text-text-muted group-hover:text-primary-light transition-all duration-300' />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className='h-px bg-border mb-8'
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Section */}
        <motion.div 
          className='flex flex-col md:flex-row justify-between items-center gap-4'
          variants={itemVariants}
        >
          <p className='text-text-muted text-sm flex items-center gap-2'>
            © {currentYear} Muhammed Bello. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className='text-accent' size={14} />
            </motion.span>
            and lots of coffee
          </p>
          
          <div className='flex items-center gap-6 text-sm text-text-muted'>
            <motion.a 
              href='#privacy' 
              className='hover:text-primary-light transition-colors duration-300'
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <span className='text-border'>|</span>
            <motion.a 
              href='#terms' 
              className='hover:text-secondary-light transition-colors duration-300'
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>

        {/* Back to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='fixed bottom-8 right-8 group'
          aria-label='Back to top'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className='absolute inset-0 bg-primary rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-300'></div>
          <div className='relative bg-surface p-3 rounded-full border border-primary/30 group-hover:border-primary transition-all duration-300'>
            <svg
              className='w-6 h-6 text-text-primary'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 10l7-7m0 0l7 7m-7-7v18'
              />
            </svg>
          </div>
        </motion.button>
      </motion.div>
    </footer>
  )
}

export default Footer