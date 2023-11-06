import Doctors from "@/components/doctor/Doctors";
import NoData from "@/components/ui/NoData";
import { URL } from "@/constants/common";
import React from "react";

interface ISearchParams {
  specialist: string;
  experience: string;
  division: string;
}
const FindDoctorPage = async ({
  searchParams,
}: {
  searchParams: ISearchParams;
}) => {
  const res = await fetch(
    `${URL}/user/filterDoctor?experience=${searchParams.experience}&specialist=${searchParams.specialist}&district=${searchParams.division} `,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  // console.log(data);
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-28">
      {data?.data.length === 0 ? <NoData /> : <Doctors doctors={data?.data} />}
    </div>
  );
};

export default FindDoctorPage;
