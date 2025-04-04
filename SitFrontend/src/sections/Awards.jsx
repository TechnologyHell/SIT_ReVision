import React, { useRef } from "react";
import Slider from "react-slick";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import c0 from "../assets/c0.jpg";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";

// Import icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Image array
const images = [c0, c1, c2, c3, c4, c0, c1, c2, c3, c4];

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
    <div className="max-w-5xl mx-auto p-4 relative">
      {/* Slider Component */}
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="rounded-lg shadow-lg w-full"
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
