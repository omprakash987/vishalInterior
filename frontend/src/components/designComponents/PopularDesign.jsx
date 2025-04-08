import React, { useRef } from "react";
import { Link } from "react-router-dom";

const PopularDesigns = () => {
  const designs = [
    { id: 1, src: "/vishalinterior/bedroom/5.jpg", alt: "Design 1" },
    { id: 2, src: "/vishalinterior/livingroom/10.jpg", alt: "Design 2" },
    { id: 3, src: "/vishalinterior/modularkitchen/kitchendesign/photo2.jpg", alt: "Design 3" },
    { id: 4, src: "/vishalinterior/bedroom/1.jpg", alt: "Design 4" },
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, 
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-100 py-8 w-full">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Browse Our Popular Designs
      </h2>

      <div className="relative w-full max-w-6xl mx-auto flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 md:p-3 hover:bg-gray-200"
        >
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

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll space-x-4 no-scrollbar"
        >
          {designs.map((design) => (
            <div key={design.id} className="min-w-[250px] md:min-w-[300px]">
              <img
                src={design.src}
                alt={design.alt}
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 md:p-3 hover:bg-gray-200"
        >
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

      <div className="text-center mt-6">
        <Link
         to={"/modular-kitchen-design"}
          className="text-teal-600 font-semibold hover:underline text-lg"
        >
          View All Designs &gt;
        </Link>
      </div>
    </div>
  );
};

export default PopularDesigns;
