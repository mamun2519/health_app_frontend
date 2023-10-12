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
export type IResetPassword = {
  email: string;
  oldPassword: string;
  newPassword: string;
};
const DoctorProfiles = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const { data } = useMyProfileQuery({ limit: 100, page: 1 });
  console.log(data);
  const [resetPassword] = useResetPasswordMutation();
  const changePasswordHandler: SubmitHandler<IResetPassword> = async (
    value
  ) => {
    try {
      const res = await resetPassword(value);
      if (res) {
        successMessage({
          header: "Thank You",
          message: "Password Reset Successfully",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="  pb-40 ">
      <div className="flex gap-5">
        <div className="h-full  border  p-5 rounded-3xl shadow-sm  w-full">
          <div className=" w-full h-[260px]  relative ">
            <Image
              src={Cover}
              className=" object-cover   h-[260px]  w-full rounded-b-3xl rounded-t-xl "
              alt="Cover pic"
            />

            <div className=" h-36 lg:w-11/12 border border-[#30029010]  p-5 rounded-3xl shadow-sm lg:absolute  top-52   glass lg:left-12  flex gap-6 items-center">
              <div className=" border-2xl h-full w-36 p-1">
                <Image
                  src={Cover}
                  className="  h-full  w-full rounded "
                  alt="Cover pic"
                />
              </div>
              <div className=" flex justify-between w-full items-end">
                <div>
                  <h3 className="text-xl font-bold">
                    {data?.user?.profile?.first_name}{" "}
                    {data?.user?.profile?.last_name}
                  </h3>
                  <p>Join {convertDate(data?.createdAt)}</p>
                  <p>{data?.user?.email}</p>
                </div>
                <div className=" flex gap-3">
                  <span className="">
                    <AccountCircleIcon />
                  </span>
                  <span>
                    <AccountCircleIcon />
                  </span>
                  <span>
                    <AccountCircleIcon />
                  </span>
                </div>
              </div>
            </div>
            <div className=" mt-28">
              <p className="text-xl font-medium">About Me</p>
              <p className="mt-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
                iste! Ducimus similique commodi quis labore quo ex iusto, sit
                cumque.
              </p>
            </div>
          </div>
          <div className="mt-60    grid grid-cols-2">
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
              <div className=" mt-5">
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
              </div>
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
            <div className="grid grid-cols-3 gap-5  ">
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
