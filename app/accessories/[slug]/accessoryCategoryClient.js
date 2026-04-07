"use client";

import BgLayout from '@/components/layout/bgLayout'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconEngine, IconWaveSine, IconDeviceDesktop, IconBox, IconDeviceTablet, IconDoor, IconHome, IconChevronRight, IconChevronLeft, IconX, IconPhone } from '@tabler/icons-react'
import Link from 'next/link'

// Icon mapping
const iconMap = {
    IconEngine: IconEngine,
    IconWaveSine: IconWaveSine,
    IconDeviceDesktop: IconDeviceDesktop,
    IconBox: IconBox,
    IconDeviceTablet: IconDeviceTablet,
    IconDoor: IconDoor,
}

function AccessoryCategoryClient({ category, accessories }) {
    const [selectedAccessory, setSelectedAccessory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showQuoteForm, setShowQuoteForm] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        model: ''
    });

    const IconComponent = iconMap[category.icon] || IconBox;

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedAccessory || showQuoteForm || showThankYou) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedAccessory, showQuoteForm, showThankYou]);

    const openAccessoryModal = (accessory) => {
        setSelectedAccessory(accessory);
        setCurrentImageIndex(0);
        setFormData(prev => ({ ...prev, model: accessory.model }));
    };

    const closeAccessoryModal = () => {
        setSelectedAccessory(null);
        setShowQuoteForm(false);
        setShowThankYou(false);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedAccessory && selectedAccessory.images.length > 1) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedAccessory.images.length);
        }
    };

    const prevImage = () => {
        if (selectedAccessory && selectedAccessory.images.length > 1) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedAccessory.images.length) % selectedAccessory.images.length);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formType: 'accessory',
                    name: formData.name,
                    email: formData.email || 'Not provided',
                    phone: formData.phone,
                    accessoryName: formData.model,
                    message: `Quote request for ${formData.model}`
                })
            });

            const result = await response.json();

            if (result.success) {
                setShowQuoteForm(false);
                setShowThankYou(true);
                setIsSubmitting(false);

                setTimeout(() => {
                    closeAccessoryModal();
                    window.location.href = '/';
                }, 5000);
            } else {
                console.error('Form submission failed:', result.error);
                alert('Failed to submit form. Please try again.');
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
            setIsSubmitting(false);
        }
    };

    return (
        <BgLayout>
            {/* Hero Section */}
            <section className='relative h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden'>
                <div className='absolute inset-0'>
                    <img
                        src="/accessories/hero-image.webp"
                        alt="Elevator Accessories Hero Image"
                        className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-black/70'></div>
                </div>

                <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white'>
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
                        <Link href='/accessories' className='hover:text-[#91C5C8] transition-colors'>
                            Accessories
                        </Link>
                        <IconChevronRight size={16} className='text-[#91C5C8]' />
                        <span className='text-[#91C5C8]'>{category.title}</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className='flex items-center justify-center gap-4 mb-4'>
                            {/* <IconComponent size={48} stroke={1.5} /> */}
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold'>
                                {category.title}
                            </h1>
                        </div>
                        <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
                            {category.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Accessories Grid */}
            <section className='py-10'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='text-center mb-12'
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            Available <span className='text-[#297074]'>Models</span>
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            Explore our range of {category.title} designed for your specific needs.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {accessories.map((accessory, index) => (
                            <motion.div
                                key={accessory.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className='group cursor-pointer'
                                onClick={() => openAccessoryModal(accessory)}
                            >
                                <div className='flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#4A8E94]'>
                                    {/* Image */}
                                    <div className='relative h-full w-full overflow-hidden'>
                                        <img
                                            src={accessory.images[0]}
                                            alt={accessory.model}
                                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                                        <div className='absolute bottom-4 left-4 text-white'>
                                            <p className='text-sm font-semibold bg-[#297074] px-3 py-1 rounded-full inline-block'>
                                                {accessory.type}
                                            </p>
                                        </div>
                                    </div>

                                    <div className='p-6 flex flex-col flex-grow'>
                                        {/* Title */}
                                        <h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#297074] transition-colors'>
                                            {accessory.model}
                                        </h3>

                                        {/* Tagline */}
                                        <p className='text-sm text-[#4A8E94] font-semibold mb-3'>{accessory.tagline}</p>

                                        {/* Description */}
                                        <p className='text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3'>
                                            {accessory.description}
                                        </p>

                                        {/* View Details Button */}
                                        <button className='mt-auto w-full bg-[#297074] text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'>
                                            View Details
                                            <IconChevronRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-10'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='bg-gradient-to-r from-[#297074] to-[#075056] rounded-3xl p-12 text-center text-white shadow-2xl'
                    >
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                            Need Help Choosing the Right Model?
                        </h2>
                        <p className='text-xl text-[#91C5C8] mb-8 max-w-2xl mx-auto'>
                            Our experts are here to guide you through the selection process and answer all your questions.
                        </p>
                        <div className='flex flex-wrap items-center justify-center gap-4'>
                            <Link href='/contact'>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='bg-white text-[#297074] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300'
                                >
                                    Contact Us
                                </motion.button>
                            </Link>
                            <Link href='tel:+919990993646'>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#297074] transition-all duration-300'
                                >
                                    Call: +91 99909 93646
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Accessory Detail Modal */}
            <AnimatePresence>
                {selectedAccessory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 bg-black/80 z-[50] flex items-center justify-center p-4'
                        onClick={closeAccessoryModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className='bg-white rounded-2xl max-w-7xl w-full max-h-[80vh] overflow-y-auto'
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeAccessoryModal}
                                className='absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors z-10'
                            >
                                <IconX size={24} />
                            </button>

                            <div className='grid lg:grid-cols-2 gap-8 p-8'>
                                {/* Left: Image Slider */}
                                <div className='space-y-4'>
                                    <div className='relative aspect-square rounded-xl overflow-hidden bg-gray-100'>
                                        <img
                                            src={selectedAccessory.images[currentImageIndex]}
                                            alt={`${selectedAccessory.model} - Image ${currentImageIndex + 1}`}
                                            className='w-full h-full object-cover'
                                        />

                                        {selectedAccessory.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className='absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors'
                                                >
                                                    <IconChevronLeft size={24} />
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    className='absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors'
                                                >
                                                    <IconChevronRight size={24} />
                                                </button>

                                                {/* Dots Indicator */}
                                                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
                                                    {selectedAccessory.images.map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setCurrentImageIndex(idx)}
                                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Thumbnails */}
                                    {selectedAccessory.images.length > 1 && (
                                        <div className='grid grid-cols-4 gap-2'>
                                            {selectedAccessory.images.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentImageIndex(idx)}
                                                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIndex ? 'border-[#297074]' : 'border-gray-200'
                                                        }`}
                                                >
                                                    <img src={img} alt={`Thumbnail ${idx + 1}`} className='w-full h-full object-cover' />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right: Details */}
                                <div className='space-y-6'>
                                    <div>
                                        <h2 className='text-3xl font-bold text-gray-900 mb-2'>{selectedAccessory.model}</h2>
                                        <p className='text-lg text-[#297074] font-semibold mb-2'>{selectedAccessory.tagline}</p>
                                        <p className='text-gray-600'>{selectedAccessory.longDescription}</p>
                                    </div>

                                    {/* Specifications */}
                                    <div>
                                        <h3 className='text-xl font-bold text-gray-900 mb-3'>Specifications</h3>
                                        <div className='bg-gray-50 rounded-xl p-4 space-y-2'>
                                            {Object.entries(selectedAccessory.specifications).map(([key, value]) => (
                                                <div key={key} className='flex justify-between py-2 border-b border-gray-200 last:border-0'>
                                                    <span className='font-semibold text-gray-700'>{key}:</span>
                                                    <span className='text-gray-600 text-right'>{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Advantages */}
                                    <div>
                                        <h3 className='text-xl font-bold text-gray-900 mb-3'>Key Advantages</h3>
                                        <ul className='space-y-2'>
                                            {selectedAccessory.advantages.map((advantage, idx) => (
                                                <li key={idx} className='flex items-start gap-2'>
                                                    <span className='text-[#4A8E94] mt-1'>•</span>
                                                    <span className='text-gray-700'>{advantage}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Request Quote Button */}
                                    <button
                                        onClick={() => setShowQuoteForm(true)}
                                        className='w-full bg-[#297074] text-white py-4 rounded-xl font-semibold hover:bg-[#075056] transition-colors flex items-center justify-center gap-2'
                                    >
                                        {/* <IconPhone size={20} /> */}
                                        Request a Quote
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Quote Form Modal */}
            <AnimatePresence>
                {showQuoteForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80'
                        onClick={() => setShowQuoteForm(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className='bg-white rounded-2xl max-w-md w-full p-8'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='flex justify-between items-center mb-6'>
                                <h3 className='text-2xl font-bold text-gray-900'>Request a Quote</h3>
                                <button
                                    onClick={() => setShowQuoteForm(false)}
                                    className='text-gray-500 hover:text-gray-700'
                                >
                                    <IconX size={24} />
                                </button>
                            </div>

                            <form onSubmit={handleFormSubmit} className='space-y-4'>
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Full Name <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#297074] focus:border-transparent outline-none'
                                        placeholder='Enter your name'
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Email
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#297074] focus:border-transparent outline-none'
                                        placeholder='Enter your email (optional)'
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Phone Number <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='tel'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#297074] focus:border-transparent outline-none'
                                        placeholder='Enter your phone number'
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Accessory Model
                                    </label>
                                    <input
                                        type='text'
                                        name='model'
                                        value={formData.model}
                                        readOnly
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='w-full bg-[#297074] hover:bg-[#075056] text-white font-bold py-4 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed'
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
                                        'Submit Request'
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Thank You Modal */}
            <AnimatePresence>
                {showThankYou && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 bg-black/80 z-[70] flex items-center justify-center p-4'
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className='bg-white rounded-2xl max-w-md w-full p-8 text-center'
                        >
                            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <svg className='w-8 h-8 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                </svg>
                            </div>
                            <h2 className='text-2xl font-bold text-gray-900 mb-2'>Thank You!</h2>
                            <p className='text-gray-600 mb-4'>
                                Your quote request has been submitted successfully. We&apos;ll get back to you soon.
                            </p>
                            <p className='text-sm text-gray-500'>
                                Redirecting to home page in 5 seconds...
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </BgLayout>
    )
}

export default AccessoryCategoryClient
