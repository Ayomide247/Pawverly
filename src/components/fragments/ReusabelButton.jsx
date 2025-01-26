import React from "react";

const ReusabelButton = ({ title }) => {
  return (
    <div>
      <button className="flex justify-center items-center px-5 py-1 font-bold transition-colors border rounded-md bg-[#ffffff] w-full text-primary hover:bg-primary hover:text-[#ffffff] hover:border-primary border-primary hover:duration-500">
        {title}
      </button>
    </div>
  );
};

export default ReusabelButton;
