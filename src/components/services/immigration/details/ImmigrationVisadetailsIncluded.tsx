import React from "react";

const ImmigrationVisadetailsIncluded = () => {
  const services = [
    {
      id: 1,
      title: "Eligibility & Program Assessment",
      desc: "Evaluate your profile, goals, and budget to identify the most suitable country and immigration pathway, including Golden Visa, Skilled Migration, or Family Sponsorship.",
    },
    {
      id: 2,
      title: "Investment & Compliance Guidance",
      desc: "Step-by-step support for investment types, fund transfers, and legal documentation as per embassy or government regulations.",
    },
    {
      id: 3,
      title: "Document Preparation & Verification",
      desc: "Collect, translate, attest, and notarize documents according to embassy or residency requirements to ensure full compliance.",
    },
    {
      id: 4,
      title: "Application Filing & Embassy Submission",
      desc: "Complete assistance with organizing, preparing, and submitting applications via official government or consulate channels.",
    },
    {
      id: 5,
      title: "Post-Approval & Settlement Assistance",
      desc: "Guidance on residence permit collection, registration, taxation, and integration after approval for a smooth transition.",
    },
    {
      id: 6,
      title: "Continuous Policy Updates",
      desc: "Regular updates on immigration reforms, investment requirements, and program eligibility to help you make informed decisions.",
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

export default ImmigrationVisadetailsIncluded;
