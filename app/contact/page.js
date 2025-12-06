import ContactPageClient from './contactClient'

export const metadata = {
  title: 'Contact Us - Get in Touch with Elevator Experts | Vertical Elevators',
  description: 'Contact Vertical Elevators for elevator installation, maintenance, modernization, and emergency services. Call +971 50 123 4567 or fill our contact form. We are here to help elevate your building.',
  keywords: 'contact Vertical Elevators, get in touch, elevator consultation, lift installation inquiry, elevator maintenance contact, service inquiry, phone number, email address',
  openGraph: {
    title: 'Contact Us - Get in Touch with Elevator Experts | Vertical Elevators',
    description: 'Contact Vertical Elevators for elevator installation, maintenance, modernization, and emergency services. Call +971 50 123 4567 or fill our contact form. We are here to help elevate your building.',
    url: 'https://www.verticalelevators.in/contact',
    siteName: 'Vertical Elevators',
    images: [
      {
        url: 'https://www.verticalelevators.in/contact/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Vertical Elevators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Get in Touch with Elevator Experts | Vertical Elevators',
    description: 'Contact Vertical Elevators for elevator installation, maintenance, modernization, and emergency services. Call +971 50 123 4567 or fill our contact form.',
    images: ['https://www.verticalelevators.in/contact/hero-image.webp'],
  },
  alternates: {
    canonical: 'https://www.verticalelevators.in/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
