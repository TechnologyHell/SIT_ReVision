import React, { useState } from "react";
import Header from "./navHeader";
import MenuOverlay from "./navMenuLayover";
import MobileMenu from "./navMobileMenu";
import SearchOverlay from "./searchOverlay";
import Footer from "./Footer";

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
        "/images/gallery/gal1.jpg",
        "/images/gallery/gal2.jpg",
        "/images/gallery/gal3.jpg",
        "/images/gallery/gal4.jpg",
        "/images/gallery/gal5.jpg",
        "/images/gallery/gal6.jpg",
        "/images/gallery/gal7.jpg",
        "/images/gallery/gal8.jpg",
        "/images/gallery/gal9.jpg",
        "/images/gallery/gal10.jpg",
        "/images/gallery/gal11.jpg",
        "/images/gallery/gal12.jpg",
        "/images/gallery/gal13.jpg",
        "/images/gallery/gal14.jpg",
        "/images/gallery/gal15.jpg",
        "/images/gallery/gal16.jpg",
        "/images/gallery/gal17.jpg",
        "/images/gallery/gal18.jpg",
        "/images/gallery/gal19.jpg",
        "/images/gallery/gal20.jpg",
        "/images/gallery/gal21.jpg",
        "/images/gallery/gal22.jpg",
        "/images/gallery/gal23.jpg",
        "/images/gallery/gal24.jpg",
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
                                className="gallery-item rounded-lg cursor-pointer"
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
