import DashboardDoctorServiceDetails from "@/components/doctorService/DashboardServiceDetails";

import React from "react";

const DoctorServiceDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <DashboardDoctorServiceDetails id={params?.id} />
    </div>
  );
};

export default DoctorServiceDetailsPage;
