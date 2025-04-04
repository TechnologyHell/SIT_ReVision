import React, { useState } from "react";
import Footer from "./navFooter";

const MenuOverlay = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sectionData = {
    about: [
      { name: "Overview", link: "/about/overview" },
      { name: "Vision & Mission", link: "/about/vision" },
      { name: "Institute Leadership", link: "/about/leadership" },
      { name: "Accreditations & Rankings", link: "/about/accreditations" },
      { name: "Campus Facilities", link: "/about/facilities" },
      { name: "Research & Innovation", link: "/about/research" },
      { name: "Governance & Policies", link: "/about/governance" },
      { name: "Contact & Location", link: "/about/contact" }
    ],
    admissions: [
      { name: "Why Choose SIT?", link: "/admissions/why-choose" },
      { name: "Courses Offered", link: "/admissions/courses" },
      { name: "Admission Process", link: "/admissions/process" },
      { name: "Eligibility Criteria", link: "/admissions/eligibility" },
      { name: "Fees & Scholarships", link: "/admissions/fees" },
      { name: "Important Dates", link: "/admissions/dates" },
      { name: "International Admissions", link: "/admissions/international" },
      { name: "Download Prospectus", link: "/admissions/prospectus" },
      { name: "FAQs", link: "/admissions/faqs" }
    ],
    academics: [
      { name: "Departments & Programs", link: "/academics/departments" },
      { name: "Faculty Directory", link: "/faculty" },
      { name: "Academic Calendar", link: "/academics/calendar" },
      { name: "Curriculum & Syllabus", link: "/academics/curriculum" },
      { name: "Examinations & Results", link: "/academics/exams" },
      { name: "Student Support Services", link: "/academics/support" },
      { name: "Research & Publications", link: "/academics/research" },
      { name: "E-Learning Portal", link: "/academics/elearning" }
    ],
    studentlife: [
      { name: "Clubs & Societies", link: "/studentlife/clubs" },
      { name: "Events & Fests", link: "/studentlife/events" },
      { name: "Sports & Athletics", link: "/studentlife/sports" },
      { name: "Hostel & Accommodation", link: "/studentlife/hostel" },
      { name: "Cafeteria & Food Services", link: "/studentlife/cafeteria" },
      { name: "Student Council", link: "/studentlife/council" },
      { name: "Anti-Ragging Cell", link: "/studentlife/anti-ragging" },
      { name: "Alumni Network", link: "/studentlife/alumni" }
    ],
    placements: [
      { name: "Placement Overview", link: "/placements/overview" },
      { name: "Top Recruiters", link: "/placements/recruiters" },
      { name: "Placement Statistics", link: "/placements/statistics" },
      { name: "Internships", link: "/placements/internships" },
      { name: "Skill Development Programs", link: "/placements/skills" },
      { name: "Resume & Interview Prep", link: "/placements/prep" },
      { name: "Career Guidance Cell", link: "/placements/guidance" },
      { name: "Entrepreneurship & Startups", link: "/placements/entrepreneurship" }
    ],
    news: [
      { name: "Latest News", link: "/news/latest" },
      { name: "Announcements", link: "/news/announcements" },
      { name: "Upcoming Events", link: "/news/events" },
      { name: "Media Coverage", link: "/news/media" },
      { name: "Press Releases", link: "/news/press-releases" },
      { name: "Student Achievements", link: "/news/achievements" },
      { name: "Awards & Recognitions", link: "/news/awards" }
    ]
  };

  return (
    <div id="menu-overlay" className="fixed top-[110px] left-0 w-full h-[calc(100vh-60px)] bg-[var(--navbar-bg)] bg-opacity-90 z-40 px-4 md:px-40">
      <div className="p-6 grid grid-cols-3 gap-4 relative h-full">
        <div className="absolute top-0 left-1/3 h-full w-px bg-gray-300"></div>
        <div className="absolute top-0 left-2/3 h-full w-px bg-gray-300"></div>
        <div className="pr-4 text-[var(--nav-menu-text)]">
          <h2 className="text-base font-light">Sections</h2>
          <ul id="sections-list" className="mt-4 space-y-4 text-xl">
            {Object.keys(sectionData).map((section) => (
              <li
                key={section}
                className={`cursor-pointer hover:text-red-700 ${activeSection === section ? "text-red-800" : ""}`}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, " $1")}
              </li>
            ))}
          </ul>
        </div>
        <div className="pl-4">
          <h2 id="active-section-title" className="text-base font-light">
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1).replace(/([A-Z])/g, " $1")}
          </h2>
          <ul id="section-content" className="mt-4 space-y-4 text-xl text-[var(--nav-menu-text)]">
            {sectionData[activeSection].map((item, index) => (
              <li key={index} className="py-1">
                <a
                  href={item.link}
                  className="cursor-pointer hover:text-red-700"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pl-4 text-gray-400">
          <h2 className="text-base font-light">Quick Links</h2>
          <ul className="mt-4 space-y-4 text-xl">
            <li className="cursor-pointer hover:text-[var(--nav-side-menu-hover)]">Student Login</li>
            <li className="cursor-pointer hover:text-[var(--nav-side-menu-hover)]">Faculty Login</li>
            <li className="cursor-pointer hover:text-[var(--nav-side-menu-hover)]">Library</li>
            <li className="cursor-pointer hover:text-[var(--nav-side-menu-hover)]">Online Payments</li>
            <li className="cursor-pointer hover:text-[var(--nav-side-menu-hover)]">Contact & Help</li>
            <li className="cursor-pointer hover:text-[var(--nav-side-menu-hover)]"><a href="/gallery">Gallery</a></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuOverlay;
