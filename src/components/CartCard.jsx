import React from "react";
import { motion } from "framer-motion";
import { IoIosCheckmark } from "react-icons/io";
import images from "../assets/index";
import { product } from "../Utils/data";
import { useCart } from "../components/fragments/CartContext";
import { useNavigate } from "react-router-dom";
import { textVariant } from "../Utils/motion";
textVariant;
const CartCard = () => {
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const handleSelectItem = (item) => {
    dispatch({ type: "ADD_SINGLE_ITEM", payload: item });

    // console.log(item);

    navigate("/productPage");
  };

  return (
    <motion.div
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {product.map((item) => {
        const { title, img, details, price, oldprice, id } = item;
        return (
          <div className="md:w-[400px]" key={id}>
            <div className="flex gap-3 py-5 font-semibold">
              <p className="px-5 py-1 text-white shadow bg-primary">-20%</p>
              <p className="px-5 py-1 border shadow border-slate-100">
                BESTSELLER
              </p>
            </div>
            <div class="relative overflow-hidden">
              <img
                src={img}
                alt="Product Image"
                class="w-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0"
              />
              <img
                src={img}
                alt="Product Hover Image"
                class="absolute inset-0 w-full transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
              />
            </div>
            <p className="py-5 font-bold">{title}</p>
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-5 font-semibold">
                <del className="text-red-500">${oldprice}</del>
                <p className="">${price}</p>
              </div>
              <button
                className="px-5 py-2 font-medium hover:shadow "
                onClick={() => handleSelectItem(item)}
              >
                Buy Now
              </button>
            </div>
            <div className="w-full border-b border-slate-950"></div>
            <div className="flex justify-between italic pt-7">
              <p className="flex items-center ">
                feels comfortable
                <IoIosCheckmark className="text-[40px] text-green-500" />
              </p>
              <p className="flex items-center">
                Premium Quality
                <IoIosCheckmark className="text-[40px] text-green-500" />
              </p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default CartCard;
