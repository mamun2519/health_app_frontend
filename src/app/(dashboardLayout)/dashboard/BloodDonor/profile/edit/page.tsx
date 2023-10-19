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
import { useCreateDoctorMutation } from "@/redux/api/authApi";
import { ICreateDoctor } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { createDoctorSchema } from "@/components/schema/doctor";
import { ImageUpload } from "@/components/Form/ImageUplaod";
import errorMessage from "@/components/shared/ErrrorMessage";
import {
  useMyProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/api/profileApi";
const EditProfile = () => {
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [cover, setCover] = useState<string | undefined>();
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
      link: "/dashboard/BloodDonor/profile",
      level: "Profile",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/BloodDonor/profile",
      level: "Edit",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];

  const { data } = useMyProfileQuery({ limit: 100, page: 1 });
  console.log(data);
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const defaultValues = {
    gender: data?.user?.profile?.gender || "",
    first_name: data?.user?.profile?.first_name || "",
    last_name: data?.user?.profile?.last_name || "",
    phone: data?.user?.profile?.phone || "",
    date_of_birth: data?.user?.profile?.date_of_birth || "",
    district: data?.user?.profile?.present_Address?.district || "",
    sub_district: data?.user?.profile?.present_Address?.district || "",
    address: data?.user?.profile?.present_Address?.address || "",
    blood_group: data?.user?.profile?.blood_group,
  };

  const editHandler: SubmitHandler<any> = async (value) => {
    //     value.present_Address.police_station = "No";
    if (imageUrl) {
      value.avatar = imageUrl as string;
    }
    if (cover) {
      value.cover = cover;
    }

    try {
      const data = {
        address: {
          address: value.address,
          sub_district: value.sub_district,
          district: value.district,
        },
        profile: {
          gender: value.gender,
          first_name: value.first_name,
          last_name: value.last_name,
          phone: value.phone,
          date_of_birth: value.date_of_birth,
          blood_group: value.blood_group,
          cover: value.cover,
          avatar: value.avatar,
        },
      };
      const res = await updateUserProfile(data).unwrap();
      console.log(res);
      // @ts-ignore
      if (res) {
        successMessage({
          message: "profile update  Successfully",
          header: "Thank you",
        });
      }
    } catch (error: any) {
      console.log(error);
      errorMessage({ message: error?.data });
    }
    // console.log(value.startTime);
    // const time = convertToAmPm(value.salt.startTime);
    // console.log(time);
  };
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={boread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Edit profile</h3>
      <Form submitHandler={editHandler} defaultValues={defaultValues}>
        <div className=" grid grid-cols-3 gap-5">
          <div className=" mt-2 ">
            <FormInput
              name="first_name"
              label="First Name"
              size="lg:w-96 w-72"
              placeholder="Enter Your  first name"
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name="last_name"
              size="lg:w-96 w-72"
              label="Last Name"
              placeholder="Enter lastname "
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
        </div>
        <div className=" grid grid-cols-3 gap-5 mt-5">
          <div className=" mt-2">
            <SelectDate
              name="date_of_birth"
              size="lg:w-96 w-72"
              label="Date of Birth"
              placeholder="Enter Patient avatar"
            />
          </div>
        </div>
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
                name="district"
                label="Division"
                options={SelectedDivisions}
              />
            </div>
            <div className=" mt-2 ">
              <FormInput
                name="sub_district"
                label="District"
                size="lg:w-96 w-72"
                placeholder="Enter Your  District"
              />
            </div>
            <div className=" mt-2">
              <FormInput
                name="address"
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
                <span>Avatar</span>
                <ImageUpload setImageUrl={setImageUrl} />
              </div>
            </div>
            <div className="mt-2">
              <span>Cover</span>
              <ImageUpload setImageUrl={setCover} />
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

export default EditProfile;
