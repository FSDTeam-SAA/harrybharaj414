import Image from "next/image";
import React from "react";

const StudyVisadetailsHero = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 mx-auto max-w-2xl">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Services We Provide
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Study Visa Consulting
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Expert guidance to help you achieve your dream of studying abroad.
            From choosing the right course to securing your visa, we make the
            entire process smooth, transparent, and stress-free.
          </p>
        </header>

        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/images/study.jpg"
            alt="Study visa consulting overview"
            width={1536}
            height={400}
            className="object-cover w-full aspect-5/2 rounded-xl"
          />
        </div>

        {/* Overview Section */}
        <div className="mx-auto space-y-6">
          <h3 className="text-[#343A40] font-bold text-[20px] lg:text-[24px]">
            Overview
          </h3>
          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            Applying for a study visa can be overwhelming — each country has
            different requirements, admission criteria, and documentation
            processes. Our Study Visa Consulting service simplifies this journey
            by offering complete, step-by-step guidance from university
            selection to visa approval.
          </p>
          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            Whether you’re planning to study in the UK, Canada, Australia, the
            USA, or Europe, our experts help you choose the right course,
            prepare strong applications, and ensure your visa documents meet all
            official standards. With personalized support and transparent advice,
            we help you take confident steps toward your academic goals abroad.
          </p>

          {/* Target Audience */}
          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">
            Who Is This Service For?
          </h3>
          <ul className="list-disc pl-6 text-[#6C757D] text-[16px] leading-[150%] space-y-2">
            <li>Students aspiring to pursue higher education abroad</li>
            <li>Parents seeking trusted visa guidance for their children</li>
            <li>Graduates planning for postgraduate or research programs overseas</li>
            <li>Individuals seeking scholarships or specialized academic pathways</li>
          </ul>

          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            From profile assessment and university admission to visa filing and
            pre-departure briefing, we support you every step of the way. Our
            mission is to make your study abroad journey smooth, successful, and
            inspiring — helping you start your global education with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudyVisadetailsHero;
