import ProductGrid from "@/components/ProductGrid";
import getProducts from "../actions/get-products";

export default async function Shop() {
    const products = await getProducts();

    return (
        <div>
      <h1 className="text-3xl font-bold mb-6">Our Swag</h1>
      {products && products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <p className="text-gray-600">No products to display</p>
      )}
    </div>
    );
}
