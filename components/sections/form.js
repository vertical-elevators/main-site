'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconCheck, IconX, IconPhone, IconMail, IconUser } from '@tabler/icons-react';

function ContactForm() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Google Sheets
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'cta',
          name: formData.name,
          email: formData.email || 'Not provided',
          phone: formData.phone,
          service: 'Home Page Form',
          message: `Home page CTA - Source: ${window.location.pathname}`
        })
      });

      const result = await response.json();

      if (result.success) {
        resetForm();
        setShowThankYou(true);
      } else {
        console.error('Form submission failed:', result.error);
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-br from-[#297074] via-[#075056] to-[#16232A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Elevate Your Building?
            </h2>
            <p className="text-lg text-[#91C5C8] mb-8 leading-relaxed">
              Get in touch with our elevator experts today. We&apos;ll help you find the perfect elevator solution for your property.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <IconCheck size={24} className="text-[#91C5C8]" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Free Site Survey</p>
                  <p className="text-[#91C5C8] text-sm">No obligation assessment</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <IconCheck size={24} className="text-[#91C5C8]" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Expert Consultation</p>
                  <p className="text-[#91C5C8] text-sm">Same-day response guaranteed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <IconCheck size={24} className="text-[#91C5C8]" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Custom Solutions</p>
                  <p className="text-[#91C5C8] text-sm">Tailored to your building requirements</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Get Started Today
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IconUser size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#297074] focus:border-transparent transition-all disabled:bg-gray-100 text-gray-900"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IconMail size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#297074] focus:border-transparent transition-all disabled:bg-gray-100 text-gray-900"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IconPhone size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#297074] focus:border-transparent transition-all disabled:bg-gray-100 text-gray-900"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#297074] text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-[#075056] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Get Free Consultation'
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our Terms of Service and Privacy Policy
              </p>

            </form>
          </motion.div>

        </div>
      </div>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/60"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowThankYou(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <IconX size={20} />
              </button>

              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <IconCheck size={40} className="text-green-600" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-lg text-gray-600 mb-6">
                We&apos;ve received your information. Our team will reach out to you within 24 hours.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">Need immediate assistance?</p>
                <a href="mailto:info@verticalelevators.in" className="text-blue-600 font-semibold hover:underline">
                  info@verticalelevators.in
                </a>
              </div>

              <p className="text-sm text-gray-500">
                This message will close automatically in 5 seconds
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default ContactForm;