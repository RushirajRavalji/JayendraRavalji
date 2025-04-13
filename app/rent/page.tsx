'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchFilter from '../components/SearchFilter';
import PropertyList from '../components/PropertyList';
import Footer from '../components/Footer';

export default function RentPage() {
    const [searchFilters, setSearchFilters] = useState({
        type: 'rent',
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
        setSearchFilters({ ...filters, type: 'rent' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-purple-700 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Properties for Rent</h1>
                    <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                        Find your perfect rental from our collection of apartments, houses, and more.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <SearchFilter onSearch={handleSearch} />
                </div>

                <div className="mb-8">
                    <PropertyList
                        type="rent"
                        location={searchFilters.location}
                        minPrice={searchFilters.minPrice ? parseFloat(searchFilters.minPrice) : undefined}
                        maxPrice={searchFilters.maxPrice ? parseFloat(searchFilters.maxPrice) : undefined}
                        bedrooms={searchFilters.bedrooms !== 'any' ? parseInt(searchFilters.bedrooms) : undefined}
                    />
                </div>
            </div>

            <section className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Rent With Us?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-purple-100 rounded-md p-2 mr-4">
                                            <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Verified Listings</h3>
                                    </div>
                                    <p className="text-gray-600">
                                        All our rental properties are verified to ensure you get exactly what you see online.
                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-purple-100 rounded-md p-2 mr-4">
                                            <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Fast Process</h3>
                                    </div>
                                    <p className="text-gray-600">
                                        Our streamlined rental process helps you move into your new home as quickly as possible.
                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-purple-100 rounded-md p-2 mr-4">
                                            <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">Dedicated Support</h3>
                                    </div>
                                    <p className="text-gray-600">
                                        Our team of rental specialists are available to help you find the perfect home.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
} 