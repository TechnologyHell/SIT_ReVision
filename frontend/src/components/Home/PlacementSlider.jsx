import { useEffect, useRef } from "react";

const candidates = [
  { name: "Sweta Bhagat", department: "CSE", company: "Amazon", img: "/candidates/1.jpeg" },
  { name: "Abhipsa Adhikary", department: "MCA", company: "Amazon", img: "/candidates/3.jpeg" },
  { name: "Keshav Agarwal", department: "CSE", company: "Informatica", img: "/candidates/2.jpeg" },
  { name: "Alok Kumar Sah", department: "CSE", company: "Capgemini", img: "/candidates/4.jpeg" },
  { name: "Ruparna Datta", department: "ECE", company: "ISRO", img: "/candidates/5.jpeg" },
  { name: "Ankita Prasad", department: "ECE", company: "Capgemini", img: "/candidates/6.jpeg" },
];

const PlacementSlider = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const clonedContent = marquee.innerHTML;
    marquee.innerHTML += clonedContent;
  }, []);

  return (
    <div className="bg-[var(--bg)] py-6 mb-20" data-aos="zoom-in-left" data-aos-duration="500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div ref={marqueeRef} className="flex marquee whitespace-nowrap">
            {candidates.concat(candidates).map((candidate, index) => (
              <div
                key={index}
                className="bg-[var(--placement-bg)] shadow-md rounded-lg flex items-center p-6 w-96 mx-2 shrink-0"
              >
                <img
                  src={candidate.img}
                  alt={candidate.name}
                  className="w-24 h-24 rounded-full mr-4"
                />
                <div className="text-[var(--placement-text)]">
                  <h3 className="text-xl font-bold">{candidate.name}</h3>
                  <p>Department: {candidate.department}</p>
                  <p>Placed at: {candidate.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
            .marquee {
            
            display: flex;
            animation: marquee 15s linear infinite;
          }
          .marquee-content {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
          }
        `}
      </style>
    </div>
  );
};

export default PlacementSlider;
