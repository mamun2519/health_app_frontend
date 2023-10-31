"use client";
import MyStepper from "@/components/ui/MyStepper";
import { useDoctorServiceDetailsQuery } from "@/redux/api/doctorServiceApi";
import React, { useEffect, useState } from "react";
import { ICreateBookAppointment } from "../appointmentForm/page";
import Form from "@/components/Form/FormProvider";
import FormInput from "@/components/Form/FormInput";
import Link from "next/link";
import LoadingSpinner from "@/utils/Loading";

interface IBookingInfo {
  bookingDate: string;
  slatTime: string;
  doctorId: string;
  serviceId: string;
  price: string;
}
const PreviewPage = () => {
  const [serviceId, SetServiceId] = useState<string>("");
  const [BookingInfo, setBookingInfo] = useState<IBookingInfo>({
    bookingDate: "",
    slatTime: "",
    doctorId: "",
    serviceId: "",
    price: "",
  });
  const [patientInfo, SetPatientInfo] = useState<ICreateBookAppointment>({
    gender: "",
    age: 0,
    weight: 0,
    bloodGroup: "",

    patientProblem: "",

    address: "",
  });
  useEffect(() => {
    SetServiceId(
      JSON.parse(localStorage.getItem("BookingInfo") as string).serviceId
    );
    setBookingInfo(JSON.parse(localStorage.getItem("BookingInfo") as string));
    SetPatientInfo(JSON.parse(localStorage.getItem("PatientInfo") as string));
  }, []);

  const { data: service, isLoading } = useDoctorServiceDetailsQuery({
    id: serviceId,
    date: "",
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-10 pb-40">
      <MyStepper stepper={1} />

      <div className=" lg:flex  mt-10 gap-5">
        <div className="border h-[550px]  lg:w-2/3 w-full rounded-2xl p-7">
          <div className="mt-5">
            <h3 className=" text-xl font-bold">Appointment Information</h3>
            <div className=" grid grid-cols-2  mt-4">
              <p className="">Doctor Name</p>
              <p>
                Dr, {service?.doctor?.user?.profile?.first_name}{" "}
                {service?.doctor?.user?.profile?.last_name}
              </p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Appointment</p>
              <p>{service?.title}</p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Appointment Date</p>
              <p>{BookingInfo.bookingDate}</p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Schedule</p>
              <p>{BookingInfo.slatTime}</p>
            </div>
          </div>
          <div className="mt-5">
            <h3 className=" text-xl font-bold">Patient Information</h3>
            <div className=" grid grid-cols-2 mt-4 ">
              <p>Patient Condition</p>
              <p>{patientInfo.patientProblem}</p>
            </div>
            <div className=" grid grid-cols-2  mt-1">
              <p className="">Gender</p>
              <p>{patientInfo.gender}</p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Age</p>
              <p>{patientInfo.age}</p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Weight</p>
              <p>{patientInfo.weight}</p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Blood Group</p>
              <p>{patientInfo.bloodGroup}</p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Address</p>
              <p>{patientInfo.address}</p>
            </div>
          </div>

          <div className="mt-10 w-48 h-10 rounded bg-[#d1001c] text-white  font-medium  flex justify-center items-center">
            <Link href="/payment/appointmentForm">Back</Link>
          </div>
        </div>
        <div className="  lg:w-1/3 w-full border  p-7 rounded-3xl shadow-sm  h-[550px]  bg-[#30029010] ">
          <div className=" h-[370px]">
            <p className="text-xl "> Order Summary</p>
            <div className="mt-5 ">
              <div className="mt-1  flex gap-4 justify-between">
                <div className="">
                  <span>{service?.title}</span>
                </div>
                <div>
                  <span>{service?.price} BDT</span>
                </div>
              </div>

              <div className=" border  w-full mt-5"></div>
              <div className="mt-4  flex gap-4 justify-between">
                <div className="">
                  <span>Amount</span>
                </div>
                <div>
                  <span>{service?.price} BDT</span>
                </div>
              </div>
              <div className="mt-1  flex gap-4 justify-between">
                <div className="">
                  <span>Discount</span>
                </div>
                <div>
                  <span>00 BDT</span>
                </div>
              </div>
              <div className="mt-1  flex gap-4 justify-between">
                <div className="">
                  <span>Tax</span>
                </div>
                <div>
                  <span>Free</span>
                </div>
              </div>
              <div className="mt-1  flex gap-4 justify-between">
                <div className="">
                  <span>Service Charge</span>
                </div>
                <div>
                  <span>Free</span>
                </div>
              </div>

              <div className="h- border w-full mt-5"></div>

              <div className="mt-5">
                <Form submitHandler={() => {}}>
                  <div className="h-12 relative w-full">
                    <FormInput
                      name="promoCode"
                      label="Promo Code "
                      placeholder="Enter Promo code"
                    />{" "}
                    <div className=" absolute  top-2  right-2">
                      <button className="bg-[#d1001c] px-8 py-2 rounded text-white">
                        Send
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full px-4">
            <div className="  flex gap-4 justify-between">
              <div className="">
                <span className="text-2xl">Total </span>
              </div>
              <div>
                <span className="text-2xl"> BDT</span>
              </div>
            </div>
            <div className="mt-5 w-full bg-[#d1001c] h-10 text-white rounded-2xl flex justify-center items-center  ">
              <Link
                href="/payment/conform"
                // onClick={() => bookingHandler()}
              >
                Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
