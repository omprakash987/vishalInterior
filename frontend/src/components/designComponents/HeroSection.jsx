import React from "react";
import SendEmail from "../backendComponents/SendEmail";


const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 w-full">
          <img
            src="/vishalinterior/bedroom/1.jpg"
            alt="Jolly Homes"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="lg:w-1/2 w-full p-8 text-center lg:text-left">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-red-600">
              Flat <span className="text-5xl">25% OFF</span>
            </h2>
            <p className="text-gray-700 text-xl">On Home Interiors</p>
            <p className="text-gray-500 font-medium">
              Offer valid until 25th Dec 2024!
            </p>
           <div className="flex items-center justify-between py-4 px-6 max-w-screen-xl mx-auto">
           <SendEmail quote={'Book Free Consultence'}/>
           </div>
            <p className="text-xs text-gray-400 mt-2">
              *T&C: Available on orders over Rs. 5 Lakh
            </p>
          </div>
        </div>
      </div>

      <div className="bg-teal-700 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-white p-4 rounded-full">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/stack.png"
                alt="Extra Storage"
                className="h-8 w-8 text-teal-600"
              />
            </div>
            <h4 className="font-semibold text-lg">20% Extra Storage</h4>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-white p-4 rounded-full">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/shield.png"
                alt="10-Year Warranty"
                className="h-8 w-8 text-teal-600"
              />
            </div>
            <h4 className="font-semibold text-lg">10-Year Warranty</h4>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-white p-4 rounded-full">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/money-bag.png"
                alt="No-Cost EMI"
                className="h-8 w-8 text-teal-600"
              />
            </div>
            <h4 className="font-semibold text-lg">No-Cost EMI</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
