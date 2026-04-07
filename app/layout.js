import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
};

export const metadata = {
  metadataBase: new URL('https://www.verticalelevators.in'),
  title: {
    default: "Vertical Elevators - Elevating Standards, Elevating Lives",
    template: "%s | Vertical Elevators"
  },
  description: "Vertical Elevators provides premium elevator solutions including installation, maintenance, and modernization services. Expert engineering, reliable performance, and unmatched safety for residential and commercial buildings.",
  keywords: [
    "elevator installation",
    "lift maintenance",
    "elevator modernization",
    "residential elevators",
    "commercial elevators",
    "elevator service",
    "elevator repair",
    "lift installation",
    "elevator safety",
    "passenger elevators",
    "freight elevators",
    "home elevators",
    "elevator contractors",
    "elevator companies",
    "lift service",
    "elevator maintenance contracts",
    "vertical transportation",
    "elevator engineering",
    "elevator upgrades",
    "lift modernization",
    "elevator inspection",
    "building elevators",
    "elevator service company",
    "elevator solutions",
  ],
  authors: [{ name: "Vertical Elevators" }],
  creator: "Vertical Elevators",
  publisher: "Vertical Elevators",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.verticalelevators.in',
    siteName: 'Vertical Elevators',
    title: 'Vertical Elevators - Premium Elevator Solutions',
    description: 'Leading elevator company providing installation, maintenance, and modernization services. Elevating standards, elevating lives.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Vertical Elevators Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertical Elevators - Premium Elevator Solutions',
    description: 'Leading elevator company providing installation, maintenance, and modernization services.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://www.verticalelevators.in',
  },
  category: 'business',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vertical Elevators',
    url: 'https://www.verticalelevators.in',
    logo: 'https://www.verticalelevators.in/logo.png',
    description: 'Premium elevator installation, maintenance, and modernization services for residential and commercial buildings',
    telephone: '+919990993646',
    email: 'info@verticalelevators.in',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      // Add your social media links here when available
    ],
    offers: {
      '@type': 'AggregateOffer',
      offerCount: '5',
      offers: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elevator Installation',
            description: 'Professional elevator installation services for residential and commercial buildings',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elevator Maintenance',
            description: 'Comprehensive maintenance and repair services to ensure optimal elevator performance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elevator Modernization',
            description: 'Upgrade and modernization solutions for existing elevator systems',
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for analytics and external services */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
