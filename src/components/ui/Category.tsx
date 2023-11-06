"use client";
import React from "react";

import Link from "next/link";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import HealingIcon from "@mui/icons-material/Healing";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import ElderlyWomanIcon from "@mui/icons-material/ElderlyWoman";
const ServiceCategorys = () => {
  const ServiceCategory = [
    {
      value: "Primary Care Services",
      label: "Primary Care Services",
      icons: <HealingIcon style={{ fontSize: "30px" }} />,
    },
    {
      value: "Specialty Medical Services",
      label: "Specialty Medical Services",
      icons: <HealthAndSafetyIcon style={{ fontSize: "30px" }} />,
    },
    {
      value: "Surgical Services",
      label: "Surgical Services",
      icons: <MonitorHeartIcon style={{ fontSize: "30px" }} />,
    },
    {
      value: "Diagnostic Services",
      label: "Diagnostic Services",
      icons: <MedicalInformationIcon style={{ fontSize: "30px" }} />,
    },
    {
      value: "Medicine Services",
      label: "Medicine Services",
      icons: <VaccinesIcon style={{ fontSize: "30px" }} />,
    },
    {
      value: "Health Services",
      label: "Health Services",
      icons: <ChildFriendlyIcon style={{ fontSize: "30px" }} />,
    },
    {
      value: "Mental Health Services",
      label: "Mental Health Services",
      icons: <SelfImprovementIcon style={{ fontSize: "30px" }} />,
    },
    {
      value: "Cancer Care Services",
      label: "Cancer Care Services",
      icons: <ElderlyWomanIcon style={{ fontSize: "30px" }} />,
    },
  ];
  return (
    <div className=" my-40  max-w-7xl mx-auto px-4 lg:px-0  mt">
      <h3 className=" text-3xl text-center font-bold">Our Service</h3>
      <div className=" grid lg:grid-cols-4  grid-cols-2 gap-5 mt-10">
        {ServiceCategory &&
          ServiceCategory?.map((service: any) => (
            <Link
              href={`/doctor/service/category?name=${service.label}`}
              key={service.label}
              className=" h-24 border flex justify-center items-center   rounded shadow bg-[#30029010]"
            >
              <div className=" text-center">
                <div className="text-[#d1001c]">{service.icons},</div>
                <h3 className=" text-xl  font-medium mt-1">{service.label}</h3>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ServiceCategorys;
