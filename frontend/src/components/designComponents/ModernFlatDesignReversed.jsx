import React from "react";

const ModernFlatDesignIntersecting = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="relative flex items-center justify-end">
      
        <div className="w-full md:w-2/3">
          <img
            src="/vishalinterior/bedroom/1.jpg" // Replace with the actual image path
            alt="Modern Flat Design"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Section (Intersecting the Image) */}
        <div className="absolute left-40 bg-white p-4 md:p-6 shadow-lg w-3/4 md:w-1/3 transform -translate-x-1/4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            A Modern 3 BHK Flat Of Debashish Chakraborty
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ModernFlatDesignIntersecting;
