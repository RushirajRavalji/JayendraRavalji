import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 h-[600px] flex items-center">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")',
                    }}
                ></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
                    Find Your Dream Home
                </h1>
                <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
                    Discover thousands of properties for sale and rent across the country.
                    Your perfect home is just a click away.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/buy"
                        className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-indigo-700 transition-colors duration-300"
                    >
                        Browse Properties for Sale
                    </Link>
                    <Link
                        href="/rent"
                        className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                        Find Rentals
                    </Link>
                </div>
            </div>
        </div>
    );
} 