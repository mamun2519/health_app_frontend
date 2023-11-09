"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";

import { Pagination, Typography } from "@mui/material";

import Link from "next/link";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import HomeIcon from "@mui/icons-material/Home";

import { useDitelesGoogleMeetQuery } from "@/redux/api/googleMeetApi";

import LoadingSpinner from "@/utils/Loading";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionRow from "@/components/ui/AccordionRow";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
const ViewPatient = ({ params }: { params: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(10);
  const [open, setOpen] = useState(false);
  const [deletedId, setDeleteId] = useState("");

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
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/googleMeet",
      level: "Google Meet",
      icons: <JoinFullIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/googleMeet",
      level: "View Patient",
      icons: <FeaturedPlayListIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];
  const { data, isLoading } = useDitelesGoogleMeetQuery(params);

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

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">View Patient </h3>

      <div className="mt-5">
        {/* <div className="lg:flex  justify-between items-center">
          <div>
            <input
              placeholder="Search"
              className=" lg:w-80 w-full h-12 border   p-5  rounded-full bg-[#30029010]  outline-none"
              type="text"
            />
          </div>

          <div className=" flex gap-3 lg:mt-0 mt-5">
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
          </div>
        </div> */}
        <div className="mt-5 hidden  lg:block md:block xl:block">
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
                        {appointment?.phoneNumber}
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
        <div className="mt-5 block lg:hidden sm:hidden  xl:hidden">
          {data &&
            data?.meetingRequests?.map((appointment: any) => (
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
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className=" h-full py-2  border-t">
                    <AccordionRow
                      rowName="Patient Name"
                      data={` ${appointment?.user?.profile?.first_name}
                      ${appointment?.user?.profile?.last_name}`}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Serial No"
                      data={appointment?.serialNo}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Verify"
                      data={appointment?.verifay ? "Valid" : "InValid"}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Phone"
                      data={appointment?.phoneNumber}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Prescription"
                      data={
                        <Link
                          href={`/dashboard/Doctor/googleMeet/viewPatient/prescription?appointment=${appointment.appointmentId}`}
                          className="px-4 py-2 bg-red-500 text-white rounded-full"
                        >
                          Send
                        </Link>
                      }
                      style="w-36"
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
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
