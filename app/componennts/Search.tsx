import React, { useState, useEffect, useRef } from "react";
import { MdSearch } from "react-icons/md";

const categories = [
  "Electronics by something",
  "Clothing",
  "Home",
  "Beauty",
  "Books",
  "Sports",
  "Toys",
  "Automotive",
  "Health",
  "Garden",
];

const products = [
  { name: "iPhone 15", category: "Electronics by something" },
  { name: "Running Shoes", category: "Sports" },
  { name: "T-shirt", category: "Clothing" },
  { name: "Lawn Mower", category: "Garden" },
  { name: "Face Cream", category: "Beauty" },
  { name: "MacBook Pro", category: "Electronics by something" },
  { name: "Football", category: "Sports" },
  { name: "Jeans", category: "Clothing" },
  { name: "Garden Hose", category: "Garden" },
  { name: "Lipstick", category: "Beauty" },
  { name: "Wireless Mouse", category: "Electronics by something" },
  { name: "Basketball", category: "Sports" },
  { name: "Jacket", category: "Clothing" },
  { name: "Plant Fertilizer", category: "Garden" },
  { name: "Shampoo", category: "Beauty" },
  { name: "AirPods", category: "Electronics by something" },
  { name: "Tennis Racket", category: "Sports" },
  { name: "Sweater", category: "Clothing" },
  { name: "Wheelbarrow", category: "Garden" },
  { name: "Face Wash", category: "Beauty" },
  { name: "Smart TV", category: "Electronics by something" },
  { name: "Yoga Mat", category: "Sports" },
  { name: "Sneakers", category: "Clothing" },
  { name: "Hedge Trimmer", category: "Garden" },
  { name: "Body Lotion", category: "Beauty" },
];

export default function Search() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectWidth, setSelectWidth] = useState(100);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const filteredProducts = products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) &&
        (selectedCategory === "" || p.category === selectedCategory)
    )
    .slice(0, 10);

  useEffect(() => {
    if (!canvasRef.current) {
      canvasRef.current = document.createElement("canvas");
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (ctx && selectRef.current) {
      const computedStyle = window.getComputedStyle(selectRef.current);
      const font = `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;
      ctx.font = font;

      const text = selectedCategory || "All";
      const textWidth = ctx.measureText(text).width;
      setSelectWidth(textWidth + 48);
    }
  }, [selectedCategory]);

  return (
    <div className="relative w-full max-w-3xl mx-6">
      <div className="flex items-center border dark:border-gray-700 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        <select
          ref={selectRef}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            width: `${selectWidth + 5}px`,
            transition: "width 0.2s ease-in-out",
            height: "40px",
          }}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-0 focus:outline-none"
        >
          <option value="">All Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Search Input with icon */}
        <div className="relative flex-1">
          <input
            type="search"
            placeholder="Search for products..."
            value={query}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-1 pr-12 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-0 focus:outline-none"
          />

          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 dark:text-blue-400 transition-transform duration-150 hover:scale-110">
            <MdSearch className="text-gray-400 dark:text-gray-500 w-5 h-5 hover:text-white" />
          </button>
        </div>
      </div>

      {/* 🔽 Dropdown */}
      {focused && (
        <div className="absolute left-0 right-0 mt-2 z-50 bg-white dark:bg-gray-900 shadow-lg rounded-lg border dark:border-gray-700 max-h-[300px] overflow-y-auto">
          {filteredProducts.length > 0 ? (
            <ul className="divide-y dark:divide-gray-700">
              {filteredProducts.map((product, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                >
                  {product.name}
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-center text-gray-500 dark:text-gray-400">
              No search results found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
