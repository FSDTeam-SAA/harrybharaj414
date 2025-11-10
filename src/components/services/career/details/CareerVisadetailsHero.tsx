import Image from "next/image";
import React from "react";

const CareerVisadetailsHero = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 mx-auto max-w-2xl">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Services We Provide
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Career & CV Guidance
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Professional career consulting and document preparation designed to
            help you achieve your global career goals with clarity, confidence,
            and impact.
          </p>
        </header>

        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/images/career.jpg"
            alt="Career guidance consulting overview"
            width={1536}
            height={400}
            className="object-cover w-full aspect-[5/2] rounded-xl"
          />
        </div>

        {/* Overview Section */}
        <div className="mx-auto space-y-6">
          <h3 className="text-[#343A40] font-bold text-[20px] lg:text-[24px]">
            Overview
          </h3>
          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            Navigating your career path — especially across international
            markets — can be complex without expert advice. Each country has its
            own recruitment trends, documentation requirements, and job market
            expectations. Our <strong>Career & CV Guidance</strong> service is
            designed to equip you with the right strategy, professional tools,
            and confidence to stand out to global employers.
          </p>

          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            We offer personalized consulting based on your education, skills,
            and long-term career aspirations. Whether you’re a skilled
            professional, recent graduate, or jobseeker, we help you position
            yourself competitively for overseas job markets — with a strong
            resume, optimized LinkedIn profile, and tailored career direction.
          </p>

          {/* Target Audience */}
          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">
            Who Is This Service For?
          </h3>
          <ul className="list-disc pl-6 text-[#6C757D] text-[16px] leading-[150%] space-y-2">
            <li>Professionals planning to advance or relocate their careers abroad</li>
            <li>Fresh graduates seeking international job opportunities</li>
            <li>Jobseekers targeting European, Canadian, or GCC markets</li>
            <li>Individuals preparing for long-term global career development</li>
          </ul>

          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            From resume building and interview preparation to professional
            branding and documentation, our team ensures you are fully prepared
            for every stage of your global career journey. We don’t just advise
            — we empower you to succeed internationally with strategy,
            precision, and professional confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerVisadetailsHero;
