"use client";
import { useAllReviewQuery } from "@/redux/api/serviceReview";
import { InputLabel, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Rating } from "@mui/material";
import DonorPic from "../../assets/dr-dk-gupta.jpg";
import moment from "moment";
const Review = () => {
  const { data } = useAllReviewQuery({ limit: 100, page: 1 });
  console.log(data);
  return (
    <div className=" max-w-7xl mx-auto px-4 lg:px-0 my-20">
      <h3 className=" text-3xl font-bold text-center">Our Client Review </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-20 mt-10 ">
        {data?.slice(0, 3).map((user: any) => (
          <div
            key={user?.id}
            className=" w-full h-32 border bg-white rounded-3xl  relative"
          >
            <div className=" pl-10 py-4 pr-3 ">
              <Typography className="mt-2" component="legend">
                {user?.user?.profile?.first_name}{" "}
                {user?.user?.profile?.last_name}
              </Typography>
              <p>{user?.comment}</p>
              <div>
                <Rating
                  name="simple-controlled"
                  value={user?.rating}
                  readOnly
                  // onChange={(event, newValue) => {
                  //   setValue(newValue);
                  // }}
                />
                <InputLabel id="demo-customized-select-label">
                  {moment(user.createdAt).startOf("hour").fromNow()}
                </InputLabel>
              </div>
            </div>

            <div className=" absolute w-20 h-20 border-2 border-[#d1001c] rounded-full top-5 left-[-50px]">
              <Image
                src={user?.user?.profile?.avatar}
                className=" w-20 h-20 rounded-full p-2"
                alt="Donor Pic"
                width={50}
                height={50}
              />
            </div>
          </div>
        ))}

        {/* <p className=" cursor-pointer">View All Review</p> */}
      </div>
    </div>
  );
};

export default Review;
