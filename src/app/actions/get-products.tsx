import { db } from '@/lib/db';

export default async function getProducts() {
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
}