import { Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-10 pb-40">
        <div className="  lg:flex gap-5">
          <div className="w-[40vw] border lg:h-56 h-[420px] rounded  lg:flex gap-5 p-5  relative shadow bg-[#30029010]">
            <div className="lg:h-44 border w-48 rounded border-[#d1001c] p-2">
              <Skeleton />
            </div>

            <div className="  lg:w-[19vw] lg:mt-2 mt-3">
              <h3 className=" text-xl  font-bold">
                <Skeleton />
              </h3>
              <p className=" mt- text-gray-800">Specialist Of Medicine</p>
              <p className=" mt-1 text-gray-800">Reating 4</p>
              <p className=" mt-1 text-gray-800">Education Of MBBS</p>
              <p className=" mt-1 text-gray-800">
                <Skeleton />
              </p>
              <div className=" mt-2 h-8  bg-[#d1001c] w-48 flex justify-center items-center  rounded text-white  font-medium ">
                <Skeleton />
              </div>
            </div>
          </div>
          <div className="lg:w-[480px]  border p-5 shadow rounded lg:mt-0 h-full mt-5 bg-[#30029010]">
            <h3 className=" text-xl font-bold">Appointment Date</h3>
            <Skeleton />

            <div className="mt-5">
              <h3 className=" text-xl font-bold">Slat Available</h3>
              <div className="  grid grid-cols-3 gap-6  mt-2">
                <Skeleton />
              </div>
            </div>
            <div className="mt-5">
              <Skeleton />
            </div>
            <Skeleton />
          </div>
        </div>

        <div className="  gap-5 mt-5  lg:w-[40vw]     lg:absolute top-[335px] ">
          <div className="h-[65v-h] border  w-[40vw] rounded p-5  relative shadow bg-[#30029010]">
            <div className=" ">
              <div className="mt-2">
                <h3 className=" text-xl font-bold">About Services</h3>
                <div className=" grid  grid-cols-2 border-b pb-2 mt-5">
                  <Skeleton />
                </div>
                <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                  <Skeleton />
                  <Skeleton />
                </div>
                <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                  <Skeleton />
                  <Skeleton />
                </div>
                <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                  <Skeleton />
                  <Skeleton />
                </div>
                <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                  <span>End Time</span>
                  <Skeleton />
                </div>
                <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                  <Skeleton />
                  <Skeleton />
                </div>
              </div>
            </div>
          </div>

          <div className="  py-5">
            <h3 className=" text-xl font-bold">
              {" "}
              <Skeleton />{" "}
            </h3>
            <div className=" mt-2 grid grid-cols-2 gap-10  pl-8">
              <div className=" w-72 h-32 border bg-white rounded-3xl  relative">
                <div className=" pl-10 py-4 pr-3">
                  <Skeleton />
                  <Skeleton />
                </div>

                <div className=" absolute w-20 h-20 border-2 border-[#d1001c] rounded-full top-5 left-[-50px]">
                  <Skeleton />
                </div>
              </div>
              <div className=" w-72 h-32 border bg-white rounded-3xl  relative">
                <div className=" pl-10 py-4 pr-3">
                  <Skeleton />
                  <Skeleton />
                </div>

                <div className=" absolute w-20 h-20 border-2 border-[#d1001c] rounded-full top-5 left-[-50px]">
                  <Skeleton />
                </div>
              </div>
              <p>View All Review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
