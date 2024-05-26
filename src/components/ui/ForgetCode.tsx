import React, { useState } from "react";
import Form from "../Form/FormProvider";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../Form/FormInput";
import { TextField, Typography } from "@mui/material";
import HttpsIcon from "@mui/icons-material/Https";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { maskEmail } from "@/utils/formetEmail";
import { yupResolver } from "@hookform/resolvers/yup";
import { CodeSchema } from "../schema/login";
import { useCheckResetCodeMutation } from "@/redux/api/authApi";
const ForgetPasswordCode = ({
  email,
  setStep,
}: {
  email: string;
  setStep: (number: number) => void;
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = React.useState(true);
  const [checkResetCode] = useCheckResetCodeMutation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CodeSchema),
  });
  const onSubmit: SubmitHandler<{
    codeBox1: string;
    codeBox2: string;
    codeBox3: string;
    codeBox4: string;
  }> = async (data) => {
    setLoading(false);
    const { codeBox1, codeBox2, codeBox3, codeBox4 } = data;
    const resetCode = `${codeBox1}${codeBox2}${codeBox3}${codeBox4}`;

    try {
      const res = await checkResetCode({
        code: Number(resetCode),
        email,
      }).unwrap();

      if (res) {
        setStep(3);
      }
      setLoading(true);
    } catch (error: any) {
      setErrorMessage(error.data);

      setLoading(true);
    }
  };
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            // resolver={yupResolver(loginSchema)}
          >
            <div className="mt-5 flex gap-5 justify-center">
              {/* <FormInput
                label="email"
                placeholder="Enter Email"
                size="w-full"
                name="email"
              ></FormInput> */}
              <div className="w-16">
                <Controller
                  name="codeBox1"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      // label="Password"
                      placeholder="0"
                      className="text-3xl"
                      error={!!errors.codeBox1}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="w-16">
                <Controller
                  name="codeBox2"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      // label="Password"
                      placeholder="0"
                      className="text-3xl"
                      error={!!errors.codeBox2}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="w-16">
                <Controller
                  name="codeBox3"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      // label="Password"
                      placeholder="0"
                      className="text-3xl"
                      error={!!errors.codeBox3}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="w-16">
                <Controller
                  name="codeBox4"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      // label="Password"
                      placeholder="0"
                      className="text-3xl"
                      error={!!errors.codeBox4}
                      {...field}
                    />
                  )}
                />
              </div>{" "}
            </div>

            <div className=" mt-5 w-full">
              <button className=" w-full h-12  bg-[#d1001c] text-white font-medium  rounded-2xl">
                {loading ? "Submit Code" : "Loading...."}
              </button>
              <p className="text-center text-red-500">{errorMessage} </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordCode;
