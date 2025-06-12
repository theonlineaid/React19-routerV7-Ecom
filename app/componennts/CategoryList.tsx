import React, { useEffect, useState } from "react";
import CategoryListSkeleton from "./Skeleton/CategoryListSkeleton";

interface Category {
  id: string;
  name: string;
  image: string;
}

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:3000/categories");
        if (!res.ok) throw new Error("Failed to fetch categories.");
        const data = await res.json();
        setCategories(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <CategoryListSkeleton />;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Browse Categories
      </h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-transparent">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex-shrink-0 w-28 flex flex-col items-center text-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-pink-500 shadow-md hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-2 text-sm font-medium text-gray-700 dark:text-white">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
