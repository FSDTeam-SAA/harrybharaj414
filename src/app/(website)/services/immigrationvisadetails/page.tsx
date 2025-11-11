import BookingToConsultation from "@/components/about/BookingToConsultation";
import ImmigrationVisadetailsBenifit from "@/components/services/immigration/details/ImmigrationVisadetailsBenifit";
import ImmigrationVisadetailsHero from "@/components/services/immigration/details/ImmigrationVisadetailsHero";
import ImmigrationVisadetailsIncluded from "@/components/services/immigration/details/ImmigrationVisadetailsIncluded";
import ImmigrationvisadetailsSucces from "@/components/services/immigration/details/ImmigrationvisadetailsSucces";
import ImmigrationLegal from "@/components/services/legaldisclamer/ImmigrationLegal";

import React from "react";

const page = () => {
  return (
    <div>
      <ImmigrationVisadetailsHero />
      <ImmigrationVisadetailsIncluded />
      <ImmigrationVisadetailsBenifit />
      <ImmigrationvisadetailsSucces />
      <BookingToConsultation />
      <ImmigrationLegal />
    </div>
  );
};

export default page;
