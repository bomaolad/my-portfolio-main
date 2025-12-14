import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiUser, HiChatAlt2 } from 'react-icons/hi'

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://getform.io/f/avreokoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const formFieldVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div name='contact' className='bg-surface-light w-full min-h-screen flex justify-center items-center p-4 relative overflow-hidden'>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 top-1/4 -left-48 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-96 h-96 bottom-1/4 -right-48 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <motion.div 
        className='max-w-[700px] w-full relative z-10'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Header */}
        <motion.div className="pb-8 text-center lg:text-left" variants={itemVariants}>
          <div className="inline-block relative mb-4">
            <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-light'>
              Get In Touch
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
          <p className='text-text-secondary text-lg mt-4'>
            Have a project in mind? Fill out the form below and let's create something amazing together!
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          className="relative group" 
          variants={itemVariants}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute -inset-1 bg-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
          
          <div className='relative bg-surface backdrop-blur-sm p-8 sm:p-10 rounded-3xl border border-border shadow-2xl'>
            
            {/* Name Field */}
            <motion.div className="mb-6" variants={formFieldVariants}>
              <label className="flex items-center gap-2 text-text-secondary text-sm font-semibold mb-2">
                <HiUser className="text-primary-light" />
                Your Name
              </label>
              <motion.input 
                type="text" 
                placeholder='John Doe' 
                name='name'
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-4 bg-surface-light border-2 rounded-xl text-text-primary placeholder-text-muted focus:outline-none transition-all duration-300 ${
                  focusedField === 'name' 
                    ? 'border-primary shadow-lg shadow-primary/20' 
                    : 'border-border hover:border-border-light'
                }`}
                required
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div className="mb-6" variants={formFieldVariants}>
              <label className="flex items-center gap-2 text-text-secondary text-sm font-semibold mb-2">
                <HiMail className="text-secondary-light" />
                Your Email
              </label>
              <motion.input 
                type="email" 
                placeholder='john@example.com' 
                name='email'
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-4 bg-surface-light border-2 rounded-xl text-text-primary placeholder-text-muted focus:outline-none transition-all duration-300 ${
                  focusedField === 'email' 
                    ? 'border-secondary shadow-lg shadow-secondary/20' 
                    : 'border-border hover:border-border-light'
                }`}
                required
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            {/* Message Field */}
            <motion.div className="mb-8" variants={formFieldVariants}>
              <label className="flex items-center gap-2 text-text-secondary text-sm font-semibold mb-2">
                <HiChatAlt2 className="text-accent-light" />
                Your Message
              </label>
              <motion.textarea 
                name="message" 
                rows={6} 
                placeholder='Tell me about your project...'
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-4 bg-surface-light border-2 rounded-xl text-text-primary placeholder-text-muted focus:outline-none resize-none transition-all duration-300 ${
                  focusedField === 'message' 
                    ? 'border-accent shadow-lg shadow-accent/20' 
                    : 'border-border hover:border-border-light'
                }`}
                required
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <motion.button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className='relative w-full sm:w-auto px-8 py-4 text-lg font-semibold text-text-primary bg-primary hover:bg-primary-dark overflow-hidden rounded-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(13, 148, 136, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? 'Sending...' : "Let's Work Together"}
                  {!isSubmitting && (
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  )}
                </span>
              </motion.button>
            </motion.div>

          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div 
          className="mt-8 text-center"
          variants={itemVariants}
        >
          <p className="text-text-muted text-sm">
            Usually responds within <span className="text-primary-light font-semibold">24 hours</span> ⚡
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contacts