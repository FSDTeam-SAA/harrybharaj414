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
            Study Visa Consulting – Destiny Abroad FZ-LLC
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Pursuing higher education abroad opens global opportunities — but navigating university admissions and visa documentation can be complex without the right support. Each country follows its own admission criteria, documentation standards, and visa regulations.
          </p>
        </header>

        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/service/studydetails.png"
            alt="Study visa consulting overview"
            width={1536}
            height={500}
            className="object-center w-full aspect-5/3 rounded-xl"
          />
        </div>

        {/* Overview Section */}
        <div className="mx-auto space-y-6 text-[#6C757D] text-[16px] leading-[150%]">
          <h3 className="text-[#343A40] font-bold text-[20px] lg:text-[24px]">
            Overview
          </h3>
          <p>
            At Destiny Abroad FZ-LLC, our Study Visa Consulting Service provides professional, end-to-end guidance for students planning to study in the UK, USA, Canada, Australia, Europe, and other destinations worldwide. We simplify the process through transparent documentation, verified university placement coordination, and personalized admission support — helping you secure admission with confidence.
          </p>
          <p>
            Applying for a study visa can be overwhelming — each country has different requirements, admission criteria, and documentation processes. Our Study Visa Consulting service simplifies this journey by offering complete, step-by-step guidance from university selection to visa approval.
          </p>
          <p>
            Whether you’re planning to study in the UK, Canada, Australia, the USA, or Europe, our experts help you choose the right course, prepare strong applications, and ensure your visa documents meet all official standards. With personalized support and transparent advice, we help you take confident steps toward your academic goals abroad.
          </p>

          {/* Target Audience */}
          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">
            Who Is This Service For?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Students planning undergraduate, postgraduate, or diploma studies abroad</li>
            <li>Parents seeking professional support for their child’s international education journey</li>
            <li>Working professionals exploring study and migration pathways</li>
            <li>Students aiming to combine education with future career or residency options</li>
            <li>Graduates planning for postgraduate or research programs overseas</li>
            <li>Individuals seeking scholarships or specialized academic pathways</li>
          </ul>

          <p>
            From university selection to documentation, admission processing, and visa filing, we provide complete consulting and filing support that ensures accuracy and peace of mind. Our mission is to make your study abroad journey smooth, successful, and inspiring — helping you start your global education with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudyVisadetailsHero;
