"use client";
import FormInput from "@/components/Form/FormInput";
import Image from "next/image";
import React, { useState } from "react";
import LoginPic from "../../assets/Privacy policy-rafiki.svg";
import Form from "@/components/Form/FormProvider";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import { useRegisterUserMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.Services";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { Avatar } from "@mui/material";
import { URL } from "@/constants/common";
import { instance } from "@/helper/axios/axiosInstace";
import { yupResolver } from "@hookform/resolvers/yup";
import { singUpSchema } from "../schema/singup";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/Slice/user";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
console.log(VisuallyHiddenInput);
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
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const submitHandler: SubmitHandler<UserReg> = async (data) => {
    try {
      const res = await registerUser({
        ...data,
        avatar: "https://i.ibb.co/Sc1vBYH/profile.png",
        cover: "https://i.ibb.co/N9SnX2C/Default.jpg",
      }).unwrap();
      console.log(res);
      if (res.userToken) {
        router.push("/");
        // TODO USE TOST HERE
        dispatch(
          setUser({
            userId: res?.user?.id,
            email: res?.user?.email,
            role: res?.user?.role,
          })
        );
      }

      storeUserInfo({ accessToken: res?.userToken });
    } catch (err: any) {
      setErrorMessage(err?.data);
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
      <div className="  lg:flex items-center  justify-center  h-full border-l border lg:p-0  p-5">
        <div>
          <div className=" flex gap-3  items-center pb-1 lg:mt-0 mt-10">
            <h3 className=" lg:text-3xl text-2xl uppercase">Create Account</h3>
            <div className="h-1 bg-red-500 lg:w-52 w-20 "></div>
          </div>
          <p>
            Welcome To He
            <span className="text-[#d1001c] font-bold">alth</span> Care App
          </p>
          {errorMessage && (
            <div className="bg-red-500 h-12 rounded mt-2 flex  items-center px-4">
              <p className="text-white">{errorMessage}</p>
            </div>
          )}
          <div className="w-[450px]">
            <Form
              submitHandler={submitHandler}
              resolver={yupResolver(singUpSchema)}
            >
              <div className="mt-5 ">
                <div className=" grid lg:grid-cols-2 gap-5 mt-4">
                  <div>
                    <FormInput
                      label="firstName"
                      placeholder="Enter First Name"
                      size="w-80"
                      name="name.first_name"
                    ></FormInput>
                  </div>

                  <div className="">
                    <FormInput
                      label="lastName"
                      placeholder="Enter Last name"
                      size="w-80"
                      name="name.last_name"
                    ></FormInput>
                  </div>
                </div>

                <div className="mt-3">
                  <FormInput
                    label="email"
                    placeholder="Enter email"
                    size="w-80"
                    name="email"
                  ></FormInput>
                </div>
                <div className="mt-3">
                  <FormInput
                    label="password"
                    placeholder="Enter password"
                    size="w-80"
                    name="password"
                  ></FormInput>
                </div>
              </div>
              <div className="mt-2 flex justify-between">
                <h3>
                  By Registration Agree With <span>Terms & Policy</span>
                </h3>
              </div>
              <div className=" mt-5 lg:w-full w-80">
                <button className=" lg:w-full w-80 h-10 rounded bg-[#d1001c] text-white font-medium ">
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
