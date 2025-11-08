import Image from "next/image";
import React from "react";

const HomeServices = () => {
  const servicesData = [
    {
      title: "Work Visa Consulting",
      description:
        "Expert guidance to secure legal overseas employment with full documentation support and visa processing assistance.",
      icon: "/employee.svg",
    },
    {
      title: "Study Abroad Guidance",
      description:
        "Personalized counseling and admission support for students pursuing international education.",
      icon: "/guidance.svg",
    },
    {
      title: "PR & Immigration Services",
      description:
        "Comprehensive permanent residency and immigration application support to start your new life abroad.",
      icon: "/communication.svg",
    },
    {
      title: "Tourist Visa Assistance",
      description:
        "Quick and reliable tourist visa application help for smooth international travel.",
      icon: "/tourist.svg",
    },
    {
      title: "Documentation Support",
      description:
        "Documentation Support for Work visa filing",
      icon: "/project-management.svg",
    },
    {
      title: "Language Test Preparation",
      description:
        "Coaching and resources for IELTS, TOEFL, and other proficiency exams.",
      icon: "/test-cases.svg",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Trusted Immigration & Visa Consulting
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We assist clients from India, Nepal, and GCC countries with reliable
            visa, study, and immigration services to help them build a
            successful future abroad.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((item, index) => (
            <article
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center mb-5">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={60}
                  height={60}
                  className="rounded-xl object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
