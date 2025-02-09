import React from "react";
import { motion, easeIn } from "framer-motion";
import { IoIosCheckmark } from "react-icons/io";
import images from "../assets/index";
import { product } from "../Utils/data";
import { useCart } from "../components/fragments/CartContext";
import { useNavigate } from "react-router-dom";
import { textVariant, fadeIn } from "../Utils/motion";
// import { easeIn, motion } from "framer-motion";
textVariant;
const CartCard = () => {
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const handleSelectItem = (item) => {
    dispatch({ type: "ADD_SINGLE_ITEM", payload: item });

    // console.log(item);

    navigate("/productPage");
  };

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
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 50 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.5,
            duration: 1,
            ease: easeIn,
            delay: 0.5,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {product.map((item) => {
        const { title, img, details, price, oldprice, id } = item;
        return (
          <div className="md:w-[400px]" key={id}>
            <div className="flex gap-3 py-5 font-semibold">
              <motion.p
                variants={fadeIn("right", "spring", 1.5, 1.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="px-5 py-1 text-white shadow bg-primary"
              >
                -20%
              </motion.p>
              <motion.p
                variants={fadeIn("right", "spring", 0.5, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="px-5 py-1 border shadow border-slate-100"
              >
                BESTSELLER
              </motion.p>
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
            <motion.p
              variants={fadeIn("left", "spring", 1.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="py-5 font-bold"
            >
              {title}
            </motion.p>
            <motion.div
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center justify-between pb-2"
            >
              <div className="flex items-center gap-5 font-semibold">
                <motion.del
                  variants={gridSquareVariants}
                  className="text-red-500"
                >
                  ${oldprice}
                </motion.del>
                <motion.p variants={gridSquareVariants} className="">
                  ${price}
                </motion.p>
              </div>
              <button
                className="px-5 py-2 font-medium hover:shadow "
                onClick={() => handleSelectItem(item)}
              >
                Buy Now
              </button>
            </motion.div>
            <div className="w-full border-b border-slate-950"></div>
            <div className="flex justify-between italic pt-7">
              <motion.p
                variants={fadeIn("right", "spring", 2, 2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center "
              >
                feels comfortable
                <IoIosCheckmark className="text-[40px] text-green-500" />
              </motion.p>
              <motion.p
                variants={fadeIn("right", "spring", 1.5, 2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center"
              >
                Premium Quality
                <IoIosCheckmark className="text-[40px] text-green-500" />
              </motion.p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default CartCard;
