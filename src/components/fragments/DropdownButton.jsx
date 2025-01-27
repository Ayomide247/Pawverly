import React, { useState } from "react";
import { productTheme } from "../../Utils/data";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-left flex flex-col  item-center  ">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center  items-center w-full rounded-md border border-primary px-9 py-1 bg-white text-md font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
      >
        Size
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.96l3.71-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-8 px-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
          <div className="flex flex-col items-center py-1 ">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b w-full"
            >
              8
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  border-b"
            >
              5
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  border-b"
            >
              3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
