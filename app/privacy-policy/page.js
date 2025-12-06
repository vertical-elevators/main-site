import PrivacyPageClient from './privacyClient'

export const metadata = {
  title: 'Privacy Policy | Vertical Elevators',
  description: 'Read the privacy policy of Vertical Elevators. Learn how we collect, use, and protect your personal information when you use our elevator services.',
  keywords: 'privacy policy, data protection, Vertical Elevators privacy, personal information',
  openGraph: {
    title: 'Privacy Policy | Vertical Elevators',
    description: 'Read the privacy policy of Vertical Elevators. Learn how we collect, use, and protect your personal information when you use our elevator services.',
    url: 'https://www.verticalelevators.in/privacy-policy',
    siteName: 'Vertical Elevators',
    images: [
      {
        url: 'https://www.verticalelevators.in/products/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy Vertical Elevators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Vertical Elevators',
    description: 'Read the privacy policy of Vertical Elevators. Learn how we collect, use, and protect your personal information when you use our elevator services.',
    images: ['https://www.verticalelevators.in/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.verticalelevators.in/privacy-policy',
  },
}

export default function PrivcyPage() {
  return <PrivacyPageClient />
}
