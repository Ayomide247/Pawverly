import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/fragments/CartContext";
import {
  Accordion,
  DropdownButton,
  Footer,
  Navbar,
  ReusabelButton,
  ReusableLabel,
  SliderComponent,
} from "../components/index";
import images from "../assets/index";
import { product } from "../Utils/data";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const fetchedSingleItem = localStorage.getItem("SelectedItem");
  const singleItem = fetchedSingleItem
    ? JSON.parse(fetchedSingleItem)
    : state?.singleItem;
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  // console.log(singleItem);

  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex + visibleCount < images.length)
      setCurrentIndex(currentIndex + 1);
  };
  const handleAddToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    dispatch({ type: "CALCULATE_TOTAL" });
    // console.log(item.length);

    navigate("/cart");
  };

  return (
    <div>
      <Navbar />
      <div className="mt-[77px]">
        {/* <SliderComponent /> */}
        <section className="flex flex-col justify-between gap-10 px-5 lg:flex-row lg:px-20">
          <div className="flex flex-col items-center justify-center w-full py-5 lg:w-1/2">
            <img
              src={singleItem?.img}
              alt="Main Product"
              className="w-[100%] md:w-[530px] rounded border border-primary p-5"
            />
            {/* <div>
              <div className="w-full flex items-center overflow-hidden mt-5 gap-10">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`z-10 p-2 bg-primary text-white rounded-full ${
                    currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {"<"}
                </button>

                <div className="flex gap-2 overflow-hidden">
                  {visibleImages.map((img, id) => (
                    <img
                      key={id}
                      src={img}
                      alt={"img"}
                      className="w-[100px] h-[100px] rounded p-1 border border-gray-200 cursor-pointer"
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={currentIndex + visibleCount >= images.length}
                  className={`z-10 p-2 bg-primary text-white rounded-full ${
                    currentIndex + visibleCount >= images.length
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {">"}
                </button>
              </div>
            </div> */}
          </div>

          <div className="flex flex-col items-start w-full gap-8 py-2 font-bold lg:w-1/2">
            <h1 className="font-bold text-[24px] md:text-[30px]">
              {singleItem?.title}
            </h1>
            <p className="text-[16px] md:text-[18px]">{singleItem?.details}</p>
            <div className="flex gap-5 font-bold text-[20px] md:text-[25px] items-center">
              <del className="text-red-500 font-extralight">
                ${singleItem?.oldprice}
              </del>
              <span>${singleItem?.price}</span>
            </div>

            <ReusableLabel title="Color" label="G" />
            <DropdownButton />

            <div className="items-center gap-3 font-bold hidden">
              <ReusabelButton title="-" />
              <p className="px-16 py-2 rounded-none shadow bg-slate-100">2</p>
              <ReusabelButton title="+" />
            </div>

            <div
              to="/cart"
              className="w-full"
              onClick={() => handleAddToCart(singleItem)}
            >
              <button className="flex justify-center items-center px-8 py-3 font-bold transition-colors border rounded-md bg-[#ffffff] w-full text-primary hover:bg-primary hover:text-[#ffffff] hover:border-primary border-primary hover:duration-500">
                Add To Cart
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center py-20 bg-secondary">
          <h1 className="font-bold text-[25px] py-10 text-primary">
            Frequently Asked Questions
          </h1>
          <div className="mb-5 border-b border-primary w-[50%]"></div>
          <div className="w-[80%] md:w-[60%]">
            <Accordion />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
