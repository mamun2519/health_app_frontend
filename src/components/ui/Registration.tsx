"use client";
import FormInput from "@/components/Form/FormInput";
import Image from "next/image";
import React from "react";
import LoginPic from "../../assets/Privacy policy-rafiki.svg";
import Form from "@/components/Form/FormProvider";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import { useRegisterUserMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.Services";

type UserReg = {
  name: {
    first_name: string;
    last_name: string;
  };
  email: string;
  password: string;
  avatar: string;
};
const Registration = () => {
  const [registerUser] = useRegisterUserMutation();
  const router = useRouter();
  const submitHandler: SubmitHandler<UserReg> = async (data) => {
    try {
      const res = await registerUser({ ...data, avatar: "xxx" }).unwrap();
      console.log(res);
      if (res.data?.userToken) {
        router.push("/");
        // TODO USE TOST HERE
      }

      storeUserInfo({ accessToken: res.data?.userToken });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="  grid  lg:grid-cols-2 grid-cols-1 gap-5">
      <div className="border bg-[#30029010] rounded shadow">
        <div className=" w-full h-full mt-10">
          <Image src={LoginPic} alt="Donor Pic" className=" w-full" />
        </div>
      </div>
      <div className="  flex items-center  justify-center  h-full border-l border ">
        <div>
          <div className=" flex gap-3  items-center pb-1 lg:mt-0 mt-10">
            <h3 className=" lg:text-3xl text-2xl uppercase">Create Account</h3>
            <div className="h-1 bg-red-500 lg:w-52 w-20 "></div>
          </div>
          <p>Welcome To Halt App</p>
          <div className=" ">
            <Form submitHandler={submitHandler}>
              <div className="mt-5 ">
                <div className=" grid grid-cols-2 gap-5">
                  <div>
                    <FormInput
                      label="firstName"
                      placeholder="Enter First Name"
                      size="w-full"
                      name="name.first_name"
                    ></FormInput>
                  </div>
                  <div className="">
                    <FormInput
                      label="lastName"
                      placeholder="Enter Last name"
                      size="full"
                      name="name.last_name"
                    ></FormInput>
                  </div>
                </div>
                <div className="mt-3">
                  <FormInput
                    label="email"
                    placeholder="Enter email"
                    size="full"
                    name="email"
                  ></FormInput>
                </div>
                <div className="mt-3">
                  <FormInput
                    label="password"
                    placeholder="Enter password"
                    size="full"
                    name="password"
                  ></FormInput>
                </div>
              </div>
              <div className="mt-2 flex justify-between">
                <h3>
                  By Registration Agree With <span>Terms & Policy</span>
                </h3>
              </div>
              <div className=" mt-5 w-full">
                <button className=" w-full h-10 rounded bg-[#d1001c] text-white font-medium ">
                  Register
                </button>
                <p className="mt-5 text-center">
                  Already Have An account?{" "}
                  <Link
                    href="/login"
                    className=" text-[#d1001c] font-bold px-1"
                  >
                    Please Login
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
