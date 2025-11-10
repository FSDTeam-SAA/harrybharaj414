import React from "react";

const DocumentationVisadetailsIncluded = () => {
  const services = [
    {
      id: 1,
      title: "Document Checklist & Verification",
      desc: "Tailored checklists according to destination country and visa category. We review and verify every document for accuracy and compliance before submission.",
    },
    {
      id: 2,
      title: "Translation, Attestation & Legalization",
      desc: "Coordination for certified translations, notary attestations, and ministry/legal authentication in accordance with embassy rules.",
    },
    {
      id: 3,
      title: "Application Form Completion",
      desc: "Step-by-step support for filling, reviewing, and formatting embassy or visa application forms to prevent common rejections.",
    },
    {
      id: 4,
      title: "Embassy & VFS Submission Support",
      desc: "Guidance on scheduling, appointment documentation, and organizing files in embassy-approved order for smooth acceptance.",
    },
    {
      id: 5,
      title: "Business & Investment Documentation",
      desc: "Specialized assistance for preparing company setup files, proof of funds, bank statements, and investment evidence for residency or Golden Visa cases.",
    },
    {
      id: 6,
      title: "Post-Submission Tracking",
      desc: "Monitoring of application status, tracking numbers, and embassy updates for complete peace of mind.",
    },
    {
      id: 7,
      title: "Record Archiving & Re-Use Preparation",
      desc: "Secure digital storage of submitted documents for future renewals or related applications.",
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

export default DocumentationVisadetailsIncluded;
