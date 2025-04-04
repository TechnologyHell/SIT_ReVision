const CardTeaching = ({ facultyMembers }) => {
    function cleanFacultyName(facultyName) {
        return facultyName.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s+/i, '').trim();
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {facultyMembers?.map((faculty) => (
                <div
                    style={{ userSelect: 'none' }}
                    key={faculty.id}
                    className="flex flex-col items-center shadow-md gap-4 p-4 rounded-2xl bg-white border-gray-400 hover:border-black transition-all duration-300 h-full hover:scale-105 hover:shadow-lg"
                >
                    <img
                        src={faculty.photo_url || `https://ui-avatars.com/api/?color=ffffff&background=random&bold=true&name=${cleanFacultyName(faculty?.faculty_name)}`}
                        alt={faculty.faculty_name}
                        className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="text-center">
                        <h3 className="font-bold text-lg">{faculty.faculty_name}</h3>
                        <p style={{ fontWeight: faculty.designation.includes('HoD') ? '500' : 'normal' }}>
                            {faculty.designation}
                        </p>
                        <a href={`mailto:${faculty.email}`} className="text-sm">{faculty.email}</a>
                        <p className="text-sm text-gray-500">{faculty.degrees}</p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default CardTeaching;
