import { setUser } from "@/redux/Slice/user";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { storeUserInfo } from "@/services/auth.Services";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import Form from "../Form/FormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema/login";
import FormInput from "../Form/FormInput";
type formValue = {
  email: string;
  password: string;
};

const LoginTab = ({ handleClose }: { handleClose: (op: any) => any }) => {
  const [userLogin] = useUserLoginMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const submitHandler: SubmitHandler<formValue> = async (data) => {
    console.log(data);
    try {
      const res = await userLogin(data).unwrap();
      console.log(res);
      if (res?.token) {
        handleClose(false);
        // TODO USE TOST HERE
        dispatch(
          setUser({
            userId: res?.user?.id,
            email: res?.user?.email,
            role: res?.user?.role,
          })
        );
      }

      storeUserInfo({ accessToken: res?.token.accessToken });
      // console.log(res);
    } catch (err: any) {
      setErrorMessage(err?.data);
      console.log(err);
    }
  };
  return (
    <div>
      <div>
        {errorMessage && (
          <div className="bg-red-500 h-12 rounded mt-2 flex  items-center px-4">
            <p className="text-white">{errorMessage}</p>
          </div>
        )}
        <div className=" ">
          <Form
            submitHandler={submitHandler}
            resolver={yupResolver(loginSchema)}
          >
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
                  size="w-full"
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
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginTab;
