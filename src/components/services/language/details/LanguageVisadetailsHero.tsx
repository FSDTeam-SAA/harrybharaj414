import Image from "next/image";
import React from "react";

const LanguageVisadetailsHero = () => {
  const importancePoints = [
    "Visa Eligibility – Many immigration and study visa applications require proof of language proficiency. Without a valid score, your application may be considered incomplete or ineligible.",
    "Embassy Credibility – Embassies use language test results to assess your ability to adapt, communicate, and settle abroad. A high score increases the likelihood of approval.",
    "University & Employer Requirement – For students, universities assess readiness through IELTS, TOEFL, or PTE. For jobseekers and skilled migrants, English or local language ability is a mandatory criterion.",
    "Permanent Residency (PR) Points – Countries like Canada, Australia, and New Zealand assign migration points based on language proficiency. Higher scores directly improve your ranking and chances of selection.",
    "Professional Registration & Licensing – Medical, engineering, and hospitality professionals often need recognized language results to register with local authorities or licensing bodies."
  ];

  const requirementPoints = [
    "Study Visas – UK (Student Route), USA (F1), Canada (Study Permit), Australia (Subclass 500), New Zealand (Student Visa), Ireland (Non-EEA Student).",
    "Skilled & Work Visas – Canada Express Entry (IELTS General / CELPIP), Australia PR (IELTS or PTE), UK Skilled Worker (IELTS for UKVI), New Zealand Work Visa.",
    "Permanent Residency & Migration – Canada, Australia, and New Zealand point-based systems — language score is a key factor in ranking.",
    "Healthcare & Professional Visas – OET and IELTS Academic for doctors, nurses, and healthcare staff migrating to the UK, Ireland, or Australia.",
    "Citizenship & Settlement – Several European countries require A2–B1 proficiency in the local language as part of long-term residency or citizenship applications."
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 mx-auto max-w-2xl">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Services We Provide
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Language Test Preparation – Destiny Abroad FZ-LLC
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Language proficiency is crucial for visa eligibility, university admission, and successful integration abroad. We provide personalized guidance for IELTS, TOEFL, PTE, Duolingo, CELPIP, and OET to help you achieve required scores efficiently.
          </p>
        </header>

        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/service/languagedetails.png"
            alt="Language test preparation"
            width={1536}
            height={400}
            className="object-center w-full aspect-5/3 rounded-xl"
          />
        </div>

        {/* Overview */}
        <div className="mx-auto space-y-6 text-[#6C757D] text-[16px] leading-[150%]">
          <h3 className="text-[#343A40] font-bold text-[20px] lg:text-[24px]">
            Overview
          </h3>
          <p>
            Language proficiency is a crucial part of the visa and immigration process for most countries. It determines not just eligibility for a visa or study program but also how well an applicant can integrate and succeed abroad. At Destiny Abroad FZ-LLC, we provide personalized language test preparation guidance to help clients achieve the required scores in IELTS, PTE, TOEFL, Duolingo, CELPIP, and OET.
          </p>
          <p>
            Our consulting approach ensures that each candidate understands the score requirements for their specific visa or university, along with strategies to prepare effectively.
          </p>

          {/* Why Language Tests Are Important */}
          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">
            Why Language Tests Are Important
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {importancePoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {/* Where It’s Required */}
          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">
            Where It’s Required (Visa Categories & Examples)
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {requirementPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {/* Target Audience */}
          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">
            Who Is This Service For?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Students preparing for higher education abroad</li>
            <li>Professionals seeking work or migration opportunities overseas</li>
            <li>Individuals applying for permanent residency or citizenship</li>
            <li>Healthcare, engineering, or skilled professionals needing recognized language scores</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LanguageVisadetailsHero;
