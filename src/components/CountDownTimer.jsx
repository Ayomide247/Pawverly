import React, { useState, useEffect } from "react";

const CountDownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to calculate the remaining time
  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null; // If the countdown is over
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval
    return () => clearInterval(timer);
  }, []);

  // Display "Offer Ended" if the countdown is over
  if (!timeLeft) {
    return <div className="text-xl font-bold text-red-500">Offer Ended!</div>;
  }

  return (
    <div className="flex space-x-4 text-xl font-semibold text-center ">
      <div>
        <div className="py-3 px-5 text-2xl bg-primary text-[#ffffff] mb-3 w-[70px]">
          {timeLeft.days}
        </div>
        <div>Days</div>
      </div>
      <div>
        <div className="py-3 px-5 text-2xl bg-primary text-[#ffffff] mb-3 w-[70px]">
          {timeLeft.hours}
        </div>
        <div>Hours</div>
      </div>
      <div>
        <div className="py-3 px-5 text-2xl bg-primary text-[#ffffff] mb-3 w-[70px]">
          {timeLeft.minutes}
        </div>
        <div>Minutes</div>
      </div>
      <div>
        <div className="py-3 px-5 text-2xl bg-primary text-[#ffffff] mb-3 w-[70px]">
          {timeLeft.seconds}
        </div>
        <div>Seconds</div>
      </div>
    </div>
  );
};

export default CountDownTimer;
