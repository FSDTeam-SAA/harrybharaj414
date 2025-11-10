import React from "react";

const WorkVisadetailsBenifit = () => {
  const benefits = [
    {
      id: 1,
      title: "Personalized Strategy",
      desc: "Tailored guidance for both skilled and unskilled applicants, freshers or experienced, ensuring you choose the right country, sector, and visa pathway.",
    },
    {
      id: 2,
      title: "Error-Free Documentation",
      desc: "Structured process reduces the risk of embassy rejections with accurate document preparation and step-by-step guidance.",
    },
    {
      id: 3,
      title: "Time & Cost Efficiency",
      desc: "Professional, organized handling from consultation to submission, saving your time, effort, and resources.",
    },
    {
      id: 4,
      title: "Global Coverage",
      desc: "Consulting for major destinations in Europe, the UK, Canada, and GCC countries.",
    },
    {
      id: 5,
      title: "Dedicated Support",
      desc: "Expert assistance throughout your entire visa and documentation journey, ensuring a smooth and stress-free experience.",
    },
  ];
  return (
    <section className="py-16">
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
      </div>
    </section>
  );
};

export default WorkVisadetailsBenifit;
