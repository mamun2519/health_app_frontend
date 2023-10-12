"use client";
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
import { Rating, Typography } from "@mui/material";
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
  //   deleteHandler: () => void;
}

export default function DonorReviewModel({
  open,
  //   deleteHandler,
  handleClose,
}: OpenModel) {
  const [value, setValue] = React.useState<number | null>(2);
  const [reviewText, setReviewText] = React.useState("");

  const reviewHandler = () => {};

  return (
    <div className=" w-[400px]">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div>
            {/* <Image className=" w-80 h-60" src={DeletePic} alt="delete" /> */}
            {/* <p className=" text-2xl font-bold text-center text-red-600 ">
              Review
            </p>
            <p className="  text-center text-gray-500 mt-2">
              Are You Sure want To Review Donor?
            </p> */}
          </div>
          <div className="mt-5 text-center w-96">
            <div>
              <Typography component="legend">Rating</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div>
              <textarea
                onChange={(event) => {
                  setReviewText(event.target.value);
                }}
                className=" border h-24 w-full  outline-none p-5"
              ></textarea>
            </div>
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
              //   onClick={deleteHandler}
            >
              Review
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
