import { cache } from 'react';
import { db } from '@/lib/db';

const getProducts = cache(async () => {
    try {
        const products = await db.product?.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
});

export default getProducts;