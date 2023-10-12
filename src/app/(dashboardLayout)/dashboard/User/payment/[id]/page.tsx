import UserPaymentDetails from "@/components/payment/UserPaymentDetails";
import React from "react";

const UserPaymentDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <UserPaymentDetails id={params.id} />
    </div>
  );
};

export default UserPaymentDetailsPage;
