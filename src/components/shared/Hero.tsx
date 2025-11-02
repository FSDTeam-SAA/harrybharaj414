"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  // Sample images for the slider - replace with your actual images
  const sliderImages = ["/hero.png", "/hero4.jpg", "/hero3.jpg", "/hero2.jpg"];
  const sliderImages2 = ["/hero2.jpg", "/hero2.jpg", "/hero2.jpg", "/hero4.jpg"];

  // Refs for both sliders
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mainSliderRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const backgroundSliderRef = useRef<any>(null);

  // Handle slide change to sync both sliders
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSlideChange = (swiper: any) => {
    
    const backgroundSlider = backgroundSliderRef.current?.swiper;
    if (backgroundSlider && !backgroundSlider.destroyed) {
      backgroundSlider.slideTo(swiper.activeIndex);
    }
  };

  // Handle slider ready state
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMainSliderReady = (swiper: any) => {
    mainSliderRef.current = swiper;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBackgroundSliderReady = (swiper: any) => {
    backgroundSliderRef.current = swiper;
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content Section */}
          <div className="flex-1 max-w-2xl">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Gateway to Work,
                <br />
                Study & Immigration.
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                Destiny Abroad FZ-LLC is a UAE-based consultancy helping clients
                from India, Nepal, and GCC countries achieve their dreams of
                working, studying, or settling in Europe. We provide
                personalized guidance, documentation support, and expert visa
                consulting to make your journey abroad smooth and successful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors"
                >
                  More Info
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors"
                >
                  Book a Consultation
                </Button>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Social Media
              </h4>
              <div>
                <ul className="flex gap-4">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-600 rounded-full transition-colors group"
                    >
                      <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-pink-600 rounded-full transition-colors group"
                    >
                      <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-700 rounded-full transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-400 rounded-full transition-colors group"
                    >
                      <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-red-600 rounded-full transition-colors group"
                    >
                      <Youtube className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Slider Section */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            {/* Main Slider */}
            <div className="relative w-[70%] max-w-[550px] h-[600px] z-20">
              <Swiper
                onSwiper={handleMainSliderReady}
                onSlideChange={handleSlideChange}
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ 
                  clickable: true,
                  el: '.main-slider-pagination'
                }}
                autoplay={{ 
                  delay: 4000,
                  disableOnInteraction: false 
                }}
                loop={true}
                className="w-full h-full rounded-lg shadow-xl"
              >
                {sliderImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Custom pagination for main slider */}
              <div className="main-slider-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex justify-center space-x-2" />
            </div>

            {/* Background Slider */}
            <div className="absolute bottom-6 left-6 w-full max-w-[650px] h-[500px] bg-blue-100 rounded-lg z-10">
              <div className="relative w-full max-w-[550px] h-[500px] z-20">
                <Swiper
                  onSwiper={handleBackgroundSliderReady}
                  modules={[Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{ 
                    delay: 4000,
                    disableOnInteraction: false 
                  }}
                  loop={true}
                  allowTouchMove={false}
                  className="w-full h-full rounded-lg shadow-xl"
                >
                  {sliderImages2.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-full">
                        <Image
                          src={image}
                          alt={`Background Slide ${index + 1}`}
                          fill
                          className="object-cover rounded-lg opacity-80"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;