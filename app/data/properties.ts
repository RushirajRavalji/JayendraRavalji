export interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    type: 'rent' | 'sale';
    status: 'available' | 'sold' | 'pending';
    images: string[];
    featured: boolean;
}

export const properties: Property[] = [
    {
        id: '1',
        title: 'Modern Apartment in Ahmedabad',
        description: 'Beautiful apartment with amazing views of the Sabarmati Riverfront. Recently renovated with high-end finishes.',
        price: 4500000,
        address: '123 SG Highway',
        city: 'Ahmedabad',
        state: 'Gujarat',
        zipCode: '380054',
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: 1200,
        type: 'sale',
        status: 'available',
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
            'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
        ],
        featured: true
    },
    {
        id: '2',
        title: 'Luxury Villa in Surat',
        description: 'Stunning villa with private pool and garden in Vesu. Perfect for families looking for comfort and luxury.',
        price: 12000000,
        address: '456 Vesu Main Road',
        city: 'Surat',
        state: 'Gujarat',
        zipCode: '395007',
        bedrooms: 4,
        bathrooms: 3.5,
        squareFeet: 3200,
        type: 'sale',
        status: 'available',
        images: [
            'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
        ],
        featured: true
    },
    {
        id: '3',
        title: 'Cozy Studio for Rent in Vadodara',
        description: 'Charming studio apartment in Alkapuri. Walking distance to parks and shopping malls.',
        price: 15000,
        address: '789 Alkapuri',
        city: 'Vadodara',
        state: 'Gujarat',
        zipCode: '390007',
        bedrooms: 0,
        bathrooms: 1,
        squareFeet: 550,
        type: 'rent',
        status: 'available',
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
        ],
        featured: false
    },
    {
        id: '4',
        title: 'Spacious Family Home in Rajkot',
        description: 'Perfect family home with large backyard. Close to top schools and shopping centers in Kalawad Road.',
        price: 6500000,
        address: '101 Kalawad Road',
        city: 'Rajkot',
        state: 'Gujarat',
        zipCode: '360005',
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 2100,
        type: 'sale',
        status: 'pending',
        images: [
            'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
            'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
        ],
        featured: false
    },
    {
        id: '5',
        title: 'Modern Townhouse for Rent in Gandhinagar',
        description: 'Contemporary townhouse with state-of-the-art appliances and finishes near Infocity.',
        price: 28000,
        address: '222 Infocity',
        city: 'Gandhinagar',
        state: 'Gujarat',
        zipCode: '382009',
        bedrooms: 2,
        bathrooms: 2.5,
        squareFeet: 1800,
        type: 'rent',
        status: 'available',
        images: [
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
        ],
        featured: true
    },
    {
        id: '6',
        title: 'Renovated Historic Haveli in Ahmedabad',
        description: 'Beautifully renovated haveli in the old city. Original features with modern amenities.',
        price: 8750000,
        address: '333 Pols Area',
        city: 'Ahmedabad',
        state: 'Gujarat',
        zipCode: '380001',
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 1600,
        type: 'sale',
        status: 'available',
        images: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
            'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
        ],
        featured: false
    },
    {
        id: '7',
        title: 'Waterfront Apartment in Dwarka',
        description: 'Luxurious apartment with breathtaking sea views. Includes access to community pool and gym.',
        price: 9200000,
        address: '444 Beach Road',
        city: 'Dwarka',
        state: 'Gujarat',
        zipCode: '361335',
        bedrooms: 3,
        bathrooms: 3,
        squareFeet: 2200,
        type: 'sale',
        status: 'available',
        images: [
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
        ],
        featured: true
    },
    {
        id: '8',
        title: 'Charming Cottage for Rent in Junagadh',
        description: 'Adorable cottage with character and charm near Girnar Hills. Lovely garden and peaceful surroundings.',
        price: 19500,
        address: '555 Girnar Road',
        city: 'Junagadh',
        state: 'Gujarat',
        zipCode: '362001',
        bedrooms: 2,
        bathrooms: 1,
        squareFeet: 950,
        type: 'rent',
        status: 'available',
        images: [
            'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
        ],
        featured: false
    }
]; 