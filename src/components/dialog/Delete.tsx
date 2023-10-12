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
  deleteHandler: () => void;
}

export default function DeleteModal({
  open,
  deleteHandler,
  handleClose,
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
            <Image className=" w-80 h-60" src={DeletePic} alt="delete" />
            <p className=" text-2xl font-bold text-center text-red-600 ">
              Delete?
            </p>
            <p className="  text-center text-gray-500 mt-2">
              Are You Sure want To delete?
            </p>
          </div>

          <div className=" flex justify-center  gap-5 mt-3">
            <button
              className="px-4 py-2 rounded border-[#d1001c]  border text-red-500"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="px-8 py-2 rounded bg-[#d1001c] font-bold text-white"
              onClick={deleteHandler}
            >
              Ok
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
