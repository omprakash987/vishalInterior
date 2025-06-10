import React from 'react';
import SendEmail from '../backendComponents/SendEmail';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8 md:px-20 lg:px-32">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready To Design Your Dream Home?</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Our Experience Centres</h3>
          <p className="text-sm">
           Shop No. 1 , Jaichand Market, Sikanderpur, Gurgaon, Haryana -122002
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2024 GSE-Commerce Pvt ltd. Privacy Policy | Terms of Use</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Fb</a>
            <a href="#" className="hover:text-gray-300">In</a>
            <a href="#" className="hover:text-gray-300">Tw</a>
            <a href="#" className="hover:text-gray-300">Yt</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;