"use client";

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [direction, setDirection] = useState(0)

    const testimonials = [
        {
            name: "David Thompson",
            role: "Property Manager, Skyline Towers",
            content: "Vertical Elevators installed six new passenger elevators in our commercial complex. The installation was seamless, and the elevators run incredibly smooth. Their maintenance service is top-notch.",
            rating: 5,
            image: "/testimonials/avatar-1.jpg",
            company: "Skyline Towers"
        },
        {
            name: "Sarah Al-Mansouri",
            role: "Facilities Director, Marina Bay Residences",
            content: "We chose Vertical Elevators for our residential building modernization project. They upgraded all 8 elevators with minimal disruption to residents. Exceptional professionalism and quality.",
            rating: 5,
            image: "/testimonials/avatar-2.jpg",
            company: "Marina Bay Residences"
        },
        {
            name: "Robert Chen",
            role: "Building Owner",
            content: "The home elevator they installed in my villa is beautiful and operates perfectly. It's added tremendous value to my property and made life easier for my elderly parents. Highly recommend!",
            rating: 5,
            image: "/testimonials/avatar-3.jpg",
            company: "Private Residence"
        },
        {
            name: "Ahmed Hassan",
            role: "Maintenance Manager, Grand Plaza Hotel",
            content: "Their 24/7 maintenance contract gives us complete peace of mind. Response time is excellent, and our elevators have never been more reliable. True professionals in every aspect.",
            rating: 5,
            image: "/testimonials/avatar-4.jpg",
            company: "Grand Plaza Hotel"
        },
        {
            name: "Jennifer Williams",
            role: "Project Manager, Elite Construction",
            content: "Vertical Elevators has been our preferred partner for all elevator installations. Their engineering expertise and project management are outstanding. Every project delivered on time.",
            rating: 5,
            image: "/testimonials/avatar-5.jpg",
            company: "Elite Construction"
        },
        {
            name: "Mohammed Al-Rashid",
            role: "CEO, Pearl Developments",
            content: "We've worked with Vertical Elevators on multiple residential and commercial projects. Their quality, safety standards, and customer service are unmatched in the industry.",
            rating: 5,
            image: "/testimonials/avatar-6.jpg",
            company: "Pearl Developments"
        }
    ];

    const [itemsPerView, setItemsPerView] = useState(3); // Number of cards visible at once (responsive)

    // Responsive items per view
    useEffect(() => {
        const updateItems = () => {
            const w = window.innerWidth;
            if (w < 768) setItemsPerView(1);
            else if (w < 1024) setItemsPerView(2);
            else setItemsPerView(3);
        };

        updateItems();
        window.addEventListener('resize', updateItems);
        return () => window.removeEventListener('resize', updateItems);
    }, []);

    // Auto-advance slider
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                handleNext();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered, currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Get visible testimonials with infinite wrapping
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < itemsPerView; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push({ ...testimonials[index], key: `${currentIndex}-${i}` });
        }
        return visible;
    };

    return (
        <section className='py-10 '>
            <div className='w-full lg:max-w-[100rem] mx-auto px-4'>

                {/* Section Header */}
                <div className='text-center mb-16'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                            What Our <span className='text-[#297074]'>Clients </span>Say
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            Don&apos;t just take our word for it. Hear from property managers, building owners, and developers who trust Vertical Elevators.
                        </p>
                    </motion.div>
                </div>

                {/* Infinite Testimonials Slider */}
                <div
                    className='relative'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className='hidden md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:flex z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 group'
                        aria-label="Previous testimonial"
                    >
                        <IconChevronLeft className='w-6 h-6 text-gray-700 group-hover:text-[#297074]' />
                    </button>

                    <button
                        onClick={handleNext}
                        className='hidden md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:flex z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 group'
                        aria-label="Next testimonial"
                    >
                        <IconChevronRight className='w-6 h-6 text-gray-700 group-hover:text-[#297074]' />
                    </button>

                    <div className='overflow-hidden px-16'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            <AnimatePresence mode='popLayout' initial={false}>
                                {getVisibleTestimonials().map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.key}
                                        initial={{
                                            opacity: 0,
                                            x: direction > 0 ? 300 : -300
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: direction > 0 ? -300 : 300
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                            opacity: { duration: 0.3 }
                                        }}
                                        whileHover={{
                                            y: -8,
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                            transition: { duration: 0.2 }
                                        }}
                                        className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100'
                                    >
                                        {/* Rating Stars */}
                                        <div className='flex gap-1 mb-4'>
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className='w-5 h-5 text-yellow-400 fill-current'
                                                    viewBox='0 0 20 20'
                                                >
                                                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Testimonial Content */}
                                        <p className='text-gray-700 mb-6 leading-relaxed text-base'>
                                            &quot;{testimonial.content}&quot;
                                        </p>

                                        {/* Author Info */}
                                        <div className='flex items-center gap-4 pt-4 border-t border-gray-100'>
                                            <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#297074] to-[#075056] flex items-center justify-center text-white font-bold text-lg flex-shrink-0'>
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className='font-semibold text-gray-900'>{testimonial.name}</h4>
                                                <p className='text-sm text-gray-600'>{testimonial.role}</p>
                                                <p className='text-xs text-[#297074] font-medium mt-1'>{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile nav buttons (below cards) */}
                    <div className='flex md:hidden justify-center gap-4 mt-6'>
                        <button
                            onClick={handlePrev}
                            className='bg-white/90 hover:bg-white shadow rounded-full p-3 transition-all duration-200'
                            aria-label="Previous testimonial"
                        >
                            <IconChevronLeft className='w-5 h-5 text-gray-700' />
                        </button>

                        <button
                            onClick={handleNext}
                            className='bg-white/90 hover:bg-white shadow rounded-full p-3 transition-all duration-200'
                            aria-label="Next testimonial"
                        >
                            <IconChevronRight className='w-5 h-5 text-gray-700' />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className='flex justify-center gap-2 mt-8'>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-[#297074]'
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='text-center mt-16'
                >
                    <p className='text-lg text-gray-600 mb-6'>
                        Join hundreds of satisfied clients who transformed their business with us
                    </p>
                    <Link href="/contact" description="Get in touch with us for your project">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-[#297074] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:bg-[#1f565a] transition-colors duration-300'
                        >
                            Start Your Project Today
                        </motion.button>
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}

export default Testimonials