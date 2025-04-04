import { useEffect, useState } from "react";

function LoadingScreenAnimation({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Call onComplete after fade out duration
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-linear-to-b from-[#161629] to-[#070748] flex flex-col items-center justify-center gap-5 transition-opacity duration-1000 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
    >
      <img src='/logo_inverse.png' className="h-48" />
      <span className="loader"></span>
      <style>
        {`
          .loader {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: inline-block;
            border-top: 3px solid #FFF;
            border-right: 3px solid transparent;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
          }

          @keyframes rotation {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default LoadingScreenAnimation;
