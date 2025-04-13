'use client';

import { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { properties, Property } from '../data/properties';

export default function FeaturedProperties() {
    const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);

    useEffect(() => {
        // Get featured properties
        const featured = properties.filter(property => property.featured);
        setFeaturedProperties(featured);
    }, []);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover our handpicked selection of premium properties available for sale and rent.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProperties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </section>
    );
} 