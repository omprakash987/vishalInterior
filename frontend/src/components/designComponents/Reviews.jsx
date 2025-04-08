import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Aarav Mehta",
    text: "DesignNest brought our dream home to life. Every corner reflects elegance and comfort.",
    stars: 5,
  },
  {
    name: "Simran Kaur",
    text: "Absolutely loved their attention to detail. Our kitchen feels like a Pinterest dream!",
    stars: 5,
  },
  {
    name: "Rohan Kapoor",
    text: "They turned our dull apartment into a modern, cozy space. Highly recommend!",
    stars: 4,
  },
  {
    name: "Neha Sharma",
    text: "Their creative touch and professionalism are unmatched.",
    stars: 5,
  },
  {
    name: "Aditya Verma",
    text: "Truly impressed by their design sense and timely execution.",
    stars: 5,
  },
  {
    name: "Priya Jain",
    text: "Their team listened patiently and delivered beyond expectations!",
    stars: 5,
  },
  {
    name: "Manish Rao",
    text: "It was a smooth and delightful experience from start to finish.",
    stars: 4,
  },
  {
    name: "Sana Sheikh",
    text: "Loved their minimal and functional design approach!",
    stars: 5,
  },
  {
    name: "Kabir Ali",
    text: "Would recommend them 100%! Beautifully transformed our space.",
    stars: 5,
  },
  {
    name: "Ananya Gupta",
    text: "Elegant work, polite team, and stunning results. Thank you!",
    stars: 5,
  },
];

const ReviewCard = ({ name, text, stars }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
  >
    <div className="mb-4">
      <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
      <div className="flex gap-1 text-yellow-400 mt-1">
        {Array.from({ length: stars }).map((_, idx) => (
          <FaStar key={idx} size={16} />
        ))}
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </motion.div>
);

const Reviews = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-gray-800 mb-12"
      >
        What Our Clients Say
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
