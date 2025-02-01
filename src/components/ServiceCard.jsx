import React from "react";

const ServiceCard = ({ title, description, imgURL }) => {
  return (
    <div className="bg-white w-[85rem] mx-auto p-8 flex flex-col md:flex-row rounded-lg">
      <div className="max-w-[400px]">
        <img src={imgURL} alt="image1" />
      </div>
      <div className="flex flex-col  justify-center">
        <div className="max-w-[600px]">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          <button className="mt-4 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-80 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
