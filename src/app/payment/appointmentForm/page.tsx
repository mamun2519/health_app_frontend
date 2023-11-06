"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/FormProvider";
import SelectInput from "@/components/Form/SelectInput";
import { CreateBookAppointmentSchema } from "@/components/schema/appointment";
import MyStepper from "@/components/ui/MyStepper";
import { SelectedBloodGroup, SelectedGender } from "@/constants/donor";
import { useDoctorServiceDetailsQuery } from "@/redux/api/doctorServiceApi";
import LoadingSpinner from "@/utils/Loading";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
export interface ICreateBookAppointment {
  gender: string;
  age: number;
  weight: number;
  bloodGroup: string;

  patientProblem: string;

  address: string;
}
const AppointmentBookingForm = () => {
  const router = useRouter();

  const StoreLocalStorageHandler: SubmitHandler<
    ICreateBookAppointment
  > = async (data) => {
    console.log(data);
    data.age = Number(data.age);
    data.weight = Number(data.weight);
    //
    localStorage.setItem("PatientInfo", JSON.stringify(data));
    router.push("/payment/preview");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-28 pb-40">
      <MyStepper stepper={0} />

      <div className=" border p-5 mt-5">
        <div className="mt-10">
          <h3 className=" text-xl font-bold">Patient Additional Info</h3>

          <Form
            submitHandler={StoreLocalStorageHandler}
            resolver={yupResolver(CreateBookAppointmentSchema)}
          >
            <div className=" grid grid-cols-2 gap-5 mt-4">
              <div className="">
                <SelectInput
                  name="gender"
                  label="Gender"
                  options={SelectedGender}
                />
              </div>
              <div>
                <SelectInput
                  name="bloodGroup"
                  label="Blood Group"
                  options={SelectedBloodGroup}
                />
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-5  mt-4">
              <div>
                <FormInput
                  name="weight"
                  label="Weight"
                  placeholder="Enter Weight"
                />
              </div>
              <div>
                <FormInput name="age" label="Age" placeholder="Enter Age" />
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-5  mt-4">
              <div>
                <FormInput
                  name="patientProblem"
                  label="Patient Problem"
                  placeholder="Enter patientProblem"
                />
              </div>
              <div>
                <FormInput
                  name="address"
                  label="Address"
                  placeholder="Enter Address"
                />
              </div>
            </div>
            <div className="mt-3 w-48">
              <button className=" px-10 h-10 rounded bg-[#d1001c] text-white w-full font-medium ">
                Next
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBookingForm;
