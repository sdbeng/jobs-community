import { showWinterSale } from '@/flags';
import React from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface ProductGridProps {
    products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = async ({ products }) => {
    const onsale = await showWinterSale();    

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <div key={product.id} className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-gray-600 text-pretty">{product.description}</p>
                    {onsale ? (
                        <h3 className="text-xl text-red-600">On sale for ${product.price}</h3>
                    ) : (
                        <h3 className='text-xl text-amber-500'>reg. price ${product.price}</h3>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;