"use client";
import MyStepper from "@/components/ui/MyStepper";
import { useDoctorServiceDetailsQuery } from "@/redux/api/doctorServiceApi";
import React, { use, useEffect, useState } from "react";
// import { ICreateBookAppointment } from "../appointmentForm/page";
import Form from "@/components/Form/FormProvider";
import FormInput from "@/components/Form/FormInput";
import Link from "next/link";
import LoadingSpinner from "@/utils/Loading";
import { yupResolver } from "@hookform/resolvers/yup";
import { promoCodeSchema } from "@/components/schema/admin";
import { SubmitHandler } from "react-hook-form";
// import { useApplyPromoCodeMutation } from "../../../redux/api/paymentApi";
import errorMessage from "@/components/shared/ErrrorMessage";
import successMessage from "@/components/shared/SuccessMassage";
import { ICreateBookAppointment } from "./PaymentPageComponent";
import { useApplyPromoCodeMutation } from "@/redux/api/paymentApi";

export interface IBookingInfo {
  bookingDate: string;
  slatTime: string;
  doctorId: string;
  serviceId: string;
  price: number;
  discount: number;
}
const PreviewPageComponent = () => {
  const [serviceId, SetServiceId] = useState<string>("");
  const [discountParseint, setDiscountParseint] = useState(null);
  const [apply, setApply] = useState(false);
  const { data: service, isLoading } = useDoctorServiceDetailsQuery({
    id: serviceId,
    date: "",
  });
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    setTotalPrice(service?.price);
  }, [service]);

  console.log(totalPrice);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [BookingInfo, setBookingInfo] = useState<IBookingInfo>({
    bookingDate: "",
    slatTime: "",
    doctorId: "",
    serviceId: "",
    price: 0,
    discount: 0,
  });
  const [patientInfo, SetPatientInfo] = useState<ICreateBookAppointment>({
    gender: "",
    age: 0,
    weight: 0,
    bloodGroup: "",
    patientProblem: "",
    address: "",
  });
  const [applyPromoCode] = useApplyPromoCodeMutation();
  useEffect(() => {
    SetServiceId(
      JSON.parse(localStorage.getItem("BookingInfo") as string).serviceId
    );
    setBookingInfo(JSON.parse(localStorage.getItem("BookingInfo") as string));
    SetPatientInfo(JSON.parse(localStorage.getItem("PatientInfo") as string));
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const applyPromoCodeHandler: SubmitHandler<{ promoCode: string }> = async (
    data
  ) => {
    const d = {
      id: service?.id,
      promoCode: data.promoCode,
    };
    const res: any = await applyPromoCode(d);

    if (res.data) {
      successMessage({
        header: "congratulation",
        message: "Apply Promo Code Successfully",
      });
      setApply(true);
      setDiscountParseint(res.data.discount);
      const discountAmount: number = Number(
        (Number(service?.price) * res.data.discount) / 100
      );
      setDiscountPrice(discountAmount);

      const currentPrice = Number(service?.price) - discountAmount;
      setTotalPrice(Math.floor(Number(currentPrice)));

      BookingInfo.price = Math.floor(currentPrice);
      BookingInfo.discount = Math.floor(discountAmount);
      localStorage.setItem("BookingInfo", JSON.stringify(BookingInfo));
    } else {
      errorMessage({ message: res?.error?.data });
    }
    try {
    } catch (error: any) {
      errorMessage({ message: error?.data });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-28 pb-40">
      <MyStepper stepper={1} />

      <div className=" lg:flex  mt-10 gap-5">
        <div className="border h-[550px]  lg:w-2/3 w-full rounded-2xl p-7">
          <div className="mt-5">
            <h3 className=" text-xl font-bold">Appointment Information</h3>
            <div className=" grid grid-cols-2  mt-4">
              <p className="">Doctor Name</p>
              <p>
                Dr, {service?.doctor?.user?.profile?.first_name}{" "}
                {service?.doctor?.user?.profile?.last_name}
              </p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Appointment</p>
              <p>{service?.title}</p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Appointment Date</p>
              <p>{BookingInfo.bookingDate}</p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Schedule</p>
              <p>{BookingInfo.slatTime}</p>
            </div>
          </div>
          <div className="mt-5">
            <h3 className=" text-xl font-bold">Patient Information</h3>
            <div className=" grid grid-cols-2 mt-4 ">
              <p>Patient Condition</p>
              <p>{patientInfo.patientProblem}</p>
            </div>
            <div className=" grid grid-cols-2  mt-1">
              <p className="">Gender</p>
              <p>{patientInfo.gender}</p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Age</p>
              <p>{patientInfo.age}</p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Weight</p>
              <p>{patientInfo.weight}</p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Blood Group</p>
              <p>{patientInfo.bloodGroup}</p>
            </div>
            <div className=" grid grid-cols-2 mt-1 ">
              <p>Address</p>
              <p>{patientInfo.address}</p>
            </div>
          </div>

          <div className="mt-10 w-48 h-10 rounded bg-[#d1001c] text-white  font-medium  flex justify-center items-center">
            <Link href="/payment/appointmentForm">Back</Link>
          </div>
        </div>
        <div className="  lg:w-1/3 w-full border  p-7 rounded-3xl shadow-sm  h-[550px]  bg-[#30029010] ">
          <div className=" h-[370px]">
            <p className="text-xl "> Order Summary</p>
            <div className="mt-5 ">
              <div className="mt-1  flex gap-4 justify-between">
                <div className="">
                  <span>{service?.title}</span>
                </div>
                <div>
                  <span>{service?.price} BDT</span>
                </div>
              </div>

              <div className=" border  w-full mt-5"></div>
              <div className="mt-4  flex gap-4 justify-between">
                <div className="">
                  <span>
                    Discount{" "}
                    {discountParseint && `(${discountParseint}% Offer)`}
                  </span>
                </div>
                <div>
                  <span>{BookingInfo.discount} BDT</span>
                </div>
              </div>
              <div className="mt-1  flex gap-4 justify-between">
                <div className="">
                  <span>Amount</span>
                </div>
                <div>
                  <span>{BookingInfo.price} BDT</span>
                </div>
              </div>
              <div className="mt-1  flex gap-4 justify-between">
                <div className="">
                  <span>Tax</span>
                </div>
                <div>
                  <span>Free</span>
                </div>
              </div>
              <div className="mt-1  flex gap-4 justify-between">
                <div className="">
                  <span>Service Charge</span>
                </div>
                <div>
                  <span>Free</span>
                </div>
              </div>

              <div className="h- border w-full mt-5"></div>

              <div className="mt-5">
                <Form
                  submitHandler={applyPromoCodeHandler}
                  resolver={yupResolver(promoCodeSchema)}
                >
                  <div className="h-12 relative w-full">
                    <FormInput
                      name="promoCode"
                      label="Promo Code "
                      placeholder="Enter Promo code"
                    />{" "}
                    <div className=" absolute  top-2  right-2">
                      <button
                        disabled={apply}
                        className={`${
                          apply ? "bg-red-400 " : "bg-[#d1001c] "
                        } px-8 py-2 rounded text-white`}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full px-4">
            <div className="  flex gap-4 justify-between">
              <div className="">
                <span className="text-2xl">Total </span>
              </div>
              <div>
                <span className="text-2xl">{BookingInfo.price} BDT</span>
              </div>
            </div>
            <div className="mt-5 w-full bg-[#d1001c] h-10 text-white rounded-2xl flex justify-center items-center  ">
              <Link
                href="/payment/conform"
                // onClick={() => bookingHandler()}
              >
                Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPageComponent;
