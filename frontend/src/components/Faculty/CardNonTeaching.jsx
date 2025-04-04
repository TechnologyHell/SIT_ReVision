const CardNonTeaching = ({ facultyMembers }) => {
    return (
        <div className="gap-4 px-4 w-full">
            <div>
                <table className='text-center bg-white rounded-md place-self-center my-4 w-full table-fixed'>
                    <thead>
                        <tr className='text-gray-600 border-b-2 border-gray-400'>
                            <th className='p-2'>Name</th>
                            <th className='p-2'>Designation</th>
                            <th className='p-2 sm:table-cell hidden'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {facultyMembers?.map((faculty) => (
                            <tr key={faculty.id} className='hover:bg-gray-200 cursor-pointer transition-all duration-150'>
                                <td className='p-2'>{faculty.staff_name}</td>
                                <td className='p-2'>{faculty.designation}</td>
                                <td className='p-2 sm:table-cell hidden'>{faculty.email === ''?'NA':faculty.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CardNonTeaching;
