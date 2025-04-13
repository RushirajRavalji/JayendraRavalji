'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Property } from '../data/properties';

interface PropertyCardProps {
    property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
    const formatPrice = (price: number) => {
        if (property.type === 'rent') {
            return `₹${price.toLocaleString()}/month`;
        } else {
            return `₹${price.toLocaleString()}`;
        }
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 w-full">
                {property.images.length > 0 ? (
                    <Image
                        src={property.images[0]}
                        alt={property.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">No Image Available</span>
                    </div>
                )}
                {property.featured && (
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-2 py-1 rounded-md">
                        Featured
                    </div>
                )}
                <div className="absolute top-4 right-4 bg-white text-indigo-600 text-xs font-bold px-2 py-1 rounded-md">
                    {property.type === 'rent' ? 'For Rent' : 'For Sale'}
                </div>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">{property.title}</h3>
                    <span className="font-bold text-indigo-600">{formatPrice(property.price)}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{property.address}, {property.city}, {property.state} {property.zipCode}</p>
                <p className="text-sm text-gray-700 mb-4 line-clamp-2">{property.description}</p>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <span>{property.squareFeet.toLocaleString()} sqft</span>
                    </div>
                </div>
                <Link
                    href={`/property/${property.id}`}
                    className="w-full block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md transition-colors duration-300"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
} 