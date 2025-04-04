import { useState, useEffect } from "react";

const Quotes = () => {
  const quotes = [
    { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
    { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "Education is not preparation for life; education is life itself.", author: "John Dewey" },
    { text: "Strive for progress, not perfection.", author: "Unknown" },
    { text: "Your education is a dress rehearsal for a life that is yours to lead.", author: "Nora Ephron" }
  ];

  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="flex justify-center bg-opacity-50 backdrop-blur-md bg-gray-100">
      <div className=" rounded-lg p-6 max-w-2xl text-center">
        <p className="italic text-lg leading-relaxed font-serif text-gray-800">
          "{quote.text}"
        </p>
        <p className="mt-4 text-right text-base text-gray-600 font-semibold">
          - {quote.author}
        </p>
      </div>
    </div>
  );
};

export default Quotes;
