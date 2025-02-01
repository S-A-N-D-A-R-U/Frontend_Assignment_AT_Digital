import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-analogous-4  rounded-lg p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className={`font-bold text-lg ${isOpen ? "text-blue-600" : "text-black"}`}>
          {question}
        </span>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="mt-3">
          <p className="text-gray-500">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};


export default FAQItem;
