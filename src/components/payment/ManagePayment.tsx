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

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import Select from "react-select";
import { Days, Limit, PaymentSort } from "@/constants/donor";
import Link from "next/link";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import DeleteModal from "@/components/dialog/Delete";
import successMessage from "@/components/shared/SuccessMassage";
import errorMessage from "../shared/ErrrorMessage";
import LoadingSpinner from "@/utils/Loading";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionRow from "../ui/AccordionRow";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useDebounced } from "@/redux/hooks";
interface PaymentProps {
  bread: {
    link: string;
    level: string;
    icons: React.ReactNode | React.ReactElement;
    color: string;
  }[];
  role: string;
}
const ManagePayment = ({ bread, role }: PaymentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(10);
  const [open, setOpen] = useState(false);
  const [deletedId, setDeleteId] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
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
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });
  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };

  const [deletePayment] = useDeletePaymentMutation();
  const deleteHandler = async () => {
    try {
      const res = await deletePayment(deletedId).unwrap();
      if (res) {
        setOpen(false);
        successMessage({
          header: "Thank You",
          message: "Payment History Delete Successfully",
        });
      } else {
        errorMessage({ message: "Something is wrong" });
      }
    } catch (error: any) {
      errorMessage(error?.data);
      console.log(error);
    }
  };

  const { data, isLoading } = useAllPaymentQuery({ ...query });
  if (isLoading) {
    return <LoadingSpinner />;
  }

  const clearSearchAndSortHandler = () => {
    setSearchTerm("");
    setSortBy("");
  };

  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Manage Payment</h3>

      <div className="mt-5">
        <div className="lg:flex  justify-between items-center">
          <div>
            <input
              onChange={(e: any) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Search"
              className=" lg:w-80 w-full h-12 border   p-5  rounded-full bg-[#30029010]  outline-none"
              type="text"
            />
          </div>

          <div className=" flex gap-3 lg:mt-0 mt-5">
            <div>
              {(sortBy || searchTerm) && (
                <div
                  onClick={() => clearSearchAndSortHandler()}
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
              options={PaymentSort}
            />
            <Select
              className="lg:w-20"
              placeholder="limit"
              defaultValue={pageLimit}
              onChange={(event: any) => setLimit(event?.value)}
              options={Limit}
            />
            {/* <Link
              href="/doctor/find"
              className="  w-32 h-10 rounded-2xl border flex justify-center items-center bg-[#d1001c] text-white font-medium "
            >
              Find Doctor
            </Link> */}
          </div>
        </div>
        <div className="mt-5  hidden  lg:block md:block xl:block">
          <TableContainer component={Paper}>
            <div className="w-56  lg:w-full ">
              <Table
                sx={{ minWidth: 650, overflow: "hidden" }}
                aria-label="simple table"
              >
                <TableHead sx={{ backgroundColor: "#30029010 " }}>
                  <TableRow>
                    <TableCell align="center">Appointment Name</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Payment Methods</TableCell>

                    <TableCell align="center">Payment Status</TableCell>
                    <TableCell align="center">Invoice</TableCell>
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
                        {payment?.service?.title}
                      </TableCell>
                      <TableCell align="center">{payment?.price} BDT</TableCell>
                      <TableCell align="center">
                        {" "}
                        {payment?.paymentType}
                      </TableCell>

                      <TableCell align="center">
                        <span
                          className="      text-[#00a152]  
                      w-24 py-1 rounded-xl    font-bold"
                        >
                          {payment?.status}
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <div>
                          <Link
                            href={`/dashboard/${role}/payment/invoice/${payment?.id}`}
                            className="text-white bg-[#d1001c] px-2 py-1 rounded-full"
                          >
                            {" "}
                            View Invoice
                          </Link>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <div className=" flex gap-4 justify-center items-center">
                          <Link
                            href={`/dashboard/${role}/payment/${payment?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <RemoveRedEyeIcon />
                          </Link>

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
        <div className="mt-5 block lg:hidden sm:hidden  xl:hidden">
          {data?.map((payment: any) => (
            <Accordion key={payment?.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className=" flex gap-10">
                  <div className="  w-28">
                    <Typography>Payment Info</Typography>
                  </div>

                  <div className="  flex gap-2  justify-between">
                    <div className="w-2"></div>
                    <div className=" flex gap-4 justify-center items-center">
                      <Link
                        href={`/dashboard/${role}/payment/${payment?.id}`}
                        className="text-blue-500 text-xl"
                      >
                        <RemoveRedEyeIcon />
                      </Link>

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
                    rowName="Appointment Name"
                    data={payment?.service?.title}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Price"
                    data={`${payment?.price} BDT`}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Payment Methods"
                    data={payment?.paymentType}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Payment Status	"
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
                    rowName="Invoice"
                    data={
                      <div className="w-full">
                        <Link
                          href={`/dashboard/${role}/payment/invoice/${payment?.id}`}
                          className="text-white bg-[#d1001c] px-2 py-1 rounded-full "
                        >
                          {" "}
                          View Invoice
                        </Link>
                      </div>
                    }
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

export default ManagePayment;
