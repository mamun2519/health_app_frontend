"use client";

import PaymentInvoice from "@/components/payment/PaymentInvoice";
import { usePaymentDetailsQuery } from "@/redux/api/paymentApi";
import HomeIcon from "@mui/icons-material/Home";

import PaidIcon from "@mui/icons-material/Paid";
import FileCopyIcon from "@mui/icons-material/FileCopy";
const DoctorInvoicePage = ({ params }: { params: { id: string } }) => {
  const { data } = usePaymentDetailsQuery(params.id);
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Admin/payment",
      level: "Manage Payment",
      icons: <PaidIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Admin/payment",
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

export default DoctorInvoicePage;
