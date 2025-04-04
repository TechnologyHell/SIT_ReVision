import { useEffect } from "react";

import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import ContactForm from "../components/ContactForm";

const ContactUs = () => {
    useEffect(() => {
        document.title = "SIT | Contact Us";
    }, []);
    return (
        <div className="p-2 flex flex-col w-full">
            <div className="flex lg:flex-row flex-col gap-4 m-6 lg:bg-gray-100">
                {/* Contact Form */}
                <div className="flex-1 p-2 lg:bg-none bg-gray-100 w-full">
                    <ContactForm className={"bg-[#f3f4f6!important]"} />
                </div>

                {/* Iframe */}
                <div className="flex-1">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.2187153978794!2d88.37358387489007!3d26.7692972662401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441297b764937%3A0xc464d98ddba99ed2!2sSiliguri%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1743725949845!5m2!1sen!2sin"
                        loading="lazy"
                        className="w-full h-full border-0 min-h-[500px]"
                        title="Example Iframe"
                    />
                </div>
            </div>
            <div className="flex justify-evenly w-full text-center mx-auto gap-4 my-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="size-14 bg-[#3053b5] text-3xl text-white flex justify-center items-center rounded-full">
                        <FaLocationDot />
                    </div>
                    <div>
                        <strong>Address: </strong>S.I.T Campus, Salbari,<br />
                        Hill Cart Road, Sukna, Siliguri, Darjeeling,
                        <br /> 734009, West Bengal, India.
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="size-14 bg-[#3053b5] text-3xl text-white flex justify-center items-center rounded-full">
                        <MdEmail />
                    </div>
                    <div>
                        <strong>Email: </strong>
                        info@sittechno.org<br /> info@sittechno.edu.in
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="size-14 bg-[#3053b5] text-3xl text-white flex justify-center items-center rounded-full">
                        <IoCall/>
                    </div>
                    <div>
                        <strong>Phone: </strong>
                        0353-2778002 / 2778004,<br/> 0353-2778003 (Fax)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
