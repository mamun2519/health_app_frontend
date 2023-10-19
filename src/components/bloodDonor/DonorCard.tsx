import DoctorImage from "../../assets/dr-dk-gupta.jpg";
import Image from "next/image";
import Link from "next/link";

const DonorCard = ({ donor }: { donor: any }) => {
  return (
    <div
      key={donor.id}
      className=" w-full h-[430px] border shadow  rounded bg-[#30029010]"
    >
      <div className=" flex justify-center  h-32 relative">
        <div className="w-32 h-32   rounded-full  mt-5 border-[#d1001c] border-2  ">
          <Image
            src={donor.profile?.avatar}
            width={50}
            height={50}
            className="w-32 h-32 rounded-full  p-2"
            alt="Doctor Image"
          />
        </div>
        <div className="w-16 h-16   rounded-full  mt-5 bg-[#d1001c] border-2 absolute     lg:right-16 right-[90px] md:right-[350px] text-xl   font-bold flex justify-center items-center text-white">
          <p>{donor.profile.blood_group}</p>
        </div>
      </div>

      <div className=" mt-7">
        <div className=" text-center">
          <p className="    font-bold">
            {`${donor.profile.first_name} ${donor?.profile?.last_name}`}
          </p>
          <button className="px-4 py- rounded-xl bg-[#d1001c] text-white   font-bold">
            Blood Donor
          </button>
          <p>Donor Of {donor?.profile?.present_Address?.district}</p>
        </div>
        <div className=" w-full  border-2 border-[#d1001c] mt-1"></div>
        <div className=" px-4 py-2">
          <div className=" flex  ">
            <span className=" w-52">Gender</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {donor.profile?.gender}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-52">Date of birth:</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {donor.profile?.date_of_birth}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-52">Phone</span>
            <span className=" text-gray-700 font-medium w-full ">
              : {donor.profile?.phone}
            </span>
          </div>
          <div className=" flex mt-1">
            <span className=" w-52">Last Denoted</span>
            <span className=" text-gray-700 font-medium w-full ">
              : 5 Day Ago
            </span>
          </div>
        </div>
        <div className=" flex justify-center px-4 mt-5">
          <Link
            className=" w-full h-8 rounded bg-[#d1001c] flex justify-center items-center text-white font-bold"
            href={`/bloodDonor/${donor.id}`}
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonorCard;
