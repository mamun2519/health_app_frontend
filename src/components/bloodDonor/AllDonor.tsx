"use client";
import NoData from "@/components/ui/NoData";
import { useAllBloodDonorQuery } from "@/redux/api/bloodDonorApi";
import React, { useState } from "react";
import DonorComponents from "@/components/bloodDonor/DonorsComponents";
import { Pagination } from "@mui/material";
import { filterDonar } from "@/constants/donor";
import LoadingSpinner from "@/utils/Loading";

import Select from "react-select";
import RefreshIcon from "@mui/icons-material/Refresh";
const AllDonor = () => {
  const [pageLimit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBloodGroup, setFilterOption] = useState("");
  console.log(filterBloodGroup);
  const query: Record<string, any> = {};
  query["page"] = currentPage;
  query["limit"] = pageLimit;
  if (filterBloodGroup) {
    query["blood_group"] = filterBloodGroup;
  }

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
              {filterBloodGroup && (
                <button
                  onClick={() => {
                    setFilterOption("");
                  }}
                  className="w-10 bg-base-200 h-full rounded flex  justify-center items-center "
                >
                  <RefreshIcon />
                </button>
              )}
              <Select
                className="lg:w-56 w-full"
                defaultValue={filterBloodGroup}
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
        <div className=" flex justify-center items-center h-12   mt-8">
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
