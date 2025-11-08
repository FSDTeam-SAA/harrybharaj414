

import React from "react";

const ImmigrationVisadetailsBenifit = () => {
  const services = [
    {
      id: 1,
      title: "Personalized Strategy",
      desc: "We evaluate your education, skills, experience, and goals to suggest the most suitable country, sector, and visa pathway.",
    },
    {
      id: 2,
      title: "Avoid Mistakes & Rejections",
      desc: "A complete checklist of required documents, eligibility criteria, and step-by-step guidance to ensure accuracy and avoid rejection.",
    },
    {
      id: 3,
      title: "Time & Cost Efficient",
      desc: "Professional CV, cover letter, and LinkedIn optimization tailored for international recruitment standards.",
    },
    {
      id: 4,
      title: "Global Opportunities",
      desc: "Guidance on job search platforms, top industries hiring foreign workers, and how to increase your chances of securing offers abroad.",
    },
    {
      id: 5,
      title: "Expert Support at Every Step",
      desc: "Assistance with form filling, documentation arrangement, submission guidelines, and compliance.",
    },
  ];
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10">
          Benefits of Choosing Our Work Visa Consulting{" "}
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

export default ImmigrationVisadetailsBenifit;
