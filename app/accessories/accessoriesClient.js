"use client";

import BgLayout from '@/components/layout/bgLayout'
import React from 'react'
import { motion } from 'motion/react'
import { IconEngine, IconWaveSine, IconDeviceDesktop, IconBox, IconDeviceTablet, IconDoor, IconHome, IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'
import categoriesData from './categories.json'

// Icon mapping
const iconMap = {
    IconEngine: IconEngine,
    IconWaveSine: IconWaveSine,
    IconDeviceDesktop: IconDeviceDesktop,
    IconBox: IconBox,
    IconDeviceTablet: IconDeviceTablet,
    IconDoor: IconDoor,
}

function AccessoriesPageClient() {
    return (
        <BgLayout>
            {/* Hero Section */}
            <section className='relative h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden'>
                {/* Background Image */}
                <div className='absolute inset-0'>
                    <img
                        src="/accessories/hero-image.webp"
                        alt="Elevator Accessories"
                        className='w-full h-full object-cover'
                    />
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
                        <span className='text-[#91C5C8]'>Accessories</span>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                            Elevator <span className='text-[#4A8E94]'>Accessories</span>
                        </h1>
                        <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
                            Premium components and accessories for all your elevator needs
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className='py-16 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='text-center mb-12'
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            Our Accessory <span className='text-[#4A8E94]'>Categories</span>
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            Explore our comprehensive range of elevator accessories from leading manufacturers
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {categoriesData.map((category, index) => {
                            const IconComponent = iconMap[category.icon] || IconBox;

                            return (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className='group'
                                >
                                    <Link href={`/accessories/${category.slug}`}>
                                        <div className='flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#4A8E94] cursor-pointer'>
                                            {/* Image */}
                                            <div className='relative w-full overflow-hidden'>
                                                <img
                                                    src={category.image}
                                                    alt={category.title}
                                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                                />
                                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                                            </div>

                                            <div className='p-6 flex flex-col flex-grow'>
                                                {/* Title */}
                                                <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-[#297074] transition-colors'>
                                                    {category.title}
                                                </h3>

                                                {/* Description */}
                                                <p className='text-gray-600 leading-relaxed mb-4 flex-grow'>
                                                    {category.description}
                                                </p>

                                                {/* Features */}
                                                <div className='space-y-2 mb-4'>
                                                    {category.features.map((feature, idx) => (
                                                        <div key={idx} className='flex items-center gap-2 text-sm text-gray-500'>
                                                            <div className='w-1.5 h-1.5 bg-[#297074] rounded-full'></div>
                                                            <span>{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* CTA */}
                                                <div className='flex flex-row justify-center items-center gap-2 bg-[#297074] rounded-lg text-white py-2 px-2 w-full text-center font-semibold group-hover:gap-4 transition-all'>
                                                    <span>Explore Models</span>
                                                    <IconChevronRight size={20} className='group-hover:translate-x-1 transition-transform' />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </BgLayout>
    )
}

export default AccessoriesPageClient
