"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DocumentationvisadetailsSucces = () => {
  const slides = [
    "/visa/visa1.png",
    "/visa/visa2.png",
    "/visa/visa3.png",
    "/visa/visa4.png",
    "/visa/visa5.png",
    "/visa/visa6.png",
    "/visa/visa7.png",
    "/visa/visa8.jpg",
    "/visa/visa9.jpg",
    "/visa/visa10.jpg",
    "/visa/visa11.jpg",
    "/visa/visa12.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Responsive slides per view
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2); // Tablet
      } else {
        setSlidesPerView(3); // PC/Laptop
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // Next / Prev logic
  const nextSlide = () => {
    if (current + slidesPerView >= slides.length) {
      setCurrent(0);
    } else {
      setCurrent(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - slidesPerView);
    } else {
      setCurrent(prev => prev - 1);
    }
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current, slidesPerView]);

  // Calculate slide width based on slides per view
  const slideWidth = `${100 / slidesPerView}%`;

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
        {/* Horizontal sliding effect */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / slidesPerView)}%)`,
          }}
        >
          {slides.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 p-2 transition-all duration-300"
              style={{ width: slideWidth }}
            >
              <div className="border-2 border-gray-100 rounded-xl shadow-md hover:shadow-lg transition p-2 h-full">
                <Image
                  src={src}
                  alt={`Visa ${i + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-64 md:h-72"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Buttons (centered below slider) */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="cursor-pointer bg-white border shadow-md rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="cursor-pointer bg-white border shadow-md rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(slides.length / slidesPerView) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index * slidesPerView)}
              className={`w-3 h-3 rounded-full transition-colors ${
                Math.floor(current / slidesPerView) === index
                  ? "bg-blue-600"
                  : "bg-gray-300"
              }`}
            ></button>
          )
        )}
      </div>
    </section>
  );
};

export default DocumentationvisadetailsSucces;