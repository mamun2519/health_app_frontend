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
}

export default function MeetRequestModel({
  open,
  handleClose,
  appointment,
  appointmentId,
}: OpenModel) {
  const [JoinDoctor] = useJoinDoctorMutation();
  const submitHundler: SubmitHandler<ICreateMeting> = async (value) => {
    value.serialNo = Number(value.serialNo);
    const data = {
      ...value,
      appointmentId,
      meetingId: appointment.id,
    };
    try {
      const res = await JoinDoctor(data);
      console.log(res);
      if (res.data) {
        toast({
          message: "Meet Request Send Successfully",
          header: "Thank You",
        });
        handleClose(open);
      } else {
        errorMessage({ message: "Something is wrong!" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(appointmentId);
  return (
    <div className="bg-[#30029010]">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {appointment ? (
          <>
            <DialogTitle id="alert-dialog-title">
              {"Join Doctor Now"}
            </DialogTitle>
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

                  {/* <div className=" mt-4 ">
                    <FormInput
                      name="pratienCondition"
                      size="lg:w-96 w-72"
                      label="Patient condition"
                      placeholder="Enter Patient condition"
                    />
                  </div> */}
                  {/* <div className=" mt-4 ">
                    <FormInput
                      name="quantity"
                      label="Quantity"
                      size="lg:w-96 w-72"
                      placeholder="Blood quantity"
                    />
                  </div>
                  <div className=" mt-2  ">
                    <FormInput
                      name="donnetDate"
                      size="lg:w-96 w-72"
                      label="Donned Date"
                      placeholder="Enter Date"
                    />
                  </div> */}
                  <DialogActions style={{ display: "block" }}>
                    {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
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
        ) : (
          <div className="h-96 w-96 flex justify-center items-center">
            <div>
              <div className="w-full">
                <Image src={Offline} width={250} height={250} />
              </div>
              <p>Doctor Not a online , please wait</p>
              <div className=" flex justify-center gap-5 py-2">
                <button
                  onClick={() => handleClose(!open)}
                  className=" px-10 h-10 w-full rounded bg-[#d1001c] text-white font-medium "
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}
