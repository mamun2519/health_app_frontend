import React from "react";
import Form from "../Form/FormProvider";
import { SubmitHandler } from "react-hook-form";
import FormInput from "../Form/FormInput";
import { Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
const PasswordResetSuccessMessage = () => {
  const submitHandler: SubmitHandler<{ email: string }> = async (data) => {};
  return (
    <div className="p-8">
      <div className=" flex justify-center">
        <div className="w-20 h-20 rounded-full border flex justify-center items-center  bg-[#30029010] text-[#d1001c]">
          <DoneIcon />
        </div>
      </div>
      <div>
        <div className="   mt-2">
          <h3 className=" lg:text-2xl text-2xl uppercase text-center">
            Forget Successfully!
          </h3>
        </div>
        <div className="pt-1">
          {" "}
          <Typography className=" text-center">
            Your Password has been Successfully reset, click below to continue
            access.
          </Typography>
        </div>
        <div className=" ">
          <div className=" mt-5 w-full">
            <button className=" w-full h-12  bg-[#d1001c] text-white font-medium  rounded-2xl">
              Close Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSuccessMessage;
