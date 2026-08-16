import BookingToConsultation from "@/components/about/BookingToConsultation";
import DocumentationVisadetailsBenifit from "@/components/services/documentation/details/DocumentationVisadetailsBenifit";
import DocumentationVisadetailsHero from "@/components/services/documentation/details/DocumentationVisadetailsHero";
import DocumentationVisadetailsIncluded from "@/components/services/documentation/details/DocumentationVisadetailsIncluded";
import DocumentationvisadetailsSucces from "@/components/services/documentation/details/DocumentationvisadetailsSucces";
import DocumentLegal from "@/components/services/legaldisclamer/DocumentLegal";
import React from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Documentation & Application Support",
  description: "Get practical documentation and application support for visa, study and immigration routes.",
  path: "/services/documentationvisadetails",
});

const page = () => {
  return (
    <div>
      <DocumentationVisadetailsHero />
      <DocumentationVisadetailsIncluded />
      <DocumentationVisadetailsBenifit />
      <DocumentationvisadetailsSucces />
      <BookingToConsultation />
      <DocumentLegal />
    </div>
  );
};

export default page;
