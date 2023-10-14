"use client";
import Image from "next/image";
import React from "react";
import DonorHelp from "../../assets/Save the Earth-pana.svg";
import FormInput from "../Form/FormInput";
import Form from "../Form/FormProvider";
import SelectInput from "../Form/SelectInput";
import {
  SelectedBloodGroup,
  SelectedDivisions,
  SelectedGender,
} from "@/constants/donor";
import SelectDate from "../Form/SelectDate";
import { useCreateDonorMutation } from "@/redux/api/authApi";
import successMessage from "../shared/SuccessMassage";
import { SubmitHandler } from "react-hook-form";
import { ICreateDonor } from "@/types";
import errorMessage from "../shared/ErrrorMessage";
import { storeUserInfo } from "@/services/auth.Services";
const DonorRegistrationForm = () => {
  const [createDonor] = useCreateDonorMutation();

  const createDonorSingup: SubmitHandler<ICreateDonor> = async (data) => {
    data.present_Address.police_station = "No";
    try {
      const res: any = await createDonor(data);
      console.log(res);
      // @ts-ignore
      if (res?.data) {
        storeUserInfo({ accessToken: res?.data.userToken });
        successMessage({
          message: "Donor Account Create Successfully",
          header: "Thank you",
        });
      } else {
        errorMessage({ message: "Something is wrong" });
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(value.startTime);
    // const time = convertToAmPm(value.salt.startTime);
    // console.log(time);
  };
  return (
    <div className=" mt-10  max-w-7xl mx-auto px-4 lg:px-0 ">
      <div className=" flex gap-5">
        <div className=" w-[48vw]  bg-[#30029010] p-5">
          <div className=" flex gap-3  items-center ">
            <h3 className=" text-3xl uppercase">Join Us To day</h3>
            <div className="h-1 bg-red-500 w-52"></div>
          </div>
          <div className=" w-full h-full mt-10 ">
            <Image src={DonorHelp} alt="Donor Pic" className=" w-full" />
            <p className="mt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              asperiores labore quidem eligendi corporis facere similique autem
              illum mollitia? Dolor facere blanditiis fugiat reprehenderit quod
              iure, saepe recusandae odit ea.
            </p>
          </div>
        </div>
        <div className=" w-full  h-full border-l  pl-10 pt-5 ">
          <div className=" flex gap-3  items-center">
            <h3 className=" text-3xl uppercase">To Be Donor</h3>
            <div className="h-1 bg-red-500 w-52"></div>
          </div>
          <div className=" ">
            <Form submitHandler={createDonorSingup}>
              <div className=" grid grid-cols-3 gap-5">
                <div className="mt-3">
                  <FormInput
                    label="First Name"
                    placeholder="First Name"
                    size="full"
                    name="name.first_name"
                  ></FormInput>
                </div>
                <div className="mt-3">
                  <FormInput
                    label="Last Name"
                    placeholder="Last Name"
                    size="full"
                    name="name.last_name"
                  ></FormInput>
                </div>
                <div className="mt-3">
                  <FormInput
                    label="phone"
                    placeholder="Enter Phone"
                    size="full"
                    name="phone"
                  ></FormInput>
                </div>
              </div>
              <div className=" grid grid-cols-3 gap-5">
                <div className="mt-3">
                  <SelectInput
                    name="blood_group"
                    label="Blood Group"
                    options={SelectedBloodGroup}
                  />
                </div>
                <div className="mt-3">
                  <SelectInput
                    name="gender"
                    label="Gender"
                    options={SelectedGender}
                  />
                </div>
                <div className="mt-3">
                  <SelectDate
                    name="date_of_birth"
                    size="lg:w-96 w-72"
                    label="Date of Birth"
                    placeholder="Enter Patient avatar"
                  />
                </div>
              </div>
              <div className=" grid grid-cols- gap-5"></div>
              <div className="mt-5">
                <h3>Present Address</h3>
                <div className=" grid grid-cols-2  gap-5">
                  <div className="mt-3">
                    <SelectInput
                      name="present_Address.district"
                      label="Division"
                      options={SelectedDivisions}
                    />
                  </div>
                  <div className="mt-3">
                    <FormInput
                      label="District"
                      placeholder="Enter District"
                      size="full"
                      name="present_Address.sub_district"
                    ></FormInput>
                  </div>
                </div>
                <div className=" grid grid-cols-2 gap-5">
                  <div className="mt-3">
                    <FormInput
                      label="Address"
                      placeholder="Enter address"
                      size="full"
                      name="present_Address.address"
                    ></FormInput>
                  </div>
                  <div className="mt-3">
                    <FormInput
                      label="Avatar"
                      placeholder="Enter Avatar"
                      size="full"
                      name="avatar"
                    ></FormInput>
                  </div>
                </div>
              </div>
              {/* <div className="mt-5">
                <h3>Permanent Address</h3>
                <div className=" grid grid-cols-2  gap-5">
                  <div className="mt-3">
                    <FormInput
                      label="gender"
                      placeholder="Enter Gender"
                      size="full"
                      name="name"
                    ></FormInput>
                  </div>
                  <div className="mt-3">
                    <FormInput
                      label="Date Of Birth"
                      placeholder="First Name"
                      size="full"
                      name="name"
                    ></FormInput>
                  </div>
                </div>
                <div className=" grid grid-cols-2 gap-5">
                  <div className="mt-3">
                    <FormInput
                      label="phone"
                      placeholder="Enter Phone"
                      size="full"
                      name="name"
                    ></FormInput>
                  </div>
                  <div className="mt-3">
                    <FormInput
                      label="Avatar"
                      placeholder="Avatar"
                      size="full"
                      name="name"
                    ></FormInput>
                  </div>
                </div>
              </div> */}
              <div className="mt-5">
                <h3>User Cradtional</h3>
                <FormInput
                  label="email"
                  placeholder="Enter Email"
                  size="full"
                  name="email"
                ></FormInput>
                <div className="mt-3">
                  <FormInput
                    label="Password"
                    placeholder="Enter Password"
                    size="full"
                    name="password"
                  ></FormInput>
                </div>
              </div>
              <div className="mt-5">
                <h3>I Agree All Tomes And Conditions</h3>
              </div>
              <div className=" flex gap-5 mt-3 justify-cente">
                <button className=" w-52 h-10 rounded bg-[#d1001c] text-white font-medium ">
                  Registration Now
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorRegistrationForm;
