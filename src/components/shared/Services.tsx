import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface ServiceProps {
  tittle: string;
  dis1: string;
  dis2: string;
  image: string;
  icon: string;
  btnlink: string;
  button?: string;
  imgchange?: boolean;
}

const Services = ({
  tittle,
  dis1,
  dis2,
  image,
  icon,
  button,
  imgchange,
  btnlink,
}: ServiceProps) => {
  return (
    <div
      className={`container w-[95%] md:w-full mx-auto flex flex-col ${
        imgchange ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-center gap-10 py-10`}
    >
      <div className=" lg:w-1/2">
        <div className="flex gap-3 items-center mb-4">
          <Image src={icon} alt="icon" width={28} height={28} />
          <h2 className="text-2xl font-semibold text-gray-800">{tittle}</h2>
        </div>
        <p className="text-gray-600 mb-3">{dis1}</p>
        <p className="text-gray-600 mb-6">{dis2}</p>
        {button && (
          <Link href={btnlink}>
            <Button className="border-2 border-blue-500 text-blue-600 hover:bg-gray-200 cursor-pointer bg-transparent hover:scale-105 transition-all duration-300 ">
              {button}
            </Button>
          </Link>
        )}
      </div>
      <div className="lg:w-1/2">
        <Image
          src={image}
          alt="side image"
          width={744}
          height={484}
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Services;
