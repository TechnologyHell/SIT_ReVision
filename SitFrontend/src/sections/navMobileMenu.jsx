import React, { useState } from 'react';

// Data for menu items
const sectionData = {
    about: [
        "Overview",
        "Vision & Mission",
        "Institute Leadership",
        "Accreditations & Rankings",
        "Campus Facilities",
        "Research & Innovation",
        "Governance & Policies",
        "Contact & Location",
    ],
    admissions: [
        "Why Choose SIT?",
        "Courses Offered",
        "Admission Process",
        "Eligibility Criteria",
        "Fees & Scholarships",
        "Important Dates",
        "International Admissions",
        "Download Prospectus",
        "FAQs",
    ],
    academics: [
        "Departments & Programs",
        "Faculty Directory",
        "Academic Calendar",
        "Curriculum & Syllabus",
        "Examinations & Results",
        "Student Support Services",
        "Research & Publications",
        "E-Learning Portal",
    ],
    studentlife: [
        "Clubs & Societies",
        "Events & Fests",
        "Sports & Athletics",
        "Hostel & Accommodation",
        "Cafeteria & Food Services",
        "Student Council",
        "Anti-Ragging Cell",
        "Alumni Network",
    ],
    placements: [
        "Placement Overview",
        "Top Recruiters",
        "Placement Statistics",
        "Internships",
        "Skill Development Programs",
        "Resume & Interview Prep",
        "Career Guidance Cell",
        "Entrepreneurship & Startups",
    ],
    news: [
        "Latest News",
        "Announcements",
        "Upcoming Events",
        "Media Coverage",
        "Press Releases",
        "Student Achievements",
        "Awards & Recognitions",
    ],
    quicklinks: [
        "Online Learning",
        "Library",
        "Campus Map",
        "Alumni",
        "Student Portal",
        "Faculty Portal",
    ],
};

const MobileMenu = () => {
    const [openSections, setOpenSections] = useState([]);

    // Toggle section visibility
    const toggleSection = (section) => {
        setOpenSections((prevSections) =>
            prevSections.includes(section)
                ? prevSections.filter((item) => item !== section)
                : [...prevSections, section]
        );
    };

    return (
        <div id="menu-overlay" className="fixed top-[110px] left-0 w-full h-[calc(100vh-110px)] bg-white bg-opacity-90 z-40 p-6 md:hidden menu-overlay">
            <ul id="mobile-menu" className="space-y-3 text-xl text-blue-900">
                {Object.keys(sectionData).map((section) => (
                    <li key={section}>
                        <div className="expandable-box flex justify-between items-center cursor-pointer" onClick={() => toggleSection(section)}>
                            <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                            <svg
                                className={`plus-icon w-6 h-6 transform transition-transform ${openSections.includes(section) ? 'rotate-45' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M12 6v12" />
                            </svg>
                        </div>
                        {openSections.includes(section) && (
                            <ul id={`${section}-submenu`} className="submenu pl-6 text-gray-700">
                                {sectionData[section].map((item, idx) => (
                                    <li key={idx} className="py-1 cursor-pointer hover:text-red-700">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            {/* Footer for Mobile Menu */}
            <div className="mobile-footer">
                <p>Siliguri Institute of Technology</p>
                <p>Hill Cart Road, Salbari, Siliguri · 0353-2778002 · info@sittechno.org</p>
            </div>

        </div>
    );
};

export default MobileMenu;
