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
import { useCreateDonorReviewMutation } from "@/redux/api/donerReviewApi";
import successMessage from "../shared/SuccessMassage";

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
  donorId: string;
}

export default function DonorReviewModel({
  open,
  donorId,
  handleClose,
}: OpenModel) {
  const [value, setValue] = React.useState<number | null>(2);
  const [reviewText, setReviewText] = React.useState("");
  const [createDonorReview] = useCreateDonorReviewMutation();
  const reviewHandler = async () => {
    const data = {
      comment: reviewText,
      rating: value,
      donorId,
    };
    try {
      const res = await createDonorReview(data).unwrap();
      if (res) {
        handleClose(!open);
        successMessage({
          header: "Thank You",
          message: "Review Add Successfully",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <div></div>
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
              onClick={reviewHandler}
            >
              Review
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
