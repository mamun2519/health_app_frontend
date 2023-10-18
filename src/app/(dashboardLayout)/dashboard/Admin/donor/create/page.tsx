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
} from "@/redux/api/authApi";
import { ICreateDoctor, ICreateDonor } from "@/types";
import errorMessage from "@/components/shared/ErrrorMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import { createDonorSchema } from "@/components/schema/donor";
import { ImageUpload } from "@/components/Form/ImageUplaod";

const CreateDoctorPage = () => {
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
      link: "/dashboard/Admin/donor",
      level: "Manage Blood Donor",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Admin/donor",
      level: "Create",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];

  const [createDonor] = useCreateDonorMutation();

  const editHandler: SubmitHandler<ICreateDonor> = async (value) => {
    value.present_Address.police_station = "No";
    value.avatar = imageUrl as string;
    try {
      if (imageUrl) {
        const res = await createDonor(value).unwrap();
        console.log(res);
        // @ts-ignore
        if (res) {
          successMessage({
            message: "Donor Account Create Successfully",
            header: "Thank you",
          });
        } else {
          errorMessage({ message: "Something is wrong" });
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
      <h3 className=" mt-5 text-2xl">Create Blood Donor</h3>
      <div className="mt-5"></div>
      <Form
        submitHandler={editHandler}
        resolver={yupResolver(createDonorSchema)}
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
              placeholder="Enter last name "
            />
          </div>

          <div className="mt-2">
            {/* <FormInput
              name="date_of_birth"
              size="lg:w-96 w-72"
              label="Date of Birth"
              placeholder="Enter Patient avatar"
            /> */}
            <FormInput
              name="phone"
              size="lg:w-96 w-72"
              label="Phone"
              placeholder="Enter phone "
            />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-5">
          {/* <div className=" mt-8">
            <FormInput
              name="avatar"
              label="service Type"
              size="lg:w-96 w-72"
              placeholder="Enter service Type"
            />
          </div> */}
          <div className=" mt-4">
            <SelectInput
              name="blood_group"
              label="Blood Group"
              options={SelectedBloodGroup}
            />
          </div>
          <div className=" mt-2">
            <SelectInput
              name="gender"
              label="Gender"
              options={SelectedGender}
            />
          </div>
          <div className=" mt-2">
            <SelectDate
              name="date_of_birth"
              size="lg:w-96 w-72"
              label="Date of Birth"
              placeholder="Enter Patient avatar"
            />
          </div>
        </div>
        {/* <div className=" grid grid-cols-3 gap-5 mt-5"></div> */}
        <div className="mt-5 ">
          <p>Address</p>
          <div className="grid grid-cols-3 gap-5 mt-2">
            <div className="  ">
              {/* <FormSelectInput
                name="service.category"
                label="serviceType"
                size="lg:w-96 w-72 "
                options={ServiceCategory}
                placeholder="Enter serviceType"
              /> */}
              <SelectInput
                name="present_Address.district"
                label="Division"
                options={SelectedDivisions}
              />
            </div>
            <div className=" mt-2 ">
              <FormInput
                name="present_Address.sub_district"
                label="District"
                size="lg:w-96 w-72"
                placeholder="Enter Your  District"
              />
            </div>
            <div className=" mt-2">
              <FormInput
                name="present_Address.address"
                size="lg:w-96 w-72"
                label="Address"
                placeholder="Enter address "
              />
            </div>
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

export default CreateDoctorPage;
