import React from "react";
import Form from "../Form/FormProvider";
import { SubmitHandler } from "react-hook-form";
import FormInput from "../Form/FormInput";
import { Typography } from "@mui/material";
import HttpsIcon from "@mui/icons-material/Https";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { maskEmail } from "@/utils/formetEmail";
const ForgetPasswordCode = ({ email }: { email: string }) => {
  const submitHandler: SubmitHandler<{ email: string }> = async (data) => {};
  return (
    <div className="p-8">
      <div className=" flex justify-center">
        <div className="w-20 h-20 rounded-full border flex justify-center items-center bg-[#30029010] text-[#d1001c]">
          <MarkEmailReadIcon />
        </div>
      </div>
      <div>
        <div className="   mt-2">
          <h3 className=" lg:text-2xl text-2xl uppercase text-center">
            Check Your Email
          </h3>
        </div>
        <div className="pt-1">
          {" "}
          <Typography className=" text-center">
            Please enter the code 4 digit code we sent to {maskEmail(email)}
          </Typography>
        </div>
        <div className=" ">
          <Form
            submitHandler={submitHandler}
            // resolver={yupResolver(loginSchema)}
          >
            <div className="mt-5 flex gap-5 justify-center">
              {/* <FormInput
                label="email"
                placeholder="Enter Email"
                size="w-full"
                name="email"
              ></FormInput> */}
              <input
                type="text"
                className="w-16 h-14 border p-3  rounded-2xl text-center text-3xl  outline-0"
              />
              <input
                type="text"
                className="w-16 h-14 border p-3  rounded-2xl text-center text-3xl outline-0"
              />
              <input
                type="text"
                className="w-16 h-14 border p-3  rounded-2xl text-center text-3xl outline-0"
              />
              <input
                type="text"
                className="w-16 h-14 border p-3  rounded-2xl text-center text-3xl outline-0"
              />
            </div>

            <div className=" mt-5 w-full">
              <button className=" w-full h-12  bg-[#d1001c] text-white font-medium  rounded-2xl">
                Submit Code
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordCode;
