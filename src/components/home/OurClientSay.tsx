"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const OurClientSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderOn, setSliderOn] = useState(true);

  const data = [
    {
      url: "/video/video2.MP4",
      name: "Vishal",
      country: "India",
      title: "Work Visa",
      image: "/india.svg",
    },
    {
      url: "/video/video3.MP4",
      name: "Patel Anjali mahendrabhai",
      country: "India",
      title: "Study Abrod",
      image: "/india.svg",
    },
    {
      url: "/video/video4.MP4",
      name: "Rishabh",
      country: "India",
      title: "Work Visa",
      image: "/india.svg",
    },
    {
      url: "/video/video1.mp4",
      name: "Chetan",
      country: "India",
      title: "Work Visa",
      image: "/india.svg",
    },
  ];

  /** Navigation Controls **/
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  }, [data.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }, [data.length]);

  /** Auto-slide **/
  useEffect(() => {
    if (!sliderOn || data.length === 0) return;
    const interval = setInterval(() => handleNext(), 7000);
    return () => clearInterval(interval);
  }, [sliderOn, handleNext, data.length]);

  /** Visible Videos **/
  const getVisibleVideos = () => {
    const videos = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % data.length;
      videos.push({ ...data[index], position: i });
    }
    return videos;
  };

  const visibleVideos = getVisibleVideos();

  return (
    <section
      id="testimonials"
      className="py-16 lg:py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-[#1A73E8] font-semibold mb-2 uppercase tracking-wide">
            Testimonials
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed font-medium">
            Real experiences from clients across India, Nepal, and GCC countries
            who successfully achieved their work, study, and immigration goals
            with our guidance.
          </p>
        </header>

        {/* Video Carousel */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-full overflow-hidden">
            <div className="flex justify-center items-center gap-8 transition-all duration-500 ease-in-out">
              {visibleVideos.map((video, index) => (
                <article
                  key={`${video.url}-${video.position}`}
                  className={`flex-shrink-0 w-full max-w-sm transition-all duration-500 ease-in-out ${
                    video.position === 1 ? "scale-105" : "scale-100 opacity-90"
                  }`}
                >
                  <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                    <span className="absolute top-3 left-3 bg-white  px-2 py-2 rounded-full z-10 shadow-md">
                      <Image
                        src={"/logo.png"}
                        width={20}
                        height={20}
                        className="w-5 h-5 rounded-full object-cover "
                        alt="logo"
                      />
                      {/* {video.title} */}
                    </span>

                    {/* Optimized Video */}
                    <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                      <video
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        controls
                        preload="metadata"
                        playsInline
                        onPlay={() => setSliderOn(false)}
                        onPause={() => setSliderOn(true)}
                        title={`Testimonial by ${video.name} from ${video.country}`}
                      >
                        <source src={video.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {video.name}
                      </h3>
                      <p className="text-xs font-normal text-gray-700 mb-1">
                        ({video.title})
                      </p>
                      <p className="text-gray-600 text-sm font-medium flex gap-2 justify-center items-center pt-1">
                        From{" "}
                        <span className="font-normal">{video.country}</span>
                        <Image
                          src={video.image}
                          alt="country"
                          width={20}
                          height={20}
                          className="object-cover"
                        />
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <Button
              aria-label="Previous testimonials"
              onClick={handlePrev}
              variant="outline"
              className="rounded-full border-blue-500 text-blue-600 hover:bg-blue-100 transition-all"
            >
              <ChevronLeft />
            </Button>
            <Button
              aria-label="Next testimonials"
              onClick={handleNext}
              variant="outline"
              className="rounded-full border-blue-500 text-blue-600 hover:bg-blue-100 transition-all"
            >
              <ChevronRight />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {data.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientSay;
