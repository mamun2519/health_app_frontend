import React from "react";
import SelectService from "../doctor/SelectService";
import { ServiceCategory } from "@/constants/donor";
import Link from "next/link";

const ServiceCategorys = () => {
  const services = [
    {
      title: "Blood Donorssss",
      total: 500,
    },
    {
      title: "Doctorsssss",
      total: 200,
    },
    {
      title: "Blood Donationsss",
      total: 300,
    },
    {
      title: "Patient s",
      total: 500,
    },
  ];
  return (
    <div className=" my-40  max-w-7xl mx-auto px-4 lg:px-0  mt">
      <h3 className=" text-3xl text-center font-bold">Our Service</h3>
      <div className=" grid lg:grid-cols-4  grid-cols-2 gap-5 mt-10">
        {ServiceCategory.map((service: { value: string; label: string }) => (
          <Link
            href={`/doctor/service/category?name=${service.label}`}
            key={service.label}
            className=" h-24 border flex justify-center items-center   rounded shadow bg-[#30029010]"
          >
            <div className=" text-center">
              <h3 className=" text-xl  font-medium">{service.label}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategorys;
