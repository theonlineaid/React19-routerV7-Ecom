import React from "react";

const CategorySkeleton: React.FC = () => {
  const skeletons = Array.from({ length: 12 });
  return (
    <div className="container mx-auto p-6">
      {/* Skeleton for heading */}
      <div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded mb-4 animate-pulse" />

      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
        {skeletons.map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-28 flex flex-col items-center text-center animate-pulse"
          >
            <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-700 mb-2" />
            <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySkeleton;
