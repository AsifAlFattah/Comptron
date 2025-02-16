import React, { useState, useEffect } from "react";

const images = [
  "/src/assets/images/img1.jpg",
  "/src/assets/images/img2.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mx-20 w-auto h-96 md:h-[500px] lg:h-[600px]">
      {/* Carousel Wrapper */}
      <div className="relative h-full overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
