"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/Form/CheckoutForm";
import MyStepper from "@/components/ui/MyStepper";
import { usePaymentStripeQuery } from "@/redux/api/paymentApi";
import LoadingSpinner from "@/utils/Loading";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );
const stripePromise = loadStripe(
  "pk_test_51L1nmNCGpaTt0RU8npNSNITrjLTAUDjwjX275RD6RDk5SGoYi1H1zLKxAis8OFp4C0PxQBT2L5c0L0VsTI9ewqGl00dT2UHEXy"
);
const ConformPage = () => {
  const [clientSecret, setClientSecret] = React.useState("");

  const { data, isLoading } = usePaymentStripeQuery({});
  console.log(data);

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
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-10 pb-40">
      <MyStepper stepper={2} />
      <div className="w-1/2 mx-auto border p-5 mt-10">
        {data?.clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default ConformPage;
