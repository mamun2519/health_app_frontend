"use client";
import PaymentInvoice from "@/components/payment/PaymentInvoice";
import { usePaymentDetailsQuery } from "@/redux/api/paymentApi";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import PaidIcon from "@mui/icons-material/Paid";
import FileCopyIcon from "@mui/icons-material/FileCopy";
const PaymentInvoicePage = ({ params }: { params: { id: string } }) => {
  const { data } = usePaymentDetailsQuery(params.id);
  // console.log(data);
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/User/payment",
      level: "Payment",
      icons: <PaidIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/User/payment",
      level: "Invoice",
      icons: <FileCopyIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "#d1001c",
    },
  ];
  return (
    <div>
      <PaymentInvoice bread={bread} invoice={data} />
    </div>
  );
};

export default PaymentInvoicePage;
