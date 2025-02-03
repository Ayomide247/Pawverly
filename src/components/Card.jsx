import React from "react";
import { cardDetails } from "../Utils/data";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "../Utils/motion";
const Card = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 px-5 my-5">
      {cardDetails.map(({ img, title, about, id }) => (
        <motion.div
          variants={fadeIn("right", "spring", id * 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          key={id}
          className="bg-primary w-full sm:w-[300px] md:w-[350px] pb-7 text-[#ffffff] rounded-xl flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
        >
          <img
            src={img}
            alt=""
            className="rounded-t-xl w-full h-[350px] object-cover"
          />
          <h2 className="py-5 font-bold text-[20px] sm:text-[25px] text-center">
            {title}
          </h2>
          <p className="text-center text-[14px] sm:text-[15px] px-5 h-20">
            {about}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
