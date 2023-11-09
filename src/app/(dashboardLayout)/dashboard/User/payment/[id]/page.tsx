"use client";
import UserPaymentDetails from "@/components/payment/UserPaymentDetails";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PaidIcon from "@mui/icons-material/Paid";
import PreviewIcon from "@mui/icons-material/Preview";
const UserPaymentDetailsPage = ({ params }: { params: { id: string } }) => {
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
      level: "Details",
      icons: <PreviewIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "#d1001c",
    },
  ];
  return (
    <div>
      <UserPaymentDetails bread={bread} id={params.id} />
    </div>
  );
};

export default UserPaymentDetailsPage;
