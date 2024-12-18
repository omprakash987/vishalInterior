import React from "react";

const PopularDesigns = () => {
  const designs = [
    { id: 1, src: "/path-to-your-image1.jpg", alt: "Design 1" },
    { id: 2, src: "/path-to-your-image2.jpg", alt: "Design 2" },
    { id: 3, src: "/path-to-your-image3.jpg", alt: "Design 3" },
    { id: 4, src: "/path-to-your-image4.jpg", alt: "Design 4" },
  ];

  return (
    <div className="bg-gray-100 py-8 w-full">
      {/* Title Section */}
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Browse Our Popular Designs
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto flex items-center">
        {/* Left Arrow */}
        <button className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 md:p-3 hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Design Images */}
        <div className="flex overflow-hidden space-x-4">
          {designs.map((design) => (
            <div key={design.id} className="min-w-[250px] md:min-w-[300px]">
              <img
                src="/vishalinterior/bedroom/1.jpg"
                alt={design.alt}
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 md:p-3 hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* View All Designs Link */}
      <div className="text-center mt-6">
        <a
          href="#"
          className="text-teal-600 font-semibold hover:underline text-lg"
        >
          View All Designs &gt;
        </a>
      </div>
    </div>
  );
};

export default PopularDesigns;
