import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Luxury Living Room",
    description: "Spacious layout with elegant textures and neutral tones.",
    location: "Mumbai, India",
    image: "/luxery-living-room.jpg",
  },
  {
    title: "Minimalist Bedroom",
    description: "A peaceful retreat designed with simplicity in mind.",
    location: "Delhi, India",
    image: "/mini-bedroom.jpg",
  },
  {
    title: "Modern Kitchen",
    description: "Bright, open kitchen with clean lines and high functionality.",
    location: "Pune, India",
    image: "/mordern-kitchen.jpg",
  },
  {
    title: "Boho Apartment",
    description: "Earthy tones, plants, and textures make this home feel alive.",
    location: "Bangalore, India",
    image: "/boho-apartment.jpg",
  },
  {
    title: "Contemporary Office",
    description: "A dynamic space blending creativity and focus.",
    location: "Hyderabad, India",
    image: "/classic-office.jpg",
  },
  {
    title: "Classic Dining Room",
    description: "Formal space with modern lighting and rich textures.",
    location: "Chennai, India",
    image: "/classic-dinning-room.jpg",
  },
 
];

const ProjectCard = ({ title, description, location, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
  >
    <img src={image} alt={title} className="w-full h-52 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      <div className="text-sm text-gray-500 mt-3">{location}</div>
    </div>
  </motion.div>
);

const RecentProjects = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-gray-800 mb-12"
      >
        Our Recent Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
