import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
const apiUrl = import.meta.env.VITE_API_URL;

const Search = () => {
    function cleanFacultyName(facultyName) {
        return facultyName?.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s+/i, '').trim();
    }
    const navigate=useNavigate()
    const location = useLocation();
    const [events, setEvents] = useState([]);
    const [news, setNews] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [teachingStaff, setTeachingStaff] = useState([]);
    const [nonTeachingStaff, setNonTeachingStaff] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Use URLSearchParams to parse query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query'); // Get the 'query' parameter from the query string

    useEffect(() => {
        // Fetch data from the backend when the component mounts or query changes
        const fetchSearchResults = async () => {
            try {
                setLoading(true);
                setError(null); // Reset the error before fetching
                const response = await axios.get(`${apiUrl}/api/auth/search?q=${query}`);
                // Set the data to state based on the API response
                setEvents(response.data.events || []);
                setNews(response.data.news || []);
                setAnnouncements(response.data.announcements || []);
                setTeachingStaff(response.data.teachingStaff || []);
                setNonTeachingStaff(response.data.nonTeachingStaff || []);
            } catch (err) {
                setError('Failed to fetch data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchSearchResults();
        }
    }, [query]); // Run the effect whenever the query parameter changes
    if (loading) {
        return (
            <div className='flex justify-center items-center h-[50vh] w-screen'>
                <FaSpinner className='text-6xl animate-spin' />
            </div>
        )
    }

    if (error) {
        return <div>{error}</div>;
    }
    const handleFaculty = () => {
        navigate(`/faculty?search=${query}`)
    }
    return (
        <div className='lg:w-[90%] p-2 mt-10 mx-auto' style={{ fontFamily: 'Calibri,sans-serif' }}>
            <h1 className='text-3xl'>Search Result for "{query}"</h1>

            {/* Display Events */}
            {events.length > 0 && (
                <div>
                    <h2 className="text-2xl mt-5 my-2">Events</h2>
                    <div>
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="mb-5 bg-[#f6f6f6] group relative lg:p-5 p-2 pl-3 rounded cursor-pointer hover:bg-gray-200 transition-all duration-200"
                            >
                                <h3 className="font-semibold text-[40px] mb-5">{event.title}</h3>
                                <p className='line-clamp-3'>{event.content}</p>
                                <div className='h-0 group-hover:h-full bg-[#070748] absolute bottom-0 left-0 w-2 transition-all duration-800' />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Display News */}
            {news.length > 0 && (
                <div>
                    <h2 className="text-2xl mt-5 my-2">News</h2>
                    <div>
                        {news.map((newsItem) => (
                            <div
                                key={newsItem.id}
                                className="mb-5 bg-[#f6f6f6] group relative lg:p-5 p-2 rounded cursor-pointer hover:bg-gray-200 transition-all duration-200"
                            >
                                <h3 className="font-semibold text-[40px] mb-5">{newsItem.title}</h3>
                                <p className='line-clamp-3'>{newsItem.content}</p>
                                <div className='h-0 group-hover:h-full bg-[#070748] absolute bottom-0 left-0 w-2 transition-all duration-800' />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Display Announcements */}
            {announcements.length > 0 && (
                <div>
                    <h2 className="text-2xl mt-5 my-2">Announcements</h2>
                    <div>
                        {announcements.map((announcement) => (
                            <div
                                key={announcement.id}
                                className="mb-5 bg-[#f6f6f6] group relative lg:p-5 p-2 pl-3 rounded cursor-pointer hover:bg-gray-200 transition-all duration-200"
                            >
                                <h3 className="font-semibold text-[40px] mb-5">{announcement.title}</h3>
                                <p className='line-clamp-3'>{announcement.content}</p>
                                <div className='h-0 group-hover:h-full bg-[#070748] absolute bottom-0 left-0 w-2 transition-all duration-800' />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Display Teaching Staff */}
            {teachingStaff.length > 0 && (
                <div>
                    <h2 className="text-2xl mt-5 my-2">Teaching Staff</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                        {teachingStaff.map((faculty) => (
                            <div
                                style={{ userSelect: 'none' }}
                                key={faculty.id}
                                onClick={handleFaculty}
                                className="flex flex-col items-center shadow-md gap-4 p-4 rounded-2xl bg-white border-gray-400 hover:border-black transition-all duration-300 h-full hover:scale-105 hover:shadow-lg"
                            >
                                <img
                                    src={faculty.image || `https://ui-avatars.com/api/?color=ffffff&background=random&bold=true&name=${cleanFacultyName(faculty?.title)}`}
                                    alt={faculty.title}
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                                <div className="text-center">
                                    <h3 className="font-bold text-lg">{faculty.title}</h3>
                                    <p>
                                        {faculty.type}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Display Non-Teaching Staff */}
            {nonTeachingStaff.length > 0 && (
                <div>
                    <h2 className="text-2xl mt-5 my-2">Non-Teaching Staff</h2>

                    <div className='ml-5'>
                        {nonTeachingStaff.map((staff) => (
                            <div key={staff.id} className="mb-4 hover:bg-gray-100 px-5" onClick={handleFaculty}>
                                <h3 className="font-bold text-lg">{staff.title}</h3>
                                <p>{staff.content}</p>
                                {staff.image && <img src={staff.image} alt={staff.title} className="mt-2" />}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
