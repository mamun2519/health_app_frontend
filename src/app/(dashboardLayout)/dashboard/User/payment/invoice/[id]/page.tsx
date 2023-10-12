"use client";
import PaymentInvoice from "@/components/payment/PaymentInvoice";
import { usePaymentDetailsQuery } from "@/redux/api/paymentApi";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
const PaymentInvoicePage = ({ params }: { params: { id: string } }) => {
  const { data } = usePaymentDetailsQuery(params.id);
  // console.log(data);
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/User/payment",
      level: "Payment",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/User/payment",
      level: "Invoice",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "text.primary",
    },
  ];
  return (
    <div>
      <PaymentInvoice bread={bread} invoice={data} />
    </div>
  );
};

export default PaymentInvoicePage;
