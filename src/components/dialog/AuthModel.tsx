import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import LoginTab from "../ui/LoginTab";
import RegTab from "../ui/RegTab";
import ClearIcon from "@mui/icons-material/Clear";
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

export default function AuthModel({ open, handleClose }: OpenModel) {
  const [tab, setTab] = React.useState(true);
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="w-full flex  justify-end pt-3 px-5">
          <button
            onClick={() => handleClose(false)}
            className=" border p-1  rounded-full  hover:bg-[#d1001c]  hover:text-white"
          >
            <ClearIcon />
          </button>
        </div>
        <div className="lg:w-[430px] w-full h-full px-4 pb-8">
          <div>
            <div className=" flex gap-3  items-center justify-center  pt-6  ">
              <h3 className=" lg:text-3xl text-2xl uppercase">
                {tab ? "Login" : "Create"} Account
              </h3>
            </div>
            <div className="pt-1">
              {" "}
              <p className="text-center ">
                Welcome To He
                <span className="text-[#d1001c] font-bold">alth</span> Care App
              </p>
            </div>
          </div>
          <div className="lg:w-full  flex  border h-12 rounded mt-3">
            <div className="lg:w-full w-full h-full p-1 ">
              <button
                onClick={() => setTab(!tab)}
                className={`${
                  tab ? "bg-[#d1001c] text-white" : "text-black"
                } w-full h-full rounded`}
              >
                {" "}
                login
              </button>
            </div>{" "}
            <div className="lg:w-full  w-full h-full p-1 ">
              <button
                onClick={() => setTab(!tab)}
                className={`${
                  !tab ? "bg-[#d1001c] text-white" : "text-black"
                } w-full h-full rounded`}
              >
                {" "}
                Singup
              </button>
            </div>
          </div>
          {tab ? (
            <LoginTab handleClose={handleClose} />
          ) : (
            <RegTab handleClose={handleClose} />
          )}
        </div>
      </Dialog>
    </React.Fragment>
  );
}
