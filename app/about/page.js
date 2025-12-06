import AboutPageClient from './aboutClient'

export const metadata = {
  title: 'About Us - Leading Elevator Solutions Provider | Vertical Elevators',
  description: 'Learn about Vertical Elevators, a trusted provider of elevator installation, maintenance, and modernization services. We deliver safe, reliable vertical transportation with expert teams and proven quality.',
  keywords: 'about Vertical Elevators, elevator company, lift installation, elevator maintenance, our story, our team, company values, mission and vision, elevator solutions',
  openGraph: {
    title: 'About Us - Leading Elevator Solutions Provider | Vertical Elevators',
    description: 'Learn about Vertical Elevators, a trusted provider of elevator installation, maintenance, and modernization services. We deliver safe, reliable vertical transportation with expert teams and proven quality.',
    url: 'https://www.verticalelevators.in/about',
    siteName: 'Vertical Elevators',
    images: [
      {
        url: 'https://www.verticalelevators.in/about/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'About Vertical Elevators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Leading Elevator Solutions Provider | Vertical Elevators',
    description: 'Learn about Vertical Elevators, a trusted provider of elevator installation, maintenance, and modernization services. We deliver safe, reliable vertical transportation with expert teams and proven quality.',
    images: ['https://www.verticalelevators.in/about/hero-image.webp'],
  },
  alternates: {
    canonical: 'https://www.verticalelevators.in/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
