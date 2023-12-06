import { setUser } from "@/redux/Slice/user";
import { useRegisterUserMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { storeUserInfo } from "@/services/auth.Services";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import Form from "../Form/FormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { singUpSchema } from "../schema/singup";
import FormInput from "../Form/FormInput";
type UserReg = {
  name: {
    first_name: string;
    last_name: string;
  };
  email: string;
  password: string;
  avatar: string;
};

const RegTab = ({ handleClose }: { handleClose: (op: any) => any }) => {
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

      storeUserInfo({ accessToken: res?.userToken });
    } catch (err: any) {
      setErrorMessage(err?.data);
      console.log(err);
    }
  };
  return (
    <div>
      {errorMessage && (
        <div className="bg-red-500 h-12 rounded mt-2 flex  items-center px-4">
          <p className="text-white">{errorMessage}</p>
        </div>
      )}
      <div className="">
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
                  size="w-full"
                  name="name.first_name"
                ></FormInput>
              </div>

              <div className="">
                <FormInput
                  label="lastName"
                  placeholder="Enter Last name"
                  size="w-full"
                  name="name.last_name"
                ></FormInput>
              </div>
            </div>

            <div className="mt-3">
              <FormInput
                label="email"
                placeholder="Enter email"
                size="w-full"
                name="email"
              ></FormInput>
            </div>
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
            <h3>
              By Registration Agree With <span>Terms & Policy</span>
            </h3>
          </div>
          <div className=" mt-5  w-full">
            <button className=" lg:w-full w-full h-10 rounded bg-[#d1001c] text-white font-medium ">
              Register
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegTab;
