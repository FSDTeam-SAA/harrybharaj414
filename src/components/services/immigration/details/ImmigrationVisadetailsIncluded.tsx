import React from "react";

const ImmigrationVisadetailsIncluded = () => {
  const services = [
    {
      id: 1,
      title: "Country & Immigration Pathway Assessment",
      desc: "We analyze your background, professional experience, and personal goals to recommend the most suitable country and immigration program for permanent settlement.",
    },
    {
      id: 2,
      title: "Eligibility & Document Verification",
      desc: "Detailed assessment of your eligibility, along with a complete checklist and verification of required documents to ensure accuracy and compliance with immigration laws.",
    },
    {
      id: 3,
      title: "Application Preparation & Filing",
      desc: "End-to-end assistance with preparing and submitting immigration forms, supporting documents, and fee payments in line with official embassy or consulate requirements.",
    },
    {
      id: 4,
      title: "Family & Dependent Visa Support",
      desc: "Guidance for spouse, children, or family sponsorship programs to help your loved ones join you smoothly and legally in your new country.",
    },
    {
      id: 5,
      title: "Visa Interview & Biometric Assistance",
      desc: "Comprehensive preparation for embassy interviews, biometrics, and verification stages to enhance your chances of success and reduce processing delays.",
    },
    {
      id: 6,
      title: "PR, Citizenship & Renewal Guidance",
      desc: "Ongoing support for permanent residency extensions, citizenship applications, or renewals to ensure you remain compliant with immigration policies.",
    },
    {
      id: 7,
      title: "Post-Landing & Settlement Assistance",
      desc: "Orientation on accommodation, healthcare, education, and job search to help you and your family settle confidently and comfortably abroad.",
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

export default ImmigrationVisadetailsIncluded;
