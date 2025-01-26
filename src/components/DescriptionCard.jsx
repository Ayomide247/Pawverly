import React from "react";
import iconImg from "../assets/images/checkblack.png.avif";

import { descriptionCard } from "../Utils/data";

const DescriptionCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {descriptionCard.map(({ icon, title, details, id }) => (
        <div
          key={id}
          className="flex flex-col items-start w-full p-10 border rounded-lg border-primary"
        >
          <img src={icon} alt="" className="text-primary w-[100px] " />
          <h2 className="font-bold text-[30px] py-5">{title}</h2>
          <p className="font-medium">{details}</p>
        </div>
      ))}
    </div>
  );
};

export default DescriptionCard;
