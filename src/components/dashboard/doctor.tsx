"use client";
import {
  useDoctorActivityQuery,
  useDonorActivityQuery,
} from "@/redux/api/activityApi";
import LoadingSpinner from "@/utils/Loading";
import React from "react";

const DoctorActivity = () => {
  const { data, isLoading } = useDoctorActivityQuery({ limit: 100, page: 1 });
  console.log(data);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="pl-2">
      <h4 className="text-xl">Hello Mr {data?.name} </h4>
      <p className="mt-1">Good Morning</p>

      <div className=" grid lg:grid-cols-4 gap-5 grid-cols-2 mt-5 w-full">
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Current Balance</h3>
            <p className="text-2xl text-gray-800 mt-1 "> {data?.balance} BDT</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Booked Appointment</h3>
            <p className="text-2xl text-gray-800 mt-1 "> {data?.appointment}</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Patient</h3>
            <p className="text-2xl text-gray-800 mt-1 ">
              {" "}
              {data?.patient} People
            </p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Total Service</h3>
            <p className="text-2xl text-gray-800   mt-1"> {data?.service}</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Donor Request</h3>
            <p className="text-2xl text-gray-800   mt-1">
              {" "}
              {data?.donorRequest}
            </p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm bg-[#30029010] flex justify-center  items-center px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Complete Donation</h3>
            <p className="text-2xl text-gray-800   mt-1">
              {" "}
              {data?.completeDonation}
            </p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm bg-[#30029010] flex justify-center  items-center px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Pending Withdraw</h3>
            <p className="text-2xl text-gray-800  mt-1">
              {data?.pendingWithdraw}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorActivity;
