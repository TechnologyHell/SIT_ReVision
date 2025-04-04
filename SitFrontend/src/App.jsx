import React, { useState } from "react";
import "./App.css";
import Header from "./sections/navHeader";
import MenuOverlay from "./sections/navMenuLayover";
import MobileMenu from "./sections/navMobileMenu";
import Carousel from "./sections/Caraousel.jsx";
import Quotes from "./sections/Quotes";
import HeroSection from "./sections/HeroSection";
import PlacementSlider from "./sections/PlacementSlider";
import ImageCarousel from "./sections/Awards";
import SearchOverlay from "./sections/searchOverlay";
import Footer from "./sections/Footer";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toggle Menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle Search Box (same function for search icon & close button)
  const toggleSearchBox = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 ">
      <div className="relative">
        {/* Header Section */}
        <Header
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          toggleSearchBox={toggleSearchBox} // Use the same function for search toggle
        />

        {/* Search Overlay */}
        <SearchOverlay isSearchOpen={isSearchOpen} toggleSearchBox={toggleSearchBox} />

        {/* Menu Overlay */}
        {isMenuOpen && <MenuOverlay />}

        {/* Mobile Menu */}
        {isMenuOpen && <MobileMenu />}
      </div>
      <Carousel />
      <Quotes />
      <HeroSection />
      <PlacementSlider />
      <ImageCarousel />
      <Footer/>
    </div>
  );
};

export default App;
