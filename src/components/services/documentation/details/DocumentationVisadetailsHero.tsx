import Image from "next/image";
import React from "react";

const DocumentationVisadetailsHero = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 mx-auto ">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Services We Provide
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Documentation & Application Support – Destiny Abroad FZ-LLC
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Accurate documentation is the foundation of every successful visa,
            residency, or immigration application. Even a minor error or missing
            document can cause costly delays or refusals. Our experts specialize
            in documentation preparation and embassy filing support to ensure
            your application is complete, compliant, and correctly formatted.
          </p>
        </header>

        {/* Banner Image */}
        <div className="mb-12">
          <Image
            src="/service/docummentdetails.png"
            alt="Documentation and application support"
            width={1536}
            height={400}
            className="object-cover w-full aspect-5/3 rounded-xl"
          />
        </div>

        {/* Overview Section */}
        <div className="mx-auto space-y-6 text-[#6C757D] text-[16px] leading-[150%]">
          <p>
            Our team helps individuals, families, and investors organize, verify,
            and prepare documents for work permits, study visas, immigration, and
            residency programs across Europe, the UK, Canada, the USA, Australia,
            and the GCC. We make the process clear, stress-free, and fully transparent
            from the first consultation to the final filing.
          </p>

          <h3 className="text-[#343A40] font-semibold text-[20px] leading-[150%]">
            Who Is This Service For?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Individuals applying for work, study, or residency abroad</li>
            <li>Families submitting dependent or reunification applications</li>
            <li>Investors and entrepreneurs preparing Golden Visa or Residency by Investment files</li>
            <li>Agencies or partners seeking verified documentation coordination</li>
            <li>Clients needing translation, attestation, or embassy-specific format guidance</li>
          </ul>

          <p>
            Whether you’re applying independently or through our partner network, we
            ensure your documentation meets international standards and embassy-verified
            formats. From document review to final submission, our experts provide
            professional guidance and secure handling at every stage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DocumentationVisadetailsHero;
