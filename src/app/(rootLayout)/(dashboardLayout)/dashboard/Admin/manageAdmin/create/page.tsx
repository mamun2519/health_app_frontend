"use client";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";

import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import Form from "@/components/Form/FormProvider";
import FormInput from "@/components/Form/FormInput";

import { SubmitHandler } from "react-hook-form";

import successMessage from "@/components/shared/SuccessMassage";

import { useRegisterUserMutation } from "@/redux/api/authApi";
import { IAdminCrate } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminCreateSchema } from "@/components/schema/admin";
import { ImageUpload } from "@/components/Form/ImageUplaod";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CreateIcon from "@mui/icons-material/Create";
interface IServiceCrate {
  service: {
    title: string;
    price: string;
    avatar: string;
    serviceType: string;
    serviceDay: string[];
    aboutSerivce: string;
  };
  salt: {
    duration: string;
    startTime: string;
    endTime: string;
  };
}
const ManageAdminPage = () => {
  const [imageUrl, setImageUrl] = useState<string | undefined>();

  const [error, setErrorMessage] = useState("");

  const boread = [
    {
      link: "/",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Admin/manageAdmin",
      level: "Manage Admin",
      icons: <AdminPanelSettingsIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Admin/manageAdmin",
      level: "Create",
      icons: <CreateIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];

  const [registerUser] = useRegisterUserMutation();

  const editHandler: SubmitHandler<IAdminCrate> = async (value) => {
    value.role = "Admin";
    value.avatar = imageUrl as string;
    try {
      if (imageUrl) {
        const res = await registerUser(value).unwrap();

        // @ts-ignore
        if (res?.data) {
          successMessage({
            message: "Admin Account Create Successfully",
            header: "Thank you",
          });
        }
      } else {
        setErrorMessage("Image Is Required");
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(value.startTime);
    // const time = convertToAmPm(value.salt.startTime);
    // console.log(time);
  };
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={boread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Create Admin</h3>
      <div className="mt-5"></div>
      <Form
        submitHandler={editHandler}
        resolver={yupResolver(adminCreateSchema)}
      >
        <div className=" grid grid-cols-3 gap-5">
          <div className=" mt-2 ">
            <FormInput
              name="name.first_name"
              label="First Name"
              size="lg:w-96 w-72"
              placeholder="Enter Your  first name"
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name="name.last_name"
              size="lg:w-96 w-72"
              label="Last Name"
              placeholder="Enter lastname "
            />
          </div>
        </div>

        <div className="mt-5 ">
          <p>Authentication</p>
          <div className="grid grid-cols-3 gap-5">
            <div className=" mt-2 ">
              <div>
                <ImageUpload setImageUrl={setImageUrl} />
                {error && <p className="text-red-500">Image is required</p>}
              </div>
            </div>
            <div className=" mt-2 ">
              <FormInput
                name="email"
                label="email"
                size="lg:w-96 w-72"
                placeholder="Enter Your  email"
              />
            </div>
            <div className=" mt-2">
              <FormInput
                name="password"
                size="lg:w-96 w-72"
                label="Password"
                placeholder="Enter password "
              />
            </div>
          </div>
        </div>

        <div className="py-2 w-56 mt-5">
          <button
            type="submit"
            className=" px-10 h-10 w-full rounded bg-[#d1001c] text-white font-medium "
          >
            Create Now
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ManageAdminPage;
