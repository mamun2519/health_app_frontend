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
  useCreateDoctorServiceMutation,
  useDoctorServiceDetailsQuery,
  useUpdateDoctorServiceMutation,
} from "@/redux/api/doctorServiceApi";
import FormSelectInput from "@/components/Form/FormSelectInput";
import { Days, Duration, ServiceCategory } from "@/constants/donor";
import SelectInput from "@/components/Form/SelectInput";
import { DatePicker } from "@mui/x-date-pickers";
import FromTimePicker from "@/components/Form/FromTimePicker";
import { convertToAmPm } from "@/utils/timeConvater";
import FormMultipleSelect from "@/components/Form/FomMultipleSelect";
import { ICreatePrescription } from "@/types";
import { useCreatePrescriptionMutation } from "@/redux/api/prescriptionApi";

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
const CreatePrescription = ({ appointmentId }: { appointmentId: string }) => {
  const [updateDoctorService] = useUpdateDoctorServiceMutation();
  const boread = [
    {
      link: "/",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/googleMeet",
      level: "Google Meet",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },

    {
      link: "/dashboard/Doctor/googleMeet",
      level: " Create Prescription",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];

  const [createPrescription] = useCreatePrescriptionMutation();

  const editHandler: SubmitHandler<ICreatePrescription> = async (value) => {
    const data = {
      prescription: {
        appointmentId,
        title: value.prescription.title,
        submitDate: "2023-10-05T15:39:27.956Z",
        advice: value.prescription.title,
      },
      medicine: [
        {
          durgName: value.medicine.durgName,
          eatingTime: ["mornig", "evening"],
          duration: value.medicine.duration,
          advice: "bed",
          eat: value.medicine.eat,
        },
      ],
      haltReport: [
        {
          testName: value.haltReport.testName,
          description: value.haltReport.description,
        },
      ],
    };
    try {
      const res = await createPrescription(data);
      if (res) {
        successMessage({
          message: "Prescription Create Successfully",
          header: "Thank you",
        });
      }
      console.log(value);
      console.log(res);
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
      <h3 className=" mt-5 text-2xl">Create Prescription</h3>
      <div className="mt-5"></div>
      <Form submitHandler={editHandler}>
        <h3 className=" mt-5 text-xl">Prescription Details</h3>
        <div className=" grid grid-cols-3 gap-5">
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
          <div className=" grid grid-cols-3 gap-5">
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
          <div className=" grid grid-cols-3 gap-5 mt-5">
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
        {/* <div className="mt-5 grid grid-cols-3 gap-5">
          <div className=" mt-8">
            <FormInput
              name="service.serviceType"
              label="service Type"
              size="lg:w-96 w-72"
              placeholder="Enter service Type"
            />
          </div>

          <div className=" mt-4">
            <SelectInput
              name="service.serviceDay"
              label="Service Day"
              options={Days}
            />
          </div>
          <div className=" mt-8">
            <FormInput
              name="service.aboutSerivce"
              label="AboutService"
              size="lg:w-96 w-72"
              placeholder="Enter AboutService"
            />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-5">
          <div className=" mt-8">
            <FormSelectInput
              name="service.category"
              label="serviceType"
              size="lg:w-96 w-72 "
              options={ServiceCategory}
              placeholder="Enter serviceType"
            />
            <SelectInput
              name="salt.duration"
              label="duration"
              options={Duration}
            />
          </div>
        </div> */}

        <div className="mt-5">
          <h3 className=" mt-5 text-xl">Health Report</h3>
          <div className=" grid grid-cols-3 gap-5">
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
            Create Now
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CreatePrescription;
