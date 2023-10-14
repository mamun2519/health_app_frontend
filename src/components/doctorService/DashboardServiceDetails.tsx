"use client";
import React from "react";
import DonorPic from "../../assets/dr-dk-gupta.jpg";
import Image from "next/image";

import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import Calender from "../ui/Calender";
import { Alert, Badge, IconButton } from "@mui/material";
import ServiceSalt, { ISalt } from "./SarviceSalt";
import Link from "next/link";
import { useDoctorServiceDetailsQuery } from "@/redux/api/doctorServiceApi";
import { convertDate } from "@/helper/date";
const DashboardDoctorServiceDetails = ({
  id,
  bread,
}: {
  id: string;
  bread: any;
}) => {
  const { data } = useDoctorServiceDetailsQuery(id);
  return (
    <div className="h-full  border  p-5 rounded-3xl shadow-sm  mt-3">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      {/* <h3 className=" mt-5 text-2xl">My Service Details</h3> */}
      <div className=" grid grid-cols-2  gap-5 mt-5    ">
        <div className="h-full border  rounded p-5   shadow w-full bg-[#30029010]">
          <div className=" ">
            <h3 className=" text-xl font-bold">Service Details</h3>
            <div className=" mt-8">
              <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                <span>Service Name</span>
                <span>{data?.title} </span>
              </div>
              <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                <span>Category</span>
                <span>{data?.category}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Price</span>
                <span>{data?.price} BDT</span>
              </div>

              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Service Type</span>
                <span>{data?.serviceType} </span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>About</span>
                <span>{data?.aboutSerivce} </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full border  rounded p-5   shadow w-full bg-[#30029010]">
          <div className=" ">
            <h3 className=" text-xl font-bold">Slat Details</h3>
            <div className=" mt-8">
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Service Day</span>
                <span>{data?.serviceDay.map((text: string) => text)}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                <span>Stat Time</span>
                <span>{data?.serviceSalt?.startTime}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                <span>End Time</span>
                <span>{data?.serviceSalt?.startTime}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Duration</span>
                <span>{data?.serviceSalt?.duration} Mints</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Slat</span>
                <span>
                  {data?.serviceSalt?.salt?.map((sl: any) => `${sl.time} ,`)}
                </span>
              </div>

              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Created Date</span>
                <span>{convertDate(data?.createdAt)}</span>
              </div>

              {/* <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Date Of Birth</span>
                    <span>{data?.profile?.date_of_birth}</span>
                  </div>
                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Address</span>
                    <span>{data?.profile?.present_Address?.address}</span>
                  </div>
                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Total Donation</span>
                    <span>{data?.blooddata?.total_donnet} People</span>
                  </div>
                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Last donation Date</span>
                    <span>2 feb 2023</span>
                  </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="  p-5">
        <h3 className=" text-xl font-bold">Service Review </h3>
        <div className=" mt-2 grid grid-cols-3 gap-10  pl-8">
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
  );
};

export default DashboardDoctorServiceDetails;
