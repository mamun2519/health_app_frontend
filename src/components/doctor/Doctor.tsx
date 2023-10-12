import Image from "next/image";
import Link from "next/link";
import React from "react";
import DoctorImage from "../../assets/dr-dk-gupta.jpg";
const Doctor = ({ doctor }: any) => {
  return (
    <div
      key={doctor.id}
      className=" w-full h-[430px] border shadow  rounded bg-[#30029010]"
    >
      <div className=" flex justify-center">
        <div className="w-32 h-32   rounded-full  mt-5 border-[#d1001c] border-2">
          <Image
            src={DoctorImage}
            className="w-32 h-32 rounded-full  p-2"
            alt="Doctor Image"
          />
        </div>
      </div>
      <div className=" mt-1">
        <div className=" text-center">
          <p className="    font-bold">{`${doctor?.profile?.first_name} ${doctor?.profile?.last_name}`}</p>
          <p>{doctor?.doctor?.degree}</p>
        </div>
        <div className=" w-full  border-2 border-[#d1001c] mt-1"></div>
        <div className=" px-4 py-2">
          <div className=" flex  ">
            <span className=" w-40">Specialist</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {doctor?.doctor?.specialist}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-40"> Patient</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {doctor.doctor.total_patient} People
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-40">Experience</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {doctor?.doctor?.experience} Year
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-40">Phone</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {doctor?.profile?.phone}
            </span>
          </div>
        </div>
        <div className=" flex justify-center px-4 mt-3">
          <Link
            className=" w-full flex justify-center items-center h-8 rounded bg-[#d1001c] text-white font-bold "
            href={`/doctor/${doctor.id}`}
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
