"use client";
import PaymentInvoice from "@/components/payment/PaymentInvoice";
import { usePaymentDetailsQuery } from "@/redux/api/paymentApi";
import React from "react";

const PaymentInvoicePage = ({ params }: { params: { id: string } }) => {
  const { data } = usePaymentDetailsQuery(params.id);
  console.log(data);
  return (
    <div>
      <PaymentInvoice invoice={data} />
    </div>
  );
};

export default PaymentInvoicePage;
