
import React from "react";

interface LegalDisclamerProps {
  p: string;
}

const LegalDisclamer: React.FC<LegalDisclamerProps> = ({ p }) => {
  return (
    <section className=" bg-[#E8F1FD] py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center ">
        {/* <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Legal Disclaimer
        </h3> */}
        <p className="text-[#2e2e2e] text-[15px] font-medium leading-relaxed whitespace-pre-line">
          {p}
        </p>
      </div>
    </section>
  );
};

export default LegalDisclamer;
