'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchFilter from './components/SearchFilter';
import FeaturedProperties from './components/FeaturedProperties';
import PropertyList from './components/PropertyList';
import Footer from './components/Footer';

export default function Home() {
  const [searchFilters, setSearchFilters] = useState({
    type: 'all',
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
    setSearchFilters(filters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <SearchFilter onSearch={handleSearch} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Listings</h2>
        <PropertyList
          type={searchFilters.type as 'all' | 'rent' | 'sale'}
          location={searchFilters.location}
          minPrice={searchFilters.minPrice ? parseFloat(searchFilters.minPrice) : undefined}
          maxPrice={searchFilters.maxPrice ? parseFloat(searchFilters.maxPrice) : undefined}
          bedrooms={searchFilters.bedrooms !== 'any' ? parseInt(searchFilters.bedrooms) : undefined}
        />
      </div>

      <FeaturedProperties />

      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            We have thousands of properties for you to choose from. Start your search today!
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300">
              Contact Agent
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-300">
              Browse Properties
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
