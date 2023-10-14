"use client";
import {
  useAllPaymentQuery,
  useDeletePaymentMutation,
  useUserPaymentQuery,
} from "@/redux/api/paymentApi";
import React, { useState } from "react";
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

import { Pagination, TextField, Typography } from "@mui/material";
import Select from "react-select";
import { Days, Limit } from "@/constants/donor";
import Link from "next/link";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import DeleteModal from "@/components/dialog/Delete";
import successMessage from "@/components/shared/SuccessMassage";
import { useGetAllDoctorQuery } from "@/redux/api/doctorServiceApi";
import { convertDate } from "@/helper/date";
import { useDeleteUserMutation } from "@/redux/api/authApi";
interface PaymentProps {
  bread: {
    link: string;
    level: string;
    icons: React.ReactNode | React.ReactElement;
    color: string;
  }[];
  role: string;
}
const ManageBloodDonor = ({ bread, role }: PaymentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(10);
  const [open, setOpen] = useState(false);
  const [deletedId, setDeleteId] = useState("");

  const handleClickOpen = (id: string) => {
    setOpen(true);
    setDeleteId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const query: Record<string, any> = {};
  query["page"] = currentPage;
  query["limit"] = pageLimit;

  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };

  const [deleteUser] = useDeleteUserMutation();
  const deleteHandler = async () => {
    try {
      const res = await deleteUser(deletedId);
      console.log(res);
      // @ts-ignore
      if (res?.data) {
        setOpen(false);
        successMessage({
          header: "Thank You",
          message: "User  Delete Successfully",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useGetAllDoctorQuery({ ...query });
  console.log(data);
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Manage Blood Donor</h3>

      <div className="mt-5">
        <div className="flex  justify-between items-center">
          <div>
            <input
              placeholder="Search"
              className=" w-80 h-12 border   p-5  rounded-full bg-[#30029010]  outline-none"
              type="text"
            />
          </div>

          <div className=" flex gap-3">
            <Select
              className="w-36 "
              placeholder="filter"
              // defaultValue={limit}
              // onChange={(event: any) => setLimit(event?.value)}
              options={Days}
            />
            <Select
              className="w-20"
              placeholder="limit"
              defaultValue={pageLimit}
              onChange={(event: any) => setLimit(event?.value)}
              options={Limit}
            />
            <Link
              href="/dashboard/Admin/donor/create"
              className="  w-32 h-10 rounded-2xl border flex justify-center items-center bg-[#d1001c] text-white font-medium "
            >
              Create Doctor
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <TableContainer component={Paper}>
            <div className="w-56  lg:w-full ">
              <Table
                sx={{ minWidth: 650, overflow: "hidden" }}
                aria-label="simple table"
              >
                <TableHead sx={{ backgroundColor: "#30029010 " }}>
                  <TableRow>
                    <TableCell align="center">Doctor Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Status</TableCell>

                    <TableCell align="center">Create Date</TableCell>
                    {/* <TableCell align="center">Invoice</TableCell> */}
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((payment: any) => (
                    <TableRow
                      key={payment?.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">
                        {payment?.doctor?.user?.profile?.first_name}{" "}
                        {payment?.doctor?.user?.profile?.last_name}
                      </TableCell>
                      <TableCell align="center">{payment?.email}</TableCell>
                      <TableCell align="center"> {payment?.status}</TableCell>

                      <TableCell align="center">
                        {convertDate(payment?.createdAt)}
                      </TableCell>
                      {/* <TableCell align="center">
                        <div>
                          <Link
                            href={`/dashboard/${role}/payment/invoice/${payment?.id}`}
                            className="text-white bg-[#d1001c] px-2 py-1 rounded-full"
                          >
                            {" "}
                            View Invoice
                          </Link>
                        </div>
                      </TableCell> */}
                      <TableCell align="center">
                        <div className=" flex gap-4 justify-center items-center">
                          <Link
                            href={`/dashboard/${role}/donor/${payment?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <RemoveRedEyeIcon />
                          </Link>
                          {/* <Link
                            href={`/dashboard/user/payment/edit/${payment?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <BorderColorIcon />
                          </Link> */}
                          <button
                            onClick={() => handleClickOpen(payment?.id)}
                            className="text-[#d1001c] text-xl  cursor-pointer"
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className=" flex justify-center items-center h-12  bg-[#30029010] mt-2 ">
                <Pagination
                  count={50}
                  onChange={handlePageChange}
                  page={currentPage}
                  variant="outlined"
                  shape="rounded"
                />
                {/* <p>Selected Page: {currentPage}</p> */}
              </div>
            </div>
          </TableContainer>
        </div>
        {open && (
          <DeleteModal
            open={open}
            deleteHandler={deleteHandler}
            handleClose={handleClose}
          />
        )}
      </div>
    </div>
  );
};

export default ManageBloodDonor;
