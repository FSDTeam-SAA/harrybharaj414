import Image from "next/image";
import React from "react";

const LanguageVisadetailsHero = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 mx-auto max-w-2xl">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Services We Provide
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Language Test Preparation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Expert guidance to help you prepare for international language tests such as IELTS, TOEFL, PTE, or CELPIP, enhancing your chances for work, study, and immigration success abroad.
          </p>
        </header>

        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/images/language.jpg"
            alt="Language test preparation"
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
            Preparing for international language tests can be challenging without proper guidance. Each test has its own format, scoring criteria, and preparation requirements. Our Language Test Preparation service ensures you understand the test structure and are fully equipped to achieve your desired score.
          </p>
          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            We provide personalized coaching, practice materials, and strategies tailored to your proficiency level. Whether you are aiming to study abroad, secure a work visa, or migrate, we help you maximize your language test performance with confidence and efficiency.
          </p>

          {/* Target Audience */}
          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">
            Who Is This Service For?
          </h3>
          <ul className="list-disc pl-6 text-[#6C757D] text-[16px] leading-[150%] space-y-2">
            <li>Students preparing for higher education abroad</li>
            <li>Professionals seeking work opportunities overseas</li>
            <li>Individuals applying for immigration in English-speaking countries</li>
            <li>Anyone aiming to improve their international language test scores</li>
          </ul>

          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            Our experts guide you from initial assessment to full test readiness. With structured coaching, practice tests, and personalized feedback, we help you approach your language exam with confidence, ensuring the best possible outcome for your academic or career goals abroad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LanguageVisadetailsHero;
