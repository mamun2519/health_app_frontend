import ViewPatient from "@/components/patient/Viewpatient";
import React from "react";

const ViewPatientPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <ViewPatient params={params.id} />
    </div>
  );
};

export default ViewPatientPage;
