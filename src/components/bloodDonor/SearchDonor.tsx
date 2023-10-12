"use client";
import {
  BarisalDistricts,
  ChittagongDistricts,
  KhulnaDistricts,
  MymensinghDistricts,
  RajshahiDistricts,
  RangpurDistricts,
  SylhetDistricts,
  bloodGroups,
  divisions,
} from "@/constants/donor";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ServicePic from "../../assets/Hospital bed-pana.svg";
const SearchDonor = () => {
  const [bloodDonor, setBloodDonor] = useState("");
  const [selectDivision, setDivision] = useState("");
  const [selectDistrict, setDistrict] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-10">
      <div className=" grid grid-cols-2  gap-5 ">
        <div className="w-full border h-full p-5 bg-[#30029010] rounded">
          <div className=" flex gap-3  items-center  ">
            <h3 className=" text-2xl uppercase">Search Blood Donor</h3>
            <div className="h-1 bg-red-500 w-52"></div>
          </div>
          <h2 className="text-xl mt-5">Blood Group</h2>
          <div className=" grid lg:grid-cols-4  grid-cols-3 gap-3  mt-2">
            {bloodGroups.map((bloodGroup: { title: string }) => (
              <button
                onClick={() => setBloodDonor(bloodGroup.title)}
                className={`w-full h-12  border flex justify-center items-center rounded  shadow ${
                  bloodGroup.title == bloodDonor
                    ? "bg-[#d1001c] text-white font-bold"
                    : "bg-white "
                }`}
                key={bloodGroup.title}
              >
                <p>{bloodGroup.title}</p>
              </button>
            ))}
          </div>

          <div className="mt-5">
            <h2 className="text-xl ">Division</h2>
            <div className=" grid lg:grid-cols-4  grid-cols-3 gap-3  mt-2">
              {divisions.map((division: { title: string }) => (
                <button
                  onClick={() => setDivision(division.title)}
                  className={`w-full h-12  border flex justify-center items-center rounded  shadow ${
                    division.title == selectDivision
                      ? "bg-[#d1001c] text-white font-bold"
                      : "bg-white "
                  }`}
                  key={division.title}
                >
                  <p>{division.title}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            {selectDivision && <h2 className="text-xl ">District</h2>}
            <div className=" grid lg:grid-cols-4  grid-cols-2  gap-3 mt-2">
              {selectDivision === "Chittagong" &&
                ChittagongDistricts.map((district: { title: string }) => (
                  <button
                    onClick={() => setDistrict(district.title)}
                    className={`w-full h-12  border flex justify-center items-center rounded  shadow ${
                      district.title == selectDistrict
                        ? "bg-[#d1001c] text-white font-bold"
                        : "bg-white "
                    }`}
                    key={district.title}
                  >
                    <p>{district.title}</p>
                  </button>
                ))}
              {selectDivision === "Khulna" &&
                KhulnaDistricts.map((district: { title: string }) => (
                  <button
                    onClick={() => setDistrict(district.title)}
                    className={`w-full h-12  border flex justify-center items-center rounded  shadow ${
                      district.title == selectDistrict
                        ? "bg-[#d1001c] text-white font-bold"
                        : "bg-white "
                    }`}
                    key={district.title}
                  >
                    <p>{district.title}</p>
                  </button>
                ))}
              {selectDivision === "Rangpur" &&
                RangpurDistricts.map((district: { title: string }) => (
                  <button
                    onClick={() => setDistrict(district.title)}
                    className={`w-full h-12  border flex justify-center items-center rounded  shadow ${
                      district.title == selectDistrict
                        ? "bg-[#d1001c] text-white font-bold"
                        : "bg-white "
                    }`}
                    key={district.title}
                  >
                    <p>{district.title}</p>
                  </button>
                ))}
              {selectDivision === "Rajshahi" &&
                RajshahiDistricts.map((district: { title: string }) => (
                  <button
                    onClick={() => setDistrict(district.title)}
                    className={`w-full h-12  border flex justify-center items-center rounded  shadow ${
                      district.title == selectDistrict
                        ? "bg-[#d1001c] text-white font-bold"
                        : "bg-white "
                    }`}
                    key={district.title}
                  >
                    <p>{district.title}</p>
                  </button>
                ))}
              {selectDivision === "Sylhet" &&
                SylhetDistricts.map((district: { title: string }) => (
                  <button
                    onClick={() => setDistrict(district.title)}
                    className={`w-full h-12  border flex justify-center items-center rounded  shadow ${
                      district.title == selectDistrict
                        ? "bg-[#d1001c] text-white font-bold"
                        : "bg-white "
                    }`}
                    key={district.title}
                  >
                    <p>{district.title}</p>
                  </button>
                ))}
              {selectDivision === "Mymensingh" &&
                MymensinghDistricts.map((district: { title: string }) => (
                  <button
                    onClick={() => setDistrict(district.title)}
                    className={`w-full h-12  border flex justify-center items-center rounded  shadow ${
                      district.title == selectDistrict
                        ? "bg-[#d1001c] text-white font-bold"
                        : "bg-white "
                    }`}
                    key={district.title}
                  >
                    <p>{district.title}</p>
                  </button>
                ))}
              {selectDivision === "Borisal" &&
                BarisalDistricts.map((district: { title: string }) => (
                  <button
                    onClick={() => setDistrict(district.title)}
                    className={`w-full h-12  border flex justify-center items-center rounded  shadow ${
                      district.title == selectDistrict
                        ? "bg-[#d1001c] text-white font-bold"
                        : "bg-white "
                    }`}
                    key={district.title}
                  >
                    <p>{district.title}</p>
                  </button>
                ))}
            </div>
          </div>

          <div className=" flex gap-5 mt-5 justify-center">
            <Link
              href={`/bloodDonor/findDonor?bloodGroup=${bloodDonor}&division=${selectDivision}&district=${selectDistrict}`}
            >
              <button className=" w-52 h-10 rounded bg-[#d1001c] text-white font-medium ">
                Search Now
              </button>
            </Link>
          </div>
        </div>
        <div className="  border  flex justify-center">
          <Image src={ServicePic} alt="Service pic" />
        </div>
      </div>
    </div>
  );
};

export default SearchDonor;
