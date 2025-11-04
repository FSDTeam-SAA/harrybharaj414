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
  ];

  return (
    <section className="py-10 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Our Achievements
        </h2>

        <marquee behavior="scroll" direction="left" scrollamount="6">
          <div className="flex items-center gap-10">
            {badges.map((badge, index) => (
              <Image
                key={index}
                src={badge}
                alt="Badge"
                width={100}
                height={100}
                className="inline-block object-contain"
              />
            ))}
          </div>
        </marquee>
      </div>
    </section>
  );
};

export default MyAchievement;
