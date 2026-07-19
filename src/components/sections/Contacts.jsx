import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { HiMail, HiUser, HiChatAlt2, HiArrowRight } from 'react-icons/hi';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) newErrors.name = 'Please enter your full name.';
    if (!formData.email.trim() || !emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.message.trim() || formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '0c5c5316-e639-4242-9db9-25556bb40ba8',
          ...formData,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Message sent! I'll get back to you within 24 hours.", { duration: 5000 });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  /* Shared input className builder — single consistent focus ring */
  const inputClass = (field) =>
    `w-full px-4 py-4 bg-base border rounded-md text-text-primary placeholder-text-muted transition-all duration-200
     focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent
     ${errors[field] ? 'border-red-500' : 'border-text-muted/20 hover:border-text-muted/40'}`;

  return (
    <section name='contact' className='w-full min-h-screen bg-base py-24 px-6 sm:px-8 lg:px-12 flex items-center'>
      <Toaster position="top-right" />

      <motion.div
        className='max-w-[1440px] w-full mx-auto'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-start'>

          {/* Left: intro copy */}
          <motion.div variants={itemVariants} className='lg:col-span-5 space-y-6 lg:sticky lg:top-32'>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight'>
              Let's Work Together
            </h2>
            <p className='text-text-secondary text-lg leading-relaxed'>
              Have a project in mind or just want to say hi? Drop me a message and I'll get back to you, usually within 24 hours.
            </p>

            <div className='space-y-4 pt-4 border-t border-text-muted/10'>
              <div className='flex items-center gap-3 text-text-secondary'>
                <HiMail className='text-accent-primary flex-shrink-0' size={20} />
                <span>bellomuhammadoladimeji@gmail.com</span>
              </div>
              <div className='flex items-center gap-3 text-text-secondary'>
                <span className='w-2 h-2 rounded-full bg-green-400 flex-shrink-0' />
                <span>Available for new projects</span>
              </div>
              <div className='flex items-center gap-3 text-text-secondary'>
                <span className='text-text-muted text-sm font-mono'>LOC</span>
                <span>Lagos, Nigeria · Remote-first</span>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div variants={itemVariants} className='lg:col-span-7'>
            <form onSubmit={handleSubmit} className='space-y-6' noValidate>

              <div className='space-y-2'>
                <label htmlFor='contact-name' className='flex items-center gap-2 text-sm font-semibold text-text-secondary uppercase tracking-wide'>
                  <HiUser size={14} className='text-accent-primary' /> Name
                </label>
                <input
                  id='contact-name'
                  type='text'
                  name='name'
                  autoComplete='name'
                  placeholder='Your full name'
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass('name')}
                />
                {errors.name && <p className='text-red-400 text-sm mt-1'>{errors.name}</p>}
              </div>

              <div className='space-y-2'>
                <label htmlFor='contact-email' className='flex items-center gap-2 text-sm font-semibold text-text-secondary uppercase tracking-wide'>
                  <HiMail size={14} className='text-accent-primary' /> Email
                </label>
                <input
                  id='contact-email'
                  type='email'
                  name='email'
                  autoComplete='email'
                  placeholder='your@email.com'
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass('email')}
                />
                {errors.email && <p className='text-red-400 text-sm mt-1'>{errors.email}</p>}
              </div>

              <div className='space-y-2'>
                <label htmlFor='contact-message' className='flex items-center gap-2 text-sm font-semibold text-text-secondary uppercase tracking-wide'>
                  <HiChatAlt2 size={14} className='text-accent-primary' /> Message
                </label>
                <textarea
                  id='contact-message'
                  name='message'
                  rows={6}
                  placeholder='Tell me about your project, timeline, and budget...'
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && <p className='text-red-400 text-sm mt-1'>{errors.message}</p>}
              </div>

              <div className='pt-2'>
                <motion.button
                  type='submit'
                  id='contact-submit'
                  disabled={isSubmitting}
                  className='group flex items-center gap-3 bg-accent-primary hover:bg-opacity-90 text-base font-semibold text-[#0B1121] px-8 py-4 rounded-md transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-base'
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                  {!isSubmitting && (
                    <HiArrowRight className='group-hover:translate-x-1 transition-transform duration-200' size={18} />
                  )}
                </motion.button>
              </div>

            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;
