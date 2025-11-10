import Image from "next/image";
import React from "react";

const ImmigrationVisadetailsHero = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 mx-auto max-w-2xl">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Services We Provide
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Immigration & Settlement Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Trusted immigration consulting services designed to help you and
            your family achieve permanent residency, citizenship, or long-term
            settlement abroad — with expert guidance every step of the way.
          </p>
        </header>

        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/images/Immigration.jpg"
            alt="Immigration and settlement overview"
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
            Immigration policies vary from country to country, and navigating
            them can be complex. From choosing the right program to preparing
            your documents and meeting eligibility criteria, our Immigration
            Consulting service helps simplify the path to permanent residency
            and citizenship for individuals and families alike.
          </p>
          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            Whether you’re seeking PR through skilled migration, family
            sponsorship, investor programs, or humanitarian pathways, we offer
            transparent guidance and strategic planning to increase your chances
            of success. Our mission is to help you make informed decisions and
            transition to your new country with confidence and peace of mind.
          </p>

          {/* Target Audience */}
          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">
            Who Is This Service For?
          </h3>
          <ul className="list-disc pl-6 text-[#6C757D] text-[16px] leading-[150%] space-y-2">
            <li>Professionals and skilled workers seeking permanent residency</li>
            <li>Families planning long-term relocation or sponsorship programs</li>
            <li>Investors and entrepreneurs exploring immigration-based business opportunities</li>
            <li>Individuals seeking citizenship or settlement in developed countries</li>
          </ul>

          <p className="text-[#6C757D] text-[16px] leading-[150%]">
            From eligibility assessment and application filing to documentation,
            interviews, and post-arrival settlement support — our team ensures
            your immigration process is organized, compliant, and stress-free.
            We’re not just your consultants — we’re your partners in building a
            secure future abroad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationVisadetailsHero;
