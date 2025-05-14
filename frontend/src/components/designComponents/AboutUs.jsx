import React from "react";
import { FaPalette, FaRegSmileBeam, FaHome } from "react-icons/fa";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div>

    <Navbar className ="h-0" />
    <div className="bg-white text-gray-800 min-h-screen py-12 px-6 md:px-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Crafting Spaces, Creating Stories
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At <span className="font-semibold">DesignNest</span>, we don’t just decorate homes — we turn them into reflections of your personality and lifestyle. With a passion for detail and elegance, our team reimagines your spaces into timeless masterpieces.
        </p>
      </section>

      {/* Image Section */}
     

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <FaPalette className="text-4xl text-pink-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Creative Vision</h3>
            <p className="text-gray-600">
              We bring your ideas to life with innovative concepts and stylish designs that reflect your individuality.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <FaHome className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Space Optimization</h3>
            <p className="text-gray-600">
              From compact apartments to luxurious villas, we transform every inch into purposeful elegance.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <FaRegSmileBeam className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
            <p className="text-gray-600">
              Our success is measured by your smile. We work closely to ensure every detail meets your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Let’s Design Your Dream Space</h2>
        <p className="text-gray-600 mb-6">
          Ready to elevate your home’s aesthetic? Let’s get started today.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition">
          Contact Our Team
        </button>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
