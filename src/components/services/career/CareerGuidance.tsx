import Services from "@/components/shared/Services";
import React from "react";

const CareerGuidance = () => {
  return (
    <div>
      <Services
        tittle="Career & CV Guidance"
        dis1="We provide professional guidance for individuals seeking to advance their careers and explore international opportunities. Our experts help you identify the right career path, enhance your skills, and prepare a strong professional profile that aligns with your goals and aspirations."
        dis2="From resume and cover letter optimization to interview preparation, we offer end-to-end support to boost your employability. With our tailored approach, we help you navigate job markets effectively, increase your chances of success, and take confident steps toward achieving your career objectives."
        image="/images/service1.jpeg"
        icon="/service/visa.svg"
        button="More Info"
        btnlink="/services/careervisadetails"
      />
    </div>
  );
};

export default CareerGuidance;
