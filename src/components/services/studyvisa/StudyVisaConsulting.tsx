import Services from "@/components/shared/Services";
import React from "react";

const StudyVisaConsulting = () => {
  return (
    <div>
      <Services
        tittle="Study Visa Consulting"
        dis1="We provide professional guidance for students who want to pursue education abroad. Our consultants help you choose the right country, program, and pathway based on your academic background, goals, and preferences. We ensure you fully understand eligibility, documentation requirements, and the application process, so you can proceed with confidence."
        dis2="From document preparation to application submission, we offer complete end-to-end support for a smooth study visa process. Our team assists with application forms, academic credential verification, and interview guidance to increase your chances of approval. With our personalized approach, we help you unlock international study opportunities and kickstart your academic journey overseas."
        image="/images/service3.jpeg"
        icon="/service/visa.svg"
        button="More Info"
        btnlink="/services/studyvisadetails"
      />
    </div>
  );
};

export default StudyVisaConsulting;
