import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const HomeServices = () => {
  const servicesData = [
    {
      title: "Work Permit & Visa Consultation",
      description:
        "Work Permit & Visa Consultation – Step-by-step guidance for skilled, semi-skilled, and general categories",
      icon: "/employee.svg",
      href: "workvisadetails",
    },
    {
      title: "Study & Residency Consultation ",
      description:
        "Study & Residency Consultation – Guidance for long-term residence or study pathways.",
      icon: "/guidance.svg",
      href: "studyvisadetails",
    },
    {
      title: "Immigration & Settlement Services",
      description:
        "Comprehensive permanent residency and immigration application support to start your new life abroad.",
      icon: "/communication.svg",
      href: "immigrationvisadetails",
    },
    {
      title: "Career & CV Guidance",
      description:
        "Career Materials – CV and statement drafting tailored to job markets.",
      icon: "/tourist.svg",
      href: "careervisadetails",
    },
    {
      title: "Documentation & Application Support",
      description: "B2B / Corporate – Documentation support for licensed agencies and companies.",
      icon: "/project-management.svg",
      href: "documentationvisadetails",
    },
    {
      title: "Language Test Preparation",
      description:
        "Test Prep Advisory – Help with IELTS/TOEFL and language tests.",
      icon: "/test-cases.svg",
      href: "languagevisadetails",
    },
  ];

  return (
    <section
      // id="services"
      className="pt-12 pb-4 lg:pt-20 lg:pb-8 bg-linear-to-b from-blue-50 via-white to-blue-50"
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
            <Link
              key={index}
              href={`/services/${item.href}`}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <article>
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
            </Link>
          ))}
        </div>
        <Link className="flex" href={'/services'} target="_blank">
        
        <Button className="mt-6 mb-0 flex justify-center items-center mx-auto border-2 border-blue-500 text-blue-600 hover:bg-white cursor-pointer bg-transparent hover:scale-105 transition-all duration-300">View All Services</Button>
        </Link>
      </div>
    </section>
  );
};

export default HomeServices;
