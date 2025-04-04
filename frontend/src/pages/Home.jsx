import { useState } from "react";
import { MdFeedback } from "react-icons/md";
import ContactForm from "../components/ContactForm";
import ThemeToggler from "../components/ThemeToggler";
import LoadingScreenAnimation from "../components/LoadingScreenAnimation";
import Section from "../components/Home/Home";
import "../App.css";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [type,setType]=useState(false);
    const [title, setTitle]=useState('Get In Touch')
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setType(true)
        setTitle('Feedback Form')
    }

    return (
        <div
            className={`bg-[var(--bg)] text-[var(--text)] 
            h-[1000px] ${isLoading ? '' : 'h-full overflow-hidden'} transition-all duration-700 relative`}
        >
            <ThemeToggler />
            {!isLoading && (
                <LoadingScreenAnimation onComplete={() => setIsLoading(true)} />
            )}
            {/* Theme Switch Button */}
            {
                isLoading && (
                    <>
                        <Section />
                        <button
                            onClick={openModal}
                            className="text-2xl px-2 py-1 fixed size-10 bg-yellow-500 rounded-3xl left-5 top-[90%] text-white">
                            <MdFeedback/>
                        </button>

                        {isModalOpen && (
                            <div className="fixed inset-0 w-full mx-auto backdrop-blur-3xl bg-opacity-50 flex items-center justify-center z-50">
                                <div className={`bg-white sm:m-6 m-2 rounded-lg w-full lg:w-[50%] relative ${isModalOpen ? 'scale-100' : 'scale-0'} transition-all duration-1000`}>

                                    {/* ContactUs component inside the modal */}
                                    <ContactForm onClose={closeModal} title={title} className={"bg-white p-2 z-[1000]"} type={type} />
                                </div>
                            </div>
                        )}
                    </>
                )
            }
        </div>
    )
}

export default Home