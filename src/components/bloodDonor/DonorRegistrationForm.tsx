"use client";
import Image from "next/image";
import React from "react";
import DonorHelp from "../../assets/Save the Earth-pana.svg";
import FormInput from "../Form/FormInput";
import Form from "../Form/FormProvider";
const DonorRegistrationForm = () => {
  const submitHandler = () => {};
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
            <Form submitHandler={submitHandler}>
              <div className=" grid grid-cols-3 gap-5">
                <div className="mt-3">
                  <FormInput
                    label="name"
                    placeholder="First Name"
                    size="full"
                    name="name"
                  ></FormInput>
                </div>
                <div className="mt-3">
                  <FormInput
                    label="fist Name"
                    placeholder="First Name"
                    size="full"
                    name="name"
                  ></FormInput>
                </div>
                <div className="mt-3">
                  <FormInput
                    label="gender"
                    placeholder="Enter Gender"
                    size="full"
                    name="name"
                  ></FormInput>
                </div>
              </div>
              <div className=" grid grid-cols-3 gap-5">
                <div className="mt-3">
                  <FormInput
                    label="Date Of Birth"
                    placeholder="First Name"
                    size="full"
                    name="name"
                  ></FormInput>
                </div>
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
              <div className=" grid grid-cols- gap-5"></div>
              <div className="mt-5">
                <h3>Present Address</h3>
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
                  name="name"
                ></FormInput>
                <div className="mt-3">
                  <FormInput
                    label="email"
                    placeholder="Enter Email"
                    size="full"
                    name="name"
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
