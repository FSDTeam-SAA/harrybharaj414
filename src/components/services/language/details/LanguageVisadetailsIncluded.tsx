import React from "react";

const LanguageVisadetailsIncluded = () => {
  const services = [
    {
      id: 1,
      title: "Eligibility & Requirement Assessment",
      desc: "We identify the exact language test and minimum score required for your visa, course, or job type.",
    },
    {
      id: 2,
      title: "Personalized Test Planning",
      desc: "Guidance on selecting between IELTS, PTE, TOEFL, CELPIP, Duolingo, or OET based on your target country and institution.",
    },
    {
      id: 3,
      title: "Preparation Material & Strategy",
      desc: "Access curated study resources, official practice tests, and proven preparation frameworks to prepare efficiently.",
    },
    {
      id: 4,
      title: "One-to-One Guidance & Scheduling Support",
      desc: "Assistance in booking authorized test dates, creating a study plan, and time-management techniques for test day.",
    },
    {
      id: 5,
      title: "Result Review & Score Improvement Plan",
      desc: "Analysis of previous results (if applicable) and guidance on improving weak areas to meet embassy or university benchmarks.",
    },
    {
      id: 6,
      title: "Integration with Visa Process",
      desc: "We align your test timeline with your application submission, ensuring your results are ready when your file is lodged.",
    },
  ];

  return (
    <section className="bg-[#E8F1FD99] py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10">
          What’s Included in This Service
        </h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {services.map((item) => (
            <div key={item.id} className="flex flex-col">
              <h3 className="text-[18px] font-semibold text-[#343A40] mb-2">
                {item.id}. {item.title}
              </h3>
              <p className="text-[#6C757D] text-[15px] leading-relaxed whitespace-pre-line">
                • {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageVisadetailsIncluded;
