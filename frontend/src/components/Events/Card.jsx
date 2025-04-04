import { useNavigate } from "react-router-dom";

const Card = ({ events }) => {
    const navigate=useNavigate()
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options); // e.g., "4 April, 2025"
    };
    const handleClick = (id) => {
        navigate(`/events/${id}`)
    }
    console.log(events)
    return (
        <div className='border-l-5 border-[#070748] p-4 my-5'>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 '>
                {events.map((event) => (
                    <div key={event.event_id} className='flex flex-col items-center h-[400px] relative pb-10' >
                        <div className='h-[300px] w-full group'  onClick={()=>handleClick(event.event_id)}>
                            <img src={event?.image} className='h-[300px] overflow-clip object-cover object-center w-full' />
                            <div className='group-hover:top-5 absolute top-0 right-0  group-hover:-right-5 bg-[#070748] h-[300px] w-full z-[-1] transition-all duration-300'/>
                        </div>
                        <p className='text-2xl font-bold mt-5'>{event?.event_name}</p>
                        <p className='absolute bottom-0'>{formatDate(event.event_date)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
