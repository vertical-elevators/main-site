"use client";

import { motion } from "motion/react"
import {
  IconShieldCheck,
  IconCertificate,
  IconAward,
  IconTool,
  IconBolt,
  IconLock
} from '@tabler/icons-react'
import Link from 'next/link'

const certifications = [
  { name: "DDA Approved", description: "Delhi Development Authority", icon: IconAward, color: "#297074", featured: true, logo: "/home/images/DDA.png" },
  { name: "ISO 9001", description: "Quality Management", icon: IconCertificate, color: "#297074" },
  { name: "ISO 14001", description: "Environmental Standards", icon: IconCertificate, color: "#075056" },
  { name: "EN 81-20/50", description: "Safety Standards", icon: IconShieldCheck, color: "#4A8E94" },
  { name: "ASME A17.1", description: "Safety Code", icon: IconShieldCheck, color: "#297074" },
  { name: "CE Certified", description: "European Compliance", icon: IconAward, color: "#075056" },
  { name: "EN 81-28", description: "Entrapment Protection", icon: IconLock, color: "#4A8E94" },
  // { name: "ISO 25745", description: "Energy Efficiency", icon: IconBolt, color: "#297074" },
  // { name: "ISO 8100-32", description: "Safety Features", icon: IconTool, color: "#075056" },
  // { name: "A17.2", description: "Inspection Standards", icon: IconCertificate, color: "#4A8E94" }
]

export function SafetyCertifications() {
  return (
    <section className="py-10" id="certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Redesigned Header + Intro + CTA (two-column on md+) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Safety & <span className="text-[#297074]">Certifications</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We follow the highest international standards for elevator safety, performance and sustainability. Our certified processes and monitoring systems help protect passengers and buildings.
            </p>

            <ul className="space-y-3 text-sm text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-[#297074] mt-2"></span>
                <span><strong>Safety-first culture</strong> — protocols and training for every site.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-[#297074] mt-2"></span>
                <span><strong>Continuous monitoring</strong> — remote diagnostics and 24/7 response.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-[#297074] mt-2"></span>
                <span><strong>Certified excellence</strong> — ISO, EN and ASME compliance.</span>
              </li>
            </ul>

            <div className="flex gap-3">
              <Link href="/contact" className="inline-block bg-[#297074] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#075056] transition-colors">
                Request Safety Audit
              </Link>
              <Link href="/about" className="inline-block border border-gray-200 text-gray-800 py-2 px-4 rounded-md hover:shadow-sm transition">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Certifications grid occupies two columns on md+ */}
          <div className="md:col-span-2">
            {/* Featured DDA Certification - Large Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-8 bg-gradient-to-br from-[#297074] via-[#4A8E94] to-[#075056] rounded-2xl p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -ml-24 -mb-24"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 bg-white rounded-2xl flex items-center justify-center shadow-lg p-3">
                    <img src="/home/images/DDA.png" alt="DDA Logo" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">DDA Approved Lifts</h3>
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">CERTIFIED</span>
                  </div>
                  <p className="text-white/90 text-lg mb-3">Officially certified by Delhi Development Authority</p>
                  <p className="text-white/80 text-sm max-w-2xl">
                    Our elevators meet the stringent standards set by DDA, ensuring compliance with Delhi&apos;s building regulations and safety requirements. This certification demonstrates our commitment to quality and safety in elevator installations across Delhi-NCR.
                  </p>
                </div>
                {/* <div className="flex-shrink-0">
                  <IconAward size={80} className="text-white/20" />
                </div> */}
              </div>
            </motion.div>

            {/* Other Certifications Grid */}
            <h4 className="text-xl font-bold text-gray-900 mb-4">International Standards & Certifications</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.filter(cert => !cert.featured).map((cert, index) => {
                const Icon = cert.icon
                return (
                  <motion.div
                    key={cert.name}
                    role="button"
                    tabIndex={0}
                    aria-label={`Certification ${cert.name}: ${cert.description}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex gap-4 items-center border-2 border-transparent hover:border-[#4A8E94]"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #297074 0%, #4A8E94 100%)' }}>
                        <Icon size={28} color="white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">{cert.name}</p>
                      <p className="text-sm text-gray-600">{cert.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Safety Features Section (kept but visually tuned) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 md:p-10 shadow-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Comprehensive Safety Features</h3>
            <span className="text-sm text-gray-500">Tested • Certified • Monitored</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#297074] rounded-lg flex items-center justify-center flex-shrink-0">
                <IconShieldCheck size={24} color="white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-1">Emergency Braking Systems</h4>
                <p className="text-gray-600 text-sm">Automatic safety brakes engage instantly if overspeed is detected, ensuring passenger protection.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#297074] rounded-lg flex items-center justify-center flex-shrink-0">
                <IconLock size={24} color="white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-1">Door Interlocks</h4>
                <p className="text-gray-600 text-sm">Advanced interlocks prevent doors from opening between floors and ensure secure operation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#297074] rounded-lg flex items-center justify-center flex-shrink-0">
                <IconBolt size={24} color="white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-1">Battery Backup</h4>
                <p className="text-gray-600 text-sm">Emergency power systems allow safe descent during outages and protect passengers until help arrives.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#297074] rounded-lg flex items-center justify-center flex-shrink-0">
                <IconTool size={24} color="white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800 mb-1">24/7 Monitoring</h4>
                <p className="text-gray-600 text-sm">Our remote diagnostics and immediate response systems deliver fast troubleshooting and minimized downtime.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
