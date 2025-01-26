import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { accordion } from "../Utils/data";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <ul className="flex flex-col w-full font-bold">
        {accordion.map((accord, index) => (
          <li key={index} className="w-full py- mb-4 overflow-hidden">
            <h1
              onClick={() => handleClick(index)}
              className="flex items-center justify-between p-4 bg-white text-[18px] md:text-[20px] shadow cursor-pointer"
            >
              {accord.title}
              {activeIndex === index ? (
                <IoMdArrowDropdown className="text-[30px] md:text-[35px]" />
              ) : (
                <IoMdArrowDropright className="text-[30px] md:text-[35px]" />
              )}
            </h1>

            <p
              className={`px- md:px- font-normal text-[16px] md:text-[18px] text-start leading-6 transition-all ease-in-out duration-500 ${
                activeIndex === index ? "py-5 h-20" : "h-0"
              }`}
            >
              {accord.details}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
