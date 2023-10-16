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
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface OpenModel {
  open: boolean;
  handleClose: (op: any) => any;
  appointment: any;
  appointmentId: string;
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
  setAppointmentId: React.Dispatch<React.SetStateAction<string>>;
}

export default function MeetRequestModel({
  open,
  handleClose,
  appointment,
  appointmentId,
  setAppointmentId,
}: OpenModel) {
  const [url, setUrl] = React.useState(appointment?.meetLink);
  const [JoinDoctor] = useJoinDoctorMutation();
  const submitHundler: SubmitHandler<ICreateMeting> = async (value) => {
    // window.open(appointment?.meetLink, "_blank");
    value.serialNo = Number(value.serialNo);
    const data = {
      ...value,
      appointmentId,
      meetingId: appointment?.id,
    };

    try {
      const res = await JoinDoctor(data);
      console.log(res);
      if (res?.data) {
        toast({
          message: "Meet Request Send Successfully",
          header: "Thank You",
        });
        handleClose(open);
        // setAppointmentId("");
        const validUrl = url.match(/^(https?:\/\/)/) ? url : `https://${url}`;
        console.log(validUrl);
        // Open the URL in a new tab
        window.open(validUrl, "_blank");
      } else {
        handleClose(open);
        // setAppointmentId("");
        errorMessage({ message: "Something is wrong!" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(appointment);
  return (
    <div className="bg-[#30029010]">
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <>
          <DialogTitle id="alert-dialog-title">{"Join Doctor Now"}</DialogTitle>
          <div className="px-5">
            <DialogContentText id="alert-dialog-description">
              <Form submitHandler={submitHundler}>
                <div className=" mt-2 ">
                  <FormInput
                    name="phoneNumber"
                    label="Phone"
                    size="lg:w-96 w-72"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div className=" mt-4 ">
                  <FormInput
                    name="serialNo"
                    size="lg:w-96 w-72"
                    label="Serial No"
                    placeholder="Enter Your  serialNo"
                  />
                </div>

                <DialogActions style={{ display: "block" }}>
                  <div className=" flex justify-center gap-5 py-2">
                    <button
                      type="submit"
                      className=" px-10 h-10 w-full rounded bg-[#d1001c] text-white font-medium "
                    >
                      Join Google Meet
                    </button>
                  </div>
                </DialogActions>
              </Form>
            </DialogContentText>
          </div>
        </>
      </Dialog> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        aria-labelledby="alert-dialog-title"
      >
        <>
          <DialogTitle id="alert-dialog-title">{"Join Doctor Now"}</DialogTitle>
          <div className="px-5">
            <DialogContentText id="alert-dialog-description">
              <Form submitHandler={submitHundler}>
                <div className=" mt-2 ">
                  <FormInput
                    name="phoneNumber"
                    label="Phone"
                    size="lg:w-96 w-72"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div className=" mt-4 ">
                  <FormInput
                    name="serialNo"
                    size="lg:w-96 w-72"
                    label="Serial No"
                    placeholder="Enter Your  serialNo"
                  />
                </div>

                <DialogActions style={{ display: "block" }}>
                  <div className=" flex justify-center gap-5 py-2">
                    <button
                      type="submit"
                      className=" px-10 h-10 w-full rounded bg-[#d1001c] text-white font-medium "
                    >
                      Join Google Meet
                    </button>
                  </div>
                </DialogActions>
              </Form>
            </DialogContentText>
          </div>
        </>
      </Dialog>
    </div>
  );
}
