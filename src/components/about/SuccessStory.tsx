"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useBookingCounter } from "@/lib/api";

const SuccessStory = () => {
  const { data } = useBookingCounter();
  const stats = [
    {
      number: "500",
      label: "successful documentation and visa support cases completed",
    },
    {
      number: data?.count || 2155,
      label: "Consultations Provided UK,CANADA,EU,GCC,WORLDWIDE",
    },
    // { number: "95%", label: "Client Satisfaction & Success Rate" },
    {
      number: "",
      label: "Expanding partnerships UK,CANADA,EU,GCC,WORLDWIDE.",
    },
  ];

  const features = [
    "Work Permit & Visa Consultation – Step-by-step guidance for skilled, semi-skilled, andgeneral categories.",
    "Documentation & Embassy Filing Support – Assistance with preparation, verification, and submission of required documents.",
    "Study & Residency Consultation – Guidance for students and individuals pursuing long-term settlement pathways",
    "B2B Partnerships & Corporate Services – Collaboration with licensed employers,recruitment firms, and legal offices for verified documentation support.",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-14 mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Our Services – Destiny Abroad FZ-LLC
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Your Trusted Partner for Global Immigration & Documentation Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Destiny Abroad FZ-LLC is a UAE government-approved and licensed
            company providing professional immigration, documentation, and
            consulting services to clients around the world. We specialize in
            work permit, study, and residency consultation, helping individuals
            and organizations navigate embassy procedures, document preparation,
            and application filings with accuracy and transparency. Our mission
            is to simplify the global mobility process by delivering reliable,
            ethical, and result-oriented services for candidates seeking genuine
            opportunities abroad.
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
            <div className="rounded-2xl p-4  bg-gray-50">
              <p className="text-[#1A73E8] text-[24px] pb-3  font-bold uppercase tracking-wide ">
                Our Mission
              </p>
              <div className="space-y-6">
                <p className="text-[#6C757D] leading-relaxed">
                  To empower people worldwide with professional guidance and
                  authentic documentation support that helps them build a secure
                  and successful life overseas. We focus on integrity,
                  transparency, and professionalism, ensuring each client
                  experiences a smooth process from consultation to completion
                </p>
                {/* <p className="text-[#6C757D] leading-relaxed">
                  With a personalized and transparent approach, we simplify the complex visa and immigration process, ensuring clarity and confidence at every step. Our mission is to deliver reliable guidance, ethical consulting, and successful outcomes, empowering our clients to build a secure and prosperous future abroad.
                </p> */}
                {/* Features */}
                <p className="text-[#1A73E8] text-[24px]  font-bold uppercase tracking-wide mt-8">
                  What We Do
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm md:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[#6C757D] leading-relaxed">
                  We operate with a global network of trusted partners to
                  provide up-to-date, accurate information and country-specific
                  solutions.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <p className="text-[#1A73E8] text-[24px] pl-8 pb-4  font-bold uppercase tracking-wide mt-8">
              Our Achievements
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:pl-8 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">
                    {stat.number ? `${stat.number} +` : ""}
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
