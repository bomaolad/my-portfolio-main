import React, { useState, useEffect, useRef } from 'react'
import { HiMail, HiUser, HiChatAlt2 } from 'react-icons/hi'

const Contacts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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

  return (
    <div name='contact' className='bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 w-full min-h-screen flex justify-center items-center p-4 relative overflow-hidden'>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-1/4 -left-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bottom-1/4 -right-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute w-64 h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div ref={sectionRef} className='max-w-[700px] w-full relative z-10'>
        
        {/* Header */}
        <div className={`pb-8 text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block relative mb-4">
            <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Get In Touch
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
          </div>
          <p className='text-gray-300 text-lg mt-4'>
            Have a project in mind? Fill out the form below and let's create something amazing together!
          </p>
        </div>

        {/* Form Container */}
        <div className={`relative group transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          
          {/* Form */}
          <div className='relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border border-purple-500/30 shadow-2xl'>
            
            {/* Name Field */}
            <div className={`mb-6 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <label className="flex items-center gap-2 text-gray-300 text-sm font-semibold mb-2">
                <HiUser className="text-cyan-400" />
                Your Name
              </label>
              <div className="relative group/input">
                <input 
                  type="text" 
                  placeholder='John Doe' 
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-4 bg-slate-700/50 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                    focusedField === 'name' 
                      ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className={`mb-6 transform transition-all duration-700 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <label className="flex items-center gap-2 text-gray-300 text-sm font-semibold mb-2">
                <HiMail className="text-purple-400" />
                Your Email
              </label>
              <div className="relative group/input">
                <input 
                  type="email" 
                  placeholder='john@example.com' 
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-4 bg-slate-700/50 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                    focusedField === 'email' 
                      ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className={`mb-8 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <label className="flex items-center gap-2 text-gray-300 text-sm font-semibold mb-2">
                <HiChatAlt2 className="text-pink-400" />
                Your Message
              </label>
              <div className="relative group/input">
                <textarea 
                  name="message" 
                  rows={6} 
                  placeholder='Tell me about your project...'
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-4 bg-slate-700/50 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none resize-none transition-all duration-300 ${
                    focusedField === 'message' 
                      ? 'border-pink-500 shadow-lg shadow-pink-500/20' 
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className={`transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className='group/btn relative w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-300"></div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button content */}
                <span className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? 'Sending...' : "Let's Work Together"}
                  {!isSubmitting && (
                    <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </span>
              </button>
            </div>

          </div>
        </div>

        {/* Social proof / additional info */}
        <div className={`mt-8 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400 text-sm">
            Usually responds within <span className="text-cyan-400 font-semibold">24 hours</span> ⚡
          </p>
        </div>
      </div>

      <style jsx>{`
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  )
}

export default Contacts