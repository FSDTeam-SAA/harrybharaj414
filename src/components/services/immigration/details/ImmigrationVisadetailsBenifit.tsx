import React from "react";

const ImmigrationVisadetailsBenifit = () => {
  const benefits = [
    {
      id: 1,
      title: "Global Expertise",
      desc: "Comprehensive knowledge of Golden Visa, Skilled Migration, and Residency by Investment programs across Europe, North America, Australia, UAE, and the Caribbean.",
    },
    {
      id: 2,
      title: "Transparent Process",
      desc: "Clear step-by-step guidance with full cost breakdown and document transparency throughout the immigration journey.",
    },
    {
      id: 3,
      title: "End-to-End Support",
      desc: "From eligibility checks and application preparation to post-approval settlement and integration guidance.",
    },
    {
      id: 4,
      title: "Ethical Consulting",
      desc: "All documentation prepared strictly according to embassy and legal requirements, with no false guarantees or shortcuts.",
    },
    {
      id: 5,
      title: "Multi-Regional Access",
      desc: "Consulting and support for Europe, the UK, Canada, USA, Australia, UAE, and select Caribbean residency programs.",
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

export default ImmigrationVisadetailsBenifit;
