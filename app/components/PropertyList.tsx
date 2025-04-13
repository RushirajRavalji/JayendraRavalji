'use client';

import { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { properties, Property } from '../data/properties';

interface PropertyListProps {
    type?: 'all' | 'rent' | 'sale';
    location?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
}

export default function PropertyList({
    type = 'all',
    location = '',
    minPrice,
    maxPrice,
    bedrooms,
}: PropertyListProps) {
    const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);

    useEffect(() => {
        let filtered = [...properties];

        // Filter by type
        if (type !== 'all') {
            filtered = filtered.filter(property => property.type === type);
        }

        // Filter by location
        if (location) {
            const locationLower = location.toLowerCase();
            filtered = filtered.filter(
                property =>
                    property.city.toLowerCase().includes(locationLower) ||
                    property.state.toLowerCase().includes(locationLower) ||
                    property.zipCode.includes(location)
            );
        }

        // Filter by price range
        if (minPrice) {
            filtered = filtered.filter(property => property.price >= minPrice);
        }
        if (maxPrice) {
            filtered = filtered.filter(property => property.price <= maxPrice);
        }

        // Filter by bedrooms
        if (bedrooms) {
            filtered = filtered.filter(property => property.bedrooms >= bedrooms);
        }

        setFilteredProperties(filtered);
    }, [type, location, minPrice, maxPrice, bedrooms]);

    return (
        <div>
            {filteredProperties.length === 0 ? (
                <div className="text-center py-12">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
                    <p className="text-gray-600">Try adjusting your search criteria to find more properties.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProperties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            )}
        </div>
    );
} 