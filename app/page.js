import BgLayout from "@/components/layout/bgLayout";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import WhyUS from "@/components/sections/why-us";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load below-the-fold sections
const Clients = dynamic(() => import("@/components/sections/clients"), {
  loading: () => <div className="h-48" />,
});
const MissionVision = dynamic(() => import("@/components/sections/mission-vision"), {
  loading: () => <div className="h-48" />,
});
const SafetyCertifications = dynamic(() => import("@/components/sections/safety").then(mod => mod.SafetyCertifications), {
  loading: () => <div className="h-48" />,
});
const ContactForm = dynamic(() => import("@/components/sections/form"), {
  loading: () => <div className="h-48" />,
});
const Offering = dynamic(() => import("@/components/sections/offering"), {
  loading: () => <div className="h-48" />,
});
const Faqs = dynamic(() => import("@/components/sections/faqs"), {
  loading: () => <div className="h-48" />,
});

export const metadata = {
  title: 'Vertical Elevators - Premium Elevator Solutions',
  description: 'Vertical Elevators offers professional elevator installation, maintenance, modernization, and repair services for residential and commercial buildings. Expert engineering, reliable performance, unmatched safety. Call +91 99909 93646',
  keywords: 'elevator installation, lift maintenance, elevator modernization, residential elevators, commercial elevators, home lifts, passenger elevators, freight elevators, elevator repair, elevator service, Vertical Elevators, Dubai elevators',
  openGraph: {
    title: 'Vertical Elevators - Premium Elevator Installation & Maintenance Services',
    description: 'Leading elevator company providing installation, maintenance, modernization services for residential and commercial buildings. Elevating standards, elevating lives.',
    url: 'https://www.verticalelevators.in',
    siteName: 'Vertical Elevators',
    images: [
      {
        url: 'https://www.verticalelevators.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'Vertical Elevators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertical Elevators - Premium Elevator Solutions',
    description: 'Leading elevator company providing installation, maintenance, and modernization services for residential and commercial buildings.',
    images: ['https://www.verticalelevators.in/logo.png'],
  },
  alternates: {
    canonical: 'https://www.verticalelevators.in',
  },
}

export default function Home() {
  return (
    <BgLayout>
      <video
        src="/home/videos/try.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        fetchPriority="high"
        className="pt-22 lg:pt-19 w-full h-auto max-h-screen object-cover"
      />

      <Services />
      <WhyUS />
      <Suspense fallback={<div className="h-48" />}>
        <Clients />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <MissionVision />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <SafetyCertifications />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <ContactForm />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <Offering />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <Faqs />
      </Suspense>
    </BgLayout>
  );
}