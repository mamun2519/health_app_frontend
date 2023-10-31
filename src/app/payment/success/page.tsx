"use client";
import MyStepper from "@/components/ui/MyStepper";
import React from "react";
import SuccessPayment from "@/assets/success.gif";
import Image from "next/image";
const SuccessPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-10 pb-40">
      <MyStepper stepper={3} />
      <div className="border h-[550px] lg:w-1/2   w-full rounded-2xl p-7 mt-10 mx-auto">
        <Image
          src={SuccessPayment}
          width={100}
          height={20}
          className="w-full h-96"
          alt="Pic"
        />

        <div className="flex justify-center">
          <div className="text-center">
            <h3>Payment Complete Successfully</h3>
            <p>Wait 3</p>
            <p>Redirect To Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
