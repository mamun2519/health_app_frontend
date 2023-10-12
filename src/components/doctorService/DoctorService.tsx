import Image from "next/image";
import React from "react";
import DoctorImage from "../../assets/dr-dk-gupta.jpg";
import Link from "next/link";
const DoctorService = ({ service }: any) => {
  return (
    // <div className=" w-80 h-[430px] border shadow  rounded bg-[#30029010] mt-5">
    //   <div className=" flex justify-center">
    //     <div className="w-full h-48  ">
    //       <Image src={DoctorImage} className="h-48   p-2" alt="Doctor Image" />
    //     </div>
    //   </div>
    //   <div className=" mt-1">
    //     {/* <div className=" text-center">
    //   <p className="    font-bold">{`${doctor?.profile?.first_name} ${doctor?.profile?.last_name}`}</p>
    //   <p>MBBS Doctor</p>
    //   <p>Specilatis Of Medicine</p>
    // </div> */}
    //     <div className=" w-full  border-2 border-[#d1001c] mt-1"></div>
    //     <div className=" px-4 py-2">
    //       <div className=" flex  ">
    //         <span className=" w-56">Service Name:</span>
    //         <span className=" text-gray-700 font-medium w-full ">
    //           : {service?.title}
    //         </span>
    //       </div>
    //       <div className=" flex mt-1">
    //         <span className=" w-56"> Service Type :</span>
    //         <span className=" text-gray-700 font-medium w-full ">
    //           : {service?.serviceType}
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

    //     <div className=" px-4 mt-2">
    //       <Link
    //         className=" w-full h-8 flex justify-center rounded items-center bg-[#d1001c] text-white font-bold "
    //         href={`/doctor/service/${service?.id}`}
    //       >
    //         More Details
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <Link
      href={`/doctor/service/${service?.id}`}
      className=" w-[600px] h-52  flex gap-5  border shadow  rounded bg-[#30029010] mt-5"
    >
      <div className="w-[230px] flex justify-center      border-r-4 border-[#d1001c]">
        <div className="w-full h-full  ">
          <Image
            src={DoctorImage}
            className="h-full   p-2"
            alt="Doctor Image"
          />
        </div>
      </div>
      <div className=" ">
        {/* <div className=" w-full  border-2 border-[#d1001c] mt-1"></div> */}
        <div className=" w-full  py-2 mt-3">
          <div className=" flex  ">
            <span className=" w-56">Service Name:</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {service?.title}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-56"> Service category</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {service?.category}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-56">Days:</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {service?.serviceDay.map((data: any) => data)}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-56">Start Time</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {service?.serviceSalt?.startTime}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-56">Start Time</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {service?.serviceSalt?.endTime}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-56">Visited Free</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {service?.price} BDT
            </span>
          </div>
          {/* <div className=" px-2 mt-1 flex justify-start">
            <Link
              className=" w-36 h-8 flex justify-center rounded items-center bg-[#d1001c] text-white font-bold "
              href={`/doctor/service/${service?.id}`}
            >
              More Details
            </Link>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default DoctorService;
