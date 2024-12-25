import React from 'react';
import Navbar from './Navbar';

const Service = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 min-h-screen p-8">
      <div className="w-full">
        <Navbar />
      </div>
      <h1 className="text-5xl font-bold text-gray-800 mb-10 uppercase tracking-wide shadow-md">
        Services
      </h1>
      <ul className="text-lg text-gray-700 space-y-4 list-none">
        <li>Wooden Flooring</li>
        <li>Wood Wall Panel</li>
        <li>Hard Wood Flooring</li>
        <li>Dec Wood</li>
        <li>Thermo Pine</li>
        <li>Flooring Accessories</li>
        <li>Corian</li>
        <li>Charcoal Panel</li>
        <li>Vinyl Flooring</li>
        <li>Parquet Flooring</li>
        <li>Engineering Wood</li>
        <li>Wall Panel</li>
        <li>WPC Panel</li>
        <li>WPC Wall Cladding</li>
        <li>Blind</li>
        <li>Imported Wallpaper</li>
      </ul>
    </div>
  );
};

export default Service;
