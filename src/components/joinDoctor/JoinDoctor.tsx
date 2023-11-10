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
import { AppointmentSort, Days, Limit } from "@/constants/donor";
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
import MeetRequestModel from "../dialog/MeetRequestModel";
import OfflineModel from "../dialog/OfflineModel";
import errorMessage from "../shared/ErrrorMessage";
import LoadingSpinner from "@/utils/Loading";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionRow from "@/components/ui/AccordionRow";
import RefreshIcon from "@mui/icons-material/Refresh";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
const JoinDoctor = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(10);
  const [open, setOpen] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");
  const [doctorOnline, setDoctorOnline] = useState(false);
  const [googleMeet, setGoogleMeet] = useState({});
  const [deletedId, setDeleteId] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [doctorName, setDoctorName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [sortBy, setSortBy] = useState("");
  const handleClickOpen = (id: string, appointment: any) => {
    setOpen(true);
    setAppointmentId(id);
    setDoctorName(`${appointment?.doctor?.user?.profile?.first_name}
    ${appointment?.doctor?.user?.profile?.last_name}`);
    setAvatar(appointment?.doctor?.user?.profile?.avatar);
    const activeGoogleMeet = appointment?.service.GoogleMeet.find(
      (meet: any) => meet.status === "Active"
    );
    if (activeGoogleMeet) {
      setDoctorOnline(true);
      setGoogleMeet(activeGoogleMeet);
    } else {
      setDoctorOnline(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClickOpen = (id: string) => {
    setOpenDelete(true);
    setDeleteId(id);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
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
      link: "/dashboard/User/joinDoctor",
      level: "Doctor Join",
      icons: <PersonPinCircleIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];
  const { data, isLoading } = useUserAppointmentQuery({ ...query });
  console.log(data);
  const [deleteAppointment] = useDeleteAppointmentMutation();
  const deleteHandler = async () => {
    try {
      const res = await deleteAppointment(deletedId).unwrap();
      console.log(res);
      if (res) {
        setOpenDelete(false);
        successMessage({
          header: "Thank You",
          message: "Appointment Delete Successfully",
        });
      } else {
        setOpenDelete(false);
        errorMessage({ message: "Something Is wrong!" });
      }
    } catch (error: any) {
      setOpenDelete(false);
      errorMessage({ message: error?.data });
      console.log(error);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Doctor Join</h3>

      <div className="mt-5">
        <div className="lg:flex  justify-end items-center">
          {/* <div>
            <input
              placeholder="Search"
              className=" lg:w-80 h-12 border   p-5  rounded-full bg-[#30029010]  outline-none"
              type="text"
            />
          </div> */}

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
              options={AppointmentSort}
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
        <div className="mt-5 hidden  lg:block md:block xl:block">
          <TableContainer component={Paper}>
            <div className="w-56  lg:w-full ">
              <Table
                sx={{ minWidth: 650, overflow: "hidden" }}
                aria-label="simple table"
              >
                <TableHead sx={{ backgroundColor: "#30029010 " }}>
                  <TableRow>
                    <TableCell align="center">Doctor Name</TableCell>
                    <TableCell align="center">Appointment Name</TableCell>
                    <TableCell align="center">Meting Time</TableCell>
                    <TableCell align="center">Serial No</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Joint Doctor</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.data?.map((appointment: any) => {
                    const activeGoogleMeet =
                      appointment?.service.GoogleMeet.find(
                        (meet: any) => meet.status === "Active"
                      );
                    // console.log(appointment?.service.GoogleMeet);
                    return (
                      <TableRow
                        key={appointment?.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">
                          Dr {appointment?.doctor?.user?.profile?.first_name}
                          {appointment?.doctor?.user?.profile?.last_name}
                        </TableCell>
                        <TableCell align="center">
                          {appointment?.service?.title}
                        </TableCell>
                        <TableCell align="center">
                          {" "}
                          {appointment?.slatTime}
                        </TableCell>
                        <TableCell align="center">
                          {appointment?.serialNo}
                        </TableCell>

                        <TableCell align="center">
                          {/* {appointment?.status} */}
                          {activeGoogleMeet ? (
                            <span className=" text-[#00a152]   font-bold">
                              Online
                            </span>
                          ) : (
                            <span className=" text-[#d1001c]  font-bold">
                              Offline
                            </span>
                          )}
                        </TableCell>
                        <TableCell align="center">
                          <button
                            onClick={() =>
                              handleClickOpen(appointment.id, appointment)
                            }
                            className="px-6 py-1 rounded-full bg-[#d1001c] text-white"
                          >
                            Meet Now
                          </button>
                        </TableCell>
                        <TableCell align="center">
                          {" "}
                          <button
                            onClick={() =>
                              handleDeleteClickOpen(appointment?.id)
                            }
                            className="text-[#d1001c] text-xl  cursor-pointer"
                          >
                            <DeleteIcon />
                          </button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
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
          {data?.data?.map((appointment: any) => {
            const activeGoogleMeet = appointment?.service.GoogleMeet.find(
              (meet: any) => meet.status === "Active"
            );
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
                      <button
                        onClick={() => handleDeleteClickOpen(appointment?.id)}
                        className="text-[#d1001c] text-xl  cursor-pointer"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className=" h-full py-2  border-t">
                    <AccordionRow
                      rowName="Doctor Name"
                      data={` Dr ${appointment?.doctor?.user?.profile?.first_name}
                    ${appointment?.doctor?.user?.profile?.last_name}`}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Appointment Name"
                      data={appointment?.service?.title}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Meting Time"
                      data={appointment?.slatTime}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Serial No"
                      data={appointment?.serialNo}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Status"
                      data={
                        activeGoogleMeet ? (
                          <span className=" text-[#d1001c]  font-bold">
                            Online
                          </span>
                        ) : (
                          "Offline"
                        )
                      }
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Join Doctor"
                      data={
                        <button
                          onClick={() =>
                            handleClickOpen(appointment.id, appointment)
                          }
                          className="px-6 py-1 rounded-full bg-[#d1001c] text-white"
                        >
                          Meet Now
                        </button>
                      }
                      style="w-36"
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
        {openDelete && (
          <DeleteModal
            open={openDelete}
            deleteHandler={deleteHandler}
            handleClose={handleDeleteClose}
          />
        )}
        {doctorOnline ? (
          <MeetRequestModel
            handleClose={handleClose}
            open={open}
            appointment={googleMeet}
            appointmentId={appointmentId}
            name={doctorName}
            avatar={avatar}
          />
        ) : (
          <OfflineModel handleClose={handleClose} open={open} />
        )}
      </div>
    </div>
  );
};

export default JoinDoctor;
