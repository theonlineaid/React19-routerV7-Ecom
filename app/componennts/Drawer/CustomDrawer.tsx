// components/CustomDrawer.tsx
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

interface CustomDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  isOpen,
  toggleDrawer,
}) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="!bg-white dark:!bg-gray-900 text-gray-900 dark:text-white p-6"
      duration={100}
    >
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <p>This is the cart drawer.</p>
        <button
          onClick={toggleDrawer}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
