import React from "react";

const DocumentationVisadetailsIncluded = () => {
  const services = [
    {
      id: 1,
      title: "Document Checklist Preparation",
      desc: "We provide a complete checklist of required documents for your application, ensuring nothing is missed and everything is correctly formatted.",
    },
    {
      id: 2,
      title: "Eligibility Verification",
      desc: "Our experts review your profile and documents to confirm eligibility for the intended visa, immigration, or study pathway.",
    },
    {
      id: 3,
      title: "Document Organization & Formatting",
      desc: "We arrange, format, and compile all your documents professionally to meet official submission standards.",
    },
    {
      id: 4,
      title: "Application Form Assistance",
      desc: "Guidance and support for accurately filling out application forms, reducing errors and processing delays.",
    },
    {
      id: 5,
      title: "Supporting Evidence Review",
      desc: "We verify all supporting documents such as academic transcripts, financial statements, and employment records for accuracy and compliance.",
    },
    {
      id: 6,
      title: "Submission Guidance",
      desc: "Step-by-step instructions for submitting your documents to the relevant authorities correctly and on time.",
    },
    {
      id: 7,
      title: "Post-Submission Support",
      desc: "Ongoing assistance for follow-ups, clarifications, or additional documentation requests from authorities.",
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

export default DocumentationVisadetailsIncluded;
