import React from "react";

const DocumentationVisadetailsBenifit = () => {
  const benefits = [
    {
      id: 1,
      title: "Precision & Compliance",
      desc: "Every document checked, formatted, and verified according to embassy or immigration standards.",
    },
    {
      id: 2,
      title: "Time & Cost Efficiency",
      desc: "Avoid repeated submissions and wasted time due to missing or incorrect paperwork.",
    },
    {
      id: 3,
      title: "End-to-End Process Management",
      desc: "From document collection to embassy filing and post-submission follow-up.",
    },
    {
      id: 4,
      title: "Confidential & Secure Handling",
      desc: "All client documents are treated with strict confidentiality under UAE data protection norms.",
    },
    {
      id: 5,
      title: "Global Scope",
      desc: "Expertise in applications for Europe, UK, Canada, USA, Australia, and GCC countries.",
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

export default DocumentationVisadetailsBenifit;
