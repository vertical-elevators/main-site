"use client";

import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* WhatsApp Floating Chat Button */}
        <div className="hidden md:block fixed bottom-4 right-4 z-100">
          <button
            onClick={() => window.open("https://wa.me/917419636357", "_blank")}
            className="bg-green-500 p-3 rounded-full shadow-lg animate-bounce"
          >
            <FaWhatsapp size={40} />
          </button>
        </div>

        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>

          {/* Company Info */}
          <div>
            <img src="/logo.png" alt="Vertical Elevators Logo" className='w-60 mb-4 brightness-0 invert' />
            <p className='text-gray-400 text-sm mb-4'>
              Elevating Standards, Elevating Lives. Premium elevator solutions with expert engineering, reliable service, and unmatched safety for your building.
            </p>
            {/* Social Links */}
            <div className='flex gap-4'>
              <motion.a
                href="https://www.facebook.com/verticalelevators"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='bg-[#297074] p-2 rounded-full hover:bg-[#075056] transition-colors'
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/verticalelevators/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 p-2 rounded-full hover:opacity-90 transition-opacity'
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/verticalelevators"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='bg-[#297074] p-2 rounded-full hover:bg-[#075056] transition-colors'
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@verticalelevators"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors'
              >
                <FaYoutube size={20} />
              </motion.a>
            </div>
            {/* <div className='mt-4'>
              <Link href="/certifications" className='text-gray-300 hover:text-white transition-colors text-lg underline hover:no-underline'>
                Certifications & Safety
              </Link>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><Link href="/" className='text-gray-400 hover:text-white transition-colors'>Home</Link></li>
              <li><Link href="/about" className='text-gray-400 hover:text-white transition-colors'>About Us</Link></li>
              <li><Link href="/products" className='text-gray-400 hover:text-white transition-colors'>Products</Link></li>
              <li><Link href="/accessories" className='text-gray-400 hover:text-white transition-colors'>Accessories</Link></li>
              <li><Link href="/#certifications" className='text-gray-400 hover:text-white transition-colors'>Certifications</Link></li>
              <li><Link href="/careers" className='text-gray-400 hover:text-white transition-colors'>Careers</Link></li>
              <li><Link href="/contact" className='text-gray-400 hover:text-white transition-colors'>Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Products</h3>
            <ul className='space-y-2'>
              <li><Link href="/products/machine-room-lifts" className='text-gray-400 hover:text-white transition-colors'>Machine Room Lifts</Link></li>
              <li><Link href="/products/machine-roomless-lifts" className='text-gray-400 hover:text-white transition-colors'>Machine Roomless Lifts</Link></li>
              <li><Link href="/products/hydraulic-lifts" className='text-gray-400 hover:text-white transition-colors'>Hydraulic Lifts</Link></li>
              <li><Link href="/products/goods-lifts" className='text-gray-400 hover:text-white transition-colors'>Goods Lifts</Link></li>
              <li><Link href="/products/home-lifts" className='text-gray-400 hover:text-white transition-colors'>Home Lifts</Link></li>
              <li><Link href="/products/hospital-lifts" className='text-gray-400 hover:text-white transition-colors'>Hospital Lifts</Link></li>
              <li><Link href="/products/capsule-lifts" className='text-gray-400 hover:text-white transition-colors'>Capsule Lifts</Link></li>
              <li><Link href="/products/dumbwaiter-lifts" className='text-gray-400 hover:text-white transition-colors'>Dumbwaiter Lifts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Accessories</h3>
            <ul className='space-y-2'>
              <li><Link href="/accessories/geared-motor" className='text-gray-400 hover:text-white transition-colors'>Geared Motor</Link></li>
              <li><Link href="/accessories/gearless-motor" className='text-gray-400 hover:text-white transition-colors'>Gearless Motor</Link></li>
              <li><Link href="/accessories/vvvf-drive" className='text-gray-400 hover:text-white transition-colors'>VVVF Drive</Link></li>
              <li><Link href="/accessories/control-panel" className='text-gray-400 hover:text-white transition-colors'>Control Panel</Link></li>
              <li><Link href="/accessories/designer-cabins" className='text-gray-400 hover:text-white transition-colors'>Designer Cabins</Link></li>
              <li><Link href="/accessories/car-operating-panel" className='text-gray-400 hover:text-white transition-colors'>Car Operating Panel</Link></li>
              <li><Link href="/accessories/landing-operating-panel" className='text-gray-400 hover:text-white transition-colors'>Landing Operating Panel</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <FaMapMarkerAlt size={20} className='text-[#4A8E94] flex-shrink-0 mt-1' />
                <span className='text-gray-400 text-sm'>
                  G-54, Ground Floor,<br />
                  Pushkar Enclave, Paschim Vihar,<br />
                  New Delhi - 110063
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <FaPhoneAlt size={20} className='text-[#4A8E94] flex-shrink-0' />
                <a href="tel:+917419636357" className='text-gray-400 hover:text-white transition-colors'>
                  +91 74196 36357
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <MdEmail size={20} className='text-[#4A8E94] flex-shrink-0' />
                <a href="mailto:info@verticalelevators.in" className='text-[15px] text-gray-400 hover:text-white transition-colors break-all'>
                  info@verticalelevators.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm text-center md:text-left'>
              © {currentYear} Vertical Elevators. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <Link href="/privacy-policy" className='text-gray-400 hover:text-white transition-colors'>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
