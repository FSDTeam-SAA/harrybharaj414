import Image from "next/image";
import React from "react";

const WorkVisadetailsHero = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 mx-auto ">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Services We Provide
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Work Visa Consulting – Destiny Abroad FZ-LLC
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Securing a work visa and building a career abroad can be complex
            without the right professional support. Every country has its own
            rules, eligibility criteria, and documentation process, which often
            causes confusion and delays. Our Work Visa Consulting Service
            simplifies this journey by providing a clear, structured, and
            transparent process — from profile assessment to embassy filing
            support.
          </p>
        </header>

        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/service/workdetails.png"
            alt="Work visa consulting overview"
            width={1536}
            height={400}
            className="object-center w-full aspect-5/3 rounded-xl"
          />
        </div>

        {/* Detailed Overview */}
        <div className="mx-auto space-y-6 text-[#6C757D] text-[16px] leading-[150%]">
          <p>
            We assist both skilled and unskilled candidates, whether freshers or
            experienced professionals, in choosing the right country, visa
            route, and preparation plan for a secure and successful career
            overseas. With personalized guidance and step-by-step direction, you
            move forward with clarity and confidence.
          </p>

          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">
            Who Is This Service For?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Skilled and unskilled candidates seeking overseas employment opportunities</li>
            <li>Fresh graduates exploring international work options</li>
            <li>Experienced professionals aiming to expand their global career</li>
            <li>Jobseekers targeting Europe, the UK, Canada, or GCC markets</li>
            <li>Individuals planning long-term relocation and settlement abroad</li>
          </ul>

          <p>
            From eligibility checks to documentation and embassy filing, our
            consultants assist throughout the entire process — ensuring your
            experience is smooth, stress-free, and result-oriented.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkVisadetailsHero;
