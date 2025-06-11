import React from "react";
import Search from "./Search";
import Options from "./Options";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md dark:shadow-lg py-3 px-4 ">
    <div className="flex items-center justify-between space-x-4">
        {/* <!-- Left: Logo --> */}
      <div className="flex items-center space-x-2">
        {/* <img src="/logo.png" alt="Logo" className="h-8 w-auto" /> */}
        <span className="text-xl font-bold">ShopName</span>
      </div>

      {/* <!-- Center: Search Bar --> */}
      <Search />
      {/* <!-- Right: Options --> */}
      <Options />
    </div>
    </header>
  );
}
