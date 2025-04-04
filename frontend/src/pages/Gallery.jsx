import React, { useState } from "react";
import Header from "../components/Home/navHeader";
import MenuOverlay from "../components/Home/navMenuLayover";
import MobileMenu from "../components/Home/navMobileMenu";
import SearchOverlay from "../components/Home/searchOverlay";
import Footer from "../components/Home/Footer";

const Gallery = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Toggle Menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Toggle Search Box
    const toggleSearchBox = () => setIsSearchOpen((prev) => !prev);

    // Image Paths
    const images = [
        "/gallery/gal1.jpg",
        "/gallery/gal2.jpg",
        "/gallery/gal3.jpg",
        "/gallery/gal4.jpg",
        "/gallery/gal5.jpg",
        "/gallery/gal6.jpg",
        "/gallery/gal7.jpg",
        "/gallery/gal8.jpg",
        "/gallery/gal9.jpg",
        "/gallery/gal10.jpg",
        "/gallery/gal11.jpg",
        "/gallery/gal12.jpg",
        "/gallery/gal13.jpg",
        "/gallery/gal14.jpg",
        "/gallery/gal15.jpg",
        "/gallery/gal16.jpg",
        "/gallery/gal17.jpg",
        "/gallery/gal18.jpg",
        "/gallery/gal19.jpg",
        "/gallery/gal20.jpg",
        "/gallery/gal21.jpg",
        "/gallery/gal22.jpg",
        "/gallery/gal23.jpg",
        "/gallery/gal24.jpg",
    ];

    const openOverlay = (index) => {
        setCurrentImageIndex(index);
        setIsOverlayOpen(true);
    };

    const closeOverlay = () => setIsOverlayOpen(false);

    const showPrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const showNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <div className="relative">
                {/* Header Section */}
                <Header
                    isMenuOpen={isMenuOpen}
                    toggleMenu={toggleMenu}
                    toggleSearchBox={toggleSearchBox}
                />

                {/* Search Overlay */}
                <SearchOverlay isSearchOpen={isSearchOpen} toggleSearchBox={toggleSearchBox} />

                {/* Menu Overlay */}
                {isMenuOpen && <MenuOverlay />}
                {isMenuOpen && <MobileMenu />}

                {/* Gallery Section */}
                <div className="flex justify-center mt-29">
                    <div className="gallery grid gap-4 p-5 w-full lg:w-4/5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="gallery-item rounded-lg cursor-pointer hover:scale-105 transition-all duration-200"
                                onClick={() => openOverlay(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* Image Overlay */}
            {isOverlayOpen && (
                <div
                    className="overlay fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={(e) => {
                        if (e.target.classList.contains("overlay")) closeOverlay();
                    }}
                >
                    <span
                        className="close-btn absolute top-5 right-8 text-white text-2xl cursor-pointer"
                        onClick={closeOverlay}
                    >
                        &times;
                    </span>
                    <img
                        className="overlay-image max-w-full max-h-full"
                        src={images[currentImageIndex]}
                        alt="Large View"
                    />
                    <a
                        className="prev absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl cursor-pointer"
                        onClick={showPrevImage}
                    >
                        &#10094;
                    </a>
                    <a
                        className="next absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl cursor-pointer"
                        onClick={showNextImage}
                    >
                        &#10095;
                    </a>
                </div>
            )}

            {/* Footer Section */}
            <Footer />

        </>
    );
};

export default Gallery;