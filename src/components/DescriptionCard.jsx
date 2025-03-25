import React from "react";
import { delay, easeIn, easeInOut, motion } from "framer-motion";
import { descriptionCard } from "../Utils/data";

const DescriptionCard = () => {
  const gridContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        duration: 0.8,
        ease: easeIn,
        delay: 0.2,
      },
    },
  };

  const gridSquareVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div
      variants={gridContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      {descriptionCard.map(({ icon, title, details, id }) => (
        <motion.div
          key={id}
          variants={gridSquareVariants}
          className="flex flex-col items-start w-full p-10 border rounded-lg border-primary"
        >
          <img src={icon} alt="" className="text-primary w-[100px]" />
          <h2 className="font-bold text-[30px] py-5">{title}</h2>
          <p className="font-medium">{details}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default DescriptionCard;
