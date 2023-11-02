import Image from "next/image";
import React from "react";
import serviceImage from "../../assets/dr-dk-gupta.jpg";
import Link from "next/link";
const serviceService = ({ service }: any) => {
  return (
    //
    // <Link
    //   href={`/service/service/${service?.id}`}
    //   className=" w-full h-52  flex gap-5  border shadow  rounded bg-[#30029010] mt-5"
    // >
    //   <div className="w-[230px]  flex justify-center      border-r-4 border-[#d1001c]">
    //     <div className="w-full h-full  ">
    //       <Image
    //         src={service?.avatar}
    //         width={250}
    //         height={50}
    //         className="h-full lg:w-full   p-2"
    //         alt="service Image"
    //       />
    //     </div>
    //   </div>
    //   <div className=" ">
    //     {/* <div className=" w-full  border-2 border-[#d1001c] mt-1"></div> */}
    //     <div className=" w-full  py-2 mt-3">
    //       <div className=" flex  ">
    //         <span className=" w-56">Service Name:</span>
    //         <span className=" text-gray-700 font-medium w-full ">
    //           : {service?.title}
    //         </span>
    //       </div>
    //       <div className=" flex mt-1">
    //         <span className=" w-56"> Service category</span>
    //         <span className=" text-gray-700 font-medium w-full ">
    //           : {service?.category}
    //         </span>
    //       </div>
    //       <div className=" flex mt-1">
    //         <span className=" w-56">Days:</span>
    //         <span className=" text-gray-700 font-medium w-full ">
    //           : {service?.serviceDay.map((data: any) => data)}
    //         </span>
    //       </div>
    //       <div className=" flex mt-1">
    //         <span className=" w-56">Start Time</span>
    //         <span className=" text-gray-700 font-medium w-full ">
    //           : {service?.serviceSalt?.startTime}
    //         </span>
    //       </div>
    //       <div className=" flex mt-1">
    //         <span className=" w-56">Start Time</span>
    //         <span className=" text-gray-700 font-medium w-full ">
    //           : {service?.serviceSalt?.endTime}
    //         </span>
    //       </div>
    //       <div className=" flex mt-1">
    //         <span className=" w-56">Visited Free</span>
    //         <span className=" text-gray-700 font-medium w-full ">
    //           : {service?.price} BDT
    //         </span>
    //       </div>

    //     </div>
    //   </div>
    // </Link>

    <div
      key={service.id}
      className=" w-full h-[440px] border shadow  rounded bg-[#30029010] mt-5"
    >
      <div className=" ">
        <div className="w-full h-48   rounded  m border-2">
          <Image
            src={service?.avatar}
            width={550}
            height={550}
            className="w-full h-48   p-2"
            alt="service Image"
          />
        </div>
      </div>
      <div className=" mt-1">
        {/* <div className=" text-center">
          <p className="    font-bold">{`${service?.profile?.first_name} ${service?.profile?.last_name}`}</p>
          <p>{service?.service?.degree}</p>
        </div> */}
        <div className=" w-full  border-2 border-[#d1001c] mt-1"></div>
        <div className=" px-4 py-2">
          <div className=" flex  ">
            <span className=" w-40">Service Name</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {service?.title}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-40"> category</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {service?.category}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-40">Days</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {service?.serviceDay.map((data: any) => data)}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-40">Start Time</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {service?.serviceSalt?.startTime}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-40">End Time</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {service?.serviceSalt?.endTime}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-40">Price</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {service?.price} BDT
            </span>
          </div>
        </div>
        <div className=" flex justify-center px-4 mt-3">
          <Link
            className=" w-full flex justify-center items-center h-8 rounded bg-[#d1001c] text-white font-bold "
            href={`/doctor/service/${service?.id}`}
          >
            Details Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default serviceService;
