"use client";
import NoData from "@/components/ui/NoData";
import { useAllBloodDonorQuery } from "@/redux/api/bloodDonorApi";
import React, { useState } from "react";
import DonorComponents from "@/components/bloodDonor/DonorsComponents";
import { MenuItem, Pagination } from "@mui/material";
import {
  DoctorSpecialists,
  Limit,
  SelectedBloodGroup,
  ServiceCategory,
  bloodGroups,
  filterDonar,
} from "@/constants/donor";
import LoadingSpinner from "@/utils/Loading";
import Form from "../Form/FormProvider";
import Select from "react-select";
const AllDonor = () => {
  const [pageLimit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOption, setFilterOption] = useState("");
  const query: Record<string, any> = {};
  query["page"] = currentPage;
  query["limit"] = pageLimit;

  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };
  const { data, isLoading } = useAllBloodDonorQuery(query);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      {data?.length === 0 && <NoData />}
      <div className=" flex justify-between items-center">
        {data?.length !== 0 && (
          <div className=" flex justify-between w-full">
            <div>
              <h3 className="text-2xl">Our Blood Donors</h3>
            </div>
            <div className="flex gap-2 items-center">
              <Select
                className="lg:w-56 w-full"
                defaultValue={filterOption}
                placeholder="Filter By Blood Group"
                onChange={(event: any) => setFilterOption(event?.value)}
                options={filterDonar}
              />
            </div>
          </div>
        )}
        {/* <div className=" flex items-center gap-5">
          <h3>Filter By Group </h3>
          <div>
            {" "}
            <Select
              className="w-20 h-10"
              placeholder="limit"
              defaultValue={"A"}
              // onChange={(event: any) => setLimit(event?.value)}
              // options={SelectedBloodGroup}
            >
              {SelectedBloodGroup?.map((op, i) => (
                <MenuItem key={i} value={op.value}>
                  {op.label}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div> */}
      </div>
      <DonorComponents donors={data} />

      <div>
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
    </div>
  );
};

export default AllDonor;
