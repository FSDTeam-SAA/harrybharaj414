import React from "react";

const LanguageVisadetailsBenifit = () => {
  const benefits = [
    {
      id: 1,
      title: "Visa-Focused Preparation",
      desc: "Training aligned with visa, university, or professional requirements, not just general language coaching.",
    },
    {
      id: 2,
      title: "Expert Advisory",
      desc: "Guidance from consultants familiar with test structures and embassy expectations.",
    },
    {
      id: 3,
      title: "Test-Specific Strategy",
      desc: "Tailored approach for IELTS, PTE, CELPIP, TOEFL, Duolingo, or OET to maximize scores.",
    },
    {
      id: 4,
      title: "Global Coverage",
      desc: "Support for all major destinations including Europe, UK, USA, Canada, Australia, and GCC countries.",
    },
    {
      id: 5,
      title: "Confidence & Clarity",
      desc: "Step-by-step guidance to reach the required band or score with realistic timelines and structured practice.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10">
          Benefits of Choosing Destiny Abroad FZ-LLC
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {benefits.map((item) => (
            <div key={item.id} className="flex flex-col">
              <h3 className="text-[18px] font-semibold text-[#343A40] mb-2">
                {item.id}. {item.title}
              </h3>
              <p className="text-[#6C757D] text-[15px] leading-relaxed">
                • {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageVisadetailsBenifit;
