import React, { useState } from "react";
import { Footer, Navbar } from "../components/index";
import images from "../assets/index";
import { useCart } from "../components/fragments/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../Utils/motion";

const Cart = () => {
  const { state, dispatch } = useCart();
  // const [isDisabled, setIsDisable] = useState(false);

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT", payload: { id } });
    dispatch({ type: "CALCULATE_TOTAL" });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT", payload: { id } });
    dispatch({ type: "CALCULATE_TOTAL" });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
    dispatch({ type: "CALCULATE_TOTAL" });
  };

  const getTotalPrice = () => {
    return state.cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // const handleClick = () => {
  //   console.log(state.cart);
  // };
  return (
    <div>
      <Navbar />
      <div className="mt-[77px] px-5 md:px-20 mb-20">
        <div>
          <div className="flex flex-col md:flex-row justify-between pt-5">
            <motion.div
              variants={fadeIn("left", "bounce", 0.25, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-2 md:gap-10 w-full md:w-1/2"
            >
              <h2 className="text-[18px] md:text-[20px] font-bold">
                Your Cart
              </h2>
              <p className="font-normal text-slate-500 text-[14px] md:text-[15px]">
                Product
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("right", "bounce", 0.25, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col justify-between items-end w-full md:w-1/2 gap-2 md:gap-0"
            >
              <Link
                to={"/productPage"}
                className="underline cursor-pointer text-[14px] md:text-[16px]"
              >
                Continue Shopping
              </Link>
              <p className="font-normal text-slate-500 text-[14px] md:text-[15px]">
                Total
              </p>
            </motion.div>
          </div>
          <div className="border-b border my-3 md:my-5"></div>
        </div>

        {state?.cart?.length > 0 ? (
          state?.cart.map((item, id) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5"
            >
              <motion.div
                variants={fadeIn("left", "bounce", 0.25, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col md:flex-row font-extralight items-center gap-5 md:gap-10"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-[100px] h-[100px] md:h-fit rounded"
                />
                <div className="text-center md:text-left">
                  <p className="font-bold w-full md:w-[80%] hover:underline cursor-pointer py-3">
                    {item.title}
                  </p>
                  <div className="py-1">${item.price}</div>
                  <p className="py-1">Color: G</p>
                  <p className="">Size: 8</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("right", "bounce", 1, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center justify-center border py-2 px-5 h-fit"
              >
                <button
                  className="text-lg"
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </button>
                <p className="px-5 md:px-10">{item.quantity}</p>
                <button
                  className="text-lg"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
              </motion.div>
              <motion.div
                variants={fadeIn("right", "bounce", 0.75, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                onClick={() => handleRemove(item.id)}
                className="font-semibold cursor-pointer"
              >
                Remove
              </motion.div>
              <motion.div
                variants={fadeIn("right", "bounce", 0.25, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center"
              >
                <p className="font-bold">${getTotalPrice()}</p>
              </motion.div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}

        <div className="border-b border my-3 md:my-5"></div>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div></div>
          <motion.div
            variants={fadeIn("right", "bounce", 0.25, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-end items-end w-full md:w-auto"
          >
            <div className="flex justify-between md:gap-10 gap-5 py-3">
              <p className="font-bold">Estimated total</p>
              <p className="font-extralight ">${getTotalPrice()}USD</p>
            </div>
            <p className="italic py-5 font-extralight text-center md:text-right">
              Taxes, discounts and shipping calculated at checkout.
            </p>
            <Link
              to={"/payment"}
              className="flex justify-center items-center px-6 py-3 font-bold transition-colors border rounded-md bg-black text-white hover:bg-primary hover:text-[#ffffff] hover:border-primary border-primary hover:duration-500 w-full "
            >
              Check Out
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
