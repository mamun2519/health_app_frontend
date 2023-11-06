"use client";
import React from "react";
import DoctorEmailPic from "../../assets/Email campaign-pana.png";
import Image from "next/image";
import FormInput from "../Form/FormInput";
import Form from "../Form/FormProvider";
const ContactUs = () => {
  const handlerFunction = () => {};
  return (
    <div className="  max-w-7xl mx-auto px-4 lg:px-0 my-40 ">
      <h3 className=" text-center text-3xl  font-bold">Contact Us</h3>
      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-10  ">
        <div className="  w-full ">
          <Image
            src={DoctorEmailPic}
            alt="Banner"
            className="lg:w-[30vw] w-full"
          />
        </div>
        <Form submitHandler={handlerFunction}>
          <div className=" border w-full h-[430px] mt-20  p-5 bg-[#30029010]">
            <div></div>

            <div className="   flex gap-5 w-full mt-5">
              <div className=" w-full bg-white">
                {/* <input
                className=" text-gray-900 border h-10 w-full rounded p-2  outline-[#d1001c]"
                placeholder="Enter Your First Name"
                type="text"
              /> */}
                <FormInput
                  name="firstName"
                  label="First Name"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div className=" w-full bg-white">
                <FormInput
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter Your Last Name"
                />
              </div>
            </div>

            <div className=" w-full mt-5 bg-white">
              <FormInput
                name="email"
                label="Email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className=" w-full mt-5">
              <textarea
                className=" text-gray-900 border h-40 w-full rounded-xl p-2  outline-blue-400"
                placeholder="Enter Something"
              />
            </div>
            <div className=" flex justify-center">
              <button
                type="submit"
                className="  w-48 h-10 rounded border bg-[#d1001c] text-white font-bold    mt-2 "
              >
                Send Now
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
