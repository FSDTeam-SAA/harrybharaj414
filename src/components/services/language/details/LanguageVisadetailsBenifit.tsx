import React from "react";

const LanguageVisadetailsBenifit = () => {
  const benefits = [
    {
      id: 1,
      title: "Personalized Preparation Plan",
      desc: "Tailored study strategies based on your current proficiency and target scores to maximize efficiency and results.",
    },
    {
      id: 2,
      title: "Minimize Mistakes & Improve Scores",
      desc: "Focused coaching and step-by-step guidance help avoid common errors and increase your chances of achieving your desired score.",
    },
    {
      id: 3,
      title: "Time & Cost Efficiency",
      desc: "Optimized preparation schedule and resources ensure you get the best results without wasting time or money.",
    },
    {
      id: 4,
      title: "Confidence & Test Readiness",
      desc: "Mock tests, practice exercises, and feedback sessions build confidence and help you perform at your best on test day.",
    },
    {
      id: 5,
      title: "Expert Support Throughout",
      desc: "Ongoing support from experienced instructors covering all sections of the language test, including speaking, writing, reading, and listening.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10">
          Benefits of Choosing Our Language Test Preparation
        </h2>

        {/* Two Column Grid */}
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
