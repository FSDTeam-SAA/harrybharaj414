import React from "react";

const CareerVisadetailsBenifit = () => {
  const benefits = [
    { id: 1, title: "Country-Wise Accuracy", desc: "CVs and profiles aligned with latest EU, UK, USA, Canada, Australia, and GCC standards." },
    { id: 2, title: "ATS-Friendly Documents", desc: "Structured for modern recruitment systems and embassy checks." },
    { id: 3, title: "Professional Branding", desc: "CVs, cover letters, and LinkedIn profiles designed to reflect credibility, confidence, and clarity." },
    { id: 4, title: "Complete Support", desc: "From CV writing to LinkedIn optimization and post-interview communication." },
    { id: 5, title: "Time-Efficient & Transparent", desc: "Fast turnaround with clear consultation at every step." },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-10 text-center">Benefits of Choosing Destiny Abroad FZ-LLC</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {benefits.map((item) => (
            <div key={item.id} className="flex flex-col">
              <h3 className="text-[18px] font-semibold text-[#343A40] mb-2">{item.id}. {item.title}</h3>
              <p className="text-[#6C757D] text-[15px] leading-relaxed">• {item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerVisadetailsBenifit;
