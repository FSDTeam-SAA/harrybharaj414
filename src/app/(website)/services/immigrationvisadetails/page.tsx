import ImmigrationVisadetailsBenifit from "@/components/services/immigration/details/ImmigrationVisadetailsBenifit";
import ImmigrationVisadetailsHero from "@/components/services/immigration/details/ImmigrationVisadetailsHero";
import ImmigrationVisadetailsIncluded from "@/components/services/immigration/details/ImmigrationVisadetailsIncluded";
import ImmigrationvisadetailsSucces from "@/components/services/immigration/details/ImmigrationvisadetailsSucces";

import React from "react";

const page = () => {
  return (
    <div>
      <ImmigrationVisadetailsHero />
      <ImmigrationVisadetailsIncluded />
      <ImmigrationVisadetailsBenifit />
      <ImmigrationvisadetailsSucces />
    </div>
  );
};

export default page;
