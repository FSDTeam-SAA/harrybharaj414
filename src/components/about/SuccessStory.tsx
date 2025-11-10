"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useBookingCounter } from "@/lib/api";

const SuccessStory = () => {
  const { data } = useBookingCounter();
  const stats = [
    { number: "400+", label: "Successful Visa Applications Processed" },
    {
      number: data?.count || 2155,
      label: "Consultations Provided Across India, Nepal & GCC",
    },
    { number: "95%", label: "Client Satisfaction & Success Rate" },
    {
      number: "200+",
      label: "Clients Successfully Placed in Europe for Work & Study",
    },
  ];

  const features = [
    "Licensed UAE-based immigration & career consultancy",
    "Personalized end-to-end documentation and application support",
    "Trusted by clients from India, Nepal & GCC countries",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-14 mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            About Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            About Destiny Abroad
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Destiny Abroad guides individuals from India, Nepal, and GCC countries with trusted immigration, work, study, and settlement services, helping them achieve successful opportunities abroad.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative w-full aspect-5/6">
            <Image
              src="/images/about.png"
              alt="About Destiny Abroad"
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-[#1A73E8] text-[24px] pl-8 font-bold uppercase tracking-wide mt-8">
              Success Story
            </p>

            <div className="rounded-2xl p-8 mb-4 bg-gray-50">
              <div className="space-y-6">
                <p className="text-[#6C757D] leading-relaxed">
                  Destiny Abroad FZ-LLC is a licensed UAE-based immigration and career consultancy dedicated to helping individuals from India, Nepal, and GCC countries access global opportunities. We specialize in guiding clients through work, study, and settlement pathways with seamless consultation and documentation support.
                </p>
                <p className="text-[#6C757D] leading-relaxed">
                  With a personalized and transparent approach, we simplify the complex visa and immigration process, ensuring clarity and confidence at every step. Our mission is to deliver reliable guidance, ethical consulting, and successful outcomes, empowering our clients to build a secure and prosperous future abroad.
                </p>

                {/* Features */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:pl-8 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-[#343A40] text-sm lg:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
