import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/dog1.jpg";
import img2 from "../assets/images/dog2.jpg";
import img3 from "../assets/images/dog3.jpg";

const HeaderSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

//   console.log(img1, img2, img3);

  return (
    <div className="w-full h-[400px]">
      <Slider {...settings}>
        <div>
          <img
            src={img1}
            alt="Slide 1"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <img
            src={img2}
            alt="Slide 2"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Slide 3"
            className="object-cover w-full h-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeaderSlider;
