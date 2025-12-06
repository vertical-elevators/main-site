import { notFound } from 'next/navigation';
import ProductCategoryClient from './productCategoryClient';
import categoriesData from '../categories.json';
import productsData from '../products.json';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = categoriesData.find(cat => cat.slug === slug);

  if (!category) {
    return {
      title: 'Product Not Found | Vertical Elevators',
    };
  }

  return {
    title: `${category.title} - Premium Elevator Solutions | Vertical Elevators`,
    description: category.description,
    keywords: `${category.title}, elevator products, lift models, ${category.slug}, vertical transportation`,
    openGraph: {
      title: `${category.title} - Premium Elevator Solutions | Vertical Elevators`,
      description: category.description,
      url: `https://www.verticalelevators.in/products/${category.slug}`,
      siteName: 'Vertical Elevators',
      images: [
        {
          url: `https://www.verticalelevators.in${category.image}`,
          width: 1200,
          height: 630,
          alt: category.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.title} - Premium Elevator Solutions | Vertical Elevators`,
      description: category.description,
      images: [`https://www.verticalelevators.in${category.image}`],
    },
    alternates: {
      canonical: `https://www.verticalelevators.in/products/${category.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return categoriesData.map((category) => ({
    slug: category.slug,
  }));
}

export default async function ProductCategoryPage({ params }) {
  const { slug } = await params;
  const category = categoriesData.find(cat => cat.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = productsData.filter(product =>
    category.products.includes(product.slug)
  );

  return <ProductCategoryClient category={category} products={categoryProducts} />;
}
