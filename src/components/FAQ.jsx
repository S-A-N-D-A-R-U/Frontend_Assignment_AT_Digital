import React from "react";
import FAQItem from "./FAQItem";
import { QUESTION } from "../constants/QUESTION";

const FAQ = () => {
  return (
    <div className="max-w-xl mx-auto mt-8 mb-8">
      <h1 className="text-center text-2xl mb-6 font-bold text-primary">
        Frequently asked questions
      </h1>
      <div className="flex flex-col gap-4">
        {QUESTION.map((item, index) => (
          <FAQItem question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
