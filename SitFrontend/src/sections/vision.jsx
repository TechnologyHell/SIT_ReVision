import React, { useState } from "react";
import Header from "./navHeader";
import MenuOverlay from "./navMenuLayover";
import MobileMenu from "./navMobileMenu";
import SearchOverlay from "./searchOverlay";
import Footer from "./Footer";

const Head = () => (
  <header
    className="relative w-full h-64 bg-cover bg-center"
    style={{ backgroundImage: "url('../../images/carousel-1.jpg')" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl md:text-5xl font-bold">Vision & Mission</h1>
      <p className="mt-5 text-xs md:text-sm text-yellow-500">Pages / About Us</p>
    </div>
  </header>
);

const Section = ({ title, content }) => (
  <div className="text-center mb-16">
    <h1 className="sm:text-3xl text-2xl font-bold text-gray-900 mb-4">{title}</h1>
    <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">{content}</p>
  </div>
);

// Feature component with a Unicode checkmark (✔)
const Feature = ({ title }) => (
  <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
    <span className="text-indigo-500 text-2xl mr-3">✔</span> {/* Unicode Checkmark */}
    <span className="text-lg font-medium text-gray-900">{title}</span>
  </div>
);

const VisionMission = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearchBox = () => setIsSearchOpen((prev) => !prev);

  const features = [
    "Academic Excellence",
    "Research & Innovation",
    "Industry Collaboration",
    "Holistic Development",
    "Global Competence",
    "Community Engagement",
  ];

  return (
    <div>
      {/* Header Section */}
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} toggleSearchBox={toggleSearchBox} />

      {/* Search Overlay */}
      <SearchOverlay isSearchOpen={isSearchOpen} toggleSearchBox={toggleSearchBox} />

      {/* Menu Overlay */}
      {isMenuOpen && <MenuOverlay />}
      {isMenuOpen && <MobileMenu />}

      {/* Page Banner */}
      <Head />

      {/* Main Content */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Vision Section */}
          <Section title="Our Vision" content="To be a center of academic excellence, fostering innovation, research, and industry-ready professionals while nurturing ethical values and social responsibility." />

          {/* Mission Section Styled */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900">Our Mission</h1>
            <p className="mt-4 text-lg text-gray-600">
              To be a center of academic excellence, fostering innovation, research, and 
              industry-ready professionals while nurturing ethical values and social responsibility.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <Feature key={index} title={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default VisionMission;
