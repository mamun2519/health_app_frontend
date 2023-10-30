import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import DeletePic from "../../assets/delete.svg";
import Image from "next/image";
import Form from "../Form/FormProvider";
import FormSelectInput from "../Form/FormSelectInput";
import { AppointmentChangeStatus } from "@/constants/donor";
import { SubmitHandler } from "react-hook-form";
import SelectInput from "../Form/SelectInput";
import { useUpdateAppointmentMutation } from "@/redux/api/appointmentApi";
import successMessage from "../shared/SuccessMassage";
import errorMessage from "../shared/ErrrorMessage";

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

  id: string;
}

interface StatusChangeUpdate {
  status: string;
}

export default function AppointmentChangeStatusModel({
  open,
  handleClose,
  id,
}: OpenModel) {
  const [updateAppointment] = useUpdateAppointmentMutation();
  const changeStatusHandler: SubmitHandler<StatusChangeUpdate> = async (
    value
  ) => {
    const data = { id, body: value };
    const res = await updateAppointment(data).unwrap();
    // @ts-ignore
    if (res) {
      successMessage({
        header: "Thank You",
        message: `Appointment Status - ${value?.status} Updated Successfully`,
      });
      handleClose(open);
    } else {
      errorMessage({ message: "Something Is wrong" });
      handleClose(open);
    }
  };
  return (
    <div className=" w-full ">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div className="  overflow-auto">
            <p className="  text-xl text-gray-500 mt-2 ">Status</p>
          </div>

          <div className="m lg:w-96 w-72">
            <Form submitHandler={changeStatusHandler}>
              <SelectInput name="status" options={AppointmentChangeStatus} />

              <div className="mt-3 h-12 ">
                <button
                  type="submit"
                  className="bg-red-500 h-12  text-white w-full rounded-full"
                >
                  Change Now
                </button>
              </div>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
