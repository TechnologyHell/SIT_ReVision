import { useState, useEffect } from "react";
import c0 from "../assets/c0.jpg";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";

const Carousel = () => {
    const slides = [
        { image: c0, title: "Siliguri institute of technology", subtitle: "Where Knowledge Meets Innovation", description: "SIT is a premier institution in North Bengal, fostering academic excellence and technological advancements." },
        { image: c1, title: "Our Campus", subtitle: "A Green Haven for Learning", description: "Experience a sprawling campus with state-of-the-art facilities, modern classrooms, and a vibrant student community." },
        { image: c2, title: "Academic Excellence", subtitle: "Empowering Future Leaders", description: "SIT offers a wide range of undergraduate and postgraduate programs, focusing on research-driven education." },
        { image: c3, title: "Our recruiting partners", subtitle: "Creating Solutions for Tomorrow", description: "Our placements encourage students to develop cutting-edge technologies and be a  part of prestigious organizations leveranging them with experience and growth in future." },
        { image: c4, title: "Vibrant Student Life", subtitle: "Beyond Academics, A World of Opportunities", description: "From technical fests to cultural events, Siliguri Institute of Technology provides a holistic environment for student growth." }
    ];
    
    const [index, setIndex] = useState(0);
    const totalSlides = slides.length;

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden mt-[110px]">
            <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className="w-full flex-shrink-0 relative bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-start px-16 text-white">
                            <p className="text-sm uppercase tracking-widest">{slide.subtitle}</p>
                            <h1 className="text-5xl font-bold">{slide.title}</h1>
                            <p className="text-lg text-white/70 max-w-xl mt-2">
                                {slide.description}
                            </p>
                            <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-md font-bold">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800/80 text-white p-3 rounded-full"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800/80 text-white p-3 rounded-full"
            >
                ❯
            </button>
        </div>
    );
};

export default Carousel;
