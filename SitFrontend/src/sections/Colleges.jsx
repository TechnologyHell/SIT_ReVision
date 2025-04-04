import React from "react";

const colleges = [
  { name: "College of Engineering & Management", code: "119", image: "/images/home/c1.jpg", link: "c1.html" },
  { name: "College of Professional Studies", code: "334", image: "/images/home/c2.jpg", link: "c2.html" },
  { name: "College of Hotel Management", code: "335", image: "/images/home/c3.jpg", link: "c3.html" },
  { name: "College of Computer Application", code: "336", image: "/images/home/c4.jpg", link: "c4.html" },
  { name: "SIT Diploma College", code: "", image: "/images/home/c5.jpg", link: "c5.html" },
];

const CollegeCard = ({ name, code, image, link }) => (
  <a
    href={link}
    className="relative flex justify-center items-center rounded-lg h-40 sm:h-48 transition-transform transform hover:scale-105"
    style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
    <span className="relative text-white text-center font-semibold px-4">
      {name}
      {code && <span className="block text-sm text-gray-300">(College Code - {code})</span>}
    </span>
  </a>
);

const Colleges = () => (
  <div className="flex justify-center items-center h-md mb-10 bg-gray-100 p-5">
    <div className="grid h=md gap-4 w-full sm:w-4/5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      {colleges.map((college, index) => (
        <CollegeCard key={index} {...college} />
      ))}
    </div>
  </div>
);

export default Colleges;
