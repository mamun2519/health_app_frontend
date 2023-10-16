"use client";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { deleteToCart } from "@/redux/Slice/cart";
import successMessage from "@/components/shared/SuccessMassage";
import { useCreatePaymentMutation } from "../../redux/api/paymentApi";
const CartPage = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const disPatch = useDispatch();
  console.log(cart);
  const cartItemRemoveHandler = (id: string) => {
    disPatch(deleteToCart(id));
    successMessage({
      header: "Thank Your",
      message: "Item Remove Successfully",
    });
  };

  const [createPayment] = useCreatePaymentMutation();

  const bookingHandler = async () => {
    try {
      const appointment = cart?.map(
        (appointment: { data: any }) => appointment.data
      );
      // console.log(appointment);
      // const payment = appointment.reduce((accumulator, currentValue) => {}, []);
      const payment = appointment.map((payment: any) => {
        return {
          serviceId: payment.serviceId,
          price: payment.price,
          doctorId: payment.doctorId,
          transactionId: "No",
          discountedPrice: 0,
          paymentType: "NO",
        };
      });

      const res = await createPayment({ appointment, payment });
      console.log(res);
      if (res?.data) {
        successMessage({
          header: "Wow Great",
          message: "Your Booking Successfully",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(cart);
  return (
    <div className="my-20   max-w-7xl mx-auto px-4  flex gap-10">
      <div className=" w-2/3 ">
        <div className=" border  p-5 rounded-3xl shadow-sm  h-[600px] mt-2 overflow-auto">
          <p className="text-xl">My Cart</p>

          <div className="mt-5">
            <TableContainer component={Paper}>
              <div className="w-56  lg:w-full ">
                <Table
                  sx={{ minWidth: 650, overflow: "hidden" }}
                  aria-label="simple table"
                >
                  <TableHead sx={{ backgroundColor: "#30029010 " }}>
                    <TableRow>
                      <TableCell align="center">Service Name</TableCell>
                      <TableCell align="center">Price</TableCell>
                      <TableCell align="center">Appointment Date</TableCell>
                      <TableCell align="center">Schedule</TableCell>

                      {/* <TableCell align="center">Status</TableCell> */}
                      {/* <TableCell align="center">Joint Doctor</TableCell> */}
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart?.map((appointment: any) => (
                      <TableRow
                        key={appointment?.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">
                          {appointment?.service?.title}
                        </TableCell>
                        <TableCell align="center">
                          {appointment?.service?.price} BDT
                        </TableCell>
                        <TableCell align="center">
                          {appointment?.data?.bookingDate}
                        </TableCell>
                        <TableCell align="center">
                          {appointment?.data?.slatTime}
                        </TableCell>

                        <TableCell align="center">
                          <div className=" flex gap-4 justify-center items-center">
                            <button
                              onClick={() =>
                                cartItemRemoveHandler(appointment.id)
                              }
                              className="text-red-500 text-xl  cursor-pointer"
                            >
                              <DeleteIcon />
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/* <div className=" flex justify-center items-center h-12  bg-[#30029010] mt-2 ">
                  <Pagination
                    count={50}
                    onChange={handlePageChange}
                    page={currentPage}
                    variant="outlined"
                    shape="rounded"
                  />
            
                </div> */}
              </div>
            </TableContainer>
          </div>
        </div>
      </div>
      <div className="  w-1/3 border  p-5 rounded-3xl shadow-sm  h-[600px] mt-2 bg-[#30029010] ">
        <div className="overflow-auto h-[450px]">
          <p className="text-xl px-4"> Order Summary</p>
          <div className="mt-5 px-4">
            {cart?.map((item: any) => {
              return (
                <div
                  key={item?.id}
                  className="mt-1  flex gap-4 justify-between"
                >
                  <div className="">
                    <span>{item?.service?.title}</span>
                  </div>
                  <div>
                    <span>{item?.service?.price} BDT</span>
                  </div>
                </div>
              );
            })}
            <div className=" border  w-full mt-5"></div>
            <div className="mt-4  flex gap-4 justify-between">
              <div className="">
                <span>Amount</span>
              </div>
              <div>
                <span>
                  {cart.reduce(
                    (acc: number, item: any) =>
                      acc + Number(item.service.price),
                    0
                  )}{" "}
                  BDT
                </span>
              </div>
            </div>
            <div className="mt-1  flex gap-4 justify-between">
              <div className="">
                <span>Discount</span>
              </div>
              <div>
                <span>00 BDT</span>
              </div>
            </div>
            <div className="mt-1  flex gap-4 justify-between">
              <div className="">
                <span>Tax</span>
              </div>
              <div>
                <span>Free</span>
              </div>
            </div>
            <div className="mt-1  flex gap-4 justify-between">
              <div className="">
                <span>Service Charge</span>
              </div>
              <div>
                <span>Free</span>
              </div>
            </div>

            <div className="h- border w-full mt-5"></div>
          </div>
        </div>
        <div className="mt-5 w-full px-4">
          <div className="  flex gap-4 justify-between">
            <div className="">
              <span className="text-2xl">Total </span>
            </div>
            <div>
              <span className="text-2xl">
                {" "}
                {cart.reduce(
                  (acc: number, item: any) => acc + Number(item.service.price),
                  0
                )}{" "}
                BDT
              </span>
            </div>
          </div>
          <div className="mt-5">
            <button
              onClick={() => bookingHandler()}
              className="h-10 bg-red-500 text-white w-full rounded-2xl "
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
