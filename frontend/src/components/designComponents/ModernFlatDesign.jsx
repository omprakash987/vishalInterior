import React from "react";

const ModernFlatDesign = () => {
  return (
    <div className="bg-gray-50 p-4 md:p-6">
      <div className="text-2xl font-bold text-gray-800 mb-6 md:mb-8">
        10,000+ Dream Homes Delivered
      </div>

      <div className="relative flex flex-col-reverse md:flex-row items-center md:justify-start">
        <div className="w-full md:w-2/3">
          <img
            src="/mordern3bhk.jpg"
            alt="Modern Flat Design"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        <div className="bg-white p-4 md:p-6 shadow-lg w-full md:w-1/3 mt-4 md:mt-0 text-center md:text-left">
          <h2 className="text-base md:text-xl font-semibold text-gray-800">
            A Modern 3 BHK Flat Of Deepankar Thakur
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ModernFlatDesign;
