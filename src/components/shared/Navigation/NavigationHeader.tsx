"use client";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import IconButton from "../IconButton";
import Logo from "../Logo";

const NavigationHeader = () => {
  return (
    <div className="flex flex-row items-center">
      <IconButton>
        <IoMdMenu className="h-6 w-6" />
      </IconButton>
      <Logo />
    </div>
  );
};

export default NavigationHeader;
