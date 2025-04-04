import React, { useRef } from "react";
import Slider from "react-slick";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import h1 from "/home/h1.jpg";
import h2 from "/home/h2.jpg";
import h3 from "/home/h3.jpg";
import h4 from "/home/h4.jpg";
import h5 from "/home/h5.jpg";
import h6 from "/home/h6.jpg";
import h7 from "/home/h7.jpg";
import h8 from "/home/h8.jpg";
// Import icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Image array
const images = [h1, h3, h5, h2, h4, h6, h7,h8];

export default function ImageCarousel() {
  const sliderRef = useRef(null);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Custom arrows will be used
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-4 relative">
      {/* Slider Component */}
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="rounded-lg shadow-lg w-full hover:scale-102 transition-all duration-200"
            />
          </div>
        ))}
      </Slider>

      {/* Custom Previous Button */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition"
      >
        <FaChevronLeft />
      </button>

      {/* Custom Next Button */}
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
