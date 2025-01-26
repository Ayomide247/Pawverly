import React from "react";

const ProductCard = () => {
  <div className="flex gap-10">
    {cardDetails.map(({ img, title, about, id }) => (
      <div
        key={id}
        className="bg-primary w-[350px] pb-7 text-[#ffffff] rounded-xl flex flex-col items-center"
      >
        <img src={img} alt="" className="rounded-t-xl" />
        <h2 className="py-5 font-bold text-[25px]">{title}</h2>
        <p className="text-center text-[15px] px-5">{about}</p>
      </div>
    ))}
  </div>;
};

export default ProductCard;
