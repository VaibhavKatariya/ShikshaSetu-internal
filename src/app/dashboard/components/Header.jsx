"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";

const ShikshaSetuDashboard = ({ avatar, handelSignOut }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  // Adding event listener for click outside
  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <div className="flex justify-between p-5 items-center">
      <div className="flex items-center h-12">
        <Image
          src={logo}
          alt="Shiksha Setu Logo"
          width={200}
          height={50}
          className="mr-4"
        />
        <div className="text-content">
          <h1 className="text-2xl font-bold text-[#1c1d1f]">Shiksha Setu Dashboard</h1>
          <p className="text-sm text-[#6a6f73]">विद्या तत्त्व ज्योतिस्मः - Knowledge is the essence of light</p>
        </div>
      </div>

      <div className="relative">
        <div className="inline-block relative" ref={dropdownRef}>
          <img
            src={avatar}
            alt="Avatar"
            className="w-12 h-12 rounded-full cursor-pointer avatar"
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <div className="absolute top-10 right-0 bg-white border border-gray-300 shadow-lg z-10 min-w-[150px] text-left">
              <a href="#" className="block px-4 py-3 text-gray-800 text-base hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-3 text-gray-800 text-base hover:bg-gray-100">Courses</a>
              <a href="#" className="block px-4 py-3 text-gray-800 text-base hover:bg-gray-100">Dashboard</a>
              <button
                onClick={handelSignOut}
                className="block w-full px-4 py-3 text-white bg-red-600 hover:bg-red-700 text-base"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShikshaSetuDashboard;
