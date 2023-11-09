"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";

import {
  Accordion,
  AccordionSummary,
  Pagination,
  Typography,
} from "@mui/material";
import Select from "react-select";
import { Limit, WithdrawSort } from "@/constants/donor";
import Link from "next/link";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import HomeIcon from "@mui/icons-material/Home";

import DeleteModal from "@/components/dialog/Delete";
import successMessage from "@/components/shared/SuccessMassage";

import errorMessage from "@/components/shared/ErrrorMessage";
import LoadingSpinner from "@/utils/Loading";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionRow from "@/components/ui/AccordionRow";

import {
  useDeleteWithdrawMutation,
  useDoctorWithdrawQuery,
} from "@/redux/api/withdrawApi";
import { useMyProfileQuery } from "@/redux/api/profileApi";
import RefreshIcon from "@mui/icons-material/Refresh";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
const DoctorWithdrawPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(10);
  const [open, setOpen] = useState(false);
  const [deletedId, setDeleteId] = useState("");
  const [sortBy, setSortBy] = useState("");
  const handleClickOpen = (id: string) => {
    setOpen(true);
    setDeleteId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { data: profile } = useMyProfileQuery({
    limit: 100,
    page: 1,
  });
  const query: Record<string, any> = {};
  query["page"] = currentPage;
  query["limit"] = pageLimit;
  query["sortBy"] = sortBy;
  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/withdraw",
      level: "Withdraw",
      icons: <PublishedWithChangesIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];
  const { data, isLoading } = useDoctorWithdrawQuery({ ...query });

  const [deleteWithdraw] = useDeleteWithdrawMutation();
  const deleteHandler = async () => {
    try {
      const res = await deleteWithdraw(deletedId).unwrap();
      // console.log(deletedId);
      console.log(res);
      if (res) {
        setOpen(false);
        successMessage({
          header: "Thank You",
          message: "Withdraw Request Delete Successfully",
        });
      } else {
        setOpen(false);
        errorMessage({ message: "Something is wrong" });
      }
    } catch (error) {
      setOpen(false);
      console.log(error);
      errorMessage({ message: data?.error });
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <div className=" flex justify-end">
        <div>
          <Link
            href="/dashboard/Doctor/withdraw/request"
            className="  lg:w-32 w-20 h-10 rounded-2xl border flex justify-center items-center bg-[#d1001c] text-white font-medium  "
          >
            Withdraw Now
          </Link>
        </div>
      </div>

      <div className=" grid lg:grid-cols-4 gap-5 grid-cols-2 mt-5">
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Available Balance</h3>
            <p className="text-2xl text-gray-800 mt-1 ">
              {" "}
              {profile?.balance} BDT
            </p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Last Withdraw</h3>
            <p className="text-2xl text-gray-800   mt-1">
              {data?.[0]?.amount} BDT
            </p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm bg-[#30029010] flex justify-center  items-center px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Complete Withdraw</h3>
            <p className="text-2xl text-gray-800   mt-1">
              {
                data?.filter(
                  (pending: { status: string }) => pending.status == "Complete"
                ).length
              }
            </p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm bg-[#30029010] flex justify-center  items-center px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Pending Withdraw</h3>
            <p className="text-2xl text-gray-800  mt-1">
              {
                data?.filter(
                  (pending: { status: string }) => pending.status == "Pending"
                ).length
              }
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        {/* <div className="lg:flex  justify-between items-center">
          <div>
            <input
              placeholder="Search"
              className=" lg:w-80 w-full h-12 border   p-5  rounded-full bg-[#30029010]  outline-none"
              type="text"
            />
          </div>

          <div className=" flex gap-3 mt-5 lg:mt-0">
            <Select
              className="w-28 "
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
              href="/dashboard/Doctor/serviceOffer/create"
              className="  lg:w-32 w-20 h-10 rounded-2xl border flex justify-center items-center bg-[#d1001c] text-white font-medium  "
            >
              Create Offer
            </Link>
          </div>
        </div> */}
        <div className=" flex justify-between">
          <h3 className=" mt-5 text-2xl">Recent Withdraw</h3>
          <div className="lg:mt-0 mt-5 flex gap-3 px-4 lg:px-0">
            <div>
              {sortBy && (
                <div
                  onClick={() => setSortBy("")}
                  className=" mt-1  cursor-pointer text-[#d1001c]"
                >
                  {" "}
                  <RefreshIcon />
                </div>
              )}
            </div>
            <Select
              className="w-36 "
              placeholder="Sort By"
              defaultValue={sortBy}
              onChange={(event: any) => setSortBy(event?.value)}
              options={WithdrawSort}
            />
            <Select
              className="w-28"
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
        <div className="mt-5 h-[500px]  hidden  lg:block md:block xl:block">
          <TableContainer component={Paper}>
            <div className="w-56  lg:w-full ">
              <Table
                sx={{ minWidth: 650, overflow: "hidden" }}
                aria-label="simple table"
              >
                <TableHead sx={{ backgroundColor: "#30029010 " }}>
                  <TableRow>
                    <TableCell align="center">Account No</TableCell>
                    <TableCell align="center">Balance</TableCell>
                    <TableCell align="center">Company Earn</TableCell>
                    <TableCell align="center">Receive Type</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Accepted By</TableCell>

                    {/* <TableCell align="center">Joint Doctor</TableCell> */}
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((service: any) => (
                    <TableRow
                      key={service?.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{service?.number}</TableCell>
                      <TableCell align="center">
                        {service?.amount} BDT
                      </TableCell>
                      <TableCell align="center">
                        {service?.companyEarn} BDT
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        {service?.paymentReciveType}
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        <span
                          className={`${
                            service?.status == "Cancel" && " text-[#2979ff]"
                          }
                      ${service?.status == "Pending" && "text-[#d1001c] "}
                      ${
                        service?.status == "Complete" && "text-[#00a152] "
                      } py-1 rounded-xl   font-bold`}
                        >
                          {service?.status}
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        {service?.user?.profile?.first_name ??
                          "Not Accepted"}{" "}
                        {service?.user?.profile?.first_name}
                      </TableCell>
                      <TableCell align="center">
                        <div className=" flex gap-4 justify-center items-center">
                          {/* <Link
                            href={`/dashboard/Doctor/withdraw/edit/${service?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <BorderColorIcon />
                          </Link> */}
                          <button
                            onClick={() => handleClickOpen(service?.id)}
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

        <div className="mt-5  block lg:hidden sm:hidden  xl:hidden">
          {data?.map((service: any) => (
            <Accordion key={service?.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className=" flex gap-10">
                  <div className="  w-22">
                    <Typography>Service</Typography>
                  </div>

                  <div className="  flex gap-2  justify-between">
                    <div className="w-2"></div>
                    <div className=" flex gap-4 justify-center items-center">
                      {/* <Link
                        href={`/dashboard/Doctor/withdraw/edit/${service?.id}`}
                        className="text-blue-500 text-xl"
                      >
                        <BorderColorIcon />
                      </Link> */}
                      <button
                        onClick={() => handleClickOpen(service?.id)}
                        className="text-red-500 text-xl  cursor-pointer"
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
                    rowName="Account No"
                    data={service?.number}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Balance"
                    data={`${service?.amount} BDT`}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Company Earn"
                    data={`${service?.companyEarn} BDT`}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Receive Type"
                    data={service?.paymentReciveType}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Status"
                    data={
                      <span
                        className={`${
                          service?.status == "Cancel" && " text-[#2979ff]"
                        }
                    ${service?.status == "Pending" && "text-[#d1001c] "}
                    ${
                      service?.status == "Complete" && "text-[#00a152] "
                    } py-1 rounded-xl   font-bold`}
                      >
                        {service?.status}
                      </span>
                    }
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Accepted By"
                    data={`${
                      service?.user?.profile?.first_name ?? "Not Accepted"
                    }
                    ${service?.user?.profile?.first_name}`}
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

export default DoctorWithdrawPage;
