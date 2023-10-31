"use client";
import MyStepper from "@/components/ui/MyStepper";
import React, { useEffect, useState } from "react";
import SuccessPayment from "@/assets/success.gif";
import Image from "next/image";
import { IBookingInfo } from "../preview/page";
import { ICreateBookAppointment } from "../appointmentForm/page";
import { useCreatePaymentMutation } from "@/redux/api/paymentApi";
import { useRouter } from "next/navigation";
const SuccessPage = () => {
  // const [price, SetPrice] = useState<IBookingInfo>({
  //   bookingDate: "",
  //   slatTime: "",
  //   doctorId: "",
  //   serviceId: "",
  //   price: "",
  // });
  // const [patientInfo, SetPatientInfo] = useState<ICreateBookAppointment>({
  //   gender: "",
  //   age: 0,
  //   weight: 0,
  //   bloodGroup: "",
  //   patientProblem: "",
  //   address: "",
  // });
  const [counter, setCounter] = useState(0);
  const price = JSON.parse(localStorage.getItem("BookingInfo") as string);
  const patientInfo = JSON.parse(localStorage.getItem("PatientInfo") as string);

  const [createPayment] = useCreatePaymentMutation();

  // useEffect(() => {
  //   // SetPrice(JSON.parse(localStorage.getItem("BookingInfo") as string));
  //   // SetPatientInfo(JSON.parse(localStorage.getItem("PatientInfo") as string));
  // }, []);

  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 3) {
        setCounter(counter + 1);
      } else {
        clearInterval(interval); // Stop the interval when counter reaches 3
        router.push("/dashboard"); // Navigate to the dashboard route
      }
    }, 1000); // Increment every second (you can adjust the interval time)
  }, [counter, history]);
  useEffect(() => {
    const appointment = {
      bookingDate: price?.bookingDate,
      doctorId: price?.doctorId,
      gender: patientInfo?.gender,
      age: Number(patientInfo?.age),
      weight: Number(patientInfo?.weight),
      bloodGroup: patientInfo?.bloodGroup,
      slatTime: price?.slatTime,
      patientProblem: patientInfo?.patientProblem,
      report: "no",
      address: patientInfo?.address,
      serviceId: price?.serviceId,
      price: price.price,
    };

    const payment = {
      serviceId: price.serviceId,
      price: Number(price.price),
      doctorId: price.doctorId,
      transactionId: "No",
      discountedPrice: 0,
      paymentType: "Stripe",
    };

    const paymentSuccess = async () => {
      const res = await createPayment({ appointment, payment }).unwrap();
      console.log(res);
    };

    paymentSuccess();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-10 pb-40">
      <MyStepper stepper={3} />
      <div className="border h-[550px] lg:w-1/2   w-full rounded-2xl p-7 mt-10 mx-auto">
        <Image
          src={SuccessPayment}
          width={100}
          height={20}
          className="w-full h-96"
          alt="Pic"
        />

        <div className="flex justify-center">
          <div className="text-center">
            <h3>Payment Complete Successfully</h3>
            <p>Wait {counter}</p>
            <p>Redirect To Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
