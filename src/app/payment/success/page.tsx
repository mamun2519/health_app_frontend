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
  const [counter, setCounter] = useState(4);

  const [createPayment] = useCreatePaymentMutation();

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const bookingInfo = localStorage.getItem("BookingInfo");
      const patientInfo = localStorage.getItem("PatientInfo");

      if (bookingInfo && patientInfo) {
        const price = JSON.parse(bookingInfo);
        const patient = JSON.parse(patientInfo);

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
          price: String(price.price),
        };
        console.log(appointment);

        const payment = {
          serviceId: price.serviceId,
          price: Number(price.price),
          doctorId: price.doctorId,
          transactionId: "No",
          discountedPrice: Number(price.discount),
          paymentType: "Stripe",
        };

        const paymentSuccess = async () => {
          const res = await createPayment({ appointment, payment }).unwrap();

          if (res) {
            localStorage.removeItem("BookingInfo");
            localStorage.removeItem("PatientInfo");
          }
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
        clearInterval(interval);
        router.push("/dashboard");
      }
    }, 1000);
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
