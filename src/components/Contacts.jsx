import React, { useState } from 'react'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { HiMail, HiUser, HiChatAlt2 } from 'react-icons/hi'

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast.error('Please fix the errors in the form', {
        icon: '⚠️',
        style: {
          background: '#1e293b',
          color: '#f8fafc',
          border: '1px solid #334155',
        },
      });
      return;
    }

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
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          icon: '🎉',
          duration: 5000,
          style: {
            background: '#1e293b',
            color: '#f8fafc',
            border: '1px solid #0d9488',
          },
        });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        toast.error('Something went wrong. Please try again.', {
          icon: '❌',
          style: {
            background: '#1e293b',
            color: '#f8fafc',
            border: '1px solid #e11d48',
          },
        });
      }
    } catch (error) {
      toast.error('Error sending message. Please try again.', {
        icon: '❌',
        style: {
          background: '#1e293b',
          color: '#f8fafc',
          border: '1px solid #e11d48',
        },
      });
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

  const getInputBorderClass = (fieldName) => {
    if (errors[fieldName]) {
      return 'border-accent shadow-lg shadow-accent/20';
    }
    if (focusedField === fieldName) {
      if (fieldName === 'name') return 'border-primary shadow-lg shadow-primary/20';
      if (fieldName === 'email') return 'border-secondary shadow-lg shadow-secondary/20';
      if (fieldName === 'message') return 'border-primary shadow-lg shadow-primary/20';
    }
    return 'border-border hover:border-border-light';
  };

  return (
    <div name='contact' className='bg-surface-light w-full min-h-screen flex justify-center items-center p-4 relative overflow-hidden'>
      
      {/* Toast Container */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
        }}
      />
      
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
          
          <form onSubmit={handleSubmit} className='relative bg-surface backdrop-blur-sm p-8 sm:p-10 rounded-3xl border border-border shadow-2xl'>
            
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
                className={`w-full px-4 py-4 bg-surface-light border-2 rounded-xl text-text-primary placeholder-text-muted focus:outline-none transition-all duration-300 ${getInputBorderClass('name')}`}
                whileFocus={{ scale: 1.01 }}
              />
              {errors.name && (
                <motion.p 
                  className="text-accent text-sm mt-2 flex items-center gap-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span>⚠️</span> {errors.name}
                </motion.p>
              )}
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
                className={`w-full px-4 py-4 bg-surface-light border-2 rounded-xl text-text-primary placeholder-text-muted focus:outline-none transition-all duration-300 ${getInputBorderClass('email')}`}
                whileFocus={{ scale: 1.01 }}
              />
              {errors.email && (
                <motion.p 
                  className="text-accent text-sm mt-2 flex items-center gap-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span>⚠️</span> {errors.email}
                </motion.p>
              )}
            </motion.div>

            {/* Message Field */}
            <motion.div className="mb-8" variants={formFieldVariants}>
              <label className="flex items-center gap-2 text-text-secondary text-sm font-semibold mb-2">
                <HiChatAlt2 className="text-primary-light" />
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
                className={`w-full px-4 py-4 bg-surface-light border-2 rounded-xl text-text-primary placeholder-text-muted focus:outline-none resize-none transition-all duration-300 ${getInputBorderClass('message')}`}
                whileFocus={{ scale: 1.01 }}
              />
              {errors.message && (
                <motion.p 
                  className="text-accent text-sm mt-2 flex items-center gap-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span>⚠️</span> {errors.message}
                </motion.p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <motion.button 
                type="submit"
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

          </form>
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