import { useEffect, useState } from "react";

const ThemeToggler = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        // Check if a theme is saved in localStorage or if the system theme preference exists
        const savedTheme = localStorage.getItem("theme");

        // Apply the theme immediately based on localStorage or system preference
        const currentTheme = savedTheme;
        
        setTheme(currentTheme);
        document.documentElement.classList.add(
            currentTheme === 'dark' ? 'dark-theme' : 'light-theme'
        );
    }, []);

    useEffect(() => {
        if (theme) {
            if (theme === "dark") {
                document.documentElement.classList.add("dark-theme");
            } else {
                document.documentElement.classList.remove("dark-theme");
            }
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <div className="fixed top-1/2 right-0 -translate-y-1/2">
            <label className="switch rotate-90">
                <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                />
                <div className="slider round">
                    <div className="sun-moon">
                        <svg viewBox="0 0 100 100" className="moon-dot" id="moon-dot-1">
                            <circle r="50" cy="50" cx="50"></circle>
                        </svg>
                        <svg viewBox="0 0 100 100" className="moon-dot" id="moon-dot-2">
                            <circle r="50" cy="50" cx="50"></circle>
                        </svg>
                        <svg viewBox="0 0 100 100" className="moon-dot" id="moon-dot-3">
                            <circle r="50" cy="50" cx="50"></circle>
                        </svg>
                        <svg viewBox="0 0 100 100" className="light-ray" id="light-ray-1">
                            <circle r="50" cy="50" cx="50"></circle>
                        </svg>
                        <svg viewBox="0 0 100 100" className="light-ray" id="light-ray-2">
                            <circle r="50" cy="50" cx="50"></circle>
                        </svg>
                        <svg viewBox="0 0 100 100" className="light-ray" id="light-ray-3">
                            <circle r="50" cy="50" cx="50"></circle>
                        </svg>

                        <svg viewBox="0 0 100 100" className="cloud-dark" id="cloud-1">
                            <circle r="50" cy="50" cx="50"></circle>
                        </svg>
                        <svg viewBox="0 0 100 100" className="cloud-dark" id="cloud-2">
                            <circle r="50" cy="50" cx="50"></circle>
                        </svg>
                        <svg viewBox="0 0 100 100" className="cloud-dark" id="cloud-3">
                            <circle r="50" cy="50" cx="50"></circle>
                        </svg>
                        <svg viewBox="0 0 100 100" className="cloud-light" id="cloud-4">
                            <circle r="50" cy="50" cx="50"></circle>
                        </svg>
                        <svg viewBox="0 0 100 100" className="cloud-light" id="cloud-5">
                            <circle r="50" cy="50" cx="50"></circle>
                        </svg>
                        <svg viewBox="0 0 100 100" className="cloud-light" id="cloud-6">
                            <circle r="50" cy="50" cx="50"></circle>
                        </svg>
                    </div>
                    <div className="stars">
                        <svg viewBox="0 0 20 20" className="star" id="star-1">
                            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
                        </svg>
                        <svg viewBox="0 0 20 20" className="star" id="star-2">
                            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
                        </svg>
                        <svg viewBox="0 0 20 20" className="star" id="star-3">
                            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
                        </svg>
                        <svg viewBox="0 0 20 20" className="star" id="star-4">
                            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
                        </svg>
                    </div>
                </div>
            </label>
            <style>
                {`
                    .switch {
                        position: relative;
                        display: inline-block;
                        width: 50px;
                        height: 28px;
                    }

                    .switch input {
                        opacity: 0;
                        width: 0;
                        height: 0;
                    }

                    .slider {
                        position: absolute;
                        cursor: pointer;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: #2196f3;
                        transition: 0.4s;
                        z-index: 0;
                        overflow: hidden;
                    }

                    .sun-moon {
                        position: absolute;
                        content: "";
                        height: 20px;
                        width: 20px;
                        left: 4px;
                        bottom: 4px;
                        background-color: yellow;
                        transition: 0.4s;
                    }

                    input:checked + .slider {
                        background-color: black;
                    }

                    input:focus + .slider {
                        box-shadow: 0 0 1px #2196f3;
                    }

                    input:checked + .slider .sun-moon {
                        transform: translateX(22px);
                        background-color: white;
                    }

                    .moon-dot {
                        opacity: 0;
                        transition: 0.4s;
                        fill: gray;
                    }

                    input:checked + .slider .sun-moon .moon-dot {
                        opacity: 1;
                    }

                    .slider.round {
                        border-radius: 28px;
                    }

                    .slider.round .sun-moon {
                        border-radius: 50%;
                    }

                    #moon-dot-1 {
                        left: 8px;
                        top: 2px;
                        position: absolute;
                        width: 5px;
                        height: 5px;
                        z-index: 4;
                    }

                    #moon-dot-2 {
                        left: 1px;
                        top: 8px;
                        position: absolute;
                        width: 8px;
                        height: 8px;
                        z-index: 4;
                    }

                    #moon-dot-3 {
                        left: 13px;
                        top: 15px;
                        position: absolute;
                        width: 2px;
                        height: 2px;
                        z-index: 4;
                    }

                    #light-ray-1 {
                        left: -5px;
                        top: -5px;
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        z-index: -1;
                        fill: white;
                        opacity: 10%;
                    }

                    #light-ray-2 {
                        left: -40%;
                        top: -40%;
                        position: absolute;
                        width: 40px;
                        height: 40px;
                        z-index: -1;
                        fill: white;
                        opacity: 10%;
                    }

                    #light-ray-3 {
                        left: -12px;
                        top: -12px;
                        position: absolute;
                        width: 45px;
                        height: 45px;
                        z-index: -1;
                        fill: white;
                        opacity: 10%;
                    }

                    .cloud-light {
                        position: absolute;
                        fill: #eee;
                        animation-name: cloud-move;
                        animation-duration: 6s;
                        animation-iteration-count: infinite;
                    }

                    .cloud-dark {
                        position: absolute;
                        fill: #ccc;
                        animation-name: cloud-move;
                        animation-duration: 6s;
                        animation-iteration-count: infinite;
                        animation-delay: 1s;
                    }

                    #cloud-1 {
                        left: 22px;
                        top: 10px;
                        width: 30px;
                    }

                    #cloud-2 {
                        left: 32px;
                        top: 8px;
                        width: 16px;
                    }

                    #cloud-3 {
                        left: 14px;
                        top: 18px;
                        width: 22px;
                    }

                    #cloud-4 {
                        left: 28px;
                        top: 14px;
                        width: 32px;
                    }

                    #cloud-5 {
                        left: 38px;
                        top: 10px;
                        width: 16px;
                    }

                    #cloud-6 {
                        left: 18px;
                        top: 20px;
                        width: 22px;
                    }

                    @keyframes cloud-move {
                        0% {
                            transform: translateX(0px);
                        }
                        40% {
                            transform: translateX(2px);
                        }
                        80% {
                            transform: translateX(-2px);
                        }
                        100% {
                            transform: translateX(0px);
                        }
                    }

                    .stars {
                        transform: translateY(-24px);
                        opacity: 0;
                        transition: 0.4s;
                    }

                    .star {
                        fill: white;
                        position: absolute;
                        transition: 0.4s;
                        animation-name: star-twinkle;
                        animation-duration: 2s;
                        animation-iteration-count: infinite;
                    }

                    input:checked + .slider .stars {
                        transform: translateY(0);
                        opacity: 1;
                    }

                    #star-1 {
                        width: 16px;
                        top: 1px;
                        left: 2px;
                        animation-delay: 0.3s;
                    }

                    #star-2 {
                        width: 5px;
                        top: 12px;
                        left: 3px;
                    }

                    #star-3 {
                        width: 10px;
                        top: 16px;
                        left: 8px;
                        animation-delay: 0.6s;
                    }

                    #star-4 {
                        width: 15px;
                        top: 0px;
                        left: 16px;
                        animation-delay: 1.3s;
                    }

                    @keyframes star-twinkle {
                        0% {
                            transform: scale(1);
                        }
                        40% {
                            transform: scale(1.2);
                        }
                        80% {
                            transform: scale(0.8);
                        }
                        100% {
                            transform: scale(1);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ThemeToggler;
