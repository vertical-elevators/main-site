import CareersPageClient from './careersClient'

export const metadata = {
  title: 'Careers - Join Our Elevator Solutions Team | Vertical Elevators',
  description: 'Explore exciting career opportunities at Vertical Elevators. Join our team of elevator technicians, engineers, installers, and service professionals. Apply now and grow with us!',
  keywords: 'careers at Vertical Elevators, job opportunities, elevator technician jobs, lift engineer jobs, installation jobs, elevator service jobs, hiring, work with us, join our team',
  openGraph: {
    title: 'Careers - Join Our Elevator Solutions Team | Vertical Elevators',
    description: 'Explore exciting career opportunities at Vertical Elevators. Join our team of elevator technicians, engineers, installers, and service professionals. Apply now and grow with us!',
    url: 'https://www.verticalelevators.in/careers',
    siteName: 'Vertical Elevators',
    images: [
      {
        url: 'https://www.verticalelevators.in/careers/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Careers at Vertical Elevators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers - Join Our Elevator Solutions Team | Vertical Elevators',
    description: 'Explore exciting career opportunities at Vertical Elevators. Join our team of elevator technicians, engineers, installers, and service professionals.',
    images: ['https://www.verticalelevators.in/careers/hero-image.webp'],
  },
  alternates: {
    canonical: 'https://www.verticalelevators.in/careers',
  },
}

export default function CareersPage() {
  return <CareersPageClient />
}
