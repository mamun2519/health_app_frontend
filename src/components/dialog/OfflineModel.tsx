"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormProvider, SubmitHandler } from "react-hook-form";
import Form from "../Form/FormProvider";
import FormInput from "../Form/FormInput";
import { useDonorRequestMutation } from "@/redux/api/donorApi";
import toast from "../shared/SuccessMassage";
import { useJoinDoctorMutation } from "@/redux/api/googleMeetApi";
import errorMessage from "../shared/ErrrorMessage";
import Offline from "../../assets/Animation - 1697352872560.gif";
import Image from "next/image";
interface OpenModel {
  open: boolean;
  handleClose: (op: any) => any;
}

export interface ICreateMeting {
  serialNo: number;
  phoneNumber: string;
}
export interface IDonorRequest {
  phone: string;
  location: string;
  pratienCondition: string;
  quantity: string | number;
  appointment: any;
  appointmentId: string;
}

export default function OfflineModel({ open, handleClose }: OpenModel) {
  return (
    <div className="bg-[#30029010]">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="h-96 w-96 p-10">
          <div>
            <div className="w-full  flex justify-center items-center">
              <Image src={Offline} className="w-48 h-48 " alt="image" />
            </div>
            <p className="text-xl text-gray-700">
              Doctor Not a online , please wait
            </p>
            <div className=" flex justify-center gap-5 py-2 mt-2">
              <button
                onClick={() => handleClose(!open)}
                className=" px-10 h-10 w-48 rounded bg-[#d1001c] text-white font-medium "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
