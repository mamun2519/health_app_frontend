import React from "react";
import Form from "../Form/FormProvider";
import { SubmitHandler } from "react-hook-form";
import FormInput from "../Form/FormInput";
import { Typography } from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
const NewPassword = () => {
  const submitHandler: SubmitHandler<{ email: string }> = async (data) => {};
  return (
    <div className="p-8">
      <div className=" flex justify-center">
        <div className="w-20 h-20 rounded-full border flex justify-center items-center  bg-[#30029010] text-[#d1001c]">
          <VpnKeyIcon />
        </div>
      </div>
      <div>
        <div className="   mt-2">
          <h3 className=" lg:text-2xl text-2xl uppercase text-center">
            Create New Password
          </h3>
        </div>
        <div className="pt-1">
          {" "}
          <Typography className=" text-center">
            Your new password must be different from previous used passwords
          </Typography>
        </div>
        <div className=" ">
          <Form
            submitHandler={submitHandler}
            // resolver={yupResolver(loginSchema)}
          >
            <div className="mt-5">
              <FormInput
                label="password"
                placeholder="Enter Email"
                size="w-full"
                name="email"
              ></FormInput>
            </div>
            <div className="mt-4">
              <FormInput
                label="Confirm Password"
                placeholder="Enter Email"
                size="w-full"
                name="email"
              ></FormInput>
            </div>

            <div className=" mt-5 w-full">
              <button className=" w-full h-12  bg-[#d1001c] text-white font-medium  rounded-2xl">
                Change Password
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
