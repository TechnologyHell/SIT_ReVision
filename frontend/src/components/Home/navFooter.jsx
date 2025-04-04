import React from "react";
import { 
  FaFacebookSquare, 
  FaTwitterSquare, 
  FaLinkedin, 
  FaInstagramSquare, 
  FaYoutubeSquare 
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t border-gray-300 w-full fixed bottom-0 bg-[var(--navbar-bg)]">
      <div className="flex justify-start items-center w-full px-6 py-3">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <button className="p-2">
            <FaTwitterSquare className="h-6 w-6" />
          </button>
          <button className="p-2">
          <FaLinkedin className="h-6 w-6" />
          </button>
          <button className="p-2">
          <FaYoutubeSquare className="h-6 w-6" />
          </button>
          <button className="p-2">
          <FaFacebookSquare className="h-6 w-6"  />
          </button>
          <button className="p-2">
          <FaInstagramSquare className="h-6 w-6" />
          </button>
        </div>

        {/* College Address & Details */}
        <div className="text-sm text-[var(--nav-foot-text)] ml-10">
          <strong>Siliguri Institute of Technology</strong> · Hill Cart Road, Salbari, Siliguri ·
          0353-2778002 · info@sittechno.org
        </div>
      </div>
    </div>
  );
};

export default Footer;
