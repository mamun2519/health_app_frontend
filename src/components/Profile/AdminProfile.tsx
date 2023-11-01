"use client";
import React, { useState } from "react";
import Cover from "../../assets/dr-dk-gupta.jpg";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Form from "../Form/FormProvider";
import FormInput from "../Form/FormInput";
import { useMyProfileQuery } from "@/redux/api/profileApi";
import { convertDate } from "@/helper/date";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { SubmitHandler } from "react-hook-form";
import successMessage from "../shared/SuccessMassage";
import CoverPic from "../../assets/Default.jpg";
import Link from "next/link";
import errorMessage from "../shared/ErrrorMessage";
import LoadingSpinner from "@/utils/Loading";

export type IResetPassword = {
  email: string;
  oldPassword: string;
  newPassword: string;
};
const ManageAdminProfile = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const { data, isLoading } = useMyProfileQuery({ limit: 100, page: 1 });
  console.log(data);
  const [resetPassword] = useResetPasswordMutation();
  const changePasswordHandler: SubmitHandler<IResetPassword> = async (
    value
  ) => {
    try {
      const res = await resetPassword(value).unwrap();
      console.log(res);
      if (res) {
        successMessage({
          header: "Thank You",
          message: "Password Reset Successfully",
        });
      } else {
        errorMessage({ message: "Something is wrong" });
      }
    } catch (error: any) {
      console.log(error);
      errorMessage({ message: error?.data });
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="  pb-40 ">
      <div className="lg:flex gap-5 ">
        <div className="h-full  lg:border  p-5 rounded-3xl lg:shadow-sm  lg:w-full w-80">
          <div className=" w-full h-[260px]  relative ">
            <Image
              width={550}
              height={550}
              src={data?.profile?.cover ? data?.profile?.cover : CoverPic}
              className=" object-cover  w-80  h-[260px]  lg:w-full rounded-b-3xl rounded-t-xl "
              alt="Cover pic"
            />

            <div className=" h-36 lg:w-11/12 lg:border border-[#30029010] py-4 lg:p-5 rounded-3xl shadow-sm lg:absolute  top-52   lg:glass lg:left-12  lg:flex gap-6 items-center">
              <div className=" border-2xl h-full lg:w-36 w-28  p-1 border shadow-sm">
                <Image
                  src={data?.profile?.avatar}
                  className="  lg:h-full h-24  lg:w-full w-28 "
                  width={150}
                  height={150}
                  alt="Cover pic"
                />
              </div>
              <div className=" lg:flex justify-between w-full items-end">
                <div>
                  <h3 className="text-xl font-bold">
                    {data?.profile?.first_name} {data?.profile?.last_name}
                  </h3>
                  <p>Join {convertDate(data?.createdAt)}</p>
                  <p>{data?.email}</p>
                </div>
                <div className=" lg:flex gap-3 lg:mt- mt-3">
                  {/* <span className="">
                    <AccountCircleIcon />
                  </span>
                  <span>
                    <AccountCircleIcon />
                  </span>
                  <span>
                    <AccountCircleIcon />
                  </span> */}
                  <Link
                    href="/dashboard/Admin/profile/edit"
                    className="px-4 py-2 text-white rounded bg-red-500"
                  >
                    Update Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className=" lg:mt-28 mt-[120px]">
              <p className="text-xl font-medium">About Me</p>
              <p className="mt-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
                iste! Ducimus similique commodi quis labore quo ex iusto, sit
                cumque.
              </p>
            </div>
          </div>
          <div className="lg:mt-60 mt-[420px]    grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="">
              <h3 className=" text-xl">Present Address</h3>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>Division</span>
                </div>
                <div>
                  <span>: {data?.profile?.present_Address?.district}</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>City</span>
                </div>
                <div>
                  <span>: {data?.profile?.present_Address?.sub_district}</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>Police Station</span>
                </div>
                <div>
                  <span>: {data?.profile?.present_Address?.ad}</span>
                </div>
              </div>
              {/* <div className=" mt-5">
                <h3 className=" text-xl">Present Address</h3>
                <div className=" flex     mt-2">
                  <div className="w-36">
                    <span>Division</span>
                  </div>
                  <div>
                    <span>: Chittagong</span>
                  </div>
                </div>
                <div className=" flex     mt-2">
                  <div className="w-36">
                    <span>City</span>
                  </div>
                  <div>
                    <span>: Chittagong</span>
                  </div>
                </div>
                <div className=" flex     mt-2">
                  <div className="w-36">
                    <span>Police Station</span>
                  </div>
                  <div>
                    <span>: Wast Madarbari</span>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="">
              <h3 className=" text-xl">Additional Info</h3>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>phone</span>
                </div>
                <div>
                  <span>: {data?.profile?.phone}</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>gender</span>
                </div>
                <div>
                  <span>: {data?.profile?.gender}</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>blood_group</span>
                </div>
                <div>
                  <span>: {data?.profile?.blood_group}</span>
                </div>
              </div>
              {/* <div className=" flex     mt-2">
                <div className="w-36">
                  <span>specialist</span>
                </div>
                <div>
                  <span>: Chittagong</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>degree</span>
                </div>
                <div>
                  <span>: Wast Madarbari</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>experience</span>
                </div>
                <div>
                  <span>: Wast Madarbari</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>Balance</span>
                </div>
                <div>
                  <span>: 100 BDT</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="h-full  border  p-5 rounded-3xl shadow-sm  w-1/3">
          <p className="text-xl font-medium">Education</p>
          <div className="mt-3  border-b pb-4  ">
            <p className="text">School</p>
            <div className=" flex     mt-2">
              <div className="w-24">
                <span>Institute</span>
              </div>
              <div>
                <span>: Railway Public High School</span>
              </div>
            </div>
            <div className=" flex     mt-2">
              <div className="w-24">
                <span>Pass Year</span>
              </div>
              <div>
                <span>: 2022</span>
              </div>
            </div>
            <div className=" flex     mt-2">
              <div className="w-24">
                <span>GPA Year</span>
              </div>
              <div>
                <span>: 4.01</span>
              </div>
            </div>
          </div>
          <div className="mt-3  border-b pb-4">
            <p className="text">Collage</p>
            <div className=" flex     mt-2">
              <div className="w-24">
                <span>Institute</span>
              </div>
              <div>
                <span>: islamia Degree Collage</span>
              </div>
            </div>
            <div className=" flex     mt-2">
              <div className="w-24">
                <span>Pass Year</span>
              </div>
              <div>
                <span>: 2022</span>
              </div>
            </div>
            <div className=" flex     mt-2">
              <div className="w-24">
                <span>GPA Year</span>
              </div>
              <div>
                <span>: 4.01</span>
              </div>
            </div>
          </div>
          <div className="mt-3   pb-4  border-b">
            <p className="text">Vercity</p>
            <div className=" flex     mt-2">
              <div className="w-24">
                <span>Institute</span>
              </div>
              <div>
                <span>: Chittagong Varcity</span>
              </div>
            </div>
            <div className=" flex     mt-2">
              <div className="w-24">
                <span>Pass Year</span>
              </div>
              <div>
                <span>: 2022</span>
              </div>
            </div>
            <div className=" flex     mt-2">
              <div className="w-24">
                <span>GPA Year</span>
              </div>
              <div>
                <span>: 4.01</span>
              </div>
            </div>
          </div>
          <div className="mt-3   pb-4  ">
            <p className="text">Adittional Info</p>
            <div className=" flex     mt-2">
              <div className="w-24">
                <span>Phone</span>
              </div>
              <div>
                <span>: Chittagong Varcity</span>
              </div>
            </div>
            <div className=" flex     mt-2">
              <div className="w-24">
                <span>gender</span>
              </div>
              <div>
                <span>: 2022</span>
              </div>
            </div>
            <div className=" flex     mt-2">
              <div className="w-24">
                <span>blood_group</span>
              </div>
              <div>
                <span>: 4.01</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="mt p-5 ">
        <button
          onClick={() => setToggleButton(!toggleButton)}
          className=" font-medium text-red-500"
        >
          Do You Need Change Password?
        </button>
      </div>
      {toggleButton && (
        <Form submitHandler={changePasswordHandler}>
          <div className="  p-5 border">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5  ">
              <div className="pt">
                <FormInput
                  name="email"
                  label="email"
                  size="w-full"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="pt-">
                <FormInput
                  name="oldPassword"
                  label="password"
                  size="w-full"
                  placeholder="Enter Your password"
                />
              </div>
              <div className="pt-">
                <FormInput
                  name="newPassword"
                  label="new Password"
                  size="w-full"
                  placeholder="Enter Your new Password"
                />
              </div>
            </div>
            <div className="mt-5">
              <button className="px-8 rounded-lg bg-red-500 text-white py-2">
                Change Password
              </button>
            </div>
          </div>
        </Form>
      )}

      {/* <div className=" grid grid-cols-3 mt-5  gap-5">
        <div className="">
          <h3 className=" text-xl">Present Address</h3>
          <div className=" flex     mt-2">
            <div className="w-36">
              <span>Division</span>
            </div>
            <div>
              <span>: Chittagong</span>
            </div>
          </div>
          <div className=" flex     mt-2">
            <div className="w-36">
              <span>City</span>
            </div>
            <div>
              <span>: Chittagong</span>
            </div>
          </div>
          <div className=" flex     mt-2">
            <div className="w-36">
              <span>Police Station</span>
            </div>
            <div>
              <span>: Wast Madarbari</span>
            </div>
          </div>
        </div>
        <div className="">
          <h3 className=" text-xl">Present Address</h3>
          <div className=" flex     mt-2">
            <div className="w-36">
              <span>Division</span>
            </div>
            <div>
              <span>: Chittagong</span>
            </div>
          </div>
          <div className=" flex     mt-2">
            <div className="w-36">
              <span>City</span>
            </div>
            <div>
              <span>: Chittagong</span>
            </div>
          </div>
          <div className=" flex     mt-2">
            <div className="w-36">
              <span>Police Station</span>
            </div>
            <div>
              <span>: Wast Madarbari</span>
            </div>
          </div>
        </div>
        <div className="">
          <h3 className=" text-xl">Present Address</h3>
          <div className=" flex     mt-2">
            <div className="w-36">
              <span>Division</span>
            </div>
            <div>
              <span>: Chittagong</span>
            </div>
          </div>
          <div className=" flex     mt-2">
            <div className="w-36">
              <span>City</span>
            </div>
            <div>
              <span>: Chittagong</span>
            </div>
          </div>
          <div className=" flex     mt-2">
            <div className="w-36">
              <span>Police Station</span>
            </div>
            <div>
              <span>: Wast Madarbari</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ManageAdminProfile;
