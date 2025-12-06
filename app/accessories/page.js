import AccessoriesPageClient from './accessoriesClient'

export const metadata = {
    title: 'Elevator Accessories | Vertical Elevators',
    description: 'Premium elevator accessories including geared motors, gearless motors, VVVF drives, control panels, designer cabins, and operating panels for all elevator applications.',
    keywords: 'elevator accessories, geared motor, gearless motor, VVVF drive, control panel, designer cabins, car operating panel, landing operating panel, elevator parts',
    openGraph: {
        title: 'Elevator Accessories | Vertical Elevators',
        description: 'Premium elevator accessories including motors, drives, control panels, and designer cabins.',
        type: 'website',
    },
}

export default function AccessoriesPage() {
    return <AccessoriesPageClient />
}
