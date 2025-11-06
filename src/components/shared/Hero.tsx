"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  // Sample images for the slider - replace with your actual images

  return (
    <section
      className=" py-16 lg:py-24 bg-cover w-full bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/harrybargh.png')" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
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
          <div className="relative md:w-1/2 w-full flex justify-center items-center rounded-2xl">
            {/* Main image */}
            <div className="relative w-[80%] h-[500px] lg:h-[788px] bg-white z-20">
              <div className="absolute -top-3 bg-blue-500 h-5 w-full rounded-t-xl"></div>
              <Image
                src={"/images/hero.png"}
                alt="about"
                fill
                className="object-cover rounded-b-xl"
              />
            </div>

            {/* Blue frame behind image */}
            <div className="absolute   w-[95%] aspect-5/4 z-10 opacity-40  ">
              <Image
                src={"/images/hero.png"}
                alt="background frame"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
