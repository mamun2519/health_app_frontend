"use client";
import Image from "next/image";
import React, { useState } from "react";
import serviceImage from "../../assets/dr-dk-gupta.jpg";
import Link from "next/link";
const ServiceService = ({ service }: any) => {
  // const [offer, setOffer] = useState(null);

  console.log(service?.serviceOffers);
  // setOffer(
  //   service?.serviceOffers.find((offer: any) => offer.status == "Active")
  // );
  return (
    <div
      key={service.id}
      className=" w-full lg:w-96 h-[440px] border shadow  rounded bg-[#30029010] mt-5"
    >
      <div className=" ">
        <div className="w-full h-48   rounded  m border-2 relative">
          <Image
            src={service?.avatar}
            width={550}
            height={550}
            className="w-full h-48   rounded"
            alt="service Image"
          />
          {service?.serviceOffers?.map(
            (offer: {
              id: string;
              status: string;
              discount: number;
              promoCode: string;
            }) =>
              offer.status == "Active" && (
                <div key={offer?.id} className=" absolute top-6">
                  <div className="h-full w-48 bg-[#d1001c] text-white  rounded-r-2xl py-2 pl-4 glass font-bold">
                    <p className="text-sm">{offer.discount}% Discount</p>
                    <p className="text-sm mt-">VOUCHER- {offer.promoCode}</p>
                  </div>
                </div>
              )
          )}
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
            <span className=" w-40"> Category</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {service?.category}
            </span>
          </div>
          <div className=" flex mt-1 ">
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

export default ServiceService;
