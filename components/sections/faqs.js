"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconChevronDown } from '@tabler/icons-react'
import Link from 'next/link';

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How often should elevators be serviced?",
      answer: "Elevators should be serviced monthly as part of a preventive maintenance program. Regular maintenance includes inspecting safety systems, lubricating moving parts, checking control systems, and testing emergency features. High-traffic elevators may require more frequent service. Our comprehensive maintenance contracts ensure your elevators receive timely inspections, reducing breakdowns and extending equipment lifespan while maintaining safety compliance."
    },
    {
      question: "What is the typical lifespan of an elevator?",
      answer: "A well-maintained elevator typically lasts 20-25 years before requiring major modernization. However, individual components have different lifespans: cables and ropes (10-15 years), controllers (15-20 years), and doors/cabin interiors (10-15 years). Regular maintenance significantly extends elevator life. After 20 years, modernization becomes more cost-effective than frequent repairs, offering improved safety, energy efficiency, and reliability."
    },
    {
      question: "How long does elevator installation take?",
      answer: "Installation time varies by elevator type and building structure. Residential home elevators typically take 2-4 weeks, while commercial passenger elevators require 8-16 weeks depending on the number of floors and complexity. Factors affecting timeline include: shaft construction, electrical work, permit approvals, and customization requirements. We provide detailed project timelines during consultation and work efficiently to minimize disruption."
    },
    {
      question: "What safety features do modern elevators have?",
      answer: "Modern elevators include multiple safety systems: overspeed governors that activate emergency brakes, door sensors preventing closure on passengers, backup power for emergency descent, fire service mode, interlocks preventing door opening between floors, emergency communication systems, seismic sensors, and overload detection. All our installations meet or exceed international safety codes (ISO 25745, EN 81) ensuring maximum passenger protection."
    },
    {
      question: "Can you modernize my existing elevator?",
      answer: "Yes, we specialize in elevator modernization. We can upgrade controllers, replace drive systems, install new door operators, modernize cabin interiors, add energy-efficient lighting, upgrade safety features, and implement smart controls. Modernization extends elevator life, improves reliability, reduces energy consumption by up to 50%, and ensures code compliance. We assess your current system and recommend the most cost-effective upgrade path."
    },
    {
      question: "What's the difference between hydraulic and traction elevators?",
      answer: "Hydraulic elevators use fluid pressure to lift the cab, ideal for low-rise buildings (2-8 floors), slower speeds, and higher capacity loads. They're cost-effective for installation but use more energy. Traction elevators use cables and counterweights, suitable for any building height, faster speeds, smoother rides, and better energy efficiency. They have higher initial costs but lower operating expenses. We help determine the best system for your building's requirements."
    },
    {
      question: "Do you offer 24/7 emergency service?",
      answer: "Yes, we provide 24/7 emergency repair service for all our maintenance contract customers. Our technicians respond rapidly to entrapments, breakdowns, and safety issues. Average response time is under 2 hours in urban areas. We maintain a comprehensive parts inventory ensuring quick repairs. Emergency service includes remote monitoring, immediate dispatch, and priority scheduling to minimize downtime and ensure passenger safety."
    },
    {
      question: "How much does a home elevator cost?",
      answer: "Home elevator costs vary based on type, floors served, and customization. Pneumatic vacuum elevators start around $30,000-$50,000, hydraulic home lifts range $35,000-$65,000, and traction systems cost $40,000-$80,000+. Prices include equipment, installation, and basic finishes. Factors affecting cost: number of stops, custom cabin design, shaft construction, electrical work, and permits. We provide detailed quotes after a home assessment."
    },
    {
      question: "Are elevators energy efficient?",
      answer: "Modern elevators are highly energy efficient, especially traction systems with regenerative drives that return energy to the building during descent. LED lighting reduces power consumption by 80%, sleep mode minimizes standby power, and smart dispatching optimizes travel. Machine-room-less (MRL) elevators save building space and energy. Modernizing older elevators can reduce energy use by 30-50%, lowering operating costs and environmental impact significantly."
    },
    {
      question: "What permits and inspections are required?",
      answer: "Elevator installation requires building permits, electrical permits, and compliance with local building codes. After installation, elevators undergo inspection by certified authorities before operation. Ongoing annual inspections are mandatory in most jurisdictions. We handle all permit applications, coordinate inspections, ensure code compliance, and maintain required documentation. Our team stays current with regulations including ADA requirements and fire safety codes."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className='py-10'>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* Header */}
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            Frequently Asked <span className='text-[#297074]'>Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-lg text-gray-600 max-w-3xl mx-auto'
          >
            Get answers to common questions about elevator installation, maintenance, safety features, and our services.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300'
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFaq(index)}
                className='w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-300'
              >
                <h3 className='text-lg font-semibold text-gray-900 pr-4'>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className='flex-shrink-0'
                >
                  <IconChevronDown size={24} className='text-[#297074]' />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden'
                  >
                    <div className='px-6 pb-6'>
                      <p className='text-gray-600 leading-relaxed'>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center mt-12 p-8 bg-[#297074] rounded-2xl'
        >
          <h3 className='text-3xl font-bold text-gray-50 mb-3'>
            Still have questions?
          </h3>
          <p className='text-gray-100 text-xl mb-6'>
            Can&apos;t find the answer you&apos;re looking for? Our elevator experts are here to help.
          </p>
          <Link
            href='/contact'
            className='inline-block bg-white text-[#297074] px-8 py-3 rounded-lg text-xl font-semibold hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
          >
            Get in Touch
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default Faqs