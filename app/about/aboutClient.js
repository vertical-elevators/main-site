"use client";

import BgLayout from '@/components/layout/bgLayout'
import Clients from '@/components/sections/clients'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { IconTarget, IconUsers, IconTrophy, IconHeart, IconRocket, IconBulb, IconHome, IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

function AboutPage() {
  const teamStatsRef = useRef(null);
  const isInView = useInView(teamStatsRef, { once: true, margin: "-100px" });

  const [teamCounts, setTeamCounts] = useState({
    years: 0,
    members: 0,
    projects: 0,
    retention: 0
  });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const frameRate = 1000 / 60; // 60fps
      const totalFrames = duration / frameRate;

      const targets = {
        years: 10,
        members: 50,
        projects: 500,
        retention: 98
      };

      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setTeamCounts({
          years: Math.floor(easeOutQuart * targets.years),
          members: Math.floor(easeOutQuart * targets.members),
          projects: Math.floor(easeOutQuart * targets.projects),
          retention: Math.floor(easeOutQuart * targets.retention)
        });

        if (frame >= totalFrames) {
          clearInterval(counter);
          setTeamCounts(targets);
        }
      }, frameRate);

      return () => clearInterval(counter);
    }
  }, [isInView]);

  const values = [
    {
      icon: IconTarget,
      title: "Safety First",
      description: "We prioritize passenger safety above all else, adhering to the strictest international safety standards and regulations."
    },
    {
      icon: IconUsers,
      title: "Client-Centric",
      description: "Your building's needs are unique. We provide personalized elevator solutions tailored to your specific requirements."
    },
    {
      icon: IconTrophy,
      title: "Excellence",
      description: "We maintain the highest standards in engineering, installation, and service for every elevator system we deliver."
    },
    {
      icon: IconHeart,
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices form the foundation of every client relationship we build."
    },
    {
      icon: IconRocket,
      title: "Innovation",
      description: "We stay ahead of elevator technology trends, implementing cutting-edge solutions for superior performance."
    },
    {
      icon: IconBulb,
      title: "Reliability",
      description: "We combine expert engineering with 24/7 support to ensure your elevators operate flawlessly, every day."
    }
  ];

  const team = [
    {
      expertise: "15+ Years",
      description: "Elevator Industry Experience"
    },
    {
      expertise: "50+",
      description: "Certified Engineers & Technicians"
    },
    {
      expertise: "500+",
      description: "Elevators Installed & Serviced"
    },
    {
      expertise: "100%",
      description: "Safety Compliance Rate"
    }
  ];

  return (
    <BgLayout>
      {/* Hero Section with Background Image */}
      <section className='relative h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="/about/hero-image.webp"
            alt="About Us"
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
            <span className='text-[#91C5C8]'>About Us</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              About <span className='text-[#4A8E94]'>Vertical Elevators</span>
            </h1>
            <p className='text-xl md:text-2xl text-[#91C5C8] max-w-3xl mx-auto leading-relaxed'>
              Engineering excellence in vertical transportation. Elevating standards, elevating lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Our <span className='text-[#297074]'>Story</span>
              </h2>
              <div className='w-20 h-1 bg-[#297074] mb-6'></div>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>
                Vertical Elevators was founded with a commitment to revolutionize vertical transportation through safety, innovation, and engineering excellence. What began as a specialized elevator service provider has evolved into a comprehensive solutions company serving residential and commercial clients across the region.
              </p>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>
                Over the years, we&apos;ve grown alongside the industry, continuously adopting cutting-edge elevator technologies and expanding our capabilities. From home lifts and passenger elevators to freight systems and modernization projects, we&apos;ve successfully installed and maintained hundreds of elevator systems, earning the trust of property owners, developers, and facility managers.
              </p>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Today, we&apos;re proud to be recognized as the premier elevator company that combines technical expertise with genuine care for client satisfaction. Every installation, every maintenance contract, and every modernization project represents our commitment to safety, reliability, and excellence in vertical transportation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='relative'
            >
              <img
                src="/about/about-us.webp"
                alt="Our Story"
                className='rounded-2xl shadow-2xl w-full'
              />
              <div className='absolute -bottom-6 -right-6 w-64 h-64 bg-[#297074]/20 rounded-full blur-3xl -z-10'></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision from mission-vision component */}
      <section className='py-10 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our <span className='text-[#297074]'>Mission & Vision</span>
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <div className='w-16 h-16 bg-[#297074] rounded-xl flex items-center justify-center mb-6'>
                <IconTarget size={32} className='text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Our Mission</h3>
              <p className='text-gray-600 leading-relaxed'>
                To provide safe, reliable, and innovative elevator solutions that enhance accessibility and quality of life in buildings across the region. We are committed to upholding the highest safety standards, delivering exceptional service quality, and building lasting partnerships with property owners and developers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <div className='w-16 h-16 bg-[#297074] rounded-xl flex items-center justify-center mb-6'>
                <IconRocket size={32} className='text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Our Vision</h3>
              <p className='text-gray-600 leading-relaxed'>
                To be the region&apos;s most trusted elevator company, recognized for setting new benchmarks in safety, innovation, and customer service. We envision buildings where vertical transportation is seamless, safe, and sustainable, powered by cutting-edge technology and expert engineering.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our Core <span className='text-[#297074]'>Values</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              These principles guide our commitment to excellence in elevator engineering and service.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className='bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                >
                  <div className='w-14 h-14 bg-[#297074] rounded-xl flex items-center justify-center mb-4'>
                    <Icon size={28} className='text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>{value.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Component */}
      <Clients />

      {/* Team Stats */}
      <section className='py-10 bg-gradient-to-br from-[#297074] to-[#075056] text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Engineering Excellence by Numbers
            </h2>
            <p className='text-xl text-[#91C5C8] max-w-3xl mx-auto'>
              A team of certified engineers and technicians committed to safety and reliability
            </p>
          </motion.div>

          <div ref={teamStatsRef} className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0 * 0.1 }}
              className='text-center'
            >
              <div className='text-4xl md:text-5xl font-bold mb-2'>{teamCounts.years}+ Years</div>
              <div className='text-[#91C5C8] font-medium'>Elevator Industry Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 1 * 0.1 }}
              className='text-center'
            >
              <div className='text-4xl md:text-5xl font-bold mb-2'>{teamCounts.members}+</div>
              <div className='text-[#91C5C8] font-medium'>Certified Engineers & Technicians</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 2 * 0.1 }}
              className='text-center'
            >
              <div className='text-4xl md:text-5xl font-bold mb-2'>{teamCounts.projects}+</div>
              <div className='text-[#91C5C8] font-medium'>Elevators Installed & Serviced</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 3 * 0.1 }}
              className='text-center'
            >
              <div className='text-4xl md:text-5xl font-bold mb-2'>{teamCounts.retention}%</div>
              <div className='text-[#91C5C8] font-medium'>Safety Compliance Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-10'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='bg-gradient-to-br from-[#297074] to-[#075056] rounded-3xl p-12 text-white text-center relative overflow-hidden'
          >
            {/* Background decoration */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32'></div>
            <div className='absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24'></div>

            <div className='relative z-10'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Ready to Elevate Your Building?
              </h2>
              <p className='text-xl text-[#91C5C8] mb-8 max-w-2xl mx-auto'>
                Let&apos;s work together to create the perfect elevator solution for your residential or commercial property.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/contact'
                  className='inline-block bg-white text-[#297074] px-8 py-4 rounded-lg font-semibold hover:bg-[#F0F4F5] transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
                >
                  Request a Quote
                </Link>
                <Link
                  href='/services'
                  className='inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#297074] transition-all duration-300'
                >
                  View Our Solutions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </BgLayout>
  )
}

export default AboutPage