import React from "react";
import Slider from "react-slick";
import logo1 from "../resources/carLogo/carlogo (1).svg";
import logo2 from "../resources/carLogo/carlogo (2).svg";
import logo3 from "../resources/carLogo/carlogo (3).svg";
import logo4 from "../resources/carLogo/carlogo (4).svg";
import logo5 from "../resources/carLogo/carlogo (5).svg";
import logo6 from "../resources/carLogo/carlogo (6).svg";
import logo7 from "../resources/carLogo/carlogo (7).svg";
import logo8 from "../resources/carLogo/carlogo (8).svg";
import logo9 from "../resources/carLogo/carlogo (9).svg";
import logo10 from "../resources/carLogo/carlogo (10).svg";

function LogoSlider() {
  const images = [
    {
      src: logo1,
      alt: "Car Logo",
    },
    {
      src: logo2,
      name: "Model S",
    },
    {
      src: logo3,
      alt: "Car Logo",
    },
    {
      src: logo4,
      alt: "Car Logo",
    },
    {
      src: logo5,
      alt: "Car Logo",
    },
    {
      src: logo6,
      alt: "Car Logo",
    },
    {
      src: logo7,
      alt: "Car Logo",
    },
    {
      src: logo8,
      alt: "Car Logo",
    },
    {
      src: logo9,
      alt: "Car Logo",
    },
    {
      src: logo10,
      alt: "Car Logo",
    },
  ];
  var settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 50,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {images.map((image) => {
        return (
          <img
            src={image.src}
            alt={image.alt}
            className="w-20 h-20 opacity-40 hover:opacity-100"
          />
        );
      })}
    </Slider>
  );
}

export default LogoSlider;
