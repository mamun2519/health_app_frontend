"use client";
import React from "react";
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
  useDoctorServiceDetailsQuery,
  useUpdateDoctorServiceMutation,
} from "@/redux/api/doctorServiceApi";
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
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Admin/doctorService",
      level: "Edit",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];
  const { data } = useDoctorServiceDetailsQuery(params.id);
  // @ts-ignore
  const defaultValues = {
    title: data?.title || "",
    category: data?.category || "",
    price: data?.price || "",
    aboutSerivce: data?.aboutSerivce || "",
    serviceType: data?.serviceType || "",
  };

  const editHandler: SubmitHandler<IDonorRequest> = async (value) => {
    try {
      await updateDoctorService({ id: params.id, body: value });
      successMessage({
        message: "Service Update Successfully",
        header: "Thank you",
      });
      console.log(value);
    } catch (error) {}
  };
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={boread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Edit Service</h3>
      <div className="mt-5"></div>
      <Form submitHandler={editHandler} defaultValues={defaultValues}>
        <div className=" grid grid-cols-3 gap-5">
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
        <div className="mt-5 grid grid-cols-3 gap-5">
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
