"use client";
import DoctorService from "@/components/doctorService/DoctorService";
import NoData from "@/components/ui/NoData";
import { useAllServiceQuery } from "@/redux/api/doctorServiceApi";
import { Pagination } from "@mui/material";
import React, { useState } from "react";

const ServiceCategoryPage = ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: { name: string };
}) => {
  const [pageLimit, setLimit] = useState(10);

  const [currentPage, setCurrentPage] = useState(1);
  const query: Record<string, any> = {};
  query["page"] = currentPage;
  query["limit"] = pageLimit;
  query["category"] = searchParams.name;
  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };
  const { data } = useAllServiceQuery({ ...query });
  return (
    <div className="max-w-7xl mx-auto lg:px-4 mt-28 ">
      {data?.data?.length === 0 ? (
        <NoData />
      ) : (
        <div className="borde   rounded p-5  relative shdow  h-[540px] mt-5">
          <h3 className=" text-3xl font-bold">Doctor Service</h3>
          <div className=" flex gap-5">
            <div className="grid lg:grid-cols-2  grid-cols-1 gap-5 mt   ">
              {data?.data?.map((service: any) => (
                <DoctorService key={service?.id} service={service} />
              ))}
            </div>
          </div>
          <div className=" flex justify-center items-center h-12   py-20">
            <Pagination
              count={15}
              onChange={handlePageChange}
              page={currentPage}
              variant="outlined"
              shape="rounded"
            />
            {/* <p>Selected Page: {currentPage}</p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCategoryPage;
