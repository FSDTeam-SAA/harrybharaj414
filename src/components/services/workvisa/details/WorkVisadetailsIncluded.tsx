import React from "react";

const WorkVisadetailsIncluded = () => {
  const services = [
    {
      id: 1,
      title: "Country & Pathway Assessment",
      desc: "We evaluate your education, skills, experience, and goals to recommend the most suitable country, sector, and visa category.",
    },
    {
      id: 2,
      title: "Eligibility & Documentation Guidance",
      desc: "Receive a detailed checklist of required documents with step-by-step instructions to ensure compliance and accuracy.",
    },
    {
      id: 3,
      title: "Profile & Resume Enhancement",
      desc: "Professionally written CVs, cover letters, and LinkedIn profiles tailored to international standards.",
    },
    {
      id: 4,
      title: "Job Market Orientation",
      desc: "Guidance on identifying legitimate job sources, top hiring industries, and strategies to increase employability abroad.",
    },
    {
      id: 5,
      title: "Visa Application Support",
      desc: "Assistance with document organization, form completion, and embassy filing according to official guidelines.",
    },
    {
      id: 6,
      title: "Interview Preparation",
      desc: "Coaching and practical advice to help you confidently interact with potential employers or representatives overseas.",
    },
    {
      id: 7,
      title: "Pre-Departure & Language Guidance",
      desc: "Orientation on travel preparation, language readiness, and post-arrival settlement to ensure a smooth transition abroad.",
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

export default WorkVisadetailsIncluded;
