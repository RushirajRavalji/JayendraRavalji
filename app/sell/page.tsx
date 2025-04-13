'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SellPage() {
    const [formData, setFormData] = useState({
        propertyType: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        bedrooms: '',
        bathrooms: '',
        squareFeet: '',
        price: '',
        description: '',
        name: '',
        email: '',
        phone: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would submit to a server
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-green-700 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Sell Your Property</h1>
                    <p className="text-xl text-green-100 max-w-3xl mx-auto">
                        List your property with us and connect with thousands of potential buyers.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {submitted ? (
                        <div className="p-12 text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Thank you for your submission!</h3>
                            <p className="text-gray-600 mb-6">
                                We&apos;ve received your property details. One of our agents will contact you soon to discuss the next steps.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Submit Another Property
                            </button>
                        </div>
                    ) : (
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Details</h2>

                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                                        Property Type*
                                    </label>
                                    <select
                                        id="propertyType"
                                        name="propertyType"
                                        value={formData.propertyType}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                    >
                                        <option value="">Select property type</option>
                                        <option value="house">House</option>
                                        <option value="apartment">Apartment</option>
                                        <option value="condo">Condo</option>
                                        <option value="townhouse">Townhouse</option>
                                        <option value="land">Land</option>
                                        <option value="commercial">Commercial</option>
                                    </select>
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                        Address*
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                                        City*
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                                        State*
                                    </label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                                        ZIP Code*
                                    </label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                                        Asking Price ($)*
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                                        Bedrooms
                                    </label>
                                    <input
                                        type="number"
                                        id="bedrooms"
                                        name="bedrooms"
                                        value={formData.bedrooms}
                                        onChange={handleChange}
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">
                                        Bathrooms
                                    </label>
                                    <input
                                        type="number"
                                        id="bathrooms"
                                        name="bathrooms"
                                        value={formData.bathrooms}
                                        onChange={handleChange}
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="squareFeet" className="block text-sm font-medium text-gray-700 mb-1">
                                        Square Feet
                                    </label>
                                    <input
                                        type="number"
                                        id="squareFeet"
                                        name="squareFeet"
                                        value={formData.squareFeet}
                                        onChange={handleChange}
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                        Property Description*
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={4}
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                    ></textarea>
                                </div>

                                <div className="col-span-2">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4 pt-4 border-t border-gray-200">Contact Information</h3>
                                </div>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone*
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"
                                    />
                                </div>

                                <div className="col-span-2 pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                    >
                                        Submit Property
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>

            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Sell With Us?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We make selling your property easy and rewarding.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4 mx-auto">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Competitive Pricing</h3>
                            <p className="text-gray-600 text-center">
                                We offer competitive commission rates and marketing packages to suit your needs.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4 mx-auto">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Professional Marketing</h3>
                            <p className="text-gray-600 text-center">
                                Your property will be showcased with professional photography and premium online listings.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4 mx-auto">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Fast Results</h3>
                            <p className="text-gray-600 text-center">
                                Our network of qualified buyers means your property sells faster and at the right price.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
} 