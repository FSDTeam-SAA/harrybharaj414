import Image from "next/image";
import React from "react";

const ContactMap = () => {
  return (
    <section>
      <div className="container mx-auto">
        <Image src={'/images/map.jpg'} alt="map" width={1900} height={300}  className="w-[90%] mx-auto md:w-full aspect-5/2 rounded-2xl"/>
      </div>
    </section>
  );
};

export default ContactMap;
