import React, { useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import ProductListSkeleton from "./Skeleton/ProductListSkeleton";

interface Review {
  user: string;
  comment: string;
  rating: number;
  date: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  images: string;
  rating: number;
  reviews: Review[];
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        if (!res.ok) throw new Error("Failed to fetch products.");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <ProductListSkeleton />;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800 dark:text-white">
        Our Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col"
          >
            <div className="relative group">
              <img
                src={product.images}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay for Quick View on hover */}
              <button
                className="absolute top-3 right-3 bg-pink-600 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => alert(`Quick view of ${product.name}`)}
              >
                Quick View
              </button>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {product.name}
              </h3>
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                {product.category}
              </p>
              <p className="text-pink-600 font-bold text-xl mb-3">${product.price}</p>

              {/* Rating stars */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-sm">
                  {"★".repeat(Math.round(product.rating))}
                  {"☆".repeat(5 - Math.round(product.rating))}
                </div>
                <span className="ml-2 text-gray-500 text-xs">
                  ({product.reviews.length})
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-3">
                <button
                  onClick={() => alert(`Added ${product.name} to cart`)}
                  className="flex-1 bg-pink-600 text-white rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-pink-700 transition font-semibold"
                >
                  <GiShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
