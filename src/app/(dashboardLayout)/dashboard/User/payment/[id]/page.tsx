"use client";
import UserPaymentDetails from "@/components/payment/UserPaymentDetails";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
const UserPaymentDetailsPage = ({ params }: { params: { id: string } }) => {
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
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/User/payment",
      level: "Details",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "text.primary",
    },
  ];
  return (
    <div>
      <UserPaymentDetails bread={bread} id={params.id} />
    </div>
  );
};

export default UserPaymentDetailsPage;
