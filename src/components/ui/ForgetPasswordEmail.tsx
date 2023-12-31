import React from "react";
import Form from "../Form/FormProvider";
import { SubmitHandler } from "react-hook-form";
import FormInput from "../Form/FormInput";
import { Typography } from "@mui/material";
import HttpsIcon from "@mui/icons-material/Https";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgetEmailValidation } from "../schema/login";
const ForgetPasswordEmail = ({
  forgetPasswordHandler,
  loading,
}: {
  forgetPasswordHandler: (data: any) => void;
  loading: boolean;
}) => {
  return (
    <div className="p-8">
      <div className=" flex justify-center">
        <div className="w-20 h-20 rounded-full border flex justify-center items-center  bg-[#30029010] text-[#d1001c]">
          <HttpsIcon />
        </div>
      </div>
      <div>
        <div className="   mt-2">
          <h3 className=" lg:text-2xl text-2xl uppercase text-center">
            Forget Password
          </h3>
        </div>
        <div className="pt-1">
          {" "}
          <Typography className=" text-center">
            Enter the email associated with your account and we will send an
            email with code to forget your password
          </Typography>
        </div>
        <div className=" ">
          <Form
            submitHandler={forgetPasswordHandler}
            resolver={yupResolver(ForgetEmailValidation)}
          >
            <div className="mt-5">
              <FormInput
                label="Email"
                placeholder="Enter Email"
                size="w-full"
                name="email"
              ></FormInput>
            </div>

            <div className=" mt-5 w-full">
              <button
                type="submit"
                className=" w-full h-12  bg-[#d1001c] text-white font-medium  rounded-2xl"
              >
                {loading ? " Send Code" : "Loading...."}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordEmail;
