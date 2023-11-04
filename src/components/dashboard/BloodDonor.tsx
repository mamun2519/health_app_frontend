"use client";
import { useDonorActivityQuery } from "@/redux/api/activityApi";
import { getTimeOfDayMessage } from "@/utils/DayMessage";
import LoadingSpinner from "@/utils/Loading";
import React from "react";

const BloodDonorActivity = () => {
  const { data, isLoading } = useDonorActivityQuery({ limit: 100, page: 1 });

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
            <h3 className=" m lg:text-xl ">Booking Appointment</h3>
            <p className="text-2xl text-gray-800 mt-1 ">
              {" "}
              {data?.bookingAppointment}
            </p>
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
            <h3 className=" m lg:text-xl">Last Schedule</h3>
            <p className=" text-gray-800  mt-1">{data?.schedule?.date}</p>
            <p className=" text-gray-800  ">{data?.schedule?.schedule}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodDonorActivity;