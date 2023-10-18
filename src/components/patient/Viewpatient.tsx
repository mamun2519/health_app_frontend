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
import {
  useDeleteGoogleMeetMutation,
  useDitelesGoogleMeetQuery,
  useMyGoogleMeetQuery,
} from "@/redux/api/googleMeetApi";
import { convertDate } from "@/helper/date";
import errorMessage from "../shared/ErrrorMessage";

const ViewPatient = ({ params }: { params: string }) => {
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
    {
      link: "/dashboard/Doctor/googleMeet",
      level: "View Patient",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];
  const { data } = useDitelesGoogleMeetQuery(params);
  console.log(data);

  const [deleteGoogleMeet] = useDeleteGoogleMeetMutation();
  // const deleteHandler = async () => {
  //   try {
  //     const res = await deleteGoogleMeet(deletedId).unwrap();
  //     // console.log(deletedId);
  //     console.log(res);
  //     if (res) {
  //       setOpen(false);
  //       successMessage({
  //         header: "Thank You",
  //         message: "GoogleMeet Delete Successfully",
  //       });
  //     } else {
  //       setOpen(false);
  //       errorMessage({ message: "Something is wrong" });
  //     }
  //   } catch (error) {
  //     setOpen(false);
  //     errorMessage({ message: "Something is wrong" });
  //     console.log(error);
  //   }
  // };

  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">View Patient </h3>

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
              href="/dashboard/Doctor/googleMeet/create"
              className="  w-32 h-10 rounded-2xl border flex justify-center items-center bg-[#d1001c] text-white font-medium "
            >
              Create
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
                    <TableCell align="center">Patient Name</TableCell>
                    <TableCell align="center">Serial No</TableCell>
                    <TableCell align="center">Verify</TableCell>
                    <TableCell align="center">Phone</TableCell>
                    <TableCell align="center">Prescription</TableCell>

                    {/* <TableCell align="center">Action</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.meetingRequests?.map((appointment: any) => (
                    <TableRow
                      key={appointment?.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">
                        {appointment?.user?.profile?.first_name}{" "}
                        {appointment?.user?.profile?.last_name}
                      </TableCell>
                      <TableCell align="center">
                        {appointment?.serialNo}
                      </TableCell>
                      <TableCell align="center">
                        {appointment?.verifay ? "Valid" : "InValid"}
                      </TableCell>
                      <TableCell align="center">
                        {appointment?.serialNo}
                      </TableCell>
                      <TableCell align="center">
                        <Link
                          href={`/dashboard/Doctor/googleMeet/viewPatient/prescription?appointment=${appointment.appointmentId}`}
                          className="px-8 py-2 bg-red-500 text-white rounded-full"
                        >
                          Send Prescription
                        </Link>
                      </TableCell>

                      {/* <TableCell align="center">
                        <div className=" flex gap-4 justify-center items-center">
                          <button
                            onClick={() => handleClickOpen(appointment?.id)}
                            className="text-red-500 text-xl  cursor-pointer"
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      </TableCell> */}
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
        {/* {open && (
          <DeleteModal
            open={open}
            deleteHandler={deleteHandler}
            handleClose={handleClose}
          />
        )} */}
      </div>
    </div>
  );
};

export default ViewPatient;
