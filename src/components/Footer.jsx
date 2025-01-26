import React from "react";
import { FaCcVisa } from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";
import { FaApplePay } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import images from "../assets/index";

const Footer = () => {
  return (
    <div>
      <img src={images[15]} alt="" className="w-full" />
      <footer className="flex flex-col items-center pt-20 pb-3 bg-primary text-[#ffffff]">
        {/* Newsletter section */}
        <div className="flex flex-col items-center px-4 text-center md:px-8">
          <h1 className="font-bold text-[30px] my-2">
            Get 10% Off Your Order Today!
          </h1>
          <p className="text-[20px] my-3 max-w-[600px]">
            Join the Pawverly™ V.I.P. club. We will send you an email with your
            discount code.
          </p>
          <div className="flex flex-col items-center gap-4 my-5 md:flex-row">
            <input
              type="email"
              className="px-8 py-3 w-[100%] md:w-[500px] bg-slate-100 focus:outline-none text-black"
              placeholder="Enter your Email"
            />
            <button className="mt-3 md:mt-0 flex justify-center items-center px-8 py-3 font-bold transition-colors border-2 rounded-md bg-[#ffffff] w-fit text-primary hover:bg-primary hover:text-[#ffffff] hover:border-black border-secondary hover:duration-500">
              Submit
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8 cursor-pointer">
          <div className="flex gap-10 text-[30px] md:text-[35px]">
            <FaCcVisa />
            <SiAmericanexpress />
            <FaCcMastercard />
            <FaApplePay />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 italic text-[10px] mt-5">
            <p>© 2025, Pawverly™ Powered by Echelon Digital Solution</p>
            <p className="mx-2">. Privacy Policy</p>
            <p className="mx-2">. Terms of service</p>
            <p className="mx-2">. Shipping Policy</p>
            <p className="mx-2">. Contact Information</p>
            <p className="mx-2">. Refund Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
