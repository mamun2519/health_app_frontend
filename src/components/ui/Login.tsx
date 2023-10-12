"use client";
import FormInput from "@/components/Form/FormInput";
import Image from "next/image";
import React from "react";
import LoginPic from "../../assets/Privacy policy-rafiki.svg";
import Form from "@/components/Form/FormProvider";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.Services";
import { useRouter } from "next/navigation";
import Toast from "../shared/SuccessMassage";
import { Alert } from "@mui/material";
type formValue = {
  email: string;
  password: string;
};

const Login = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const submitHandler: SubmitHandler<formValue> = async (data) => {
    console.log(data);
    try {
      const res = await userLogin(data).unwrap();
      console.log(res);
      if (res?.token) {
        router.push("/");
        // TODO USE TOST HERE
      }

      storeUserInfo({ accessToken: res?.token.accessToken });
      // console.log(res);
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
            <h3 className=" lg:text-3xl text-2xl uppercase">Login Account</h3>
            <div className="h-1 bg-red-500 lg:w-52 w-20 "></div>
          </div>
          <p>Welcome To Halt App</p>
          <div className=" ">
            <Form submitHandler={submitHandler}>
              <div className="mt-5">
                <FormInput
                  label="email"
                  placeholder="Enter Email"
                  size="w-full"
                  name="email"
                ></FormInput>
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
                <h3>Remember Me</h3>
                <p className=" text-blue-700 ">Forgat Password?</p>
              </div>
              <div className=" mt-5 w-full">
                <button className=" w-full h-10 rounded bg-[#d1001c] text-white font-medium ">
                  Log In
                </button>
                <p className="mt-5 text-center">
                  Are You New?
                  <Link
                    href="/registration"
                    className=" text-[#d1001c] font-bold px-1"
                  >
                    Please Register
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

export default Login;
