import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { welcomeSlider } from "../Utils/data";
// console.log(welcomeSlider);

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="p-2 bg-primary text-[#ffffff] font-bold">
      <Slider {...settings} className="">
        {welcomeSlider.map((texts, id) => (
          <ul key={id}>
            <li style={{ textAlign: "center" }}>{texts}</li>
          </ul>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
