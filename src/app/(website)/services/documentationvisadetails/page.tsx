import BookingToConsultation from "@/components/about/BookingToConsultation";
import DocumentationVisadetailsBenifit from "@/components/services/documentation/details/DocumentationVisadetailsBenifit";
import DocumentationVisadetailsHero from "@/components/services/documentation/details/DocumentationVisadetailsHero";
import DocumentationVisadetailsIncluded from "@/components/services/documentation/details/DocumentationVisadetailsIncluded";
import DocumentationvisadetailsSucces from "@/components/services/documentation/details/DocumentationvisadetailsSucces";
import DocumentLegal from "@/components/services/legaldisclamer/DocumentLegal";
import React from "react";

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
