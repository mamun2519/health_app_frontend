"use client";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import Form from "@/components/Form/FormProvider";
import FormInput from "@/components/Form/FormInput";
import {
  useGetDonorRequestDetailsQuery,
  useUpdateDonorRequestMutation,
} from "@/redux/api/donorApi";
import { SubmitHandler } from "react-hook-form";
import { IDonorRequest } from "@/components/dialog/AddDonorRequest";
import successMessage from "@/components/shared/SuccessMassage";
import {
  useCreateDoctorServiceMutation,
  useDoctorServiceDetailsQuery,
  useUpdateDoctorServiceMutation,
} from "@/redux/api/doctorServiceApi";
import FormSelectInput from "@/components/Form/FormSelectInput";
import {
  Days,
  DoctorDegrees,
  DoctorSpecialists,
  Duration,
  SelectedBloodGroup,
  SelectedDivisions,
  SelectedExperience,
  SelectedGender,
  ServiceCategory,
  bloodGroups,
} from "@/constants/donor";
import SelectInput from "@/components/Form/SelectInput";
import { DatePicker } from "@mui/x-date-pickers";
import FromTimePicker from "@/components/Form/FromTimePicker";
import { convertToAmPm } from "@/utils/timeConvater";
import FormMultipleSelect from "@/components/Form/FomMultipleSelect";
import SelectDate from "@/components/Form/SelectDate";
import {
  useCreateDoctorMutation,
  useCreateDonorMutation,
  useRegisterUserMutation,
  useUserLoginMutation,
} from "@/redux/api/authApi";
import { IAdminCrate, ICreateDoctor, ICreateDonor } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminCreateSchema } from "@/components/schema/admin";
import { ImageUpload } from "@/components/Form/ImageUplaod";

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
  const [updateDoctorService] = useUpdateDoctorServiceMutation();
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
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Admin/manageAdmin",
      level: "Create",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];

  const [registerUser] = useRegisterUserMutation();

  const editHandler: SubmitHandler<IAdminCrate> = async (value) => {
    value.role = "Admin";
    value.avatar = imageUrl as string;
    try {
      if (imageUrl) {
        const res = await registerUser(value).unwrap();
        console.log(res);
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
