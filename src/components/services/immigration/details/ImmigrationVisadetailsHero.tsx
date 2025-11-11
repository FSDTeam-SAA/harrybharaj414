import React from "react";
import Image from "next/image";

const ImmigrationVisadetailsHero = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 mx-auto max-w-3xl">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Services We Provide
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Immigration & Settlement Services – Destiny Abroad FZ-LLC
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Relocating permanently to another country requires proper planning,
            legal documentation, and compliance with ever-changing immigration
            laws. Destiny Abroad FZ-LLC simplifies this process by providing
            structured, transparent, and ethical consulting for individuals and
            families planning long-term migration or residency abroad.
          </p>
        </header>

        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/service/immigrationdetails.png"
            alt="Immigration and settlement overview"
            width={1536}
            height={400}
            className="object-center w-full aspect-5/3 rounded-xl"
          />
        </div>

        {/* Overview Section */}
        <div className="mx-auto space-y-6 text-[#6C757D] text-[16px] leading-[150%]">
          <h3 className="text-[#343A40] font-bold text-[20px] lg:text-[24px]">
            Overview
          </h3>
          <p>
            We assist clients with documentation and embassy filing for
            residency, citizenship, and settlement programs, including Skilled
            Migration, Golden Visa, and Residency by Investment. Whether your
            goal is to secure European residency, settle in Canada or Australia,
            or obtain a long-term residence permit through investment programs,
            we ensure your application is handled with precision and confidence.
          </p>

          <h3 className="text-[#343A40] font-semibold text-[20px] lg:text-[24px]">
            Current Global Settlement Pathways (2025)
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#343A40]">1. Residency by Investment / Golden Visa</h4>
              <p>
                Investment-based residence programs allow individuals and
                families to obtain long-term residence permits by contributing
                to a country&apos;s economy through real estate, business, or
                capital investment.
              </p>
              <p className="font-semibold">Popular Destinations (2025):</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Portugal – Golden Visa via investment in funds or local business; minimum investment ~€500,000.</li>
                <li>Spain – Golden Visa for real estate or business investment starting from €500,000.</li>
                <li>Greece – Residency through property investment (€250,000+ threshold; rising in select regions).</li>
                <li>UAE – 5-year and 10-year Golden Visas for investors, professionals, and business owners.</li>
                <li>Malta / Cyprus – Residency and citizenship programs through investment and contribution models.</li>
                <li>Caribbean Nations – Citizenship by Investment programs in St. Kitts, Dominica, Grenada, etc.</li>
                <li>Canada, USA, and Australia – Business and Investor Immigration streams under provincial or federal programs.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#343A40]">2. Skilled Migration & Work-Based Residency</h4>
              <p>
                For professionals aiming to settle permanently through employment
                or skills-based programs. Examples include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Canada PR (Express Entry & PNP)</li>
                <li>Australia Skilled Migration (Subclass 189, 190, 491)</li>
                <li>New Zealand Skilled Residence Pathway</li>
                <li>EU Blue Card and local residency options in Germany, France, and the Netherlands</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#343A40]">3. Family & Dependent Migration</h4>
              <p>
                Family reunification, spouse, or dependent visas enabling families
                to live together under legal residency.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#343A40]">4. Citizenship & Long-Term Residency</h4>
              <p>
                Advisory and documentation for individuals seeking
                naturalization or permanent residence after years of legal stay abroad.
              </p>
            </div>
          </div>

          {/* Target Audience */}
          <h3 className="text-[#343A40] font-semibold text-[20px] lg:text-[24px]">
            Who Is This Service For?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Investors and entrepreneurs seeking global residency through investment programs</li>
            <li>Professionals pursuing skilled migration or permanent settlement abroad</li>
            <li>Families applying for dependent, reunification, or long-term residence permits</li>
            <li>Individuals seeking citizenship or residency transitions after legal stay</li>
            <li>Retirees or financially independent persons planning relocation abroad</li>
          </ul>

          <p>
            Our team ensures every case is handled with authentic documentation,
            verified procedures, and clear communication from consultation to final submission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationVisadetailsHero;
