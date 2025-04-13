'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchFilter from '../components/SearchFilter';
import PropertyList from '../components/PropertyList';
import Footer from '../components/Footer';

export default function BuyPage() {
    const [searchFilters, setSearchFilters] = useState({
        type: 'sale',
        location: '',
        minPrice: '',
        maxPrice: '',
        bedrooms: 'any',
    });

    const handleSearch = (filters: {
        type: string;
        location: string;
        minPrice: string;
        maxPrice: string;
        bedrooms: string;
    }) => {
        setSearchFilters({ ...filters, type: 'sale' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-indigo-700 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Properties for Sale</h1>
                    <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                        Find your dream home from our wide selection of properties for sale across the country.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <SearchFilter onSearch={handleSearch} />
                </div>

                <div className="mb-8">
                    <PropertyList
                        type="sale"
                        location={searchFilters.location}
                        minPrice={searchFilters.minPrice ? parseFloat(searchFilters.minPrice) : undefined}
                        maxPrice={searchFilters.maxPrice ? parseFloat(searchFilters.maxPrice) : undefined}
                        bedrooms={searchFilters.bedrooms !== 'any' ? parseInt(searchFilters.bedrooms) : undefined}
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
} 