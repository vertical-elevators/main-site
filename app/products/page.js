import ProductsPageClient from './productsClient'

export const metadata = {
  title: 'Our Products - Premium Elevator Models & Solutions | Vertical Elevators',
  description: 'Explore our range of premium elevator products including passenger lifts, home elevators, hospital elevators, freight elevators, and customized vertical transportation solutions for every building type.',
  keywords: 'elevator products, lift models, passenger elevators, home elevators, hospital lifts, freight elevators, elevator types, premium elevators, vertical transportation',
  openGraph: {
    title: 'Our Products - Premium Elevator Models & Solutions | Vertical Elevators',
    description: 'Explore our range of premium elevator products and vertical transportation solutions for every building type.',
    url: 'https://www.verticalelevators.in/products',
    siteName: 'Vertical Elevators',
    images: [
      {
        url: 'https://www.verticalelevators.in/products/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Elevator Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Products - Premium Elevator Models & Solutions | Vertical Elevators',
    description: 'Explore our range of premium elevator products and vertical transportation solutions for every building type.',
    images: ['https://www.verticalelevators.in/products/hero-image.webp'],
  },
  alternates: {
    canonical: 'https://www.verticalelevators.in/products',
  },
}

export default function ServicesPage() {
  return <ProductsPageClient />
}
