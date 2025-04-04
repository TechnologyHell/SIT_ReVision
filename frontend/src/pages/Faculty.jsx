import { useEffect, useState } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";


import Header from "../components/Home/navHeader";
import MenuOverlay from "../components/Home/navMenuLayover";
import MobileMenu from "../components/Home/navMobileMenu";
import SearchOverlay from "../components/Home/searchOverlay";

import List from "./../components/Faculty/List";

import Dropdown from "./../components/DropDown";
import { useLocation } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const Faculty = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Toggle Menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Toggle Search Box (same function for search icon & close button)
    const toggleSearchBox = () => {
        setIsSearchOpen((prev) => !prev);
    };
    useEffect(() => {
        document.title = "SIT | Faculty";
    }, []);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('search');
    const [searchTerm, setSearchTerm] = useState();
    const [category, setCategory] = useState({});
    useEffect(() => {
        if (query) {
            // Define arrays of keywords for each category
            const teachingStaffKeywords = ['faculty', 'teacher', 'professor', 'staff'];
            const nonTeachingStaffKeywords = ['staff', 'administrator', 'employee', 'non-teaching'];
            console.log(query)
            // Check if the query matches any of the keywords for teaching staff
            if (teachingStaffKeywords.some(keyword => query.toLowerCase().includes(keyword))) {
                setCategory({ value: '1', label: 'Teaching' });  // Set category to 1 for teaching staff
                setSearchTerm('');  // Set searchTerm to an empty string
                return;
            }

            // Check if the query matches any of the keywords for non-teaching staff
            if (nonTeachingStaffKeywords.some(keyword => query.toLowerCase().includes(keyword))) {
                setCategory({ value: '2', label: 'Non Teaching' });  // Set category to 2 for non-teaching staff
                setSearchTerm('');  // Set searchTerm to an empty string
                return;
            }
        }
        setSearchTerm(query || '');
        setCategory('');
    }, [query]);
    const [department, setDepartment] = useState('')
    const [departments, setDepartments] = useState([]);
    const categories = [
        { value: '1', label: 'Teaching' },
        { value: '2', label: 'Non Teaching' },
    ];
    useEffect(() => {
        const fetchDepartments = async (category) => {
            setDepartment('')
            const response = await axios.get(`${apiUrl}/api/faculty/departments`)
            if (category.value == 1) {
                setDepartments(response.data.teachingDepartments)
                console.log(response.data.teachingDepartments)
            } else if (category.value == 2) {
                setDepartments(response.data.nonTeachingDepartments)
            }
        }
        fetchDepartments(category)
    }, [category])
    const handleSelect = (option) => {
        setCategory(option);
    };
    const handleDepartment = (department) => {
        setDepartment(department)
    }
    const [refresh, setRefresh] = useState(false);
    return (
        <div>
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
            <div className="md:p-5 p-3 w-full mx-auto max-w-[1400px] mt-[100px]">
                <p className="text-3xl font-semibold text-black">Faculty</p>

                <div className="flex justify-between mt-5 gap-3">
                    <Dropdown options={categories} selected={category} placeholder="Select an option" onSelect={handleSelect} className={`w-40`} />
                    {
                        !category &&
                        <div className="w-60" />
                    }
                    {
                        category &&
                        <Dropdown options={departments} selected={department} placeholder="Department" onSelect={handleDepartment} className={`w-60`} />
                    }
                    <div className="hidden md:flex relative flex-1">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`px-4 py-2 border rounded-2xl w-full outline-none bg-white`}
                            placeholder="Search"
                        />
                        <CiSearch className={`text-2xl absolute right-0 top-1/2 -translate-1/2`} />
                    </div>
                </div>
                <div className="flex md:hidden relative w-[100%] mt-5">
                    <input
                        type="text"
                        className={`px-4 py-2 rounded-2xl w-full outline-none bg-white`}
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <CiSearch className={`text-2xl absolute right-0 top-1/2 -translate-1/2`} />
                </div>
                <List department={department.label} category={category} refresh={refresh} setRefresh={setRefresh} searchTerm={searchTerm} />
            </div>
        </div>
    )
}
export default Faculty