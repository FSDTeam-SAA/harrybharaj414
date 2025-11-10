import Image from "next/image";
import React from "react";

const CareerVisadetailsHero = () => {
 
 

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 mx-auto max-w-2xl">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Services We Provide
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Career & CV Guidance
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Professional career consulting and document preparation designed to
            help you achieve your global career goals with clarity, confidence,
            and impact.
          </p>
        </header>

        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/service/careerdetails.png"
            alt="Career guidance consulting overview"
            width={1536}
            height={400}
            className="object-center w-full aspect-[5/3] rounded-xl"
          />
        </div>

        {/* Overview Section */}
        <div className="mx-auto space-y-6 text-[#6C757D]">
          <h3 className="text-[#343A40] font-bold text-[20px] lg:text-[24px]">Overview</h3>
          <p>
            Your CV is more than a document — it’s your personal brand. In international markets, a well-structured CV and professional profile can make the difference between being noticed and being ignored. At Destiny Abroad FZ-LLC, we specialize in career profile development and global CV enhancement for individuals seeking opportunities in Europe, the UK, Canada, the USA, Australia, and the GCC.
          </p>
          <p>
            We offer personalized consulting based on your education, skills, and long-term career aspirations. Whether you’re a fresher, skilled worker, or experienced professional, our goal is to help you stand out confidently in front of employers and embassy assessors alike.
          </p>

          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">Why This Matters</h3>
          <p>
            Most visa applicants or jobseekers underestimate the importance of presentation and profile alignment. Embassies and employers assess your application starting with your CV. A mismatched or unprofessional format often leads to missed opportunities. We focus on strategy, structure, and storytelling that reflect your career potential.
          </p>

          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">Who Is This Service For?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Skilled, unskilled, fresher, and experienced candidates applying for work or study abroad</li>
            <li>Professionals seeking profile restructuring to match international job markets</li>
            <li>Students applying for admission who need Statement of Purpose or Academic CVs</li>
            <li>Individuals preparing for embassy submission, job portals, or LinkedIn optimization</li>
          </ul>

         
          

          {/* Disclaimer */}
          <p className="mt-6 text-[#6C757D] text-[14px]">
            <strong>Legal Disclaimer:</strong> Destiny Abroad FZ-LLC provides professional documentation, CV development, and consulting support for global career and visa preparation. The company does not guarantee job placement or employment outcomes, as selection depends solely on employers and government authorities. All service fees are non-refundable, covering professional writing, consulting, and administrative expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerVisadetailsHero;
