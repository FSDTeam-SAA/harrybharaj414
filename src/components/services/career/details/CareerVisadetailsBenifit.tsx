import React from "react";

const CareerVisadetailsBenifit = () => {
  const services = [
    {
      id: 1,
      title: "Tailored Career Strategy",
      desc: "Get a customized career roadmap based on your strengths, education, and experience to help you reach your global career goals faster.",
    },
    {
      id: 2,
      title: "Professional Edge",
      desc: "Stand out to employers with expertly written CVs, cover letters, and LinkedIn profiles that meet international hiring standards.",
    },
    {
      id: 3,
      title: "Save Time & Effort",
      desc: "Avoid the trial-and-error approach with clear, guided steps to build a professional brand and secure better opportunities efficiently.",
    },
    {
      id: 4,
      title: "Access to Global Opportunities",
      desc: "Gain insights into international job markets, emerging industries, and in-demand skills to explore worldwide career possibilities.",
    },
    {
      id: 5,
      title: "End-to-End Expert Guidance",
      desc: "From profile building to interview training, receive continuous support at every stage of your career advancement journey.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10">
          Benefits of Choosing Our Career Guidance Service
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

export default CareerVisadetailsBenifit;
