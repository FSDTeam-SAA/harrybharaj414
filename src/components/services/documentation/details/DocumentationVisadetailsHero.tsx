import Image from "next/image";
import React from "react";

const DocumentationVisadetailsHero = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 mx-auto max-w-2xl">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Services We Provide
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Documentation & Application Support
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Professional consulting solutions designed to support your work,
            study, and immigration journey abroad with clarity and confidence.
          </p>
        </header>

        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/images/documentation.jpg"
            alt="Work visa consulting overview"
            width={1536}
            height={400}
            className="object-cover w-full aspect-5/2 rounded-xl"
          />
        </div>

        {/* Overview Section */}
        <div className=" mx-auto space-y-6">
          <h3 className="text-[#343A40] font-bold text-[20px] lg:text-[24px]">
            Overview
          </h3>
          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            Securing a work visa and building a career abroad can be challenging
            without the right guidance. Every country has its own rules,
            requirements, and documentation process, which often confuses
            applicants and leads to delays or rejections. Our Work Visa
            Consulting service is designed to simplify this journey for you,
            ensuring you take the right steps from the very beginning.
          </p>
          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            We provide personalized consultation based on your skills,
            education, work experience, and long-term career goals. Whether you
            are a skilled professional, recent graduate, or jobseeker, we help
            you choose the most suitable country, industry, and pathway for a
            strong and secure career abroad. With clear guidance, transparency,
            and strategic planning, we ensure you move forward with confidence.
          </p>

          {/* Target Audience */}
          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">
            Who Is This Service For?
          </h3>
          <ul className="list-disc pl-6 text-[#6C757D] text-[16px] leading-[150%] space-y-2">
            <li>Skilled professionals aiming to work abroad</li>
            <li>Fresh graduates seeking international career opportunities</li>
            <li>Jobseekers exploring European and GCC work opportunities</li>
            <li>
              Individuals planning long-term career growth and settlement abroad
            </li>
          </ul>

          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            From eligibility checks to documentation, job preparation, visa
            filing, and post-approval guidance, our experts support you
            throughout the entire process. We don’t just advise — we walk with
            you every step of the way to make your work visa journey smooth,
            stress-free, and result-oriented, helping you start a successful
            career overseas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DocumentationVisadetailsHero;
