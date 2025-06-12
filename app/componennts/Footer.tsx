import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className=" container mx-auto p-6 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            We are a premium online store offering the latest fashion trends,
            quality products, and excellent customer service since 2020.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Track Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Accessories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Electronics
              </a>
            </li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">My Account</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                My Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Settings
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to get updates, promotions and more.
          </p>
          <form className="flex items-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg text-sm 
                        border border-gray-300 
                        text-black placeholder-black 
                        dark:text-white dark:placeholder-white 
                        dark:border-gray-600
                        focus:border-pink-600 focus:ring-1 focus:ring-pink-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r-lg text-sm"
            >
              Subscribe
            </button>
          </form>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t   border-gray-700 mt-8">
        <div className="container mx-auto p-6 mt-4 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Onlineaid. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0 text-xl text-gray-400">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcAmex />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
