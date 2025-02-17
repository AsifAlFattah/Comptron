import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "CSE FEST",
    image: "https://aiubcc.org/wp-content/uploads/2021/03/cs-fest-1.jpg",
  },
  {
    title: "PROGRAMMING CONTEST",
    image: "https://aiubcc.org/wp-content/uploads/2021/03/cs-fest-1.jpg",
  },
  {
    title: "ICPC PRELIMINARY 2024",
    image: "https://aiubcc.org/wp-content/uploads/2021/03/cs-fest-1.jpg",
  },
];

const EventHome = () => {
  return (
    <div className="bg-yellow-200 py-16 px-8 text-center relative overflow-hidden">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Events
      </motion.h2>
      <div className="flex justify-center gap-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative w-80 h-60 overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover brightness-75 hover:brightness-100 transition duration-500"
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl bg-black/50"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {event.title}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.button
        className="mt-10 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        CHECK OUT MORE OF EVENTS
      </motion.button>
    </div>
  );
};

export default EventHome;
