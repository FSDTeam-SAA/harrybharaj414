import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Book a Consultation",
      desc: "We assess your profile and goals to understand your best visa or study options.",
    },
    {
      id: 2,
      title: "Get a Plan",
      desc: "Receive a country-specific process, eligibility guidance, and document checklist.",
    },
    {
      id: 3,
      title: "Prepare & Review",
      desc: "We help you prepare, verify, and organize all necessary documentation.",
    },
    {
      id: 4,
      title: "File with Confidence",
      desc: "Our experts assist you with embassy filing, submission, and follow-up support.",
    },
  ];

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <p className="text-blue-600 font-semibold uppercase tracking-wide text-center mb-3">
          How It Works
        </p>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-10">
          Simple Steps to Start Your Journey
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* <div className="text-blue-600 text-2xl font-bold mb-2">
                {step.id}.
              </div> */}
              <h3 className="text-[#343A40] font-semibold text-[16px] mb-2">
                {step.title}
              </h3>
              <p className="text-[#6C757D] text-[14px] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
