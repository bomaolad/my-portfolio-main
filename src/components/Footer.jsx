import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/ismail-hammad-bb73152b9', color: 'hover:text-blue-400' },
    { name: 'Github', icon: FaGithub, url: 'https://github.com/bomaolad', color: 'hover:text-gray-300' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/muhammedbello_', color: 'hover:text-sky-400' },
    { name: 'Email', icon: HiOutlineMail, url: 'mailto:bellomuhammadoladimeji@gmail.com', color: 'hover:text-emerald-400' },
  ];

  return (
    <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden'>
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
      
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 -bottom-32 -left-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-64 h-64 -bottom-32 -right-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className='max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-12 relative z-10'>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          
          {/* Brand Section */}
          <div className='space-y-4'>
            <h3 className='text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Muhammed Bello
            </h3>
            <p className='text-gray-400 text-sm max-w-xs'>
              FullStack Developer passionate about creating beautiful, functional web experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-white mb-4'>Quick Links</h4>
            <nav className='flex flex-col space-y-2'>
              {['Home', 'About', 'Skills', 'Work', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300 w-fit'
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-white mb-4'>Connect With Me</h4>
            <div className='flex flex-wrap gap-4'>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative'
                    aria-label={social.name}
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-60 transition duration-300'></div>
                    <div className={`relative bg-slate-700/50 p-3 rounded-lg border border-gray-600 group-hover:border-transparent transition-all duration-300 ${social.color}`}>
                      <Icon size={24} className='text-gray-400 group-hover:scale-110 transition-transform duration-300' />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8'></div>

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-400 text-sm flex items-center gap-2'>
            © {currentYear} Muhammed Bello. Made with 
            <FaHeart className='text-red-500 animate-pulse' size={14} />
            and lots of coffee
          </p>
          
          <div className='flex items-center gap-6 text-sm text-gray-400'>
            <a href='#privacy' className='hover:text-cyan-400 transition-colors duration-300'>
              Privacy Policy
            </a>
            <span className='text-gray-600'>|</span>
            <a href='#terms' className='hover:text-purple-400 transition-colors duration-300'>
              Terms of Service
            </a>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='fixed bottom-8 right-8 group'
          aria-label='Back to top'
        >
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-300'></div>
          <div className='relative bg-slate-800 p-3 rounded-full border border-purple-500/30 group-hover:border-purple-500 transition-all duration-300 hover:scale-110'>
            <svg
              className='w-6 h-6 text-white'
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
        </button>
      </div>
    </footer>
  )
}

export default Footer