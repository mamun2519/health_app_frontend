"use client";
import React from "react";
import DonorPic from "../../assets/dr-dk-gupta.jpg";
import Image from "next/image";
import AddDonorRequestForm from "../dialog/AddDonorRequest";
import { convertDate } from "@/helper/date";
import { getFromLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";
import { useBloodDonorDetailsQuery } from "@/redux/api/bloodDonorApi";
import { IDonorReview } from "@/types";
import LoadingSpinner from "@/utils/Loading";
import { useSpecificReviewQuery } from "@/redux/api/donerReviewApi";
import { Rating } from "@mui/material";
const DonorDetails = ({ id }: { id: string }) => {
  const { data, isLoading } = useBloodDonorDetailsQuery(id);

  const { data: review } = useSpecificReviewQuery(data?.bloodDonor?.id);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const donations = [
    {
      date: "4 May 2002",
      total: 1,
    },
    {
      date: "4 May 2003",
      total: 1,
    },
    {
      date: "4 May 2004",
      total: 1,
    },
    {
      date: "4 May 2005",
      total: 1,
    },
    {
      date: "4 May 2006",
      total: 1,
    },
  ]; ////

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-28  pb-20 ">
      <div className="  lg:flex gap-5">
        <div className="w-full border lg:h-56  rounded  lg:flex gap-5 p-5  relative shadow bg-[#30029010] ">
          <div className="lg:h-44 border w-48 rounded border-[#d1001c] p-2">
            <div className=" h-full  lg:block flex w-full justify-center">
              <Image
                src={data?.profile?.avatar}
                width={300}
                height={300}
                className=" h-full w-full  "
                alt="Donor Pic"
              />
            </div>
            <div className="w-16 h-16   rounded-full  mt-5 bg-[#d1001c] border-2 absolute     lg:left-2 lg:top-[120px] top-[-15px] md:top-[-15px] left-2 sm:right-[5px] lg:right-[90px] md:left-[180px] text-xl   font-bold flex justify-center items-center text-white">
              <p>{data?.profile?.blood_group}</p>
            </div>
          </div>

          <div className="  lg:w-[19vw] lg:mt-2 mt-3">
            <h3 className=" text-xl  font-bold">
              {" "}
              {`${data?.profile?.first_name} ${data?.profile?.last_name}`}
            </h3>
            <p className=" mt- text-gray-800">Blood Group AB Positive</p>
            <p className=" mt-1 text-gray-800">
              Division At {data?.profile?.present_Address?.district}
            </p>
            <p className=" mt-1 text-gray-800">
              Join {convertDate(data?.updatedAt)}
            </p>
            <p className=" mt-1 text-gray-800">
              Already {data?.bloodDonor?.total_donnet} people Dononet completed
            </p>
            <p className=" mt-1 text-gray-800">Status {data?.status}</p>
          </div>
          <div className=" flex gap-2    text-end items-end  justify-end lg:mt-0 mt-2">
            {/* <button className=" px-8 lg:px-10 h-10 rounded bg-[#d1001c] text-white font-medium ">
              Message{" "}
            </button> */}
            <div className="w-36"></div>
            <button
              onClick={handleClickOpen}
              className=" px-4 h-10 rounded border border-[#d1001c]  text-white bg-[#d1001c] font-medium "
            >
              Request Donor
            </button>
          </div>
        </div>
        <div className="lg:w-2/6 h-80 border p-5 shadow rounded lg:mt-0 mt-5 bg-[#30029010]">
          <h3 className=" text-xl font-bold">Donation History</h3>
          <div className="  flex justify-between mt-4">
            <span>Date</span>
            <span>Total Beg</span>
          </div>
          <div className="mt-4 ">
            {donations.map((don) => (
              <div
                key={don.date}
                className="flex justify-between mt-2 border-b pb-2"
              >
                <span>{don.date}</span>
                <span>{don.total}</span>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="  gap-5 mt-5  lg:w-[940px]   lg:absolute top-[335px] bg-[#30029010]">
        <div className="h-full border  rounded p-5  relative shadow w-full">
          <div className=" ">
            <h3 className=" text-xl font-bold">About Donor</h3>
            <div className=" mt-8">
              <div className=" grid  grid-cols-2 border-b  pb-2 mt-3 w-full">
                <span>Full Name</span>
                <span>{`${data?.profile?.first_name} ${data?.profile?.last_name}`}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b  pb-2 mt-3">
                <span>Email</span>
                <span>{data?.email}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Gender</span>
                <span>{data?.profile?.gender}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>District</span>
                <span>{data?.profile?.present_Address?.district}</span>
              </div>

              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Phone Number</span>
                <span>{data?.profile?.phone}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Date Of Birth</span>
                <span>{data?.profile?.date_of_birth}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Address</span>
                <span>{data?.profile?.present_Address?.address}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Total Donation</span>
                <span>{data?.bloodDonor?.total_donnet} People</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Last donation Date</span>
                <span>2 feb 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="lg:w-80  border p-5 rounded    lg:absolute  right-[313px] mt-5  h-[360px]  shadow  bg-[#30029010] ">
          <h3 className=" tex text-xl font-bold">Donor Reviews</h3>
          <div className=" pl-10">
            {review?.map((review: any) => {
              return (
                <div
                  key={review?.id}
                  className=" w-60 h-28 border bg-white rounded-3xl  relative mt-2  "
                >
                  <div className=" pl-10 py-4 pr-3">
                    <h3>{`${review?.user?.profile?.first_name} ${review?.user?.profile?.last_name}`}</h3>
                    <p>{review?.comment}</p>
                    <p className=" mt- text-gray-800">
                      <Rating
                        name="simple-controlled"
                        value={review?.rating}
                        readOnly
                        // onChange={(event, newValue) => {
                        //   setValue(newValue);
                        // }}
                      />
                    </p>
                  </div>

                  <div className=" absolute w-20 h-20 border-2 border-[#d1001c] rounded-full top-3 left-[-50px]">
                    <Image
                      width={300}
                      height={300}
                      src={review?.user?.profile.avatar}
                      className=" w-20 h-20 rounded-full p-2"
                      alt="Donor Pic"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {open && (
        <AddDonorRequestForm
          donorId={data?.bloodDonor?.id}
          open={open}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default DonorDetails;
