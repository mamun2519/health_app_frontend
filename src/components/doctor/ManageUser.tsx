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
import { Days, Limit, UserSort } from "@/constants/donor";
import Link from "next/link";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import DeleteModal from "@/components/dialog/Delete";
import successMessage from "@/components/shared/SuccessMassage";
import { useGetAllDoctorQuery } from "@/redux/api/doctorServiceApi";
import { convertDate } from "@/helper/date";
import { useDeleteUserMutation } from "@/redux/api/authApi";
import { useAllUserQuery } from "@/redux/api/profileApi";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionRow from "@/components/ui/AccordionRow";
import LoadingSpinner from "@/utils/Loading";
import RefreshIcon from "@mui/icons-material/Refresh";
interface PaymentProps {
  bread: {
    link: string;
    level: string;
    icons: React.ReactNode | React.ReactElement;
    color: string;
  }[];
  role: string;
}
const ManageUser = ({ bread, role }: PaymentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(10);
  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState("");
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
  query["sortBy"] = sortBy;
  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };

  const [deleteUser] = useDeleteUserMutation();
  const deleteHandler = async () => {
    try {
      const res = await deleteUser(deletedId);

      // @ts-ignore
      if (res?.data) {
        setOpen(false);
        successMessage({
          header: "Thank You",
          message: "User  Delete Successfully",
        });
      }
    } catch (error) {}
  };

  const { data, isLoading } = useAllUserQuery({ ...query });
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm  w-80 lg:w-full ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Manage User</h3>

      <div className="mt-5">
        <div className="lg:flex  justify-between items-center">
          <div>
            <input
              placeholder="Search"
              className=" lg:w-80 w-full h-12 border   p-5  rounded-full bg-[#30029010]  outline-none"
              type="text"
            />
          </div>

          <div className=" flex gap-3 mt-5 lg:mt-0">
            <div>
              {sortBy && (
                <div
                  onClick={() => setSortBy("")}
                  className=" mt-  cursor-pointer text-[#d1001c] w-12 flex justify-center items-center h-full bg-white border  rounded-lg"
                >
                  {" "}
                  <RefreshIcon />
                </div>
              )}
            </div>
            <Select
              className="w-36 "
              placeholder="filter"
              defaultValue={sortBy}
              onChange={(event: any) => setSortBy(event?.value)}
              options={UserSort}
            />
            <Select
              className="lg:w-20"
              placeholder="limit"
              defaultValue={pageLimit}
              onChange={(event: any) => setLimit(event?.value)}
              options={Limit}
            />
          </div>
        </div>
        <div className="mt-5 hidden  lg:block md:block xl:block">
          <TableContainer component={Paper}>
            <div className="w-56  lg:w-full ">
              <Table
                sx={{ minWidth: 650, overflow: "hidden" }}
                aria-label="simple table"
              >
                <TableHead sx={{ backgroundColor: "#30029010 " }}>
                  <TableRow>
                    <TableCell align="center">User Name</TableCell>
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
                        {payment?.profile?.first_name}{" "}
                        {payment?.profile?.last_name}
                      </TableCell>
                      <TableCell align="center">{payment?.email}</TableCell>
                      <TableCell align="center">
                        {" "}
                        <span
                          className="      text-[#00a152]  
                            w-24 py-1 rounded-xl    font-bold"
                        >
                          {payment?.status}
                        </span>
                      </TableCell>

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
                          {/* <Link
                            href={`/dashboard/${role}/doctor/${payment?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <RemoveRedEyeIcon />
                          </Link> */}
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

        <div className="mt-5 block lg:hidden sm:hidden  xl:hidden ">
          {data?.map((payment: any) => (
            <Accordion key={payment?.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className=" flex gap-10 ">
                  <div className="  w-28">
                    <Typography>Request</Typography>
                  </div>

                  <div className="  flex gap-2  justify-between">
                    <div className="w-2"></div>
                    <div className=" flex gap-4 justify-center items-center">
                      {/* <Link
                            href={`/dashboard/${role}/doctor/${payment?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <RemoveRedEyeIcon />
                          </Link> */}
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
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className=" h-full py-2  border-t">
                  <AccordionRow
                    rowName="Donor Name"
                    data={`   ${payment?.profile?.first_name}
                    ${payment?.profile?.last_name}`}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Email"
                    data={payment?.email}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Status"
                    data={
                      <span
                        className="      text-[#00a152]  
                        w-24 py-1 rounded-xl    font-bold"
                      >
                        {payment?.status}
                      </span>
                    }
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Create Date"
                    data={convertDate(payment?.createdAt)}
                    style="w-36"
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
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

export default ManageUser;
