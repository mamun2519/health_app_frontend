"use client";
import { useAdminActivityQuery } from "@/redux/api/activityApi";
import { getTimeOfDayMessage } from "@/utils/DayMessage";
import LoadingSpinner from "@/utils/Loading";
import React from "react";

const AdminActivity = () => {
  const { data, isLoading } = useAdminActivityQuery({ limit: 100, page: 1 });
  console.log(data);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="pl-2">
      <h4 className="text-xl">Hello Mr {data?.name} </h4>
      <p className="mt-1">{getTimeOfDayMessage()}</p>

      <div className=" grid lg:grid-cols-4 gap-5 grid-cols-2 mt-5 w-full">
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Total Earn</h3>
            <p className="text-2xl text-gray-800 mt-1 "> {data?.balance} BDT</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Appointment</h3>
            <p className="text-2xl text-gray-800 mt-1 "> {data?.appointment}</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Doctor Service</h3>
            <p className="text-2xl text-gray-800 mt-1 "> {data?.service}</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
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

        <div className="h-28 w-full border rounded-lg shadow-sm bg-[#30029010] flex justify-center  items-center px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Doctor Account</h3>
            <p className="text-2xl text-gray-800   mt-1"> {data?.doctor}</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm bg-[#30029010] flex justify-center  items-center px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Donor Account</h3>
            <p className="text-2xl text-gray-800   mt-1"> {data?.bloodDonor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminActivity;
