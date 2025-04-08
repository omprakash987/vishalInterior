import React from 'react';
import Navbar from './Navbar';

const services = [
  {
    title: 'Wooden Flooring',
    description: 'Beautiful wooden flooring that enhances the aesthetic of any space.',
    image: '/woodwall.jpg'
  },
  {
    title: 'Wood Wall Panel',
    description: 'Elegant wood wall panels that bring nature indoors.',
    image: '/wallpanel1.jpg' 
  },
  {
    title: 'Hard Wood Flooring',
    description: 'Durable and luxurious hardwood flooring for high-traffic areas.',
    image: '/services/OIP.jpeg',  
  },
  {
    title: 'Dec Wood',
    description: 'Premium dec wood materials designed for modern interiors.',
    image: '/wallpanel.jpg',  
  },
  
];

const Service = () => {
  return (
    <div>
<Navbar/>
    
    <div className="flex flex-col items-center justify-center bg-blue-50 min-h-screen p-8">
     
      <div className="w-full">
        
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-10 uppercase  md:text-5xl">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Service;
