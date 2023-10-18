"use client";
import AllDoctor from "@/components/doctor/AllDoctor";
import Doctors from "@/components/doctor/Doctors";
import NoData from "@/components/ui/NoData";
import { useGetAllDoctorQuery } from "@/redux/api/doctorServiceApi";
import { Pagination } from "@mui/material";
import React, { useState } from "react";

const DoctorPage = () => {
  const [pageLimit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOption, setFilterOption] = useState("");
  const query: Record<string, any> = {};
  query["page"] = currentPage;
  query["limit"] = pageLimit;

  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };
  const { data } = useGetAllDoctorQuery(query);
  console.log(data);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 lg:px-0 ">
        {data?.length === 0 ? <NoData /> : <AllDoctor doctors={data} />}
      </div>
      <div className=" flex justify-center items-center h-12   mt-10">
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
  );
};

export default DoctorPage;
