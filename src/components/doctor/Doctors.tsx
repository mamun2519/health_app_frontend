import Link from "next/link";
import Doctor from "./Doctor";

const Doctors = ({ doctors }: any) => {
  return (
    <div className="  max-w-7xl mx-auto px-4 lg:px-0 my-20">
      <h3 className=" text-center text-3xl font-bold ">Meet Our Doctor</h3>
      <div className=" grid lg:grid-cols-4  grid-cols-1 mt-10 gap-5">
        {doctors?.map((doctor: any) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <div className=" flex justify-end mt-10">
        <Link
          href="/doctor"
          className=" w-52 h-10 rounded bg-[#d1001c] text-white font-bold flex justify-center items-center "
        >
          See More Doctor
        </Link>
      </div>
    </div>
  );
};

export default Doctors;
