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
            Accurate documentation is the foundation of every successful visa
            application. Our experts help you prepare, organize, and verify all
            documents to ensure a smooth and error-free submission process.
          </p>
        </header>

        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/images/documentation.jpg"
            alt="Documentation and visa file preparation"
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
            Preparing visa and immigration documents can be complex and
            time-consuming. Every country has unique requirements and formats
            that must be followed strictly. Missing information or incorrect
            paperwork often leads to unnecessary delays or even rejections.
            That’s why our Documentation & Application Support service ensures
            your file meets every official standard before submission.
          </p>

          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            We provide end-to-end assistance — from verifying eligibility,
            organizing supporting evidence, and preparing financial or academic
            records, to ensuring your application is fully compliant with
            embassy or consulate guidelines. Our goal is to make the process
            stress-free, transparent, and efficient for you.
          </p>

          {/* Target Audience */}
          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">
            Who Is This Service For?
          </h3>
          <ul className="list-disc pl-6 text-[#6C757D] text-[16px] leading-[150%] space-y-2">
            <li>Students applying for study visas</li>
            <li>Professionals submitting work visa applications</li>
            <li>Immigrants preparing permanent residency documents</li>
            <li>Individuals seeking flawless and compliant visa files</li>
          </ul>

          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            From document review to final submission, our experts ensure your
            application package is complete, accurate, and professionally
            presented. With our guidance, you can move forward confidently,
            knowing your documents meet every visa authority’s expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DocumentationVisadetailsHero;
