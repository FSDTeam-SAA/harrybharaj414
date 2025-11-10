import React from "react";

const LanguageVisadetailsIncluded = () => {
  const services = [
    {
      id: 1,
      title: "Initial Language Assessment",
      desc: "Evaluate your current language proficiency to identify strengths and areas for improvement, creating a personalized study plan.",
    },
    {
      id: 2,
      title: "Test Strategy & Planning",
      desc: "Guidance on choosing the right language test (IELTS, TOEFL, PTE, CELPIP) and developing a structured preparation plan.",
    },
    {
      id: 3,
      title: "Practice Materials & Mock Tests",
      desc: "Access to authentic practice materials, sample questions, and full-length mock exams to build confidence and test readiness.",
    },
    {
      id: 4,
      title: "Speaking & Writing Coaching",
      desc: "One-on-one coaching sessions to improve speaking fluency and writing skills with personalized feedback.",
    },
    {
      id: 5,
      title: "Reading & Listening Enhancement",
      desc: "Targeted exercises and strategies to strengthen comprehension, speed, and accuracy in reading and listening sections.",
    },
    {
      id: 6,
      title: "Score Tracking & Feedback",
      desc: "Regular assessments to track progress and adjust preparation strategies to maximize your test scores.",
    },
    {
      id: 7,
      title: "Post-Test Guidance",
      desc: "Support in interpreting test results and guidance on next steps for study, work, or immigration purposes.",
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

export default LanguageVisadetailsIncluded;
