import React from "react";

const CareerVisadetailsIncluded = () => {
  const services = [
    {
      id: 1,
      title: "Profile Evaluation & Strategy",
      desc: "We analyze your education, skills, experience, and target country to define a personalized profile strategy.",
      type: "paragraph" // Single paragraph
    },
    {
      id: 2,
      title: "Country-Specific CV Formatting",
      desc: `Europe (EU): Follows the Europass format – concise, standardized, and achievement-focused.
UK: Emphasizes measurable impact, short bullet points, and skill-based summaries (no photo).
Canada & USA: Resume format, maximum 2 pages, focusing on skills, results, and job-specific keywords (ATS-friendly).
Australia & New Zealand: Detailed career summaries with metrics and visa-compatible keywords.
GCC: Chronological CV with emphasis on personal details, experience, and current status.`,
      type: "bullet" // Natural bullet points
    },
    {
      id: 3,
      title: "Myth-Busting Approach",
      desc: `Myth: One CV works for all countries.
Reality: Each country expects a specific format, tone, and even structure.

Myth: More pages mean more experience.
Reality: Recruiters prefer concise, clear, and impactful summaries.

Myth: Design-heavy CVs get attention.
Reality: ATS (Applicant Tracking Systems) reject heavily designed CVs; clean layouts win.

Myth: LinkedIn doesn't matter for visa cases.
Reality: A consistent LinkedIn profile boosts credibility and supports embassy evaluation.`,
      type: "myth-reality" // Special format for myth/reality pairs
    },
    {
      id: 4,
      title: "Professional Writing & Design",
      desc: "We create ATS-compatible CVs, professional cover letters, and personalized statements that highlight your strengths while maintaining embassy-appropriate tone and structure.",
      type: "paragraph"
    },
    {
      id: 5,
      title: "LinkedIn & Online Profile Optimization",
      desc: "Tailored keyword strategy and headline optimization to improve visibility to global recruiters.",
      type: "paragraph"
    },
    {
      id: 6,
      title: "Career Consultation & Market Readiness",
      desc: "Guidance on the most in-demand industries, countries with active hiring, and positioning your skills effectively.",
      type: "paragraph" // Single paragraph, no bullets needed
    },
    {
      id: 7,
      title: "Interview & Communication Tips",
      desc: "Coaching on how to confidently present yourself and explain career transitions or visa-related gaps.",
      type: "paragraph"
    }
  ];

  const renderContent = (item: typeof services[0]) => {
    switch (item.type) {
      case "paragraph":
        return <p className="text-[#6C757D] text-[15px] leading-relaxed">{item.desc}</p>;
      
      case "bullet":
        return (
          <ul className="text-[#6C757D] text-[15px] leading-relaxed list-disc pl-5 space-y-2">
            {item.desc.split("\n").map((line, index) => (
              <li key={index}>{line.trim()}</li>
            ))}
          </ul>
        );
      
      case "myth-reality":
        return (
          <div className="text-[#6C757D] text-[15px] leading-relaxed space-y-4">
            {item.desc.split("\n\n").map((block, blockIndex) => {
              const lines = block.split("\n");
              return (
                <div key={blockIndex} className="border-l-4 border-[#3B82F6] pl-4 py-1">
                  {lines.map((line, lineIndex) => (
                    <p key={lineIndex} className={line.startsWith("Myth:") ? "font-semibold text-[#343A40]" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        );
      
      default:
        return <p className="text-[#6C757D] text-[15px] leading-relaxed">{item.desc}</p>;
    }
  };

  // Split services into two groups
  const firstThreeServices = services.slice(0, 3); // Items 1-3
  const lastFourServices = services.slice(3); // Items 4-7

  return (
    <section className="bg-[#E8F1FD99] py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10">
          What&apos;s Included in This Service
        </h2>

        {/* Two Column Grid with separate divs for each group */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {/* First Column - Items 1-3 */}
          <div className="flex flex-col gap-8">
            {firstThreeServices.map((item) => (
              <div key={item.id} className="flex flex-col">
                <h3 className="text-[18px] font-semibold text-[#343A40] mb-2">
                  {item.id}. {item.title}
                </h3>
                {renderContent(item)}
              </div>
            ))}
          </div>

          {/* Second Column - Items 4-7 */}
          <div className="flex flex-col gap-8">
            {lastFourServices.map((item) => (
              <div key={item.id} className="flex flex-col">
                <h3 className="text-[18px] font-semibold text-[#343A40] mb-2">
                  {item.id}. {item.title}
                </h3>
                {renderContent(item)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerVisadetailsIncluded;