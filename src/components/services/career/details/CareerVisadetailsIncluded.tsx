import React from "react";

const CareerVisadetailsIncluded = () => {
  const services = [
    {
      id: 1,
      title: "Career Assessment & Goal Mapping",
      desc: "We assess your qualifications, skills, and career aspirations to identify the best industries, countries, and roles that fit your profile.",
    },
    {
      id: 2,
      title: "Professional Resume & Cover Letter Writing",
      desc: "Expertly written documents that highlight your strengths and meet international recruitment standards to stand out to global employers.",
    },
    {
      id: 3,
      title: "LinkedIn Profile Optimization",
      desc: "We optimize your LinkedIn profile to boost visibility and attract recruiters from top organizations worldwide.",
    },
    {
      id: 4,
      title: "Interview Preparation & Mock Sessions",
      desc: "Personalized coaching sessions to help you build confidence, communicate effectively, and make a strong impression during interviews.",
    },
    {
      id: 5,
      title: "Job Market Guidance",
      desc: "Detailed insights on trending job markets, top global industries, and proven strategies for finding and applying to the right opportunities.",
    },
    {
      id: 6,
      title: "Career Branding Consultation",
      desc: "Tailored advice on personal branding, portfolio development, and how to position yourself as a valuable professional internationally.",
    },
    {
      id: 7,
      title: "Ongoing Career Mentorship",
      desc: "Continuous one-on-one support to refine your strategy, update your documents, and stay aligned with evolving global career trends.",
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

export default CareerVisadetailsIncluded;
