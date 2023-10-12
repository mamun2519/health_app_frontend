import PrescriptionDetails from "@/components/prescription/PrescriptionDetails";

const PrescriptionDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <PrescriptionDetails id={params.id} />
    </div>
  );
};

export default PrescriptionDetailsPage;
