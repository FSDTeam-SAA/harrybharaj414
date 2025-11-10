import React from "react";

const ImmigrationVisadetailsBenifit = () => {
  const services = [
    {
      id: 1,
      title: "Tailored Immigration Strategy",
      desc: "We carefully assess your education, experience, and career goals to recommend the best immigration route and destination country for you.",
    },
    {
      id: 2,
      title: "Error-Free Process",
      desc: "We ensure your documentation, eligibility requirements, and application forms are accurate and compliant — minimizing the risk of rejection.",
    },
    {
      id: 3,
      title: "Save Time & Resources",
      desc: "Our step-by-step guidance and expert handling streamline the entire process, helping you avoid delays and unnecessary expenses.",
    },
    {
      id: 4,
      title: "Access to Global Opportunities",
      desc: "We provide insights into global job markets, skill demands, and pathways that increase your chances of successfully immigrating.",
    },
    {
      id: 5,
      title: "Dedicated Expert Assistance",
      desc: "From initial consultation to post-visa guidance, our professionals support you through every step of your immigration journey.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10">
          Benefits of Choosing Our Immigration Consulting
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
