"use client";
import Image from "next/image";
import ServicePic from "../../assets/Hospital bed-pana.svg";

import { useState } from "react";
import SelectService from "./SelectService";
import SelectDoctor from "./SelectDoctor";
const FindDoctor = () => {
  const [select, setSelectOptions] = useState("service");

  return (
    <div className=" mt-20 grid lg:grid-cols-2 grid-cols-1 gap-5 ">
      <div className=" border w-full h-[500px] p-5">
        <div className=" flex gap-3  items-center  ">
          <h3 className=" text-2xl uppercase">Select Service Info</h3>
          <div className="h-1 bg-red-500 w-52"></div>
        </div>
        <div className="mt-10 flex gap-5">
          <button
            onClick={() => setSelectOptions("service")}
            className={`w-36 h-10 border rounded ${
              select == "service"
                ? "bg-[#d1001c] text-white"
                : "bg-white border-[#d1001c]"
            } `}
          >
            Service
          </button>
          <button
            onClick={() => setSelectOptions("doctor")}
            className={`w-36 h-10 border rounded ${
              select == "doctor"
                ? "bg-[#d1001c] text-white"
                : "bg-white border-[#d1001c]"
            } `}
          >
            Doctor
          </button>
        </div>
        <div>
          {select == "service" && <SelectService />}

          {select == "doctor" && <SelectDoctor />}
        </div>
      </div>
      <div className=" mt- border  flex justify-center">
        <Image src={ServicePic} alt="Service pic" />
      </div>
    </div>
  );
};

export default FindDoctor;
