import React from "react";

// Import images for each step

const StepsSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Home Interiors Made Easy
        </h2>
        <p className="text-gray-600">
          You book a consultation, get guided by one of the 400+ top-notch
          interior designers, and we take care of the rest, from start to finish.
          We have done it for more than 10,000 homes already.
        </p>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
   
        <div className="text-center">
          <img
            src="/vishalinterior/bedroom/1.jpg"
            alt="Book an appointment"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-semibold text-gray-700 mt-4">
            <span className="text-2xl font-bold text-teal-600">01</span> Book an
            appointment
          </h3>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <img
            src="/vishalinterior/bedroom/1.jpg"
            alt="Meet our designers"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-semibold text-gray-700 mt-4">
            <span className="text-2xl font-bold text-teal-600">02</span> Meet our
            designers
          </h3>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <img
            src="/vishalinterior/bedroom/1.jpg"
            alt="Personalise your designs"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-semibold text-gray-700 mt-4">
            <span className="text-2xl font-bold text-teal-600">03</span>{" "}
            Personalise your designs
          </h3>
        </div>

        {/* Step 4 */}
        <div className="text-center">
          <img
            src="/vishalinterior/bedroom/1.jpg"
            alt="Move in"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-semibold text-gray-700 mt-4">
            <span className="text-2xl font-bold text-teal-600">04</span> Move in
          </h3>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        <a
          href="#"
          className="text-teal-600 font-semibold hover:text-teal-800 transition"
        >
          Learn More &gt;
        </a>
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default StepsSection;
