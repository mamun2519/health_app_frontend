"use client";
import MyStepper from "@/components/ui/MyStepper";
import React, { useEffect, useState } from "react";
import SuccessPayment from "@/assets/paymentDone.png";
import Image from "next/image";
import { IBookingInfo } from "../preview/page";
import { ICreateBookAppointment } from "../appointmentForm/page";
import { useCreatePaymentMutation } from "@/redux/api/paymentApi";
import { useRouter } from "next/navigation";
const SuccessPage = () => {
  const [counter, setCounter] = useState(3);
  // const price = JSON.parse(localStorage.getItem("BookingInfo") as string);
  // const patientInfo = JSON.parse(localStorage.getItem("PatientInfo") as string);

  const [createPayment] = useCreatePaymentMutation();

  const router = useRouter();

  useEffect(() => {
    // Ensure that this code only runs on the client-side
    // Accessing localStorage directly on the server-side can cause issues
    if (typeof window !== "undefined") {
      const bookingInfo = localStorage.getItem("BookingInfo");
      const patientInfo = localStorage.getItem("PatientInfo");

      // Check if the items are available in localStorage before parsing them
      if (bookingInfo && patientInfo) {
        const price = JSON.parse(bookingInfo);
        const patient = JSON.parse(patientInfo);

        // Now you can use 'price' and 'patient' data
        // Rest of your code...
        const appointment = {
          bookingDate: price?.bookingDate,
          doctorId: price?.doctorId,
          gender: patient?.gender,
          age: Number(patient?.age),
          weight: Number(patient?.weight),
          bloodGroup: patient?.bloodGroup,
          slatTime: price?.slatTime,
          patientProblem: patient?.patientProblem,
          report: "no",
          address: patient?.address,
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
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        clearInterval(interval); // Stop the interval when counter reaches 3
        router.push("/dashboard"); // Navigate to the dashboard route
      }
    }, 1000); // Increment every second (you can adjust the interval time)
  }, [counter, router]);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-28 pb-40">
      <MyStepper stepper={3} />
      <div className="border h-[550px] lg:w-1/2   w-full rounded-2xl p-7 mt-10 mx-auto">
        <Image
          src={SuccessPayment}
          width={500}
          height={520}
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
