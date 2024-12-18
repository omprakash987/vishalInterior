import React from "react";

const ModernFlatDesign = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Title Section */}
      <div className="text-2xl font-bold text-gray-800 mb-8">
        10,000+ Dream Homes Delivered
      </div>

      {/* Container for Image and Overlay Text */}
      <div className="relative flex items-center justify-start">
        {/* Image Section (Left-Aligned) */}
        <div className="w-full md:w-2/3">
          <img
            src="/vishalinterior/bedroom/1.jpg" // Replace with your actual image path
            alt="Modern Flat Design"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Overlay Text Section */}
        <div className="absolute right-10 bg-white p-4 md:p-6 shadow-lg w-3/4 md:w-1/3">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            A Modern 3 BHK Flat Of Debashish Chakraborty
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ModernFlatDesign;
