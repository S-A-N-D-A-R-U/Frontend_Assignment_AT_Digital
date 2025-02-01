import React from "react";
import LMButton from "./LMButton";

const ServiceCard = ({ title, description, imgURL, reverse }) => {
  return (
    <div
      className={`bg-white mx-auto p-8 flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 rounded-lg  max-w-5xl`}
    >
      {/* Image Section */}
      <div className="w-52 h-52 md:w-72 md:h-72 flex-shrink-0">
        <img src={imgURL} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Content Section */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl  text-primary  font-bold">{title}</h3>
        <p className="text-gray-600 md:text-lg mt-2">{description}</p>
        <LMButton/>
      </div>
    </div>
  );
};

export default ServiceCard;
