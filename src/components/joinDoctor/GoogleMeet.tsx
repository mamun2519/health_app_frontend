"use client";
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
import React, { useState } from "react";
import {
  useDeleteDonorRequestMutation,
  useGetMyUserDonorDataQuery,
} from "@/redux/api/donorApi";
import { Pagination, TextField, Typography } from "@mui/material";
import Select from "react-select";
import { Days, DoctorServiceSort, GoogleSort, Limit } from "@/constants/donor";
import Link from "next/link";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import DeleteModal from "@/components/dialog/Delete";
import successMessage from "@/components/shared/SuccessMassage";
import {
  useDeleteAppointmentMutation,
  useUserAppointmentQuery,
} from "@/redux/api/appointmentApi";
import {
  useDeleteGoogleMeetMutation,
  useMyGoogleMeetQuery,
} from "@/redux/api/googleMeetApi";
import { convertDate } from "@/helper/date";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionRow from "@/components/ui/AccordionRow";
import LoadingSpinner from "@/utils/Loading";
import RefreshIcon from "@mui/icons-material/Refresh";
const GoogleMeet = () => {
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
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/googleMeet",
      level: "Google Meet",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];
  const { data, isLoading } = useMyGoogleMeetQuery({ ...query });

  const [deleteGoogleMeet] = useDeleteGoogleMeetMutation();
  const deleteHandler = async () => {
    try {
      await deleteGoogleMeet(deletedId);
      // console.log(deletedId);
      setOpen(false);
      successMessage({
        header: "Thank You",
        message: "GoogleMeet Delete Successfully",
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">My Google Meet </h3>

      <div className="lg:mt-5 mt-5 ">
        <div className="lg:flex  justify-end items-center">
          {/* <div>
            <input
              placeholder="Search"
              className=" lg:w-80 w-full h-12 border   p-5  rounded-full bg-[#30029010]  outline-none"
              type="text"
            />
          </div> */}

          <div className=" flex gap-3 mt-5 lg:mt-0">
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
              options={GoogleSort}
            />
            <Select
              className="w-28"
              placeholder="limit"
              defaultValue={pageLimit}
              onChange={(event: any) => setLimit(event?.value)}
              options={Limit}
            />
            <div className="hidden lg:block xl:block  md:block">
              <Link
                href="/dashboard/Doctor/googleMeet/create"
                className="  lg:w-32 w-24 h-10 rounded-2xl border flex justify-center items-center bg-[#d1001c] text-white font-medium "
              >
                Create Meet
              </Link>
            </div>
          </div>

          <div className="block lg:hidden xl:hidden  md:hidden mt-4 ">
            <Link
              href="/dashboard/Doctor/googleMeet/create"
              className="  lg:w-32 w-36 h-10 rounded-2xl border flex justify-center items-center bg-[#d1001c] text-white font-medium "
            >
              Create Meet
            </Link>
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
                    <TableCell align="center">Service Name</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Created Date</TableCell>
                    <TableCell align="center">View Patient</TableCell>

                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((appointment: any) => (
                    <TableRow
                      key={appointment?.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">
                        {appointment?.service.title}
                      </TableCell>
                      <TableCell align="center">
                        <span
                          className={`${
                            appointment?.status == "Cancel" && " text-[#2979ff]"
                          }
                      ${appointment?.status == "Expired" && "text-[#d1001c] "}
                      ${appointment?.status == "Complete" && " text-[#8a317a]"}
                      ${
                        appointment?.status == "Active" && " text-[#00a152]"
                      }  py-1 rounded-xl   font-bold`}
                        >
                          {appointment?.status}
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        {convertDate(appointment?.createdAt)}
                      </TableCell>
                      <TableCell align="center">
                        <Link
                          href={`/dashboard/Doctor/googleMeet/viewPatient/${appointment.id}`}
                          className="px-8 py-1 bg-[#d1001c] text-white rounded-full"
                        >
                          View Patient
                        </Link>
                      </TableCell>

                      <TableCell align="center">
                        <div className=" flex gap-4 justify-center items-center">
                          <Link
                            href={`/dashboard/Doctor/googleMeet/edit/${appointment?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <BorderColorIcon />
                          </Link>
                          <button
                            onClick={() => handleClickOpen(appointment?.id)}
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
          {data?.map((appointment: any) => {
            return (
              <Accordion key={appointment?.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className=" flex gap-10">
                    <div className="  w-28">
                      <Typography>Request</Typography>
                    </div>

                    <div className="  flex gap-2  justify-between">
                      <div className="w-2"></div>
                      <div className=" flex gap-4 justify-center items-center">
                        <Link
                          href={`/dashboard/Doctor/googleMeet/edit/${appointment?.id}`}
                          className="text-blue-500 text-xl"
                        >
                          <BorderColorIcon />
                        </Link>
                        <button
                          onClick={() => handleClickOpen(appointment?.id)}
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
                      rowName="Service Name"
                      data={appointment?.service.title}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Status"
                      data={
                        <span
                          className={`${
                            appointment?.status == "Cancel" && " text-[#2979ff]"
                          }
                    ${appointment?.status == "Expired" && "text-[#d1001c] "}
                    ${appointment?.status == "Complete" && " text-[#8a317a]"}
                    ${
                      appointment?.status == "Active" && " text-[#00a152]"
                    }  py-1 rounded-xl   font-bold`}
                        >
                          {appointment?.status}
                        </span>
                      }
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Created Date"
                      data={convertDate(appointment?.createdAt)}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="View Patient"
                      data={
                        <Link
                          href={`/dashboard/Doctor/googleMeet/viewPatient/${appointment.id}`}
                          className="px-2 py-1 bg-[#d1001c] text-white rounded-full"
                        >
                          View Patient
                        </Link>
                      }
                      style="w-36"
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          })}
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

export default GoogleMeet;
