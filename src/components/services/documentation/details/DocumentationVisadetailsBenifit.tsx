import React from "react";

const DocumentationVisadetailsBenifit = () => {
  const services = [
    {
      id: 1,
      title: "Accurate & Verified Documentation",
      desc: "Ensure that all your documents are correctly prepared, verified, and compliant with official guidelines, reducing errors and delays.",
    },
    {
      id: 2,
      title: "Minimized Risk of Rejection",
      desc: "Our step-by-step guidance and document checks help prevent common mistakes, ensuring your application is complete and accurate.",
    },
    {
      id: 3,
      title: "Time & Cost Efficiency",
      desc: "Save time and avoid unnecessary expenses by submitting the right documents in the correct format on the first attempt.",
    },
    {
      id: 4,
      title: "Comprehensive Application Support",
      desc: "From compiling documents to filling forms and handling submission requirements, we guide you at every stage of the process.",
    },
    {
      id: 5,
      title: "Expert Assistance Throughout",
      desc: "Receive professional guidance and support for any post-submission queries, clarifications, or additional documentation requests.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10">
          Benefits of Choosing Our Documentation & Application Support
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

export default DocumentationVisadetailsBenifit;
