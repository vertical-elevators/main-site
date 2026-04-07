"use client";

import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { IconMenu2, IconX, IconChevronDown } from '@tabler/icons-react'
import { FaTimes } from 'react-icons/fa'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hovered, setHovered] = useState(null);
    const [productsOpen, setproductsOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const ref = useRef(null);

    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    // Prevent body scroll when form is open
    useEffect(() => {
        if (showForm || showThankYou) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [showForm, showThankYou])

    // Auto close thank you modal after 5 seconds
    useEffect(() => {
        if (showThankYou) {
            const timer = setTimeout(() => {
                setShowThankYou(false)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [showThankYou])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        const form = e.target
        const formData = new FormData(form)

        try {
            // Save to Google Sheets
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formType: 'cta',
                    name: formData.get('name'),
                    email: formData.get('email') || 'Not provided',
                    phone: formData.get('phone'),
                    service: formData.get('service') || 'Header Quote Request',
                    message: `Header CTA - Source: ${window.location.pathname}`
                })
            })

            const result = await response.json()

            if (result.success) {
                setShowForm(false)
                setShowThankYou(true)
                setIsSubmitting(false)
                form.reset()
            } else {
                console.error('Form submission failed:', result.error)
                alert('Failed to submit form. Please try again.')
                setIsSubmitting(false)
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Something went wrong. Please try again.')
            setIsSubmitting(false)
        }
    }

    return (
        <header ref={ref}>
            {/* Desktop Header */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: visible ? 0 : 0,
                    opacity: 1,
                    backdropFilter: visible ? "blur(10px)" : "none",
                    boxShadow: visible
                        ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                        : "0 10px 40px -10px rgba(0, 0, 0, 0.3)",
                    width: visible ? "90%" : "100%",
                    borderRadius: visible ? "0 0 30px 30px" : "0 0 1rem 1rem",
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 50,
                }}
                className='fixed top-0 left-0 right-0 hidden lg:flex flex-row justify-around mx-auto py-3  items-center rounded-b-2xl z-50 bg-white'
            >
                <div>
                    <Link href="/">
                        <img src="/logo.png" alt="Vertical Elevators Logo" className='w-80' />
                    </Link>
                </div>

                <div>
                    <nav onMouseLeave={() => setHovered(null)}>
                        <ul className='flex flex-row justify-between gap-5 lg:gap-3 xl:gap-7 text-lg xl:text-xl'>
                            {/* <li className='relative hidden [@media(min-width:1130px)]:block'>
                                <Link
                                    href="/"
                                    onMouseEnter={() => setHovered('home')}
                                    className='relative px-0 py-2 inline-block'
                                >
                                    {hovered === 'home' && (
                                        <motion.div
                                            layoutId="hovered"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className='relative z-20'>Home</span>
                                </Link>
                            </li> */}
                            <li className='relative'>
                                <Link
                                    href="/about"
                                    onMouseEnter={() => setHovered('about')}
                                    className='relative px-0 py-2 inline-block'
                                >
                                    {hovered === 'about' && (
                                        <motion.div
                                            layoutId="hovered"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#297074]"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className='relative z-20'>About</span>
                                </Link>
                            </li>
                            <li className='relative'>
                                <Link
                                    href="/products"
                                    onMouseEnter={() => setHovered('products')}
                                    className='relative px-0 py-2 inline-block'
                                >
                                    {hovered === 'products' && (
                                        <motion.div
                                            layoutId="hovered"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#297074]"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className='relative z-20'>Products</span>
                                </Link>
                            </li>
                            <li className='relative'>
                                <Link
                                    href="/accessories"
                                    onMouseEnter={() => setHovered('accessories')}
                                    className='relative px-0 py-2 inline-block'
                                >
                                    {hovered === 'accessories' && (
                                        <motion.div
                                            layoutId="hovered"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#297074]"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className='relative z-20'>Accessories</span>
                                </Link>
                            </li>
                            {/* <li
                                className='relative'
                                onMouseEnter={() => {
                                    setHovered('products');
                                    setproductsOpen(true);
                                }}
                                onMouseLeave={() => setproductsOpen(false)}
                            >
                                <button
                                    className='relative px-0 py-2 inline-flex items-center gap-1'
                                >
                                    {hovered === 'products' && (
                                        <motion.div
                                            layoutId="hovered"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#297074]"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className='relative z-20'>Products</span>
                                    <IconChevronDown size={18} className='relative z-20' />
                                </button>

                                <AnimatePresence>
                                    {productsOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className='absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[220px]'
                                        >
                                            <Link href="/residential-elevators" className='block px-6 py-3 hover:bg-gray-100 transition-colors'>
                                                Residential Elevators
                                            </Link>
                                            <Link href="/commercial-elevators" className='block px-6 py-3 hover:bg-gray-100 transition-colors'>
                                                Commercial Elevators
                                            </Link>
                                            <Link href="/maintenance" className='block px-6 py-3 hover:bg-gray-100 transition-colors'>
                                                Maintenance & Repair
                                            </Link>
                                            <Link href="/modernization" className='block px-6 py-3 hover:bg-gray-100 transition-colors'>
                                                Modernization
                                            </Link>
                                            <Link href="/installation" className='block px-6 py-3 hover:bg-gray-100 transition-colors'>
                                                New Installation
                                            </Link>
                                            <Link href="/freight-elevators" className='block px-6 py-3 hover:bg-gray-100 transition-colors'>
                                                Freight Elevators
                                            </Link>
                                            <Link href="/emergency-service" className='block px-6 py-3 hover:bg-gray-100 transition-colors'>
                                                24/7 Emergency Service
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li> */}
                            {/* <li className='relative'>
                                <Link
                                    href="/portfolio"
                                    onMouseEnter={() => setHovered('portfolio')}
                                    className='relative px-0 py-2 inline-block'
                                >
                                    {hovered === 'portfolio' && (
                                        <motion.div
                                            layoutId="hovered"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className='relative z-20'>Portfolio</span>
                                </Link>
                            </li> */}
                            <li className='relative'>
                                <Link
                                    href="/careers"
                                    onMouseEnter={() => setHovered('careers')}
                                    className='relative px-0 py-2 inline-block'
                                >
                                    {hovered === 'careers' && (
                                        <motion.div
                                            layoutId="hovered"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#297074]"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className='relative z-20'>Careers</span>
                                </Link>
                            </li>
                            {/* <li className='relative'>
                                <Link
                                    href="/blogs"
                                    onMouseEnter={() => setHovered('blogs')}
                                    className='relative px-0 py-2 inline-block'
                                >
                                    {hovered === 'blogs' && (
                                        <motion.div
                                            layoutId="hovered"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#297074]"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className='relative z-20'>Blogs</span>
                                </Link>
                            </li> */}
                            <li className='relative'>
                                <Link
                                    href="/contact"
                                    onMouseEnter={() => setHovered('contact')}
                                    className='relative px-0 py-2 inline-block'
                                >
                                    {hovered === 'contact' && (
                                        <motion.div
                                            layoutId="hovered"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#297074]"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className='relative z-20'>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='flex flex-row items-center'>
                    <Link href="tel:+919990993646" className='text-lg hover:text-xl font-semibold text-[#297074] transition-all duration-200'>
                        +91 99909 93646
                    </Link>

                    <button
                        onClick={() => setShowForm(true)}
                        className='bg-[#297074] text-white ml-4 hover:scale-110 hover:text-xl rounded-2xl px-4 py-3 text-lg inline-block relative overflow-hidden transition-all duration-200'
                    >
                        <span className='relative z-10'>Get a Quote</span>
                        <motion.div
                            className="absolute inset-0 w-full h-full"
                            initial={{ x: '-100%', opacity: 0 }}
                            animate={{
                                x: ['100%', '100%', '-100%'],
                                opacity: [0, 0.6, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 2.5,
                                ease: "easeInOut"
                            }}
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                                transform: 'skewX(-20deg)'
                            }}
                        />
                    </button>
                </div>
            </motion.div>

            {/* Mobile Header */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 50,
                }}
                className='fixed top-0 left-0 right-0 bg-white flex lg:hidden flex-col max-w-[calc(100vw-2rem)] mx-auto mt-4 rounded-xl shadow-2xl z-50'
            >
                <div className='flex flex-row justify-between items-center px-4 py-4'>
                    <Link href="/">
                        <img src="/logo.png" alt="Vertical Elevators Logo" className='w-55' />
                    </Link>

                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className='overflow-hidden'
                        >
                            <nav className='px-4 pb-6'>
                                <ul className='flex flex-col gap-4 text-lg'>
                                    <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                                    <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
                                    <li><Link href="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link></li>
                                    <li><Link href="/accessories" onClick={() => setMobileMenuOpen(false)}>Accessories</Link></li>
                                    {/* <li>
                                        <button
                                            onClick={() => setproductsOpen(!productsOpen)}
                                            className='flex items-center gap-2 w-full'
                                        >
                                            Products <IconChevronDown size={18} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {productsOpen && (
                                                <motion.ul
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className='ml-4 mt-2 flex flex-col gap-2 overflow-hidden'
                                                >
                                                    <li><Link href="/residential-elevators" onClick={() => setMobileMenuOpen(false)} className='text-gray-600'>Residential Elevators</Link></li>
                                                    <li><Link href="/commercial-elevators" onClick={() => setMobileMenuOpen(false)} className='text-gray-600'>Commercial Elevators</Link></li>
                                                    <li><Link href="/maintenance" onClick={() => setMobileMenuOpen(false)} className='text-gray-600'>Maintenance & Repair</Link></li>
                                                    <li><Link href="/modernization" onClick={() => setMobileMenuOpen(false)} className='text-gray-600'>Modernization</Link></li>
                                                    <li><Link href="/installation" onClick={() => setMobileMenuOpen(false)} className='text-gray-600'>New Installation</Link></li>
                                                    <li><Link href="/freight-elevators" onClick={() => setMobileMenuOpen(false)} className='text-gray-600'>Freight Elevators</Link></li>
                                                    <li><Link href="/emergency-service" onClick={() => setMobileMenuOpen(false)} className='text-gray-600'>24/7 Emergency Service</Link></li>
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </li> */}
                                    <li><Link href="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</Link></li>
                                    <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                                </ul>

                                <div className='flex flex-col gap-3 mt-6'>
                                    <Link href="tel:+919990993646" className='text-center border border-gray-300 rounded-md px-4 py-3 text-lg'>
                                        +91 99909 93646
                                    </Link>

                                    <button
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setShowForm(true);
                                        }}
                                        className='bg-[#297074] text-white text-center rounded-md px-4 py-3 text-lg relative overflow-hidden'
                                    >
                                        <span className='relative z-10'>Get a Quote</span>
                                        <motion.div
                                            className="absolute inset-0 w-full h-full"
                                            initial={{ x: '-100%', opacity: 0 }}
                                            animate={{
                                                x: ['100%', '100%', '-100%'],
                                                opacity: [0, 0.6, 0]
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                repeatDelay: 3.5,
                                                ease: "easeInOut"
                                            }}
                                            style={{
                                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                                                transform: 'skewX(-20deg)'
                                            }}
                                        />
                                    </button>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Popup Form */}
            {showForm && (
                <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4'>
                    <div className='bg-white rounded-lg shadow-2xl w-full max-w-md relative animate-fadeIn'>
                        {/* Close Button */}
                        <button
                            onClick={() => setShowForm(false)}
                            className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors'
                        >
                            <FaTimes className="text-2xl" />
                        </button>

                        {/* Form Content */}
                        <div className='p-6'>
                            <h2 className='text-2xl font-bold text-gray-900 mb-2'>Get a Quote</h2>
                            <p className='text-gray-600 mb-6'>Fill in your details and we&apos;ll get back to you shortly.</p>

                            <form
                                onSubmit={handleSubmit}
                                className='space-y-4'
                            >
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_subject" value="New Quote Request - Vertical Elevators" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />

                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#297074] focus:border-transparent outline-none transition-all'
                                        placeholder='Enter your name'
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#297074] focus:border-transparent outline-none transition-all'
                                        placeholder='Enter your email'
                                    />
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label htmlFor="phone" className='block text-sm font-medium text-gray-700 mb-1'>
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        pattern="[0-9]{10,15}"
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#297074] focus:border-transparent outline-none transition-all'
                                        placeholder='Enter your phone number'
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className='w-full bg-[#297074] text-white py-3 rounded-lg font-semibold hover:bg-[#075056] transition-colors mt-6 disabled:opacity-70 disabled:cursor-not-allowed'
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
                        </div>
                    </div>
                </div>
            )}

            {/* Thank You Modal */}
            {showThankYou && (
                <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4'>
                    <div className='bg-white rounded-lg shadow-2xl w-full max-w-md relative animate-fadeIn p-8 text-center'>
                        {/* Close Button */}
                        <button
                            onClick={() => setShowThankYou(false)}
                            className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors'
                        >
                            <FaTimes className="text-2xl" />
                        </button>

                        {/* Success Icon */}
                        <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>

                        <h2 className='text-3xl font-bold text-gray-900 mb-3'>Thank You!</h2>
                        <p className='text-gray-600 text-lg mb-2'>Your request has been submitted successfully.</p>
                        <p className='text-gray-500 text-sm'>We&apos;ll get back to you shortly.</p>

                        {/* Auto-close indicator */}
                        <p className='text-gray-400 text-xs mt-6'>This window will close automatically in 5 seconds</p>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header