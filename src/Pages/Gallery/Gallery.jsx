import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://aiubcc.org/wp-content/uploads/2021/03/47356872_11735059194_x0mm7.jpg",
    title: "Event 1",
    subtitle: "Exciting Highlights",
    date: "Jan 12, 2025",
  },
  {
    src: "https://aiubcc.org/wp-content/uploads/2021/03/47293015_11734278328_1mlxb.jpg",
    title: "Event 2",
    subtitle: "Memorable Moments",
    date: "Feb 8, 2025",
  },
  {
    src: "https://aiubcc.org/wp-content/uploads/2021/03/47347082_11735244861_mqXFo.jpg",
    title: "Event 3",
    subtitle: "Unforgettable Experience",
    date: "Mar 15, 2025",
  },
  {
    src: "https://aiubcc.org/wp-content/uploads/2021/03/47349067_11735219694_8nbJk.jpg",
    title: "Event 4",
    subtitle: "Captivating Scenes",
    date: "Apr 20, 2025",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 bg-[#29364d] p-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="text-left mt-3 text-white px-2">
              <h3 className="text-xl font-bold">{image.title}</h3>
              <p className="text-sm text-gray-400">{image.subtitle}</p>
              <p className="text-xs text-gray-500">{image.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <motion.img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded-lg shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold bg-red-600 rounded-full px-4 py-2 shadow-lg"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
