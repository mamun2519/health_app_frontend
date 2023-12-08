import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import ForgetPasswordEmail from "../ui/ForgetPasswordEmail";
import ForgetPasswordCode from "../ui/ForgetCode";

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
          <ForgetPasswordEmail />
          {/* <ForgetPasswordCode /> */}
        </div>
      </Dialog>
    </React.Fragment>
  );
}
