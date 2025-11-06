import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const SuccessStory = () => {
  const stats = [
    { number: "400+", label: "Successful Visa Applications Processed" },
    {
      number: "1,200+",
      label: "Consultation Provided Access India, Nepal & GCC",
    },
    { number: "95%", label: "Climate Process & Rehabilitation Rate" },
    {
      number: "200+",
      label: "Clinical Successfully Placed to Europe for Work & Study",
    },
  ];

  const features = [
    "Licensed sub-based immigration & Owner Consultancy",
    "Personalized Outdoors with 6rd-to-first Documentation Support",
    "Trusted by Climate Access India, Nepal & GCC Countries",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-14  mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            About Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            About Destiny Abroad
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Guiding individuals from India, Nepal, and GCC countries with
            trusted immigration, work, and study visa consulting to build a
            successful future abroad.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <div className=" relative w-full aspect-square">
            <Image src={"/about.jpg"} alt="about" fill />
          </div>
          <div>
            <p className="text-[#1A73E8] text-[24px] pl-8 font-bold uppercase tracking-wide mt-8">
              Success Story
            </p>
            <div className=" rounded-2xl p-8 mb-4">
              <div className="grid grid-cols-1  gap-8">
                {/* Left Column - Text Content */}
                <div className="space-y-6">
                  <p className="text-[#6C757D] leading-relaxed">
                    Destiny Abroad FZ-LLC is a licensed UAE-based immigration
                    and career consulting firm dedicated to helping individuals
                    from India, Nepal, and GCC countries achieve global
                    opportunities. We specialize in guiding clients toward work,
                    study, and settlement pathways in Europe with trusted
                    consultation and seamless documentation support.
                  </p>
                  <p className="text-[#6C757D] leading-relaxed">
                    With a personalized and transparent approach, we simplify
                    the complex visa and immigration process, ensuring clarity
                    and confidence at every step. Our mission is to provide
                    reliable guidance, ethical consulting, and successful
                    outcomes that empower our clients to build a secure and
                    prosperous future abroad.
                  </p>
                </div>

                {/* Right Column - Features */}
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
