"use client";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/Form/CheckoutForm";
import MyStepper from "@/components/ui/MyStepper";
import { usePaymentStripeQuery } from "@/redux/api/paymentApi";
import LoadingSpinner from "@/utils/Loading";
import PaymentPic from "@/assets/paymentCard.png";
import Image from "next/image";
import Link from "next/link";
import { IBookingInfo } from "../preview/page";
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );
const stripePromise = loadStripe(
  "pk_test_51L1nmNCGpaTt0RU8npNSNITrjLTAUDjwjX275RD6RDk5SGoYi1H1zLKxAis8OFp4C0PxQBT2L5c0L0VsTI9ewqGl00dT2UHEXy"
);
const ConformPage = () => {
  const [price, setPrice] = useState<number>(0);
  useEffect(() => {
    setPrice(JSON.parse(localStorage.getItem("BookingInfo") as string).price);
  }, []);

  const { data, isLoading } = usePaymentStripeQuery(price);
  console.log(price);
  const appearance = {
    theme: "stripe",
  };
  const options: any = {
    clientSecret: data?.clientSecret,
    appearance,
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-28 pb-40">
      <MyStepper stepper={2} />
      <div className="  lg:flex gap-5">
        <div className="border h-[550px] lg:w-1/2   w-full rounded-2xl p-7 mt-10">
          {data?.clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <div className="mt-10">
                <CheckoutForm />
              </div>
            </Elements>
          )}
        </div>
        <div className=" lg:w-1/2  w-full border  p-7 rounded-3xl shadow-sm  h-[550px]  mt-10">
          <Image
            src={PaymentPic}
            width={500}
            height={520}
            className="w-full h-96"
            alt="Pic"
          />
          <div className=" flex justify-end">
            <div className="mt-20 w-48 h-10 rounded bg-[#d1001c] text-white  font-medium  flex justify-center items-center">
              <Link href="/payment/preview">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConformPage;
