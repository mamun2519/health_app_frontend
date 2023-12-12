"use client";
import FormInput from "@/components/Form/FormInput";
import Image from "next/image";
import React, { useState } from "react";
import LoginPic from "../../assets/Privacy policy-rafiki.svg";
import Form from "@/components/Form/FormProvider";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.Services";
import { useRouter } from "next/navigation";
import Toast from "../shared/SuccessMassage";
import { Alert, Checkbox, Typography } from "@mui/material";
import successMessage from "../shared/SuccessMassage";
import { loginSchema } from "../schema/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/Slice/user";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ForgetModel from "../dialog/ForgetModel";
type formValue = {
  email: string;
  password: string;
};

const Login = () => {
  const [openPassResetModel, setPassResetModel] = React.useState(false);

  const handlePasswordResetModelOpen = () => {
    setPassResetModel(true);
  };
  const handlePasswordResetModelClose = () => {
    setPassResetModel(false);
  };

  const [save, setSave] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [saveInfo, setSaveInfo] = useState<{ email: string; password: string }>(
    typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("UserAuth") as string)
  );

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
        router.push("/");
        // TODO USE TOST HERE
        dispatch(
          setUser({
            userId: res?.user?.id,
            email: res?.user?.email,
            role: res?.user?.role,
          })
        );
        if (save) {
          localStorage.setItem(
            "UserAuth",
            JSON.stringify({
              email: data.email,
              password: data.password,
            })
          );
        }
      }

      storeUserInfo({ accessToken: res?.token.accessToken });
      // console.log(res);
    } catch (err: any) {
      setErrorMessage(err?.data);
      console.log(err);
    }
  };
  const defaultValues = {
    email: saveInfo?.email || "",
    password: saveInfo?.password || "",
  };

  console.log(save);
  return (
    <div className="  grid  lg:grid-cols-2 grid-cols-1 gap-5 pb-20">
      <div className="border bg-[#30029010] rounded shadow">
        <div className=" w-full h-full mt-10">
          <Image src={LoginPic} alt="Donor Pic" className=" w-full" />
        </div>
      </div>
      <div className="  flex items-center  justify-center  h-full border-l border pb-3  w-full">
        <div>
          <div className=" flex gap-3  items-center pb-1 lg:mt-0 mt-10 ">
            <h3 className=" lg:text-3xl text-2xl uppercase">Login Account</h3>
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
          <div className=" ">
            <Form
              submitHandler={submitHandler}
              resolver={yupResolver(loginSchema)}
              defaultValues={defaultValues}
            >
              <div className="mt-5">
                <FormInput
                  label="email"
                  placeholder="Enter Email"
                  size="w-full"
                  name="email"
                ></FormInput>
                <div className="mt-3 relative ">
                  <FormInput
                    label="password"
                    placeholder="Enter password"
                    size="w-full"
                    name="password"
                    showPassword={showPassword ? "text" : "password"}
                  ></FormInput>

                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className=" absolute top-4  right-4 text-gray-600  cursor-pointer"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </div>
              </div>
              <div className="mt-2 flex justify-between px-0">
                <div className="flex gap-2">
                  {" "}
                  <input
                    checked={save}
                    onChange={(e) => setSave(!save)}
                    className="checked:bg-[#d1001c]"
                    size={20}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <Typography> Remember Me</Typography>
                </div>

                <p
                  onClick={() => handlePasswordResetModelOpen()}
                  className=" text-blue-700  cursor-pointer"
                >
                  Forgat Password?
                </p>
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

      {openPassResetModel && (
        <ForgetModel
          open={openPassResetModel}
          handleClose={handlePasswordResetModelClose}
        />
      )}
    </div>
  );
};

export default Login;
