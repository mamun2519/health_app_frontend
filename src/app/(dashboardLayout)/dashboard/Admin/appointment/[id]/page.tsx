"use client";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import { useAppointmentDetailsQuery } from "@/redux/api/appointmentApi";
import { convertDate } from "@/helper/date";
import Image from "next/image";
import dataPic from "../../../../../../assets/blood_donation_02.jpg";
const AppointmentDetailsPage = ({ params }: { params: { id: string } }) => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Admin/appointment",
      level: "My Appointment",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Admin/appointment",
      level: "Appointment Details",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "text.primary",
    },
  ];
  const { data } = useAppointmentDetailsQuery(params.id);
  console.log(data);
  return (
    <div>
      <div className="h-full  border  p-5 rounded-3xl shadow-sm  mt-3">
        <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
        <h3 className=" mt-5 text-2xl">My Appointment Info</h3>
        <div>
          <div className="max-w-7xl mx-auto px-4 lg:px-0 py-5  psb-20">
            <div className="  lg:flex gap-5">
              <div className="w-full border lg:h-56 h-[420px] rounded  lg:flex gap-5 p-5   shadow bg-[#30029010]">
                <div className="lg:h-44 border w-48 rounded border-[#d1001c] p-2">
                  <div className=" h-full  lg:block flex w-full justify-center">
                    <Image
                      src={dataPic}
                      className=" h-full  "
                      alt="Donor Pic"
                    />
                  </div>
                </div>

                <div className="  lg:w-[19vw] lg:mt-2 mt-3">
                  <h3 className=" text-xl  font-bold">{`Dr, ${data?.doctor?.user?.profile?.first_name} ${data?.doctor?.user?.profile?.last_name}`}</h3>
                  <p className=" mt- text-gray-800">
                    Specialist Of {data?.doctor?.specialist}
                  </p>
                  <p className=" mt-1 text-gray-800">
                    {" "}
                    <p>{data?.doctor?.degree}</p>
                  </p>
                  <p className=" mt-1 text-gray-800">
                    {data?.doctor?.experience} Year Experiences
                  </p>
                  <p className=" mt-1 text-gray-800">
                    {data?.doctor?.total_patient} Patient
                  </p>
                  <p className=" mt-1 text-gray-800">Reating 4</p>
                </div>
              </div>
              <div className="lg:w-2/6 h-56 border p-5 shadow rounded lg:mt-0 mt-5 bg-[#30029010]">
                <h3 className=" text-xl font-bold">Request Info</h3>
                <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                  <span>Status</span>
                  <span>{data?.status}</span>
                </div>
                <div className=" grid  grid-cols-2 borde pb-2 mt-3">
                  <span>Time</span>
                  <span>{data?.slatTime}</span>
                </div>
                <div className="mt-4 ">
                  <button className="w-full h-10 bg-[#d1001c] rounded-full text-white shadow-sm ">
                    Joint Doctor
                  </button>
                </div>
              </div>
            </div>

            <div className=" grid grid-cols-2  gap-5 mt-5    ">
              <div className="h-full border  rounded p-5   shadow w-full bg-[#30029010]">
                <div className=" ">
                  <h3 className=" text-xl font-bold">Service Details</h3>
                  <div className=" mt-8">
                    <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                      <span>Service Name</span>
                      <span>{data?.service?.title}</span>
                    </div>
                    <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                      <span>Service Category</span>
                      <span>{data?.service?.category}</span>
                    </div>
                    <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                      <span>Service Type</span>
                      <span>{data?.service?.serviceType}</span>
                    </div>

                    <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                      <span>Price</span>
                      <span>{data?.service?.price} BDT</span>
                    </div>
                    <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                      <span>Service Day</span>
                      <span>
                        {data?.service?.serviceDay.map(
                          (service: any) => `${service} ,`
                        )}
                      </span>
                    </div>
                    <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                      <span>Details</span>
                      <span>{data?.service?.aboutSerivce}</span>
                    </div>
                    <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                      <span>Total Sells</span>
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full border  rounded p-5   shadow w-full bg-[#30029010]">
                <div className=" ">
                  <h3 className=" text-xl font-bold">Appointment Details</h3>
                  <div className=" mt-8">
                    <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                      <span>Booking Date</span>
                      <span>{data?.bookingDate}</span>
                    </div>
                    <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                      <span>Booking Slat Time</span>
                      <span>{data?.slatTime}</span>
                    </div>
                    <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                      <span>Serial No</span>
                      <span>{data?.serialNo}</span>
                    </div>
                    <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                      <span>patient Age</span>
                      <span>{data?.age}</span>
                    </div>

                    <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                      <span>patient Weight</span>
                      <span>{data?.weight}</span>
                    </div>
                    <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                      <span>patient details</span>
                      <span>{data?.patientProblem}</span>
                    </div>
                    <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                      <span>Address</span>
                      <span>{data?.address}</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailsPage;
