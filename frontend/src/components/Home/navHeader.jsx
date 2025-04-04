import React from "react";
import CrossIcon from "./navCrossIcon";
import { FaUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
const Header = ({ isMenuOpen, toggleMenu, toggleSearchBox }) => {
  return (
    <header className="bg-[var(--navbar-bg)] shadow-md fixed top-0 w-full z-50 text-[var(--navbar-text)]">
      <nav className="flex items-center justify-between px-4 md:px-40 h-[110px] relative">
        <div className="flex items-center gap-6">
          {/* Menu Toggle Button */}
          <button
            id="menu-toggle"
            className={`z-50 relative text-xl focus:outline-none transition-transform duration-300 ${isMenuOpen ? "rotate-90 scale-90 opacity-70" : ""
              }`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <CrossIcon rotating={isMenuOpen} />
            ) : (
              <svg
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                className="w-8 h-8 transition-transform duration-300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Account Button */}
          <button id="accountBtn" className="hidden md:block">
            <FaUser className="nav_menu-icon w-7 h-7" />
          </button>

          {/* Search Toggle Button */}
          <button id="searchToggle" className="hidden md:block" onClick={toggleSearchBox}>
            <FaMagnifyingGlass className="w-7 h-7" />
          </button>
        </div>

        {/* Logo Section */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src="/logo.png" alt="Institute Logo" className="h-20" />
        </div>

        {/* Apply Button */}
        <div>
          <a href="/contact-us" className="bg-yellow-300 text-black px-5.5 py-3 text-l font-medium">
            <span className="inline md:hidden">APPLY</span>
            <span className="hidden md:inline">APPLY NOW</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
