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

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <div key={product.id} className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-gray-600">{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;