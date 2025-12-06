"use client";

import { HoverExpand_001 } from "../ui/hover-expand";
import { motion } from "motion/react";

function Services() {
    const images = [
        {
            src: "/home/images/offerings/commercial-elevators.webp",
            text: "Machine Room Lifts",
            description: "Traditional traction elevators with dedicated machine room. Ideal for high-rise buildings requiring high speeds and heavy capacity.",
            link: "/products/machine-room-lifts",
            alt: "Machine Room Lifts",
            code: "# 01",
        },
        {
            src: "/home/images/offerings/residential-elevators.webp",
            text: "Machine Roomless Lifts",
            description: "Space-saving gearless technology with compact design. Perfect for modern buildings where space optimization is essential.",
            link: "/products/machine-roomless-lifts",
            alt: "Machine Roomless Lifts",
            code: "# 02",
        },
        {
            src: "/home/images/offerings/freight-elevators.webp",
            text: "Hydraulic Lifts",
            description: "Smooth hydraulic operation with pitless design. Economical solution for low to mid-rise buildings up to 5 floors.",
            link: "/products/hydraulic-lifts",
            alt: "Hydraulic Lifts",
            code: "# 03",
        },
        {
            src: "/home/images/offerings/installation.webp",
            text: "Goods Lifts",
            description: "Heavy-duty freight elevators for industrial and commercial cargo transportation with reinforced structure.",
            link: "/products/goods-lifts",
            alt: "Goods Lifts",
            code: "# 04",
        },
        {
            src: "/home/images/offerings/residential-elevators.webp",
            text: "Home Lifts",
            description: "Compact residential elevators designed for villas and homes with elegant design and smooth operation.",
            link: "/products/home-lifts",
            alt: "Home Lifts",
            code: "# 05",
        },
        {
            src: "/home/images/offerings/modernization.webp",
            text: "Hospital Lifts",
            description: "Specialized medical elevators with stretcher capacity, smooth ride quality, and infection control features.",
            link: "/products/hospital-lifts",
            alt: "Hospital Lifts",
            code: "# 06",
        },
        {
            src: "/home/images/offerings/emergency-service.webp",
            text: "Capsule Lifts",
            description: "Panoramic glass elevators with scenic views. Perfect for hotels, malls, and buildings requiring aesthetic appeal.",
            link: "/products/capsule-lifts",
            alt: "Capsule Lifts",
            code: "# 07",
        },
        {
            src: "/home/images/offerings/freight-elevators.webp",
            text: "Dumbwaiter Lifts",
            description: "Small freight elevators for transporting food, documents, and small goods between floors in restaurants and hotels.",
            link: "/products/dumbwaiter-lifts",
            alt: "Dumbwaiter Lifts",
            code: "# 08",
        }
    ];

  return(
    <section className="py-10">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-center mx-auto mb-4"
        >
            Our <span style={{ color: '#297074' }}>Elevator</span> Products
        </motion.h2>
        
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-center mx-auto max-w-3xl mb-4"
        >
            Explore our complete range of elevator products designed for residential, commercial, industrial, and specialized applications. From machine room lifts to dumbwaiters, we have the perfect solution for every vertical transportation need.
        </motion.p>
        
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            {/* Desktop view - HoverExpand */}
            <HoverExpand_001 images={images} className=""/>
            
            {/* Mobile/Tablet view - Card Grid */}
            <div className="lg:hidden px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {images.map((image, index) => (
                    <motion.a
                        key={index}
                        href={image.link}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Image Container */}
                        <div className="relative h-full overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>
                        
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                                {image.text}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed mb-4">
                                {image.description}
                            </p>
                            <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                                <span className="text-sm font-semibold">Explore Details</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.div>
    </section>
  );
}

export default Services;