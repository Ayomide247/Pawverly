import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  Accordion,
  Card,
  CartCard,
  CountDown,
  DescriptionCard,
  Footer,
  Navbar,
  SliderComponent,
} from "../components/index";
import images from "../assets/index";
import { fadeIn, slideIn, textVariant } from "../Utils/motion";

const MainPage = () => {
  return (
    <main className="w-screen h-screen overflow-x-hidden">
      <Navbar />
      <div className="mt-[77px]">
        <SliderComponent />
        <section className="flex flex-col-reverse items-center justify-between px-5 py-12 lg:flex-row md:px-10 lg:px-20 bg-secondary">
          <motion.div
            variants={slideIn("left", "bounce", 0.5, 1)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h1 className="font-semibold text-[28px] md:text-[36px] lg:text-[40px] w-full lg:w-[70%]">
              Welcome to the Season of Love and Cozy Moments!
            </h1>
            <p className="tracking-wider font-medium py-5 leading-6 md:leading-7 lg:leading-8 text-sm md:text-base lg:text-lg w-full lg:w-[70%]">
              Keep your pets warm and stylish this winter with our cozy winter
              sweaters. Celebrate the season with love, comfort, and warmth for
              your furry friends!
            </p>
            <a
              href="#product"
              // containerId="scroll-container"
              smooth={true}
              duration={500}
              className="flex items-center px-6 py-2 font-bold text-white transition-colors border-2 rounded-md md:py-3 md:px-8 bg-primary hover:bg-secondary hover:text-primary hover:border-primary border-secondary hover:duration-500 cursor-pointer"
            >
              Shop Now
              <RiArrowDropRightLine className="text-[24px] md:text-[30px]" />
            </a>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.5, 1)}
            initial="hidden"
            animate="show"
            className="flex justify-center w-full py-5 lg:justify-end lg:w-auto lg:py-0"
          >
            <img
              src={images[12]}
              alt="Pet Sweaters"
              className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-auto"
            />
          </motion.div>
        </section>
        <div className="p-5 bg-primary"></div>
        <section className="py-20 bg-[#ffffff] lg:px-20 px-2">
          <motion.div
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center px-5 text-center"
          >
            <h1 className="font-bold text-[30px] sm:text-[35px] lg:text-[40px]">
              Pawverly™ Pets Sweaters
            </h1>
            <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-light w-full sm:w-3/4 lg:w-1/2">
              Crafted for comfort and style, this knit sweater is perfect for
              keeping your pet cozy.
            </p>
          </motion.div>

          <div className="flex flex-col items-center justify-center gap-5 py-10 lg:px-5 lg:flex-row sm:px-5 lg:gap-0">
            <motion.img
              variants={slideIn("right", "bounce", 0.25, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              src={images[0]}
              alt="Pet Sweater"
              className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] rounded-lg lg:rounded-l-[15px]"
            />

            <motion.div
              variants={slideIn("left", "bounce", 0.25, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[#ffffff] bg-primary py-10 sm:py-[80px] px-5 sm:px-8 md:px-10  lg:rounded-r-[15px]"
            >
              <h1 className="font-bold text-[25px] sm:text-[30px] lg:text-[40px]">
                Popular Cozy Knit Winter Sweater
              </h1>
              <p className="font-medium leading-6 sm:leading-7 text-start text-[14px] sm:text-[16px] lg:text-[18px]">
                A variety of styles and sizes for both small and medium dogs or
                cats, with colors and patterns suited for different seasons.
                <br /> If you’re looking for handmade or customizable knit pet
                sweaters, Pawverly™ has a great selection of unique options.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="flex flex-col justify-center p-5 sm:p-10 bg-secondary">
          <motion.div
            variants={slideIn("right", "tween", 0.25, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="font-bold text-[25px] sm:text-[30px] md:text-[40px]">
              Soft Knit Pet Sweater
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-light w-full sm:w-3/4 lg:w-1/2">
              A cozy knit winter sweater for small and medium pets is a great
              way to keep your furry friend warm and stylish during the colder
              months.
            </p>
          </motion.div>
          <div className="flex flex-col items-center gap-5 py-10">
            <Card />

            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <a
                href="#product"
                className="flex justify-center items-center px-6 sm:px-8 py-2 sm:py-3 font-bold mt-5 sm:mt-10 transition-colors border-2 rounded-md bg-[#ffffff] text-primary hover:bg-primary hover:text-[#ffffff] hover:border-primary border-secondary hover:duration-500"
              >
                Shop Now
                <RiArrowDropRightLine className="text-[25px] sm:text-[30px]" />
              </a>
            </motion.div>
          </div>
        </section>
        <section className="py-10 sm:py-20 bg-[#ffffff]">
          <motion.div
            // variants={fadeIn("up", "spring", 0.5, 0.75)}
            // initial="hidden"
            // whileInView="show"
            // viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-0 px-5 py-5 lg:flex-row sm:px-20 md:px-56 sm:py-10"
          >
            <motion.div
              variants={slideIn("right", "tween", 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[#ffffff] bg-primary p-5 sm:py-10 sm:px-8 md:py-[114px] md:px-10 rounded-t-[15px] lg:rounded-l-[15px] lg:rounded-tr-none flex flex-col items-start"
            >
              <h1 className="font-bold text-[25px] sm:text-[30px] md:text-[40px] text-center md:text-left">
                Popular Cozy Knit Winter Sweater
              </h1>
              <p className="font-medium leading-7 text-start text-[14px] sm:text-[16px] md:text-[18px] mt-5">
                A variety of styles and sizes for both small and medium dogs or
                Cats, with colors and patterns suited for different seasons.{" "}
                <br /> If you’re looking for handmade or customizable knit pet
                sweaters, Pawverly™ has a great selection of unique options.
              </p>
            </motion.div>
            <motion.img
              variants={slideIn("left", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              src={images[1]}
              alt=""
              className="w-full  lg:w-[537px] rounded-b-[15px] lg:rounded-r-[15px] lg:rounded-bl-none"
            />
          </motion.div>
        </section>
        <motion.section className="p-5 lg:p-20 bg-secondary">
          <div>
            <DescriptionCard />
          </div>
        </motion.section>
        <motion.section
          id="product"
          className="flex flex-col items-center px-5 py-20 md:px-20"
        >
          {/* <Link to="/productPage"> */}
          <CartCard />
          {/* </Link> */}
          <CountDown />
        </motion.section>
        <section className="min-h-screen p-10 md:p-20 bg-secondary">
          <div className="flex flex-col gap-10 items-cente lg:flex-row lg:gap-20">
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full text-center max-h-fit lg:text-left lg:w-1/2 lg:mt-40"
            >
              <h1 className="font-bold leading-[3rem] text-[30px] md:text-[40px] my-2">
                Winter Essential Sweater for Pets
              </h1>
              <p className="text-[16px] md:text-[20px] font-normal leading-7">
                Crafted for comfort and style, this knit sweater is perfect for
                keeping your pet cozy.
              </p>
            </motion.div>

            <div className="w-full lg:w-1/2">
              <Accordion />
            </div>
          </div>
        </section>
        <div className="p-5 bg-primary"></div>
        <section>
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default MainPage;
