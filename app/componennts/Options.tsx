import React, { useState, useEffect, useRef } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineFavoriteBorder, MdSearch } from "react-icons/md";
import CustomDrawer from "./Drawer/CustomDrawer";

export default function Options() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleCartDrawer = () => setIsCartOpen((prev) => !prev);
  const toggleSearchPopup = () => setIsSearchOpen((prev) => !prev);
  const searchPopupRef = useRef<HTMLDivElement | null>(null);

  /**
   * @param {KeyboardEvent} event
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchPopupRef.current &&
        !searchPopupRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchOpen]);

  return (
    <>
      <div className="flex items-center space-x-6">
        {/* Search Button */}
        <button
          onClick={toggleSearchPopup}
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          <MdSearch className="text-gray-400 dark:text-gray-500 w-6 h-6 hover:text-white" />
        </button>

        {/* Wishlist */}
        <div className="relative">
          <button className="hover:text-blue-600 dark:hover:text-blue-400">
            <MdOutlineFavoriteBorder className="text-gray-400 dark:text-gray-500 w-6 h-6 hover:text-white" />
          </button>
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-medium px-1.5 py-0.5 rounded-full">
            3
          </span>
        </div>

        {/* Cart */}
        <div className="relative">
          <button
            className="hover:text-blue-600 dark:hover:text-blue-400"
            onClick={toggleCartDrawer}
          >
            <GiShoppingCart className="text-gray-400 dark:text-gray-500 w-6 h-6 hover:text-white" />
          </button>
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-medium px-1.5 py-0.5 rounded-full">
            5
          </span>
          <CustomDrawer isOpen={isCartOpen} toggleDrawer={toggleCartDrawer} direction="right">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <p>This is the cart drawer.</p>
              <button
                // onClick={toggleDrawer}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </CustomDrawer>
        </div>

        {/* Account */}
        <button className="hover:text-blue-600 dark:hover:text-blue-400">
          Account
        </button>
      </div>

      {/* 🔍 Search Popup Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800/30  flex justify-center items-start pt-24 px-4">
          <div
            className="bg-white dark:bg-gray-900 w-full max-w-xl rounded-xl shadow-lg p-4"
            ref={searchPopupRef}
          >
            {/* Top: Search input UI */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center flex-1">
                <MdSearch className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent w-full text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none"
                  autoFocus
                />
              </div>
              <span
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 cursor-pointer ml-4"
                onClick={toggleSearchPopup}
              >
                ESC
              </span>
            </div>
            {/* Divider */}
            <hr className="my-3 border-gray-300 dark:border-gray-700" />
            {/* Previous searches */}
            <div>
              <h3 className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Recent searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {["iPhone 15", "Shoes", "T-shirt", "Laptop", "Cream"].map(
                  (term, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-white cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      {term}
                    </span>
                  )
                )}
              </div>
            </div>
            {/* Product Suggestions */}
            <div className="mt-6">
              <h3 className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Suggested products
              </h3>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {[
                  "Samsung Galaxy S23 Ultra",
                  "Nike Air Max 90",
                  "Cotton Round Neck T-shirt",
                  "HP Spectre x360 Laptop",
                  "Organic Aloe Vera Face Cream",
                  "Bluetooth Headphones",
                  "Smart LED TV",
                  "Gaming Mouse",
                  "Ergonomic Office Chair",
                  "Wooden Study Desk",
                ].map((product, index) => (
                  <div
                    key={index}
                    className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm text-gray-800 dark:text-gray-200 hover:border-green-400 hover:shadow-sm hover:bg-white/10 cursor-pointer transition duration-200"
                  >
                    {product}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
