import React from "react";

const StudyVisadetailsIncluded = () => {
  const services = [
    {
      id: 1,
      title: "University & Country Selection",
      desc: "Assistance in choosing the best country, university, and program based on academic background, financial plan, and long-term career goals.",
    },
    {
      id: 2,
      title: "Admission & Application Support",
      desc: "Guidance for preparing application forms, personal statements, and supporting documents to meet international admission requirements.",
    },
    {
      id: 3,
      title: "Eligibility & Documentation Review",
      desc: "A detailed checklist and professional verification of all documents required for both university and visa filing.",
    },
    {
      id: 4,
      title: "Scholarship & Funding Guidance",
      desc: "Advice on available scholarships, tuition discounts, and part-time work policies to make studying abroad more affordable.",
    },
    {
      id: 5,
      title: "Visa Application Assistance",
      desc: "Help with completing forms, document arrangement, embassy filing, and compliance with country-specific visa rules.",
    },
    {
      id: 6,
      title: "Language & Interview Preparation",
      desc: "IELTS, TOEFL, or language readiness guidance, plus interview preparation for embassy or university assessments.",
    },
    {
      id: 7,
      title: "Pre-Departure & Post-Arrival Support",
      desc: "Orientation sessions covering travel, accommodation, and integration tips for an easy transition to student life abroad.",
    },
  ];

  return (
    <section className="bg-[#E8F1FD99] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10">
          What’s Included in This Service
        </h2>

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

export default StudyVisadetailsIncluded;
