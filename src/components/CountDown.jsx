import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
import CountDownTimer from "./CountDownTimer";

const CountDown = () => {
  const offerEndDate = "2025-12-20T23:59:59";

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-around gap-10 lg:gap-0 py-10 my-10 border text-primary border-primary bg-[#ffffff] w-full">
      <div className="flex flex-col items-center justify-center px-5 text-center lg:px-0">
        <h1 className="mb-3 text-2xl font-bold sm:text-3xl">
          Limited-Time Offer!
        </h1>
        <p className="py-5 text-lg font-bold sm:text-xl">
          Buy 2, Get 1 Free on all pet sweaters!
        </p>
        <CountDownTimer targetDate={offerEndDate} />
        <p className="mt-3 text-sm text-gray-600 sm:text-base">
          Don't miss out on this amazing deal.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 px-5 sm:flex-row sm:gap-20 lg:px-0">
        <div className="flex flex-col items-center">
          <FaShippingFast className="text-[50px] sm:text-[70px]" />
          <p className="py-5 text-lg font-semibold text-center sm:text-xl">
            Free Shipping
          </p>
        </div>

        <div className="flex flex-col items-center">
          <GiReturnArrow className="text-[50px] sm:text-[70px]" />
          <p className="py-5 text-lg font-semibold text-center sm:text-xl">
            Free Return
          </p>
        </div>

        <div className="flex flex-col items-center">
          <MdOutlineSupportAgent className="text-[50px] sm:text-[70px]" />
          <p className="py-5 text-lg font-semibold text-center sm:text-xl">
            Support 24/7
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
