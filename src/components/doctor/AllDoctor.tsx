import Doctor from "./Doctor";
const AllDoctor = ({ doctors }: any) => {
  return (
    <div className="  max-w-7xl mx-auto px-0 lg:px-4 my-20 pb-40">
      <h3 className=" text-cent text-3xl font-bold ">Meet Our Doctor</h3>
      <div className=" grid lg:grid-cols-4  grid-cols-1 mt-10 gap-5">
        {doctors?.map((doctor: any) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};
export default AllDoctor;
