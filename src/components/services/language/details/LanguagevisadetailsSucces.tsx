"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LanguagevisadetailsSucces = () => {
  const slides = [
    "/visa/visa1.jpeg",
    "/visa/visa2.png",
    "/visa/visa3.jpeg",
    "/visa/visa4.png",
    "/visa/visa5.png",
    "/visa/visa6.jpeg",
    "/visa/visa7.jpeg",
    "/visa/visa8.png",
    "/visa/visa9.png",
    "/visa/visa10.png",
    "/visa/visa11.jpeg",
  ];

  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Adjust slides per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2); // Tablet
      } else {
        setSlidesPerView(3); // Desktop
      }
      
      // Reset to first slide when viewport changes
      setCurrent(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Next/Prev functions - move one slide at a time
  const nextSlide = () => {
    if (current + 1 > slides.length - slidesPerView) {
      setCurrent(0); // Loop back to start
    } else {
      setCurrent(prev => prev + 1); // Move one slide forward
    }
  };

  const prevSlide = () => {
    if (current === 0) {
      // Go to the last possible position
      setCurrent(slides.length - slidesPerView);
    } else {
      setCurrent(prev => prev - 1); // Move one slide back
    }
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current, slidesPerView]);

  // Get visible slides for current position
  const visibleSlides = slides.slice(current, current + slidesPerView);

  return (
    <section className="py-16 bg-white text-center relative">
      {/* Header */}
      <div className="mb-10">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
          Success Stories
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Real Success, Real Results
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm md:text-base">
          A glimpse of our clients successful journeys abroad — verified
          passports and approvals from India, Nepal, and GCC countries.
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current}-${slidesPerView}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-6 ${
              slidesPerView === 1 
                ? "grid-cols-1" 
                : slidesPerView === 2 
                ? "grid-cols-1 sm:grid-cols-2" 
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {visibleSlides.map((src, index) => (
              <motion.div
                key={`${current}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-2 border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-2 hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Visa ${current + index + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64 md:h-72"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Prev/Next Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prevSlide}
            className="cursor-pointer bg-white border shadow-md rounded-full p-3 hover:bg-gray-50 transition-colors duration-300"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="cursor-pointer bg-white border shadow-md rounded-full p-3 hover:bg-gray-50 transition-colors duration-300"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ 
          length: Math.max(1, slides.length - slidesPerView + 1) 
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              current === index
                ? "bg-blue-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default LanguagevisadetailsSucces;