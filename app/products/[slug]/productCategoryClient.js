"use client";

import BgLayout from '@/components/layout/bgLayout';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconHome, IconChevronRight, IconBuilding, IconHome as IconHomeElevator, IconTool, IconArrowsUpDown, IconPackage, IconCertificate, IconPhone, IconUsers, IconCheck, IconX, IconChevronLeft, IconChevronRight as IconChevronRightIcon } from '@tabler/icons-react';
import Link from 'next/link';

function ProductCategoryClient({ category, products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
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

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setFormData({ ...formData, model: product.model });
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setShowQuoteForm(false);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct && selectedProduct.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProduct && selectedProduct.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          formType: 'product',
          name: formData.name,
          email: formData.email || 'Not provided',
          phone: formData.phone,
          productName: formData.model,
          message: `Quote request for ${formData.model}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setShowQuoteForm(false);
        setShowThankYou(true);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', phone: '', model: '' });

        setTimeout(() => {
          setShowThankYou(false);
          closeProductModal();
          window.location.href = '/';
        }, 5000);
      } else {
        console.error('Form submission failed:', result.error);
        alert('Failed to submit form. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (!category) {
    return (
      <BgLayout>
        <div className='min-h-screen flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>Category Not Found</h1>
            <Link href='/products' className='text-[#297074] hover:text-[#4A8E94]'>
              Back to Products
            </Link>
          </div>
        </div>
      </BgLayout>
    );
  }

  const iconMap = {
    IconBuilding: <IconBuilding size={64} />,
    IconArrowsUpDown: <IconArrowsUpDown size={64} />,
    IconTool: <IconTool size={64} />,
    IconPackage: <IconPackage size={64} />,
    IconHomeElevator: <IconHomeElevator size={64} />,
    IconCertificate: <IconCertificate size={64} />,
    IconUsers: <IconUsers size={64} />,
    IconPhone: <IconPhone size={64} />
  };

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className='relative h-[60vh] mt-19 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="/products/hero-image.webp"
            alt="Products Hero Image"
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
            <Link href='/products' className='hover:text-[#91C5C8] transition-colors'>
              Products
            </Link>
            <IconChevronRight size={16} className='text-[#91C5C8]' />
            <span className='text-[#91C5C8]'>{category.title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <div className='flex justify-center mb-6 text-[#4A8E94]'>
              {iconMap[category.icon]}
            </div> */}
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
              {category.title}
            </h1>
            <p className='text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Features */}
      {/* <section className='py-10 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Key <span className='text-[#297074]'>Features</span>
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {category.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow'
              >
                <div className='flex items-start gap-3'>
                  <div className='flex-shrink-0 w-6 h-6 bg-[#297074] rounded-full flex items-center justify-center mt-1'>
                    <IconCheck size={16} className='text-white' />
                  </div>
                  <p className='text-gray-700 font-medium'>{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Products Grid */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Available <span className='text-[#297074]'>Models</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Explore our range of {category.title.toLowerCase()} designed for your specific needs.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {products.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='group cursor-pointer'
                onClick={() => openProductModal(product)}
              >
                <div className='flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#4A8E94]'>
                  {/* Image Slider */}
                  <div className='relative h-full w-full overflow-hidden'>
                    {product.images.length > 1 ? (
                      <div className='relative h-full w-full'>
                        <img
                          src={product.images[0]}
                          alt={product.model}
                          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                        {/* <div className='absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full text-xs font-semibold text-gray-700'>
                          +{product.images.length - 1} more
                        </div> */}
                      </div>
                    ) : (
                      <img
                        src={product.images[0]}
                        alt={product.model}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      />
                    )}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                    <div className='absolute bottom-4 left-4 text-white'>
                      <p className='text-sm font-semibold bg-[#297074] px-3 py-1 rounded-full inline-block'>
                        {product.type}
                      </p>
                    </div>
                  </div>

                  <div className='p-6 flex flex-col flex-grow'>
                    {/* Title */}
                    <h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#297074] transition-colors'>
                      {product.model}
                    </h3>

                    {/* Tagline */}
                    <p className='text-sm text-[#4A8E94] font-semibold mb-3'>{product.tagline}</p>

                    {/* Description */}
                    <p className='text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3'>
                      {product.description}
                    </p>

                    {/* Key Specs */}
                    <div className='space-y-2 mb-4 border-t border-gray-100 pt-4'>
                      <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <span className='font-semibold'>Capacity:</span>
                        <span>{product.specifications.capacity}</span>
                      </div>
                      <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <span className='font-semibold'>Speed:</span>
                        <span>{product.specifications.speed}</span>
                      </div>
                      <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <span className='font-semibold'>Floors:</span>
                        <span>{product.specifications.floors}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className='flex flex-row justify-center items-center gap-2 bg-[#297074] rounded-lg text-white py-3 px-4 w-full text-center font-semibold hover:bg-[#075056] transition-all'>
                      <span>View Details</span>
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
              <Link href='tel:+917419636357'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#297074] transition-all duration-300'
                >
                  Call: +91 74196 36357
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80'
            onClick={closeProductModal}
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
                onClick={closeProductModal}
                className='absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg'
              >
                <IconX size={24} className='text-gray-700' />
              </button>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-8'>
                {/* Left: Image Slider */}
                <div className='space-y-4'>
                  <div className='relative h-96 rounded-xl overflow-hidden bg-gray-100'>
                    <img
                      src={selectedProduct.images[currentImageIndex]}
                      alt={`${selectedProduct.model} - Image ${currentImageIndex + 1}`}
                      className='w-full h-full object-cover'
                    />

                    {selectedProduct.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg'
                        >
                          <IconChevronLeft size={24} className='text-gray-700' />
                        </button>
                        <button
                          onClick={nextImage}
                          className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg'
                        >
                          <IconChevronRightIcon size={24} className='text-gray-700' />
                        </button>

                        {/* Image Indicators */}
                        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
                          {selectedProduct.images.map((_, idx) => (
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

                  {/* Thumbnail Strip */}
                  {selectedProduct.images.length > 1 && (
                    <div className='flex gap-2 overflow-x-auto'>
                      {selectedProduct.images.map((image, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIndex ? 'border-[#297074]' : 'border-gray-200'
                            }`}
                        >
                          <img src={image} alt={`Thumbnail ${idx + 1}`} className='w-full h-full object-cover' />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Product Details */}
                <div className='space-y-6'>
                  <div>
                    <span className='inline-block bg-[#297074] text-white text-sm font-semibold px-3 py-1 rounded-lg mb-2'>
                      {selectedProduct.type}
                    </span>
                    <h2 className='text-3xl font-bold text-gray-900 mb-2'>{selectedProduct.model}</h2>
                    <p className='text-lg text-[#4A8E94] font-semibold'>{selectedProduct.tagline}</p>
                  </div>

                  <div>
                    <p className='text-gray-700 leading-relaxed mb-4'>{selectedProduct.description}</p>
                    <p className='text-gray-600 leading-relaxed'>{selectedProduct.longDescription}</p>
                  </div>

                  {/* Specifications */}
                  <div className='bg-gray-50 rounded-xl p-6'>
                    <h3 className='text-xl font-bold text-gray-900 mb-4'>Specifications</h3>
                    <div className='space-y-3'>
                      <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
                        <span className='font-semibold text-gray-700'>Powered By:</span>
                        <span className='text-gray-600'>{selectedProduct.specifications.poweredBy}</span>
                      </div>
                      <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
                        <span className='font-semibold text-gray-700'>Capacity:</span>
                        <span className='text-gray-600'>{selectedProduct.specifications.capacity}</span>
                      </div>
                      <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
                        <span className='font-semibold text-gray-700'>Speed:</span>
                        <span className='text-gray-600'>{selectedProduct.specifications.speed}</span>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='font-semibold text-gray-700'>Floors:</span>
                        <span className='text-gray-600'>{selectedProduct.specifications.floors}</span>
                      </div>
                    </div>
                  </div>

                  {/* Advantages */}
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-4'>Key Advantages</h3>
                    <div className='space-y-2 '>
                      {selectedProduct.advantages.map((advantage, idx) => (
                        <div key={idx} className='flex items-start gap-2'>
                          <IconCheck size={20} className='text-[#297074] flex-shrink-0 mt-0.5' />
                          <p className='text-gray-600 text-sm'>{advantage}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setShowQuoteForm(true)}
                    className='w-full bg-[#297074] hover:bg-[#075056] text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl'
                  >
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
                    onChange={handleFormChange}
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
                    onChange={handleFormChange}
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
                    onChange={handleFormChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#297074] focus:border-transparent outline-none'
                    placeholder='Enter your phone number'
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Elevator Model
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
            className='fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80'
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='bg-white rounded-2xl max-w-md w-full p-8 text-center'
            >
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <IconCheck size={32} className='text-green-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>Thank You!</h3>
              <p className='text-gray-600 mb-4'>
                Your quote request has been submitted successfully. We&apos;ll get back to you shortly.
              </p>
              <p className='text-sm text-gray-500'>Redirecting to home page in 5 seconds...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BgLayout>
  );
}

export default ProductCategoryClient;
