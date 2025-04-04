import React, { useState } from "react";

const images = [
  "/gallery/gal1.jpg",
  "/gallery/gal5.jpg",
  "/gallery/gal9.jpg",
  "/gallery/gal15.jpg",
  "/gallery/gal21.jpg",
  "/gallery/gal27.jpg",
];

const Highlight = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openOverlay = (index) => {
    setCurrentIndex(index);
  };

  const closeOverlay = () => {
    setCurrentIndex(null);
  };

  const showPrevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap max-w-screen-lg">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                src={images[0]}
                className="gallery-item w-full object-cover h-full object-center block rounded-lg cursor-pointer"
                onClick={() => openOverlay(0)}
                data-aos="flip-down"
                data-aos-delay="200"
                data-aos-duration='500'
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                src={images[1]}
                className="gallery-item w-full object-cover h-full object-center block rounded-lg cursor-pointer"
                onClick={() => openOverlay(1)}
                data-aos="flip-up"
                data-aos-delay="200"
                data-aos-duration='500'
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                src={images[2]}
                className="gallery-item w-full object-cover h-full object-center block rounded-lg cursor-pointer"
                onClick={() => openOverlay(2)}
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration='500'
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                src={images[3]}
                className="gallery-item w-full object-cover h-full object-center block rounded-lg cursor-pointer"
                onClick={() => openOverlay(3)}
                data-aos="zoom-out"
                data-aos-delay="200"
                data-aos-duration='500'
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                src={images[4]}
                className="gallery-item w-full object-cover h-full object-center block rounded-lg cursor-pointer"
                onClick={() => openOverlay(4)}
                data-aos="flip-down"
                data-aos-delay="200"
                data-aos-duration='500'
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                src={images[5]}
                className="gallery-item w-full object-cover h-full object-center block rounded-lg cursor-pointer"
                onClick={() => openOverlay(5)}
                data-aos="flip-down"
                data-aos-delay="200"
                data-aos-duration='500'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <span className="absolute top-5 right-8 text-white text-2xl cursor-pointer" onClick={closeOverlay}>
            &times;
          </span>
          <img src={images[currentIndex]} className="max-w-full max-h-full" alt="Large View" />
          <a className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-2xl cursor-pointer" onClick={showPrevImage}>
            &#10094;
          </a>
          <a className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-2xl cursor-pointer" onClick={showNextImage}>
            &#10095;
          </a>
        </div>
      )}
    </section>
  );
};

export default Highlight;