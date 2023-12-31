"use client";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";

import { convertDate } from "@/helper/date";
import { useGetDonorRequestDetailsQuery } from "@/redux/api/donorApi";

import LoadingSpinner from "@/utils/Loading";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import PreviewIcon from "@mui/icons-material/Preview";
const UserDonorDetailsPage = ({ params }: { params: { id: string } }) => {
  const [open, setOpen] = useState(true);

  const boread = [
    {
      link: "/",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/BloodDonor/myDonorRequest",
      level: "User Request",
      icons: <RecordVoiceOverIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/Dashboard",
      level: "Details",
      icons: <PreviewIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];
  const { data, isLoading } = useGetDonorRequestDetailsQuery(params.id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="h-full  border  lg:p-5 p-3 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={boread}></IconBreadcrumbs>

      <div>
        <div className="max-w-7xl mx-auto lg:px-4 px-0 py-10  psb-20">
          {/* <div className="  lg:flex gap-5">
            <div className="w-full border lg:h-56  rounded  lg:flex gap-5 p-5  relative shadow bg-[#30029010] ">
              <div className="lg:h-44 border w-48 rounded border-[#d1001c] p-2">
                <div className=" h-full  lg:block flex w-full justify-center">
                  <Image src={dataPic} className=" h-full  " alt="data Pic" />
                </div>
                <div className="w-16 h-16   rounded-full  mt-5 bg-[#d1001c] border-2 absolute     lg:left-2 lg:top-[120px] top-[-15px] md:top-[-15px] left-2 sm:right-[5px] lg:right-[90px] md:left-[180px] text-xl   font-bold flex justify-center items-center text-white">
                  <p>{data?.donor?.user?.profile?.blood_group}</p>
                </div>
              </div>

              <div className="  lg:w-[19vw] lg:mt-2 mt-3">
                <h3 className=" text-xl  font-bold">
                  {" "}
                  {`${data?.user.profile?.first_name} ${data?.user?.profile?.last_name}`}
                </h3>
                <p className=" mt- text-gray-800">Blood Group AB Positive</p>
                <p className=" mt-1 text-gray-800">
                  Division At{" "}
                  {data?.donor?.user?.profile?.present_Address?.district}
                </p>
                <p className=" mt-1 text-gray-800">
                  Join {convertDate(data?.donor?.createdAt)}
                </p>
                <p className=" mt-1 text-gray-800">
                  Already {data?.donor?.total_donnet} people Dononet completed
                </p>
              </div>
            </div>
            <div className="lg:w-2/6 h-56 border p-5 shadow rounded lg:mt-0 mt-5 bg-[#30029010]">
              <h3 className=" text-xl font-bold">Request Info</h3>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Status</span>
                <span>{data?.status}</span>
              </div>
              <div className=" grid  grid-cols-2 borde pb-2 mt-3">
                <span>Date</span>
                <span>{data?.createdAt}</span>
              </div>
              <div className="mt-4 ">
                <button className="w-full h-10 bg-[#d1001c] rounded-full text-white shadow-sm ">
                  Completed
                </button>
              </div>
            </div>
          </div> */}

          <div className=" grid lg:grid-cols-2  grid-cols-1 gap-5 mt-5    ">
            <div className="h-full border  rounded lg:p-5 p-2  shadow w-full bg-[#30029010]">
              <div className=" ">
                <h3 className=" text-xl font-bold">User Information</h3>
                <div className=" mt-8">
                  <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                    <span>Name</span>
                    <span>
                      {`${data?.user.profile?.first_name} ${data?.user?.profile?.last_name}`}
                    </span>
                  </div>
                  <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                    <span>Email</span>
                    <span>{data?.user?.email}</span>
                  </div>
                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Phone</span>
                    <span>{data?.user?.profile?.phone ?? "Null"}</span>
                  </div>

                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>District</span>
                    <span>
                      {data?.user?.profile?.present_Address?.district ?? "Null"}
                    </span>
                  </div>

                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Date Of Birth</span>
                    <span>{data?.donor?.user?.profile?.date_of_birth}</span>
                  </div>
                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Address</span>
                    <span>
                      {data?.user?.profile?.present_Address?.address ?? "Null"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full border  rounded p-5   shadow w-full bg-[#30029010]">
              <div className=" ">
                <h3 className=" text-xl font-bold">Donor Request Details</h3>
                <div className=" mt-8">
                  <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                    <span>Donation Date</span>
                    <span>{`${data?.donnetDate}`}</span>
                  </div>
                  <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                    <span>Quantity</span>
                    <span>{data?.quantity}</span>
                  </div>
                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Patient Condition</span>
                    <span>{data?.pratienCondition}</span>
                  </div>
                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Location</span>
                    <span>{data?.location}</span>
                  </div>

                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Phone Number</span>
                    <span>{data?.phone}</span>
                  </div>
                  <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                    <span>Request Date</span>
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
        </div>
      </div>
    </div>
  );
};

export default UserDonorDetailsPage;
