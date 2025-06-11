import React, { useState } from "react";
import { Link } from "react-router"; // ✅ Use `react-router`, not `react-router-dom`
import { Menu } from "lucide-react"; // Optional icons
import CustomDrawer from "./Drawer/CustomDrawer";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Category", path: "/category" },
  { name: "Brand", path: "/brand" },
  { name: "Shop", path: "/shop" },
  { name: "Sale", path: "/sale" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const BottomHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      {/* Drawer */}
      <CustomDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer}>
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Menu</h2>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={toggleDrawer}
                className="text-lg hover:text-pink-500 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </CustomDrawer>

      {/* Bottom Navigation Bar */}
      <div className="bg-black text-white z-50 border-t border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between flex-wrap">
          {/* Left: Hamburger + Menu */}
          <div className="flex items-center space-x-4 flex-wrap">
            {/* Hamburger */}
            <button
              onClick={toggleDrawer}
              className="p-2 rounded hover:bg-white/10 transition"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Inline Menu Items */}
            <nav className="hidden md:flex flex-wrap gap-4 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="hover:text-pink-400 transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Contact Number */}
          <div className="text-sm font-medium mt-2 sm:mt-0">
            📞 +880 1234 56789
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomHeader;
