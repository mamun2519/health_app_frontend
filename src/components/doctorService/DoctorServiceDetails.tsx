"use client";
import React from "react";
import DonorPic from "../../assets/dr-dk-gupta.jpg";
import Image from "next/image";

import Calender from "../ui/Calender";
import { Alert, Badge, IconButton } from "@mui/material";
import ServiceSalt, { ISalt } from "./SarviceSalt";
import Link from "next/link";
const DoctorServiceDetails = ({ service }: any) => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-10 pb-40">
      <div className="  lg:flex gap-5">
        <div className="w-[40vw] border lg:h-56 h-[420px] rounded  lg:flex gap-5 p-5  relative shadow bg-[#30029010]">
          <div className="lg:h-44 border w-48 rounded border-[#d1001c] p-2">
            <div className=" h-full  lg:block flex w-full justify-center">
              <Image src={DonorPic} className=" h-full  " alt="Donor Pic" />
            </div>
          </div>

          <div className="  lg:w-[19vw] lg:mt-2 mt-3">
            <h3 className=" text-xl  font-bold">
              Dr, {service?.doctor?.user?.profile?.first_name}{" "}
              {service?.doctor?.user?.profile?.last_name}
            </h3>
            <p className=" mt- text-gray-800">Specialist Of Medicine</p>
            <p className=" mt-1 text-gray-800">Reating 4</p>
            <p className=" mt-1 text-gray-800">Education Of MBBS</p>
            <p className=" mt-1 text-gray-800">
              Presicent Services day{" "}
              {service?.serviceDay.map((text: string) => text)}
            </p>
            <div className=" mt-2 h-8  bg-[#d1001c] w-48 flex justify-center items-center  rounded text-white  font-medium ">
              <Link href={`/doctor/${service?.doctor?.user_id}`}>
                <span className="px-6  ">Details Doctor</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-[480px]  border p-5 shadow rounded lg:mt-0 h-[94vh] mt-5 bg-[#30029010]">
          <h3 className=" text-xl font-bold">Appointment Date</h3>
          <Calender />

          <div className="mt-5">
            <h3 className=" text-xl font-bold">Slat Available</h3>
            <div className="  grid grid-cols-3 gap-3 mt-3">
              {service?.serviceSalt?.salt?.map((salt: ISalt, index: string) => (
                <ServiceSalt key={index} salt={salt} />
              ))}
            </div>
          </div>
          <div className="mt-2">
            <Alert severity="warning">All Time Format Bangladesh</Alert>
          </div>

          <div className="mt-3">
            <button className=" px-10 h-10 rounded bg-[#d1001c] text-white w-full font-medium ">
              book Now
            </button>
          </div>
        </div>
      </div>

      <div className="  gap-5 mt-5  lg:w-[40vw]     lg:absolute top-[335px] ">
        <div className="h-[65v-h] border  w-[40vw] rounded p-5  relative shadow bg-[#30029010]">
          <div className=" ">
            {/* <h3 className=" text-xl font-bold">About Doctor</h3>
            <div className=" mt-8">
              <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                <span>Number</span>
                <span>{service?.doctor.user?.profile?.phone}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                <span>Email</span>
                <span>{service?.doctor.user?.email}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Gender</span>
                <span>{service?.doctor.user?.profile?.gender}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>District</span>
                <span>
                  {service?.doctor.user?.profile?.present_Address?.district}
                </span>
              </div>

              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Blood Group</span>
                <span>{service?.doctor.user?.profile?.blood_group}</span>
              </div>
            </div> */}
            <div className="mt-2">
              <h3 className=" text-xl font-bold">About Services</h3>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-5">
                <span>Title</span>
                <span>{service?.title}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Service Type</span>
                <span>{service?.serviceType}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Total Sell Service</span>
                <span>{service?.doctor?.total_patient}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Start Time</span>
                <span>{service?.serviceSalt.startTime}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>End Time</span>
                <span>{service?.serviceSalt.endTime}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Visited Free</span>
                <span>{service?.price} BDT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="  py-5">
          <h3 className=" text-xl font-bold">Service Review </h3>
          <div className=" mt-2 grid grid-cols-2 gap-10  pl-8">
            <div className=" w-72 h-32 border bg-white rounded-3xl  relative">
              <div className=" pl-10 py-4 pr-3">
                <h3>Juboraj Islam Mmaun</h3>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>

              <div className=" absolute w-20 h-20 border-2 border-[#d1001c] rounded-full top-5 left-[-50px]">
                <Image
                  src={DonorPic}
                  className=" w-20 h-20 rounded-full p-2"
                  alt="Donor Pic"
                />
              </div>
            </div>
            <div className=" w-72 h-32 border bg-white rounded-3xl  relative">
              <div className=" pl-10 py-4 pr-3">
                <h3>Juboraj Islam Mmaun</h3>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>

              <div className=" absolute w-20 h-20 border-2 border-[#d1001c] rounded-full top-5 left-[-50px]">
                <Image
                  src={DonorPic}
                  className=" w-20 h-20 rounded-full p-2"
                  alt="Donor Pic"
                />
              </div>
            </div>
            <p>View All Review</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorServiceDetails;
