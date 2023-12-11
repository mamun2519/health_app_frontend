import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import ForgetPasswordEmail from "../ui/ForgetPasswordEmail";
import ForgetPasswordCode from "../ui/ForgetCode";
import NewPassword from "../ui/NewPassword";
import PasswordResetSuccessMessage from "../ui/PasswordSuccess";
import { SubmitHandler } from "react-hook-form";
import Toast from "../ui/Toast";
import errorMessage from "../shared/ErrrorMessage";
import { useForgetRequestMutation } from "@/redux/api/authApi";
import { maskEmail } from "@/utils/formetEmail";

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
}

export default function ForgetModel({ open, handleClose }: OpenModel) {
  const [step, setStep] = React.useState(1);
  const [email, setEmail] = React.useState("");
  const [forgetRequest] = useForgetRequestMutation();
  const [loading, setLoading] = React.useState(true);
  const forgetPasswordHandler: SubmitHandler<{ email: string }> = async (
    data
  ) => {
    try {
      setLoading(false);
      const res = await forgetRequest({ email: data.email }).unwrap();
      if (res) {
        setStep(res.stepNo);
      }
      console.log(res);
      setEmail(data.email);
      setLoading(true);
    } catch (error) {
      console.log(error);
      // errorMessage({ message: "Something is wrong" });
      setLoading(true);
    }
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="w-[430px] h-full">
          {step === 1 && (
            <ForgetPasswordEmail
              forgetPasswordHandler={forgetPasswordHandler}
              loading={loading}
            />
          )}
          {step === 2 && <ForgetPasswordCode email={email} />}
          {step === 3 && <NewPassword />}
          {step === 4 && <PasswordResetSuccessMessage />}
        </div>
      </Dialog>
    </React.Fragment>
  );
}
