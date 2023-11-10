"use client";
import React, { useEffect, useState } from "react";
import DonorPic from "../../assets/dr-dk-gupta.jpg";
import Image from "next/image";

import Calender from "../ui/Calender";
import { Alert, Badge, IconButton, Rating, Typography } from "@mui/material";
import ServiceSalt, { ISalt } from "./SarviceSalt";
import Link from "next/link";
import { useDoctorServiceDetailsQuery } from "@/redux/api/doctorServiceApi";
import { formatDateToYYYYMMDD } from "@/utils/DateConvater";
import errorMessage from "../shared/ErrrorMessage";

import { useServiceReviewByIdQuery } from "@/redux/api/serviceReview";

import LoadingSpinner from "@/utils/Loading";
import { useRouter } from "next/navigation";

const DoctorServiceDetails = ({ id }: any) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [viewAll, setVewAll] = useState(false);

  const [selectSlat, setSelectSlat] = useState<any>(null);
  // const [Appointment, setAppointment] = useState([]);

  // Callback function to handle date selection

  const handleDateSelect = (date: any) => {
    const dates = formatDateToYYYYMMDD(date);
    setSelectedDate(dates);
  };

  const { data: service, isLoading } = useDoctorServiceDetailsQuery({
    id,
    date: selectedDate,
  });

  console.log(service?.serviceOffers);
  const router = useRouter();
  const { data: review } = useServiceReviewByIdQuery(id);

  const addToLocalStorage = () => {
    if (selectSlat && selectedDate) {
      const info = {
        bookingDate: selectedDate,
        slatTime: selectSlat.time,
        doctorId: service.doctorId,
        serviceId: service.id,
        price: Number(service.price),
        discount: 0,
      };
      localStorage.setItem("BookingInfo", JSON.stringify(info));
      router.push("/payment/appointmentForm");
    } else {
      errorMessage({
        message: `Please Select ${
          (!selectSlat && "Slat") || (!selectedDate && "Booking date")
        } `,
      });
    }
  };
  const SlatBookingHandler = (data: ISalt) => {
    if (data.booking) {
      errorMessage({ message: `Sorry This ${data.time} Slat Already Booked.` });
    } else {
      setSelectSlat(data);
      console.log(data);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-28 pb-40">
      <div className="  lg:flex gap-5">
        <div className="lg:w-[40vw] w-full border lg:h-56 h-[420px] rounded  lg:flex gap-5 p-5  relative shadow bg-[#30029010]">
          <div className="lg:h-44 border w-48 rounded border-[#d1001c] p-2">
            <div className=" h-full  lg:block flex w-full justify-center">
              <Image
                width={50}
                height={50}
                src={service?.doctor?.user?.profile?.avatar}
                className=" h-full w-full "
                alt="Donor Pic"
              />
            </div>
          </div>

          <div className="  lg:w-[19vw] lg:mt-2 mt-3">
            <h3 className=" text-xl  font-bold">
              Dr, {service?.doctor?.user?.profile?.first_name}{" "}
              {service?.doctor?.user?.profile?.last_name}
            </h3>
            <p className=" mt- text-gray-800">
              Specialist Of {service?.doctor?.specialist}
              {/* {service?.user?.email} */}
            </p>
            <p className=" mt- text-gray-800">
              <Rating
                name="simple-controlled"
                value={4}
                readOnly
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
              />
            </p>
            <p className=" mt-1 text-gray-800">{service?.doctor?.degree}</p>
            <p className=" mt- text-gray-800">
              Services day {service?.serviceDay.map((text: string) => text)}
            </p>
            <div className=" mt- h-8  bg-[#d1001c] w-48 flex justify-center items-center  rounded text-white  font-medium ">
              <Link href={`/doctor/${service?.doctor?.user_id}`}>
                <span className="px-6  ">Details Doctor</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-[480px] w-full  border  p-2 shadow rounded lg:mt-0 h-full mt-5 bg-[#30029010]">
          <h3 className=" text-xl font-bold">Appointment Date</h3>
          <Calender handleDateSelect={handleDateSelect} />

          <div className="mt-5">
            <h3 className=" text-xl font-bold">Slat Available</h3>
            <div className="  grid grid-cols-3 gap-6  mt-2">
              {service?.serviceSalt?.salt?.map((salt: ISalt, index: string) => (
                <ServiceSalt
                  key={index}
                  salt={salt}
                  SlatBookingHandler={SlatBookingHandler}
                  selectSlat={selectSlat}
                />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <Alert severity="warning">All Time Format Bangladesh</Alert>
          </div>
          <div className="mt-3">
            <button
              onClick={() => addToLocalStorage()}
              className=" px-10 h-10 rounded bg-[#d1001c] text-white w-full font-medium "
            >
              Booking Now
            </button>
          </div>
        </div>
      </div>

      <div className="  gap-5 mt-5  lg:w-[40vw]     lg:absolute top-[335px] ">
        <div className="h-full border  lg:w-[40vw] w-full rounded p-5  relative shadow bg-[#30029010]">
          <div className=" ">
            <div className="mt-2">
              <h3 className=" text-xl font-bold">About Services</h3>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-5">
                <span>Title</span>
                <span>{service?.title}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Service Type</span>
                <span>{service?.serviceType}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Total Sell Service</span>
                <span>{service?.doctor?.total_patient}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Start Time</span>
                <span>{service?.serviceSalt.startTime}</span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>End Time</span>
                <span>
                  {service?.serviceSalt.endTime}
                  {/* {service?.doctor?.user?.email} */}
                </span>
              </div>
              <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                <span>Visited Free</span>
                <span>{service?.price} BDT</span>
              </div>

              {service?.serviceOffers?.map(
                (offer: {
                  id: string;
                  status: string;
                  discount: number;
                  promoCode: string;
                  offerTitle: string;
                }) =>
                  offer.status == "Active" && (
                    <div key={offer.id} className="mt-4">
                      <h3 className=" text-xl font-bold">Offer Details</h3>
                      <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                        <span>Offer Title</span>
                        <span>{offer?.offerTitle}</span>
                      </div>
                      <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                        <span>Discount</span>
                        <span>{offer?.discount} %</span>
                      </div>
                      <div className=" grid  grid-cols-2 border-b pb-2 mt-3">
                        <span>Use Promo Code</span>
                        <span>{offer?.promoCode} BDT</span>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        <div className="  py-5 ">
          <h3 className=" text-xl font-bold">Service Review </h3>
          <div className=" flex  lg:block">
            <div className="lg:w-0 w-4"></div>
            <div className=" mt-2 grid lg:grid-cols-2 grid-cols-1 gap-5 w-full  pl-8">
              {review?.slice(0, `${viewAll ? 10 : 2}`).map((user: any) => (
                <div
                  key={user?.id}
                  className=" lg:w-72 w-66 h-32 border bg-white rounded-3xl  relative"
                >
                  <div className=" pl-10 py-4 pr-3">
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
                    </div>
                  </div>

                  <div className=" absolute w-20 h-20 border-2 border-[#d1001c] rounded-full top-5 left-[-50px]">
                    <Image
                      width={50}
                      height={50}
                      src={user?.user?.profile?.avatar}
                      className=" w-20 h-20 rounded-full p-2"
                      alt="Donor Pic"
                    />
                  </div>
                </div>
              ))}

              <p
                onClick={() => setVewAll(!viewAll)}
                className=" cursor-pointer"
              >
                View All Review
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorServiceDetails;
