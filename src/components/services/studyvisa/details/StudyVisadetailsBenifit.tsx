import React from "react";

const StudyVisadetailsBenifit = () => {
  const services = [
    {
      id: 1,
      title: "Personalized Study Plan",
      desc: "We assess your academic background, interests, and career goals to design a customized study plan and recommend the best-fit universities and programs.",
    },
    {
      id: 2,
      title: "Higher Visa Approval Success",
      desc: "With accurate documentation, professional guidance, and compliance with embassy requirements, we help minimize errors and increase your visa approval rate.",
    },
    {
      id: 3,
      title: "Save Time & Effort",
      desc: "Our step-by-step process simplifies applications, admissions, and visa filing — saving you weeks of research, paperwork, and uncertainty.",
    },
    {
      id: 4,
      title: "Access to Top Global Universities",
      desc: "We partner with leading institutions across the UK, Canada, Australia, USA, and Europe to help you study at reputable and globally recognized universities.",
    },
    {
      id: 5,
      title: "End-to-End Expert Support",
      desc: "From course selection and SOP writing to visa filing and pre-departure prep — our consultants guide you through every stage of your study abroad journey.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10">
          Benefits of Choosing Our Study Visa Consulting
        </h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {services.map((item) => (
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

export default StudyVisadetailsBenifit;
