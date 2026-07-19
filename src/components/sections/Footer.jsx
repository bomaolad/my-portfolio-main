import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/bomaolad' },
  { name: 'Twitter / X', icon: FaTwitter, url: 'https://x.com/muhammedbello_' },
  { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://api.whatsapp.com/send?phone=2348160374083' },
  { name: 'Email', icon: HiOutlineMail, url: 'mailto:bellomuhammadoladimeji@gmail.com' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='w-full bg-surface border-t border-text-muted/10'>
      <div className='max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-12'>

        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>

          {/* Left: Brand + status */}
          <div className='space-y-3'>
            <h3 className='text-2xl font-bold text-text-primary'>Muhammed Bello</h3>
            <div className='flex items-center gap-3'>
              <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
              <span className='text-sm text-text-secondary'>Available for new projects · Lagos, NG (Remote-first)</span>
            </div>
            <p className='text-sm text-text-muted'>
              Last updated{' '}
              <time dateTime={`${year}`} className='text-text-secondary font-medium'>
                {year}
              </time>
            </p>
          </div>

          {/* Center: resume link */}
          <a
            href='#contact'
            className='text-sm font-medium text-text-secondary border border-text-muted/20 px-5 py-2.5 rounded-md hover:border-accent-primary hover:text-accent-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-surface'
          >
            Download CV
          </a>

          {/* Right: Social links as a single cohesive row */}
          <div className='flex items-center gap-1'>
            {socialLinks.map(({ name, icon: Icon, url }) => (
              <motion.a
                key={name}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={name}
                className='p-2.5 text-text-muted hover:text-accent-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-surface rounded-md'
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

        </div>

        {/* Bottom copyright */}
        <div className='mt-12 pt-6 border-t border-text-muted/10 flex items-center justify-between'>
          <p className='text-xs text-text-muted flex items-center gap-2'>
            © {year} Muhammed Bello. Built with React &amp; Framer Motion
            <FaHeart size={10} className='text-accent-primary' />
          </p>

          {/* Back to top */}
          <Link
            to='home'
            smooth={true}
            duration={600}
            className='text-xs text-text-muted hover:text-accent-primary transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-primary rounded'
          >
            ↑ Back to top
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
