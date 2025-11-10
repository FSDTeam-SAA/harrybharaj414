import React from "react";

const StudyVisadetailsIncluded = () => {
  const services = [
    {
      id: 1,
      title: "Country & Course Selection",
      desc: "We assess your academic background, budget, and career goals to recommend the best countries, universities, and programs that align with your interests.",
    },
    {
      id: 2,
      title: "Admission & Application Guidance",
      desc: "Step-by-step support for university applications, including form submission, document verification, and meeting admission deadlines.",
    },
    {
      id: 3,
      title: "Document Preparation & Verification",
      desc: "Detailed checklist and assistance for transcripts, recommendation letters, SOP, passport, and financial proofs to ensure all documents meet visa standards.",
    },
    {
      id: 4,
      title: "SOP & Interview Coaching",
      desc: "Expert guidance for writing a compelling Statement of Purpose and preparing confidently for university or visa interviews.",
    },
    {
      id: 5,
      title: "Visa Filing & Processing Support",
      desc: "Comprehensive help with visa forms, fee payment, biometric appointments, and submission to ensure a smooth and timely approval process.",
    },
    {
      id: 6,
      title: "Scholarship & Financial Guidance",
      desc: "Advice on available scholarships, tuition fee planning, and financial documentation to strengthen your application and reduce costs.",
    },
    {
      id: 7,
      title: "Pre-Departure & Post-Arrival Support",
      desc: "Guidance on travel, accommodation, health insurance, and cultural orientation to help you adapt easily to your new academic environment.",
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
