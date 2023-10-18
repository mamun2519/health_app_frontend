"use client";
import DoctorService from "@/components/doctorService/DoctorService";
import { useAllServiceQuery } from "@/redux/api/doctorServiceApi";
import { MenuItem, Pagination, Select } from "@mui/material";
import React, { useState } from "react";
import PriceRange from "../../../components/ui/PriceRange";
import { ServiceCategory } from "@/constants/donor";

const DoctorServicePage = () => {
  const [pageLimit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOption, setFilterOption] = useState("");
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const query: Record<string, any> = {};
  query["page"] = currentPage;
  query["limit"] = pageLimit;
  // query["price"] = priceRange;

  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };
  const { data } = useAllServiceQuery({ ...query });
  console.log(data?.data);

  const handlePriceChange = (value: any) => {
    setPriceRange(value);
  };
  console.log(priceRange[1]);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-10 ">
      <div className="borde   rounded p-5  relative shdow  h-[540px] mt-5">
        <h3 className=" text-3xl font-bold">Doctor Service</h3>
        <div className=" flex gap-5">
          <div className="   w-80 h-full border p-5 mt-5">
            <PriceRange
              min={0}
              max={500}
              values={priceRange}
              onChange={handlePriceChange}
            />
            {/* <div className="mt-8">
              <h2 className="text-xl font-semibold">Category</h2>
              <div className="w-full mt-2">
                <Select
                  className="w-full"
                  placeholder="limit"
                  defaultValue={category}
                  onChange={(event: any) => setCategory(event?.level)}
                  options={ServiceCategory as any}
                >
                  {ServiceCategory?.map((op, i) => (
                    <MenuItem key={i} value={op.value}>
                      {op.label}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div> */}
          </div>
          <div className="grid grid-cols-2  gap-5 mt   ">
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
