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
import { Days, Limit } from "@/constants/donor";
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

const JoinDoctor = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(10);
  const [open, setOpen] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");
  const [doctorOnline, setDoctorOnline] = useState(false);
  const [googleMeet, setGoogleMeet] = useState({});
  const [deletedId, setDeleteId] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpen = (id: string, appointment: any) => {
    setOpen(true);
    setAppointmentId(id);
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
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];
  const { data } = useUserAppointmentQuery({ ...query });
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

  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Doctor Join</h3>

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
            {/* <Link
          href="/doctor/find"
          className="  w-32 h-10 rounded-2xl border flex justify-center items-center bg-[#d1001c] text-white font-medium "
        >
          Find Doctor
        </Link> */}
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
                            <span className=" text-[#d1001c]  font-bold">
                              Online
                            </span>
                          ) : (
                            "Offline"
                          )}
                        </TableCell>
                        <TableCell align="center">
                          <button
                            onClick={() =>
                              handleClickOpen(appointment.id, appointment)
                            }
                            className="px-6 py-1 rounded-full bg-red-500 text-white"
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
                            className="text-red-500 text-xl  cursor-pointer"
                          >
                            <DeleteIcon />
                          </button>
                        </TableCell>
                        {doctorOnline ? (
                          <MeetRequestModel
                            handleClose={handleClose}
                            open={open}
                            appointment={googleMeet}
                            appointmentId={appointmentId}
                          />
                        ) : (
                          <OfflineModel handleClose={handleClose} open={open} />
                        )}
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
        {openDelete && (
          <DeleteModal
            open={openDelete}
            deleteHandler={deleteHandler}
            handleClose={handleDeleteClose}
          />
        )}
      </div>
    </div>
  );
};

export default JoinDoctor;
