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
import { yupResolver } from "@hookform/resolvers/yup";
import { DonorRequestSchema } from "../schema/donor";
import errorMessage from "../shared/ErrrorMessage";
interface OpenModel {
  open: boolean;
  handleClose: (op: any) => any;
  donorId: string;
}

export interface IDonorRequest {
  phone: string;
  location: string;
  pratienCondition: string;
  quantity: string | number;
  donnetDate: string;
}

export default function AddDonorRequestForm({
  open,
  handleClose,
  donorId,
}: OpenModel) {
  const [donorRequest] = useDonorRequestMutation();
  const submitHundler: SubmitHandler<IDonorRequest> = async (data) => {
    data.quantity = Number(data.quantity);
    try {
      const res = await donorRequest({ ...data, donorId }).unwrap();
      if (res) {
        toast({
          message: "Donor Request Send Successfully",
          header: "Thank You",
        });
        handleClose(open);
      } else {
        errorMessage({ message: "Something Is wrong" });
        handleClose(open);
      }
    } catch (error: any) {
      handleClose(open);
      errorMessage({ message: error?.data });
    }
  };
  return (
    <div className="bg-[#30029010]">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Fil up this form"}
        </DialogTitle>
        <div className="px-5 lg:w-[400px] ">
          <DialogContentText id="alert-dialog-description">
            <Form
              submitHandler={submitHundler}
              resolver={yupResolver(DonorRequestSchema)}
            >
              <div className=" mt-2 ">
                <FormInput
                  name="phone"
                  label="Phone"
                  size="lg:w-96 w-full pr-6 lg:pr-0"
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div className=" mt-4 ">
                <FormInput
                  name="location"
                  size="lg:w-96 w-72 pr-6 lg:pr-0"
                  label="Location"
                  placeholder="Enter Your  Location"
                />
              </div>

              <div className=" mt-4 ">
                <FormInput
                  name="pratienCondition"
                  size="lg:w-96 w-72 pr-6 lg:pr-0"
                  label="Patient condition"
                  placeholder="Enter Patient condition"
                />
              </div>
              <div className=" mt-4 ">
                <FormInput
                  name="quantity"
                  label="Quantity"
                  size="lg:w-96 w-72 pr-6 lg:pr-0"
                  placeholder="Blood quantity"
                />
              </div>
              <div className=" mt-2  ">
                <FormInput
                  name="donnetDate"
                  size="lg:w-96 w-72 pr-6 lg:pr-0"
                  label="Donned Date"
                  placeholder="Enter Date"
                />
              </div>
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
                    Request Now
                  </button>
                </div>
              </DialogActions>
            </Form>
          </DialogContentText>
        </div>
      </Dialog>
    </div>
  );
}
