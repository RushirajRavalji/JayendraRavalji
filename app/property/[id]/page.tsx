'use client';

import { useState, useEffect, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { properties, Property } from '../../data/properties';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PropertyDetail() {
    const params = useParams();
    const [property, setProperty] = useState<Property | null>(null);
    const [activeImage, setActiveImage] = useState(0);

    // Contact form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: "I'm interested in this property"
    });

    useEffect(() => {
        if (params.id) {
            const propertyId = Array.isArray(params.id) ? params.id[0] : params.id;
            const foundProperty = properties.find(p => p.id === propertyId);
            if (foundProperty) {
                setProperty(foundProperty);
            }
        }
    }, [params.id]);

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Create WhatsApp message with property details and form data
    const createWhatsAppMessage = () => {
        if (!property) return "";

        const message = `
Hello Amit, 

I'm interested in the property: ${property.title} (ID: ${property.id})
Location: ${property.address}, ${property.city}, ${property.state}
Price: ₹${property.price.toLocaleString()}
Type: ${property.type === 'rent' ? 'For Rent' : 'For Sale'}

My details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}

Thank you!
        `;

        return encodeURIComponent(message.trim());
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Agent's WhatsApp number (country code + number without +)
        const agentPhone = "916354450316";
        const whatsappUrl = `https://wa.me/${agentPhone}?text=${createWhatsAppMessage()}`;

        // Open WhatsApp in new window
        window.open(whatsappUrl, '_blank');
    };

    if (!property) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-3xl font-bold text-black">Property Not Found</h1>
                    <p className="mt-4 text-lg text-black">The property you are looking for does not exist.</p>
                    <Link href="/" className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-300">
                        Go back to home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const formatPrice = (price: number) => {
        if (property.type === 'rent') {
            return `₹${price.toLocaleString()}/month`;
        } else {
            return `₹${price.toLocaleString()}`;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <Link href="/" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to listings
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                                <p className="text-gray-600 mb-2">{property.address}, {property.city}, {property.state} {property.zipCode}</p>
                                <div className="flex items-center">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mr-2">
                                        {property.type === 'rent' ? 'For Rent' : 'For Sale'}
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                        {property.status}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <p className="text-3xl font-bold text-indigo-600">{formatPrice(property.price)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <div className="relative h-[400px] mb-4 rounded-lg overflow-hidden">
                                    {property.images.length > 0 ? (
                                        <Image
                                            src={property.images[activeImage]}
                                            alt={property.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
                                        />
                                    ) : (
                                        <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                                            <span className="text-black font-medium">No Image Available</span>
                                        </div>
                                    )}
                                </div>

                                {property.images.length > 1 && (
                                    <div className="flex space-x-4 overflow-x-auto pb-2">
                                        {property.images.map((image, index) => (
                                            <div
                                                key={index}
                                                className={`relative h-20 w-32 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-indigo-500' : 'border-transparent'
                                                    }`}
                                                onClick={() => setActiveImage(index)}
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`${property.title} - Image ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="128px"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="mt-8">
                                    <h2 className="text-xl font-semibold text-black mb-4">Description</h2>
                                    <p className="text-black">{property.description}</p>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-xl font-semibold text-black mb-4">Property Details</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                            <svg className="h-6 w-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg>
                                            <div>
                                                <p className="text-sm text-black">Bedrooms</p>
                                                <p className="text-lg font-medium text-black">{property.bedrooms}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                            <svg className="h-6 w-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <div>
                                                <p className="text-sm text-black">Bathrooms</p>
                                                <p className="text-lg font-medium text-black">{property.bathrooms}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                            <svg className="h-6 w-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                            </svg>
                                            <div>
                                                <p className="text-sm text-black">Square Feet</p>
                                                <p className="text-lg font-medium text-black">{property.squareFeet.toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                            <svg className="h-6 w-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <div>
                                                <p className="text-sm text-black">Location</p>
                                                <p className="text-lg font-medium text-black">{property.city}, {property.state}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-1">
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Agent</h3>
                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border text-black"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border text-black"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border text-black"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border text-black"
                                                placeholder="I'm interested in this property"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            Send Message via WhatsApp
                                        </button>
                                    </form>

                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Agent</h3>
                                        <div className="flex items-center">
                                            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                                                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-sm font-medium text-black">Amit Patel</h4>
                                                <p className="text-sm text-black">Real Estate Agent</p>
                                                <a
                                                    href="https://wa.me/916354450316"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-indigo-600 mt-1 flex items-center hover:text-indigo-800"
                                                >
                                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                    </svg>
                                                    +91 6354 450316
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
} 