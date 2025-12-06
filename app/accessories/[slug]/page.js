import categoriesData from '../categories.json'
import accessoriesData from '../accessories.json'
import AccessoryCategoryClient from './accessoryCategoryClient'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const category = categoriesData.find(cat => cat.slug === slug);

    if (!category) {
        return {
            title: 'Category Not Found | Vertical Elevators',
        };
    }

    return {
        title: `${category.title} | Vertical Elevators`,
        description: category.description,
        keywords: `${category.title}, elevator accessories, ${slug}`,
        openGraph: {
            title: `${category.title} | Vertical Elevators`,
            description: category.description,
            images: [category.image],
        },
    };
}

export async function generateStaticParams() {
    return categoriesData.map((category) => ({
        slug: category.slug,
    }));
}

export default async function AccessoryCategoryPage({ params }) {
    const { slug } = await params;
    const category = categoriesData.find(cat => cat.slug === slug);

    if (!category) {
        notFound();
    }

    const accessories = accessoriesData.filter(acc => acc.category === slug);

    return <AccessoryCategoryClient category={category} accessories={accessories} />;
}
