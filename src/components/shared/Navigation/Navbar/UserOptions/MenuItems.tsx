"use client";
import React from "react";

interface MenuItemProps {
  logo: React.ReactNode;
  label: string;
  onClick?: () => void;
  round?: boolean;
}

const MenuItems: React.FC<MenuItemProps> = ({
  logo,
  label,
  onClick,
  round,
}) => {
  return (
    <div
      className={`flex items-center hover:bg-neutral-700 p-3 cursor-pointer &{round && "rounded-lg"}`}
    >
      {logo}
      {label}
    </div>
  );
};

export default MenuItems;
