"use client";
import DoctorService from "@/components/doctorService/DoctorService";
import { useAllServiceQuery } from "@/redux/api/doctorServiceApi";
import { MenuItem, Pagination } from "@mui/material";
import React, { useState } from "react";
import PriceRange from "../../../components/ui/PriceRange";
import { DoctorSpecialists, Limit, ServiceCategory } from "@/constants/donor";
import LoadingSpinner from "@/utils/Loading";
import RefreshIcon from "@mui/icons-material/Refresh";
import Select from "react-select";
const DoctorServicePage = () => {
  const [pageLimit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOption, setFilterOption] = useState("");
  const [category, setCategory] = useState(null);

  const query: Record<string, any> = {};
  query["page"] = currentPage;
  query["limit"] = pageLimit;
  // query["price"] = priceRange;
  if (category) {
    query["category"] = category;
  }

  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };
  const { data, isLoading } = useAllServiceQuery(query);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-28 ">
      <div className="borde   rounded  relative   h-[540px] mt-5">
        {/* <h3 className=" text-3xl font-bold"></h3> */}
        <div className=" lg:flex justify-between gap-2">
          <h3 className=" text-cent text-3xl font-bold ">Doctor Service</h3>
          <div>
            <div className="flex gap-2 items-center h-full">
              {category && (
                <button
                  onClick={() => {
                    setCategory(null);
                    setLimit(10);
                  }}
                  className="w-10 bg-base-200 h-full rounded flex  justify-center items-center "
                >
                  <RefreshIcon />
                </button>
              )}
              <Select
                className="lg:w-60 w-full mt-2 lg:mt-0"
                defaultValue={category}
                placeholder="Filter By Specialist"
                onChange={(event: any) => setCategory(event?.value)}
                options={ServiceCategory}
              />
              <Select
                className="w-28 mt-2 lg:mt-0"
                placeholder="limit"
                defaultValue={pageLimit}
                onChange={(event: any) => setLimit(event?.value)}
                options={Limit}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt   ">
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
    </div>
  );
};

export default DoctorServicePage;
