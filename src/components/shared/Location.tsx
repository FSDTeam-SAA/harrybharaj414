import React from "react";

const Location = () => {
  return (
    <section
      className="text-white"
      aria-labelledby="find-us-heading"
      role="region"
    >
      <div className="px-4 text-center grid grid-cols-1 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="bg-[#1A73E8] rounded-t-xl lg:rounded-t-none lg:rounded-l-xl flex items-start p-5 justify-center flex-col">
          <h2
            id="find-us-heading"
            className="text-xl font-semibold text-[#F8F9FA] mb-1.5"
          >
            Find Us
          </h2>
          <address className="not-italic text-[16px] text-[#F1F2F3]">
            14 Tottenham Road, London, England
          </address>

          <h3 className="text-xl font-semibold mt-6 mb-1.5">Message Us</h3>
          <a
            href="mailto:information@office.com"
            className="text-[16px] leading-[150%] mb-1 text-[#F1F2F3] underline hover:text-white transition-colors duration-200"
          >
            information@office.com
          </a>
          <a
            href="tel:+17043581528"
            className="text-[16px] font-normal leading-[150%] text-[#F1F2F3] hover:text-white transition-colors duration-200"
          >
            (704) 358-1528
          </a>
        </div>

        {/* Google Map */}
        <div className="">
          <iframe
            title="Our Office Location on Google Maps"
            className="rounded-b-xl lg:rounded-b-none lg:rounded-r-xl w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1888472.9890948925!2d70.007682640708!3d22.413069036369826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1762288202210!5m2!1sen!2sbd"
            height="230"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
