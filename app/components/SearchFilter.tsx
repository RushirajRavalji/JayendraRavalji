'use client';

import { useState } from 'react';

interface SearchFilterProps {
    onSearch: (filters: {
        type: string;
        location: string;
        minPrice: string;
        maxPrice: string;
        bedrooms: string;
    }) => void;
}

export default function SearchFilter({ onSearch }: SearchFilterProps) {
    const [filters, setFilters] = useState({
        type: 'all',
        location: '',
        minPrice: '',
        maxPrice: '',
        bedrooms: 'any',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(filters);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-black">Find Your Dream Home</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-black mb-1">
                            Property Type
                        </label>
                        <select
                            id="type"
                            name="type"
                            value={filters.type}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border text-black"
                        >
                            <option value="all">All Properties</option>
                            <option value="sale">For Sale</option>
                            <option value="rent">For Rent</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-black mb-1">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={filters.location}
                            onChange={handleChange}
                            placeholder="City, State or ZIP"
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border text-black"
                        />
                    </div>

                    <div>
                        <label htmlFor="minPrice" className="block text-sm font-medium text-black mb-1">
                            Min Price
                        </label>
                        <input
                            type="text"
                            id="minPrice"
                            name="minPrice"
                            value={filters.minPrice}
                            onChange={handleChange}
                            placeholder="Min Price"
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border text-black"
                        />
                    </div>

                    <div>
                        <label htmlFor="maxPrice" className="block text-sm font-medium text-black mb-1">
                            Max Price
                        </label>
                        <input
                            type="text"
                            id="maxPrice"
                            name="maxPrice"
                            value={filters.maxPrice}
                            onChange={handleChange}
                            placeholder="Max Price"
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border text-black"
                        />
                    </div>

                    <div>
                        <label htmlFor="bedrooms" className="block text-sm font-medium text-black mb-1">
                            Bedrooms
                        </label>
                        <select
                            id="bedrooms"
                            name="bedrooms"
                            value={filters.bedrooms}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border text-black"
                        >
                            <option value="any">Any</option>
                            <option value="1">1+</option>
                            <option value="2">2+</option>
                            <option value="3">3+</option>
                            <option value="4">4+</option>
                            <option value="5">5+</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Search Properties
                    </button>
                </div>
            </form>
        </div>
    );
} 