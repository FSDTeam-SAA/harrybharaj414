"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Plus,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useBookingCounter } from "@/lib/api";

const Hero = () => {
  // Sample images for the slider - replace with your actual images
  const { data, error } = useBookingCounter();
  const [booking, setBooking] = useState(0);

  //  console.log('data',data.count)
  const countdata = data?.count || 2015;
  useEffect(() => {
    if (!countdata) return;
    let current = 0;

    const interval = setInterval(() => {
      current++;
      setBooking(current);

      if (current >= countdata) {
        clearInterval(interval);
      }
    }, 5);

    return () => clearInterval(interval);
  }, [countdata]);

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
                  className="border-2 border-blue-500 text-blue-600 hover:bg-white cursor-pointer bg-transparent hover:scale-105 transition-all duration-300 "
                >
                  More Info
                </Button>
                <Link href={'https://topmate.io/harry_singh12'}>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-500 text-white  cursor-pointer bg-[#1A73E8] hover:scale-105 transition-all duration-300"
                >
                  Book a Consultation
                </Button>
                </Link>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Social Media
              </h4>
              <div>
                <ul className="flex gap-4">
                  {/* <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-600 rounded-full transition-colors group"
                    >
                      <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="https://www.instagram.com/harry_bharaj34"
                      target="_blank"
                      className="flex items-center justify-center w-10 h-10  bg-pink-600 hover:bg-pink-700 rounded-full transition-colors group"
                      title="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-700 rounded-full transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-400 rounded-full transition-colors group"
                    >
                      <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="https://www.youtube.com/@HARRYSINGHEUROPA"
                      target="_blank"
                      className="flex items-center justify-center w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full transition-colors group"
                      title="YouTube"
                    >
                      <Youtube className="w-6 h-6 text-white" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Slider Section */}
          <div className="relative md:w-[70%] lg:w-1/2 w-full flex justify-center items-center rounded-2xl">
            {/* Main image */}
            <div className="relative w-[80%]  h-[500px] md:w-[90%] md:h-[600px] lg:h-[788px] bg-white z-20">
              <div className="absolute -top-3 bg-blue-500 h-5 w-full rounded-t-xl"></div>
              <Image
                src={"/images/hero.png"}
                alt="about"
                fill
                className="object-cover rounded-b-xl"
              />
            </div>

            {/* Blue frame behind image */}
            <div className="absolute   w-[95%] aspect-5/4 md:aspect-square z-10 opacity-40  ">
              <Image
                src={"/images/hero.png"}
                alt="background frame"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="absolute bottom-1/2 left-0 shadow-2xl bg-white rounded-2xl w-[180px] py-6 flex flex-col items-center justify-center z-30 border border-blue-100">
              <motion.p
                key={booking} // re-trigger animation on booking change
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-4xl font-bold text-gray-700 z-50 flex gap-1 items-center"
              >
                {booking} <Plus />
              </motion.p>

              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
                className="text-xs md:text-xl text-gray-700 mt-2 tracking-wide"
              >
                Bookings
              </motion.p>

              {/* Optional glowing pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-blue-200"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
