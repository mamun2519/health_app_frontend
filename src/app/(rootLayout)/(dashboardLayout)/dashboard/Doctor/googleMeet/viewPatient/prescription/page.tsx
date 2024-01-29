import CreatePrescription from "@/components/doctor/CreatePrescription";
import React from "react";

const CreatePrescriptionPage = ({
  searchParams,
}: {
  searchParams: { appointment: string };
}) => {
  return (
    <div>
      <CreatePrescription appointmentId={searchParams.appointment} />
    </div>
  );
};

export default CreatePrescriptionPage;
