"use client";
import MyStepper from "@/components/ui/MyStepper";
import { useDoctorServiceDetailsQuery } from "@/redux/api/doctorServiceApi";
import React, { useEffect, useState } from "react";
import { ICreateBookAppointment } from "../appointmentForm/page";

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

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-10 pb-40">
      <MyStepper stepper={1} />

      <div className=" lg:flex  mt-10 gap-5">
        <div className="border h-full  lg:w-2/3 w-full rounded-xl p-5">
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
        </div>
        <div className="w-1/3 border h-96"></div>
      </div>
    </div>
  );
};

export default PreviewPage;
