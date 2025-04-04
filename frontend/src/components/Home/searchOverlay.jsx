import React, { useEffect, useState } from "react";
import CrossIcon from "./navCrossIcon";
import { useNavigate } from "react-router-dom";

const SearchOverlay = ({ isSearchOpen, toggleSearchBox }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => setIsVisible(true), 10); // Delayed visibility for animation
    } else {
      setIsVisible(false);
    }
  }, [isSearchOpen]);

  const handleSearch = () => {
    navigate(`/search?query=${search}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div
      className={`fixed left-0 w-full flex items-center justify-center z-40 bg-opacity-90 transition-all duration-500 ease-in-out
      ${isSearchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      style={{ top: "110px" }}
    >
      <div className="w-full flex justify-center">
        <div className="relative w-[50%] md:w-[40%] lg:w-[30%] flex items-center bg-white rounded-full shadow-lg border border-gray-400 p-2 transition-transform duration-500 ease-in-out">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown} 
            placeholder="Search Here..."
            className="w-full px-4 py-2 text-lg border-none outline-none bg-transparent rounded-full"
          />
          <img
            src="/search_icon.svg"
            alt="Search"
            className="absolute right-12 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleSearch}
          />
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            onClick={toggleSearchBox}
          >
            <CrossIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
