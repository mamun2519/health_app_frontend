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
import { Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
type formValue = {
  email: string;
  password: string;
};

const LoginTab = ({ handleClose }: { handleClose: (op: any) => any }) => {
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
        handleClose(false);
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

  return (
    <div>
      <div>
        {errorMessage && (
          <div className="bg-red-500 h-12 rounded mt-2 flex  items-center px-4">
            <p className="text-white">{errorMessage}</p>
          </div>
        )}
        <div className="lg:w-full w-[280px]  ">
          <Form
            submitHandler={submitHandler}
            resolver={yupResolver(loginSchema)}
            defaultValues={defaultValues}
          >
            <div className="mt-5">
              <FormInput
                label="email"
                placeholder="Enter Email"
                size="lg:w-full  pr-6 lg:pr-0"
                name="email"
              ></FormInput>
              <div className="mt-3 relative">
                <FormInput
                  label="password"
                  placeholder="Enter password"
                  size="w-full pr-6 lg:pr-0"
                  name="password"
                  showPassword={showPassword ? "text" : "password"}
                ></FormInput>
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className=" absolute top-4  right-8 text-gray-600  cursor-pointer"
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </div>
              </div>
            </div>
            <div className="mt-2 flex lg:justify-between gap-2">
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
              <p className=" text-blue-700 ">Forgat Password?</p>
            </div>
            <div className=" mt-5 lg:w-full w-64">
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
