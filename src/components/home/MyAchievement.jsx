"use client";

import Image from "next/image";
import React from "react";

const MyAchievement = () => {
  const badges = [
    "/badge.png",
    "/badge2.png",
    "/badge3.png",
    "/badge4.png",
    "/badge5.png",
    "/badge6.png",
    "/badge7.png",
    "/bagde4.png",
  ];

  return (
    <section
      id="achievements"
      className="py-8 sm:py-16 bg-gradient-to-r from-blue-50 to-white overflow-hidden"
      aria-labelledby="achievements-title"
    >
      <div className="container mx-auto text-center">
        {/* Heading for SEO */}
        <h2
          id="achievements-title"
          className="text-2xl px-3 lg:px-0 md:text-3xl lg:text-4xl font-bold text-gray-800 mb-10"
        >
          India&apos;s Top-Ranked Consulting Partner — Book Your Session Today
        </h2>

        {/* Marquee Animation */}
        <marquee
          behavior="scroll"
          direction="left"
          scrollAmount={6}
          className="flex items-center gap-10"
        >
          {badges.map((badge, index) => (
            <span key={index} className="inline-block mx-6">
              <Image
                src={badge}
                alt={`Achievement badge ${index + 1}`}
                width={120}
                height={120}
                loading="lazy"
                className="object-contain inline-block min-w-[120px]"
              />
            </span>
          ))}
        </marquee>

        {/* Static fallback for accessibility and SEO */}
        <noscript>
          <div className="flex flex-wrap justify-center gap-10 mt-6">
            {badges.map((badge, index) => (
              <Image
                key={index}
                src={badge}
                alt={`Achievement badge ${index + 1}`}
                width={100}
                height={100}
                loading="lazy"
                className="object-contain"
              />
            ))}
          </div>
        </noscript>

        {/* Section description for SEO */}
        <p className="text-sm px-5 lg:px-0 md:text-base text-gray-600 mt-8 max-w-2xl mx-auto leading-relaxed">
          Celebrating our certifications, partnerships, and global recognition —
          every milestone reflects our commitment to excellence and client
          success worldwide.
        </p>
      </div>
    </section>
  );
};

export default MyAchievement;
