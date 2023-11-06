import DoctorService from "@/components/doctorService/DoctorService";
import NoData from "@/components/ui/NoData";
import { URL } from "@/constants/common";
import React from "react";
interface ISearchParams {
  category: string;
  day: string;
  duration: string;
}
const FindServicePage = async ({
  searchParams,
}: {
  searchParams: ISearchParams;
}) => {
  const res = await fetch(
    `${URL}/doctor-service/filter-services?category=${searchParams.category}&day=${searchParams.day}&duration=${searchParams.duration}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  // console.log(data);

  return (
    <div className=" max-w-7xl mx-auto lg:px-4  mt-28">
      {data?.data?.length === 0 ? (
        <NoData />
      ) : (
        data?.data?.map((service: any) => (
          <DoctorService key={service.id} service={service} />
        ))
      )}
    </div>
  );
};

export default FindServicePage;
