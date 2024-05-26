"use client";

import { useResetPasswordMutation } from "@/redux/api/authApi";
import { useMyProfileQuery } from "@/redux/api/profileApi";
import { useState } from "react";
import Cover from "../../assets/blood_donation_02.jpg";
import successMessage from "../shared/SuccessMassage";
import { SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { convertDate } from "@/helper/date";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Form from "../Form/FormProvider";
import FormInput from "../Form/FormInput";
import Link from "next/link";
import errorMessage from "../shared/ErrrorMessage";
import LoadingSpinner from "@/utils/Loading";
export type IResetPassword = {
  email: string;
  oldPassword: string;
  newPassword: string;
};
const DoctorProfiles = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const { data, isLoading } = useMyProfileQuery({ limit: 100, page: 1 });

  const [resetPassword] = useResetPasswordMutation();
  const changePasswordHandler: SubmitHandler<IResetPassword> = async (
    value
  ) => {
    try {
      const res = await resetPassword(value).unwrap();

      if (res) {
        successMessage({
          header: "Thank You",
          message: "Password Reset Successfully",
        });
      } else {
        errorMessage({ message: "Something is wrong" });
      }
    } catch (error: any) {
      errorMessage({ message: error?.data });
    }
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="  pb-40 ">
      <div className="lg:flex gap-5">
        <div className="h-full  lg:border  p-5 lg:rounded-3xl lg:shadow-sm  lg:w-full w-80">
          <div className=" w-full h-[260px]  relative ">
            <Image
              src={
                data?.user?.profile?.cover ? data?.user?.profile?.cover : Cover
              }
              width={550}
              height={550}
              className=" object-cover  w-80  h-[260px]  lg:w-full rounded-b-3xl rounded-t-xl "
              alt="Cover pic"
            />

            <div className=" h-36 lg:w-11/12 lg:border border-[#30029010] px-4 lg:p-5 rounded-3xl shadow-sm lg:absolute  top-52   glass lg:left-12  lg:flex gap-6 items-center">
              <div className="border-2xl h-full lg:w-36 w-28  p-1 border shadow-sm">
                <Image
                  src={data?.user?.profile?.avatar}
                  width={550}
                  height={550}
                  className="  lg:h-full h-24  lg:w-full w-28 "
                  alt="Cover pic"
                />
              </div>
              <div className="  lg:flex justify-between w-full items-end">
                <div>
                  <h3 className="text-xl font-bold">
                    {data?.user?.profile?.first_name}{" "}
                    {data?.user?.profile?.last_name}
                  </h3>
                  <p>Join {convertDate(data?.createdAt)}</p>
                  <p>{data?.user?.email}</p>
                </div>
                <div className="lg:flex gap-3 lg:mt-0 mt-3">
                  <Link
                    href="/dashboard/Doctor/profile/edit"
                    className="px-4 py-2 text-white rounded bg-red-500"
                  >
                    Update Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="  lg:mt-28 mt-[120px]">
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
                  <span>
                    : {data?.user?.profile?.present_Address?.district}
                  </span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>City</span>
                </div>
                <div>
                  <span>
                    : {data?.user?.profile?.present_Address?.sub_district}
                  </span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>Address</span>
                </div>
                <div>
                  <span>: {data?.user?.profile?.present_Address?.address}</span>
                </div>
              </div>
              {/* <div className=" mt-5">
                <h3 className=" text-xl">Present Address</h3>
                <div className=" flex     mt-2">
                  <div className="w-36">
                    <span>Division</span>
                  </div>
                  <div>
                    <span>
                      : {data?.user?.profile?.permanent_Address?.district}
                    </span>
                  </div>
                </div>
                <div className=" flex     mt-2">
                  <div className="w-36">
                    <span>City</span>
                  </div>
                  <div>
                    <span>
                      : {data?.user?.profile?.permanent_Address?.sub_district}
                    </span>
                  </div>
                </div>
                <div className=" flex     mt-2">
                  <div className="w-36">
                    <span>Address</span>
                  </div>
                  <div>
                    <span>
                      : {data?.user?.profile?.permanent_Address?.address}
                    </span>
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
                  <span>: {data?.user?.profile?.phone}</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>gender</span>
                </div>
                <div>
                  <span>: {data?.user?.profile?.gender}</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>blood_group</span>
                </div>
                <div>
                  <span>: {data?.user?.profile?.blood_group}</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>Date Of Birth</span>
                </div>
                <div>
                  <span>
                    : {convertDate(data?.user?.profile?.date_of_birth)}
                  </span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>specialist</span>
                </div>
                <div>
                  <span>: {data?.specialist}</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>Degree</span>
                </div>
                <div>
                  <span>: {data?.degree} People</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>Experience</span>
                </div>
                <div>
                  <span>: {data?.experience}</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>total_patient</span>
                </div>
                <div>
                  <span>: {data?.total_patient}Pepole</span>
                </div>
              </div>
              <div className=" flex     mt-2">
                <div className="w-36">
                  <span>Current Balance</span>
                </div>
                <div>
                  <span>: {data?.balance} BDT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt p-5">
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

export default DoctorProfiles;
