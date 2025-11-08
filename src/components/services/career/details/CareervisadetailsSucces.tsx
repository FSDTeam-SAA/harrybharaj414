


"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CareervisadetailsSucces = () => {
  const slides = [
    [
      "/service/work/visa1.jpg",
      "/service/work/visa2.jpg",
      "/service/work/visa3.jpg",
      "/service/work/visa4.jpg",
      "/service/work/visa5.jpg",
      "/service/work/visa6.jpg",
    ],
    [
      "/service/work/visa1.jpg",
      "/service/work/visa2.jpg",
      "/service/work/visa3.jpg",
      "/service/work/visa4.jpg",
    ],
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-white text-center">
      {/* Header */}
      <div className="mb-10">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
          Success Stories
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Real Success, Real Results
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm md:text-base">
          A glimpse of our clients’ successful journeys abroad — verified
          passports and approvals from India, Nepal, and GCC countries.
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {slides[current].map((src, i) => (
              <div
                key={i}
                className="border-2 border-gray-100 rounded-xl shadow-md hover:shadow-lg transition p-2"
              >
                <Image
                  src={src}
                  alt={`Visa ${i + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className=" relative container mx-auto">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute right-14 cursor-pointer  -translate-y-1/2 bg-white border shadow-md rounded-full p-2 hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 cursor-pointer  -translate-y-1/2 bg-white border shadow-md rounded-full p-2 hover:bg-gray-50"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default CareervisadetailsSucces;
