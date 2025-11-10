import React from "react";

const StudyVisadetailsBenefit = () => {
  const benefits = [
    {
      id: 1,
      title: "Wide University Network",
      desc: "Partnerships and collaborations with recognized universities across the UK, USA, EU, Australia, and Canada.",
    },
    {
      id: 2,
      title: "Personalized Guidance",
      desc: "Tailored advice based on your academic goals, financial background, and visa eligibility.",
    },
    {
      id: 3,
      title: "Transparent & Ethical Consulting",
      desc: "Clear process without hidden costs or misleading claims.",
    },
    {
      id: 4,
      title: "Comprehensive Support",
      desc: "From admission to visa filing, every step is handled with professionalism and care.",
    },
    {
      id: 5,
      title: "Global Expertise",
      desc: "Experienced consultants assisting students worldwide through UAE’s trusted documentation platform.",
    },
  ];

  return (
    <section className="py-16 bg-[#F9FAFB]">
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

        <div className="mt-12 text-[#6C757D] text-[14px] leading-relaxed">
          <h3 className="font-semibold mb-2">Legal Disclaimer</h3>
          <p>
            Destiny Abroad FZ-LLC provides documentation, admission coordination, and embassy
            filing support for student visa applicants globally. The company does not operate as a
            recruiter or educational agent, and does not guarantee admission, visa issuance, or
            scholarship approval. All consultation and service fees are non-refundable, as they
            cover expert consulting, documentation review, and administrative assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudyVisadetailsBenefit;
