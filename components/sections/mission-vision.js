"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { IconTarget, IconEye, IconSparkles } from '@tabler/icons-react'

function MissionVision() {
  return (
    <section className='py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* Header */}
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            Engineered <span className='text-[#297074]'>Excellence</span>, <br /> Unmatched <span className='text-[#297074]'>Safety</span>, <br /> And Reliable <span className='text-[#297074]'>Performance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-lg text-gray-600 max-w-3xl mx-auto'
          >
            We pride ourselves on delivering elevator solutions that go beyond expectations. Our approach is centered on understanding your building&apos;s unique needs
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {/* Large Card - Spans 2 cols and 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='md:col-span-2 lg:col-span-2 md:row-span-2 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-end min-h-[500px]'
            style={{
              backgroundImage: 'url(/home/images/our-values.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className='absolute inset-0 bg-black/50'></div>

            <div className='relative z-10'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className='text-[#91C5C8] text-sm font-semibold mb-2 uppercase tracking-wide'>VERTICAL ELEVATORS</p>
                <h3 className='text-3xl md:text-4xl font-bold mb-4'>Our <span className='text-white'>Values</span></h3>
                <div className='w-20 h-1 bg-white mb-6'></div>
              </motion.div>

              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-xl md:text-2xl font-semibold mb-4'
              >
                Discover How We Elevate Safety, Reliability & Building Value
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='text-white/80 text-lg leading-relaxed mb-8'
              >
                We&apos;re committed to delivering exceptional elevator solutions to our clients. We understand that every building is unique, with a personalized approach to every installation and maintenance project.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href="/about"
                  description="Learn more about our company and values"
                  className='inline-flex items-center gap-2 bg-white text-[#297074] px-6 py-3 rounded-lg font-semibold hover:bg-[#F0F4F5] transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
                >
                  About Us
                  <IconSparkles size={20} />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
          >
            <div className='w-14 h-14 bg-[#297074] rounded-xl flex items-center justify-center mb-6'>
              <IconTarget size={28} className='text-white' />
            </div>

            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Our <span className='text-[#297074]'>Mission</span></h3>

            <p className='text-gray-600 leading-relaxed'>
              To provide world-class elevator solutions that ensure safety, reliability, and comfort for every passenger. We are committed to engineering excellence, delivering exceptional service, and building long-term partnerships that elevate standards across the industry.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
          >
            <div className='w-14 h-14 bg-[#297074] rounded-xl flex items-center justify-center mb-6'>
              <IconEye size={28} className='text-white' />
            </div>

            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Our <span className='text-[#297074]'>Vision</span></h3>

            <p className='text-gray-600 leading-relaxed'>
              We envision a future where vertical transportation is seamlessly integrated into every building, from residential homes to commercial towers, providing safe, efficient, and sustainable mobility that enhances quality of life for communities worldwide.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default MissionVision