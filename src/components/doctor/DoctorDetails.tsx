"use client";
import React from "react";
import DonorPic from "../../assets/dr-dk-gupta.jpg";
import Image from "next/image";

import DoctorService from "../doctorService/DoctorService";
const DoctorDetails = ({ doctor }: any) => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-10 pb-40">
      <div className="   gri gap-5">
        <div className="w-full border lg:h-56 h-[420px] rounded  lg:flex gap-5 p-5   shadow bg-[#30029010]">
          <div className="lg:h-44 border w-48 rounded border-[#d1001c] p-2">
            <div className=" h-full lg:block flex w-full justify-center">
              <Image
                src={doctor?.profile?.avatar}
                width={50}
                height={50}
                className=" h-full  w-full"
                alt="Donor Pic"
              />
            </div>
          </div>

          <div className="  lg:w-[19vw] lg:mt-2 mt-3">
            <h3 className=" text-xl  font-bold">{`Dr, ${doctor?.profile?.first_name} ${doctor?.profile?.last_name}`}</h3>
            <p className=" mt- text-gray-800">
              Specialist Of {doctor?.doctor?.specialist}
            </p>
            <p className=" mt-1 text-gray-800">
              {" "}
              <p>{doctor?.doctor?.degree}</p>
            </p>
            <p className=" mt-1 text-gray-800">
              {doctor?.doctor?.experience} Year Experiences
              {/* {doctor?.email} */}
            </p>
            <p className=" mt-1 text-gray-800">Rating 4</p>
          </div>
        </div>
      </div>

      <div className=" grid lg:grid-cols-2  grid-cols-1 gap-5 mt-5    ">
        <div className=" border  rounded p-5  relative shadow bg-[#30029010]">
          <div className=" ">
            <h3 className=" text-xl font-bold">About Doctor</h3>
            <div className=" mt-8">
              <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                <span>Full Name</span>
                <span>{`${doctor?.profile?.first_name} ${doctor?.profile?.last_name}`}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                <span>Medical</span>
                <span>Chittagong Medical</span>
              </div>
              <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                <span>total Patient</span>
                <span> {doctor?.doctor?.total_patient}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Phone Number</span>
                <span>{doctor?.profile?.phone}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Gender</span>
                <span>{doctor?.profile?.gender}</span>
              </div>

              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>District</span>
                <span>{doctor?.profile?.present_Address?.district}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Blood Group</span>
                <span>{doctor?.profile?.blood_group}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Date Of Birth</span>
                <span>{doctor?.profile?.date_of_birth}</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" border   rounded p-5  relative shadow bg-[#30029010]">
          <div className="">
            <h3 className=" text-xl font-bold">Education Background</h3>
            <div>
              {doctor?.profile?.education.map((education: any) => (
                <div key={education?.id}>
                  <div className="  border-b pb-2 mt-5">
                    <p>Studies BBS at {education?.institute} </p>
                    <span>Passing Year {education?.pass_year}</span>
                  </div>
                  {/* <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Institute</span>
                    <span>{education?.institute}</span>
                  </div>
                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Pass Year</span>
                    <span>{education?.pass_year}</span>
                  </div>
                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>GPA</span>
                    <span>{education?.GPA}</span>
                  </div>
                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Complete Year</span>
                    <span>{education?.completionYear}</span>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="borde w-full   rounded   relative shdow  h-[540px] mt-5">
        <h3 className=" text-xl font-bold">Doctor Service</h3>
        <div className="grid lg:grid-cols-2  grid-cols-1 gap-5 mt  ">
          {doctor?.doctor?.doctorServices.map((service: any) => (
            <DoctorService key={service?.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
