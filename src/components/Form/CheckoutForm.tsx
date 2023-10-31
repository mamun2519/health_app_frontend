"use client";
import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Link from "next/link";
import { ICreateBookAppointment } from "@/app/payment/appointmentForm/page";
import { IBookingInfo } from "@/app/payment/preview/page";
import { useCreatePaymentMutation } from "@/redux/api/paymentApi";

export default function CheckoutForm() {
  const [price, SetPrice] = useState<IBookingInfo>({
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

  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [createPayment] = useCreatePaymentMutation();

  useEffect(() => {
    SetPrice(JSON.parse(localStorage.getItem("BookingInfo") as string));
    SetPatientInfo(JSON.parse(localStorage.getItem("PatientInfo") as string));
  }, []);
  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/payment/success",
      },
    });

    console.log(error.type);
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then

    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message as string);
    } else {
      // const appointment = {
      //   bookingDate: price?.bookingDate,
      //   doctorId: price?.doctorId,
      //   gender: patientInfo?.gender,
      //   age: Number(patientInfo?.age),
      //   weight: Number(patientInfo?.weight),
      //   bloodGroup: patientInfo?.bloodGroup,
      //   slatTime: price?.slatTime,
      //   patientProblem: patientInfo?.patientProblem,
      //   report: "no",
      //   address: patientInfo?.address,
      //   serviceId: price?.serviceId,
      //   price: price.price,
      // };

      // const payment = {
      //   serviceId: price.serviceId,
      //   price: Number(price.price),
      //   doctorId: price.doctorId,
      //   transactionId: "No",
      //   discountedPrice: 0,
      //   paymentType: "Stripe",
      // };
      // try {
      //   const res = await createPayment({ appointment, payment }).unwrap();
      //   console.log(res);
      // } catch (error) {
      //   console.log(error);
      // }
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: any = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e: any) => setEmail(e?.target?.value)}
      />
      <div className="mt-4">
        {" "}
        <PaymentElement id="payment-element" options={paymentElementOptions} />
      </div>
      <button
        className="w-full"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isLoading ? (
            <div className="spinner " id="spinner"></div>
          ) : (
            <div className="mt-5 w-full bg-[#d1001c] h-10  text-white rounded-2xl flex justify-center items-center  ">
              {" "}
              Pay now {price?.price} BDT
            </div>
          )}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
