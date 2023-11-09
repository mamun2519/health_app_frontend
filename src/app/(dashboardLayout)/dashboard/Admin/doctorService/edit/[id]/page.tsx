"use client";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import Form from "@/components/Form/FormProvider";
import FormInput from "@/components/Form/FormInput";
import { SubmitHandler } from "react-hook-form";
import successMessage from "@/components/shared/SuccessMassage";
import {
  useDoctorServiceDetailsQuery,
  useUpdateDoctorServiceMutation,
} from "@/redux/api/doctorServiceApi";
import { IUpdateService } from "@/app/(dashboardLayout)/dashboard/Doctor/myService/edit/[id]/page";
import errorMessage from "@/components/shared/ErrrorMessage";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
const AdminServiceUpdatePage = ({ params }: { params: { id: string } }) => {
  const [updateDoctorService] = useUpdateDoctorServiceMutation();
  const boread = [
    {
      link: "/",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Admin/doctorService",
      level: "My Service",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Admin/doctorService",
      level: "Edit",
      icons: <SettingsSuggestIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];
  const { data } = useDoctorServiceDetailsQuery({
    id: params.id,
    date: "",
  });
  // @ts-ignore
  const defaultValues = {
    title: data?.title || "",
    category: data?.category || "",
    price: data?.price || "",
    aboutSerivce: data?.aboutSerivce || "",
    serviceType: data?.serviceType || "",
  };

  const editHandler: SubmitHandler<IUpdateService> = async (value) => {
    try {
      const res = await updateDoctorService({
        id: params.id,
        body: { service: value },
      }).unwrap();
      console.log(res);
      if (res) {
        successMessage({
          message: "Service Update Successfully",
          header: "Thank you",
        });
      } else {
        errorMessage({ message: "Something is wrong" });
      }

      console.log(value);
    } catch (error) {
      errorMessage({ message: "Something is wrong" });
    }
  };
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={boread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Edit Service</h3>
      <div className="mt-5"></div>
      <Form submitHandler={editHandler} defaultValues={defaultValues}>
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className=" mt-2 ">
            <FormInput
              name="title"
              label="Title"
              size="lg:w-96 w-72"
              placeholder="Enter Your Phone title"
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name="category"
              size="lg:w-96 w-72"
              label="Category"
              placeholder="Enter category "
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name="price"
              size="lg:w-96 w-72"
              label="Price"
              placeholder="Enter Patient price"
            />
          </div>
        </div>
        <div className="mt-5 grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className=" mt-8">
            <FormInput
              name="aboutSerivce"
              label="AboutService"
              size="lg:w-96 w-72"
              placeholder="Enter AboutService"
            />
          </div>
          <div className=" mt-8">
            <FormInput
              name="serviceType"
              label="serviceType"
              size="lg:w-96 w-72"
              placeholder="Enter serviceType"
            />
          </div>
        </div>

        <div className="py-2 w-40 mt-5">
          <button
            type="submit"
            className=" px-10 h-10 w-full rounded bg-[#d1001c] text-white font-medium "
          >
            Edit Now
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdminServiceUpdatePage;
