import Services from "@/components/shared/Services";
import React from "react";

const ImmigrationServices = () => {
  return (
    <div>
      <Services
        tittle="Immigration & Settlement Services"
        dis1="We provide professional guidance for individuals planning to immigrate or settle abroad. Our consultants help you choose the most suitable country and immigration pathway based on your personal, professional, and family goals. We ensure you fully understand eligibility requirements, necessary documents, and the application process so you can proceed with confidence."
        dis2="From document preparation to application submission, we offer complete end-to-end support for a smooth immigration journey. Our team assists with visa forms, document verification, compliance checks, and follow-up procedures. With our personalized approach, we help you successfully navigate immigration and settlement processes, making your transition overseas seamless."
        image="/images/service2.jpeg"
        icon="/service/visa.svg"
        button="More Info"
        imgchange
        btnlink="/services/immigrationvisadetails"
      />
    </div>
  );
};

export default ImmigrationServices;
