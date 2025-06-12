import React from "react";

const ProductListSkeleton: React.FC = () => {
  const skeletons = Array.from({ length: 5 });

  return (
    <div className="container mx-auto p-6">
      {/* Skeleton for heading */}
      <div className="h-8 w-40 bg-gray-300 dark:bg-gray-700 rounded mb-6 animate-pulse" />

      {/* Skeleton cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skeletons.map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow animate-pulse overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-t-2xl" />

            <div className="p-4 flex flex-col flex-grow">
              {/* Product name */}
              <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-2" />

              {/* Category */}
              <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mb-3" />

              {/* Price */}
              <div className="h-5 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="h-3 w-6 bg-gray-300 dark:bg-gray-700 rounded" />
              </div>

              {/* Button */}
              <div className="mt-auto h-10 w-full bg-gray-300 dark:bg-gray-700 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListSkeleton;
