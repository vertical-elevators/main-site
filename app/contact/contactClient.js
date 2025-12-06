"use client";

import BgLayout from '@/components/layout/bgLayout'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconHome, IconChevronRight, IconMapPin, IconPhone, IconMail, IconClock, IconCheck, IconX } from '@tabler/icons-react'
import Link from 'next/link'

function ContactPage() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+91',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      countryCode: '+91',
      message: ''
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
          formType: 'contact',
          name: formData.fullName,
          email: formData.email || 'Not provided',
          phone: `${formData.countryCode} ${formData.phone}`,
          subject: 'Contact Form Submission',
          message: formData.message || 'No message provided'
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
    <BgLayout>
      {/* Hero Section - Full Screen Height */}
      <section className='relative h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="/contact/hero-image.webp"
            alt="Contact Us"
            className='w-full h-full object-cover'
          />
          {/* Overlay */}
          <div className='absolute inset-0 bg-black/70'></div>
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white'>
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center justify-center gap-2 text-sm mb-6'
          >
            <Link href='/' className='flex items-center gap-1 hover:text-[#91C5C8] transition-colors'>
              <IconHome size={18} />
              <span>Home</span>
            </Link>
            <IconChevronRight size={16} className='text-[#91C5C8]' />
            <span className='text-[#91C5C8]'>Contact</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Get In <span className='text-[#4A8E94]'>Touch</span>
            </h1>
            <p className='text-xl md:text-2xl text-[#91C5C8] max-w-3xl mx-auto leading-relaxed'>
              Let&apos;s discuss the perfect elevator solution for your building. Request your free consultation today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-12'>

            {/* Form Column - 3/5 width */}
            <div className='lg:col-span-3'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-[#F0F4F5] rounded-2xl shadow-2xl p-8 md:p-12'
              >
                <h2 className='text-3xl md:text-4xl font-bold mb-2'>Request Your Free Quote</h2>
                <p className='text-lg text-gray-600 mb-8'>
                  Partner with Vertical Elevators for safe, reliable vertical transportation solutions.
                </p>

                <form onSubmit={handleFormSubmit}>

                  {/* Full Name */}
                  <div className='mb-6'>
                    <label htmlFor='fullName' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className='w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#297074] focus:border-transparent transition-all disabled:bg-gray-100'
                      placeholder='Enter your full name'
                    />
                  </div>

                  {/* Email */}
                  <div className='mb-6'>
                    <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className='w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#297074] focus:border-transparent transition-all disabled:bg-gray-100'
                      placeholder='Enter your email (optional)'
                    />
                  </div>

                  {/* Phone Number */}
                  <div className='mb-6'>
                    <label htmlFor='phone' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Phone Number *
                    </label>
                    <div className='flex gap-2'>
                      <select
                        name='countryCode'
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className='px-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#297074] focus:border-transparent transition-all bg-white disabled:bg-gray-100'
                      >
                        <option value="+91">+91</option>
                        {/* <option value="+971">+971</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option> */}
                      </select>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className='flex-1 px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#297074] focus:border-transparent transition-all disabled:bg-gray-100'
                        placeholder='Enter your phone number'
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className='mb-6'>
                    <label htmlFor='message' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      disabled={isSubmitting}
                      className='w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#297074] focus:border-transparent transition-all disabled:bg-gray-100'
                      placeholder='Tell us about your elevator requirements (optional)'
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-[#297074] text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-[#075056] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none'
                  >
                    {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
                  </button>

                </form>

                {/* Quick Call */}
                <div className='mt-8 text-center pt-8 border-t border-gray-200'>
                  <p className='text-gray-600'>
                    Need immediate assistance? Call our 24/7 emergency line at{' '}
                    <a href='tel:+917419636357' className='text-[#297074] font-semibold hover:underline'>
                      +91 74196 36357
                    </a>
                  </p>
                </div>

              </motion.div>
            </div>

            {/* Info Column - 2/5 width */}
            <div className='lg:col-span-2'>

              {/* Easy Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-white rounded-2xl shadow-xl p-8 mb-8'
              >
                <h3 className='text-2xl font-bold mb-6 text-[#297074]'>3 Easy Steps</h3>

                <div className='space-y-6'>
                  <div className='flex gap-4'>
                    <div className='flex-shrink-0 w-10 h-10 bg-[#297074] text-white rounded-full flex items-center justify-center font-bold'>
                      1
                    </div>
                    <div>
                      <h4 className='font-bold text-gray-900 mb-1'>Submit Your Requirements</h4>
                      <p className='text-sm text-gray-600'>Share your building details and elevator needs</p>
                    </div>
                  </div>

                  <div className='flex gap-4'>
                    <div className='flex-shrink-0 w-10 h-10 bg-[#297074] text-white rounded-full flex items-center justify-center font-bold'>
                      2
                    </div>
                    <div>
                      <h4 className='font-bold text-gray-900 mb-1'>Site Assessment & Consultation</h4>
                      <p className='text-sm text-gray-600'>Our engineers will evaluate your property and discuss solutions</p>
                    </div>
                  </div>

                  <div className='flex gap-4'>
                    <div className='flex-shrink-0 w-10 h-10 bg-[#297074] text-white rounded-full flex items-center justify-center font-bold'>
                      3
                    </div>
                    <div>
                      <h4 className='font-bold text-gray-900 mb-1'>Receive Custom Quote</h4>
                      <p className='text-sm text-gray-600'>Get a detailed proposal with specifications and pricing</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Office Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='bg-white rounded-2xl shadow-xl p-8'
              >
                <h3 className='text-2xl font-bold mb-6'>Our Headquarters</h3>

                <div className='space-y-4'>
                  <div className='flex gap-3'>
                    <IconMapPin size={24} className='text-[#297074] flex-shrink-0' />
                    <div>
                      <p className='font-semibold text-gray-900'>Address</p>
                      <p className='text-gray-600'>G-54, Ground Floor, Pushkar Enclave, Paschim Vihar, New Delhi - 110063</p>
                    </div>
                  </div>

                  <div className='flex gap-3'>
                    <IconPhone size={24} className='text-[#297074] flex-shrink-0' />
                    <div>
                      <p className='font-semibold text-gray-900'>Phone</p>
                      <a href='tel:+917419636357' className='text-[#297074] hover:underline'>
                        +91 74196 36357
                      </a>
                    </div>
                  </div>

                  <div className='flex gap-3'>
                    <IconMail size={24} className='text-[#297074] flex-shrink-0' />
                    <div>
                      <p className='font-semibold text-gray-900'>Email</p>
                      <a href='mailto:info@verticalelevators.in' className='text-[#297074] hover:underline'>
                        info@verticalelevators.in
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-0'>
        <div className='w-full h-96'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6640215063494!2d77.083597!3d28.669777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0468e9087c67%3A0xcdab21c4083d1b26!2sVerticale%20Elevators!5e0!3m2!1sen!2sin!4v1764846445193!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60'
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='bg-white rounded-2xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl relative'
            >
              {/* Close Button */}
              <button
                onClick={() => setShowThankYou(false)}
                className='absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors'
              >
                <IconX size={20} />
              </button>

              {/* Success Icon */}
              <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <IconCheck size={40} className='text-green-600' />
              </div>

              <h3 className='text-3xl font-bold text-gray-900 mb-4'>Thank You!</h3>
              <p className='text-lg text-gray-600 mb-6'>
                Your message has been received. We&apos;ll get back to you within 24 hours with your free proposal!
              </p>

              <div className='bg-[#F0F4F5] rounded-lg p-4'>
                <p className='text-sm text-gray-600 mb-2'>Questions in the meantime?</p>
                <a href='tel:+917419636357' className='text-[#297074] font-semibold hover:underline text-lg'>
                  Call us: +91 74196 36357
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </BgLayout>
  )
}

export default ContactPage
