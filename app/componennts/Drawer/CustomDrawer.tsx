// components/CustomDrawer.tsx
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

interface CustomDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  children: React.ReactNode; // ✅ Add this line
  direction?: "left" | "right" | "top" | "bottom"; // Optional prop for drawer direction
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  isOpen,
  toggleDrawer,
  children,
  direction = "left", // Default direction is left
}) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction={direction}
      className="!bg-white dark:!bg-gray-900 text-gray-900 dark:text-white p-6"
      duration={150}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
