import React from "react";

interface LegalDisclamerProps {
  p: string;
}

const LegalDisclamer: React.FC<LegalDisclamerProps> = ({ p }) => {
  return (
    <section className="bg-[#F9FAFB] text-[#6C757D] text-[14px] leading-relaxed px-8 md:px-0">
      <div className="container mx-auto text-[#6C757D] text-[14px] leading-relaxed  py-12">

      <h3 className="font-semibold mb-2">Legal Disclaimer</h3>
      <p>
       {p}
      </p>
      </div>
    </section>
  );
};

export default LegalDisclamer;
