"use client";
import HomeIcon from "@mui/icons-material/Home";

import successMessage from "@/components/shared/SuccessMassage";

import { SubmitHandler } from "react-hook-form";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/FormProvider";
import {
  usePrescriptionDetailsQuery,
  useUpdatePrescriptionMutation,
} from "@/redux/api/prescriptionApi";
import { ICreatePrescription } from "@/types";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
const DoctorPrescriptionEditPage = ({ params }: { params: { id: string } }) => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/prescription",
      level: "My Prescription",
      icons: <MedicalServicesIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/prescription",
      level: "Prescription Edit",
      icons: <SettingsSuggestIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "#d1001c",
    },
  ];
  const { data } = usePrescriptionDetailsQuery(params.id);

  const defaultValues = {
    "prescription.title": data?.title || "",
    "prescription.submitDate": data?.submitDate || "",
    "prescription.advice": data?.advice || "",
    "medicine.durgName": data?.medicines[0].durgName || "",

    "medicine.eatingTime": data?.medicines[0].eatingTime || "",
    "medicine.duration": data?.medicines[0].duration || "",
    "medicine.eat": data?.medicines[0].eat || "",
    "haltReport.testName": data?.healtReports[0].testName,
    "haltReport.description": data?.healtReports[0].description,
  };
  const [updatePrescription] = useUpdatePrescriptionMutation();
  const editHandler: SubmitHandler<ICreatePrescription> = async (value) => {
    try {
      const res = await updatePrescription({
        id: params.id,
        body: value,
      });
      if (res) {
        successMessage({
          message: "Prescription Update Successfully",
          header: "Thank you",
        });
      }

      console.log(value);
    } catch (error) {}
  };
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Edit Appointment</h3>
      <div className="mt-5"></div>
      <Form submitHandler={editHandler} defaultValues={defaultValues}>
        <h3 className=" mt-5 text-xl">Prescription Details</h3>
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className=" mt-2 ">
            <FormInput
              name="prescription.title"
              label="Title"
              size="lg:w-96 w-72"
              placeholder="Enter Your  title"
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name="prescription.submitDate"
              size="lg:w-96 w-72"
              label="Submit Date"
              placeholder="Enter submitDate "
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name="prescription.advice"
              size="lg:w-96 w-72"
              label="Advice"
              placeholder="Enter advice"
            />
          </div>
        </div>
        <div className="mt-5">
          <h3 className=" mt-5 text-xl">Medicine Details</h3>
          <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5">
            <div className=" mt-2 ">
              <FormInput
                name="medicine.durgName"
                label="Drug Name"
                size="lg:w-96 w-72"
                placeholder="Enter Your  Drug Name"
              />
            </div>
            <div className=" mt-2">
              <FormInput
                name="medicine.eatingTime"
                size="lg:w-96 w-72"
                label="eatingTime"
                placeholder="Enter eatingTime "
              />
            </div>
            <div className=" mt-2">
              <FormInput
                name="medicine.duration"
                size="lg:w-96 w-72"
                label="duration"
                placeholder="Enter Patient duration"
              />
            </div>
          </div>
          <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5">
            <div className=" mt-2 ">
              <FormInput
                name="medicine.eat"
                label="eat"
                size="lg:w-96 w-72"
                placeholder="Enter Your  eat"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className=" mt-5 text-xl">Health Report</h3>
          <div className=" grid lg:grid-cols-3 gap-5">
            <div className=" mt-2 ">
              <FormInput
                name="haltReport.testName"
                label="testName"
                size="lg:w-96 w-72"
                placeholder="Enter Your  testName"
              />
            </div>
            <div className=" mt-2">
              <FormInput
                name="haltReport.description"
                size="lg:w-96 w-72"
                label="description"
                placeholder="Enter description "
              />
            </div>
          </div>
        </div>

        <div className="py-2 w-56 mt-5">
          <button
            type="submit"
            className=" px-10 h-10 w-full rounded bg-[#d1001c] text-white font-medium "
          >
            Update Now
          </button>
        </div>
      </Form>
    </div>
  );
};

export default DoctorPrescriptionEditPage;
