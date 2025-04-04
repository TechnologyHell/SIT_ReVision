import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebookSquare, 
  faTwitterSquare, 
  faLinkedin, 
  faInstagramSquare, 
  faYoutubeSquare 
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="border-t border-gray-300 w-full fixed bottom-0 bg-white">
      <div className="flex justify-start items-center w-full px-6 py-3">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <button className="p-2">
            <FontAwesomeIcon icon={faTwitterSquare} className="h-6 w-6" />
          </button>
          <button className="p-2">
          <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
          </button>
          <button className="p-2">
          <FontAwesomeIcon icon={faYoutubeSquare} className="h-6 w-6" />
          </button>
          <button className="p-2">
          <FontAwesomeIcon icon={faFacebookSquare} className="h-6 w-6"  />
          </button>
          <button className="p-2">
          <FontAwesomeIcon icon={faInstagramSquare} className="h-6 w-6" />
          </button>
        </div>

        {/* College Address & Details */}
        <div className="text-sm text-gray-700 ml-10">
          <strong>Siliguri Institute of Technology</strong> · Hill Cart Road, Salbari, Siliguri ·
          0353-2778002 · info@sittechno.org
        </div>
      </div>
    </div>
  );
};

export default Footer;
