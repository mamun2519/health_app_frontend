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

  children: React.ReactNode | React.ReactElement;
  text: string;
}

export default function ModelSelectInput({
  open,
  handleClose,
  children,
  text,
}: OpenModel) {
  return (
    <div className=" w-full">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div>
            <p className="  tex text-gray-500 mt-2">{text}</p>
          </div>

          <div className="mt-3">{children}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
