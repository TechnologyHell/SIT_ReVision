import React, { useState } from "react";
import Header from "./navHeader";
import MenuOverlay from "./navMenuLayover";
import MobileMenu from "./navMobileMenu";
import Carousel from "./Caraousel.jsx";
import Quotes from "./Quotes";
import HeroSection from "./HeroSection";
import PlacementSlider from "./PlacementSlider";
import ImageCarousel from "./Awards";
import SearchOverlay from "./searchOverlay";
import Highlight from "./Highlight";
import Footer from "./Footer";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toggle Menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle Search Box (same function for search icon & close button)
  const toggleSearchBox = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <div className="bg-[var(--bg)] ">
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
      <Highlight />
      <Footer />
    </div>
  );
};

export default Home;
