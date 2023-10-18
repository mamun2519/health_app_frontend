import React from "react";

import DonorComponents from "./DonorsComponents";
import Link from "next/link";
const Donors = ({ data }: any) => {
  return (
    <div className="  max-w-7xl mx-auto px-4 lg:px-0 my-20">
      <h3 className=" text-center text-3xl font-bold ">Meet Our Supper Hero</h3>
      <DonorComponents donors={data} />
      <div className=" flex justify-end mt-5">
        <Link
          href="/bloodDonor/all"
          className=" w-52 h-10 rounded bg-[#d1001c] text-white font-bold  flex justify-center items-center"
        >
          See More Donor
        </Link>
      </div>
    </div>
  );
};

export default Donors;
