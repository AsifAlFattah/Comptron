import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://aiubcc.org/wp-content/uploads/2021/03/47356872_11735059194_x0mm7.jpg",
  "https://aiubcc.org/wp-content/uploads/2021/03/47293015_11734278328_1mlxb.jpg",
  "https://aiubcc.org/wp-content/uploads/2021/03/47347082_11735244861_mqXFo.jpg",
  "https://aiubcc.org/wp-content/uploads/2021/03/47349067_11735219694_8nbJk.jpg",
];

const Gallery = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] min-h-screen py-16 px-8 text-center mt-28">
      <motion.div
        className="bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] text-white py-6 text-4xl font-extrabold shadow-xl rounded-lg mx-auto w-3/4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Gallery
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 bg-[#1e293b] p-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
