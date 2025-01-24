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
          {[
            "Home", "Design Gallery", "Space Saving Designs", "How It Works",
            "Modular Kitchen Designs", "Wardrobe Designs", "Why Vishal Interior", "Recent Projects",
            "Custom Modular Kitchens", "Kids Bedroom Designs", "FAQs", "Experience Centres",
            "Bedroom Designs", "Bathroom Designs", "Careers", "Customer Reviews",
            "Living Room Designs", "Blogs", "Refer & Earn", "DC Signature",
            "Dining Room Designs", "Guides", "Contact Us", "DC Home Tours",
            "1 BHK Interior Designs", "2 BHK Interior Designs", "3 BHK Interior Designs", "Home Office Designs",
            "Interior Designers in Bangalore", "Interior Designers In Chennai", "Interior Designers In Hyderabad", "Interior Designers in Mumbai"
          ].map((link, index) => (
            <a href="#" key={index} className="hover:text-gray-300">
              {link}
            </a>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Our Experience Centres</h3>
          <p className="text-sm">
            Bengaluru: MG Road | Whitefield | HSR<br />
            Mysore: Jayalakshmi Puram<br />
            Mumbai: Thane | Navi Mumbai<br />
            Pune: Yerwada<br />
            Hyderabad: Gachibowli | Banjara Hills<br />
            Chennai: Anna Salai | OMR<br />
            Coimbatore: R.S. Puram<br />
            Vizag: Dwaraka Nagar<br />
            Ahmedabad: Thaltej<br />
            Kolkata: Salt Lake
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