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
  Accordion,
  AccordionSummary,
  Pagination,
  Typography,
} from "@mui/material";
import Select from "react-select";
import { AppointmentSort, Days, Limit } from "@/constants/donor";
import Link from "next/link";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import DeleteModal from "@/components/dialog/Delete";
import successMessage from "@/components/shared/SuccessMassage";
import {
  useAllAppointmentQuery,
  useDeleteAppointmentMutation,
} from "@/redux/api/appointmentApi";
import errorMessage from "@/components/shared/ErrrorMessage";
import LoadingSpinner from "@/utils/Loading";

import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionRow from "@/components/ui/AccordionRow";
import RefreshIcon from "@mui/icons-material/Refresh";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
const ManageAppointmentPage = () => {
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
  query["searchTerm"] = searchTerm;
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
      link: "/dashboard/Admin/appointment",
      level: "Manage Management",
      icons: <BreakfastDiningIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];
  const { data, isLoading } = useAllAppointmentQuery({ ...query });
  const [deleteAppointment] = useDeleteAppointmentMutation();
  const deleteHandler = async () => {
    try {
      const res = await deleteAppointment(deletedId).unwrap();

      if (res) {
        setOpen(false);
        successMessage({
          header: "Thank You",
          message: "Appointment Delete Successfully",
        });
      } else {
        setOpen(false);
        errorMessage({ message: "Something Is wrong!" });
      }
    } catch (error: any) {
      setOpen(false);
      errorMessage({ message: error?.data });
    }
  };

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
      <h3 className=" mt-5 text-2xl">Manage Appointment </h3>

      <div className="mt-5">
        <div className="lg:flex   justify-between items-center">
          <div>
            <input
              onChange={(e: any) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className=" lg:w-80 w-full h-12 border   p-5  rounded-full bg-[#30029010]  outline-none"
              type="text"
            />
          </div>

          <div className="lg:mt-0 mt-5 flex gap-3 px-4 lg:px-0">
            <div>
              {(sortBy || searchTerm) && (
                <div
                  onClick={() => clearSearchAndSortHandler()}
                  className=" mt-  cursor-pointer text-[#d1001c] w-12 flex justify-center "
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
        <div className="mt-5  hidden  lg:block md:block xl:block">
          <TableContainer component={Paper}>
            <div className="w-56  lg:w-full ">
              <Table
                sx={{ minWidth: 650, overflow: "hidden" }}
                aria-label="simple table"
              >
                <TableHead sx={{ backgroundColor: "#30029010 " }}>
                  <TableRow>
                    <TableCell align="center">Service Name</TableCell>
                    <TableCell align="center">Patient Name</TableCell>
                    <TableCell align="center">Appointment Date</TableCell>
                    <TableCell align="center">Time</TableCell>
                    <TableCell align="center">Serial No</TableCell>
                    {/* <TableCell align="center">Status</TableCell> */}
                    {/* <TableCell align="center">Joint Doctor</TableCell> */}
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
                        {appointment?.service?.title}
                      </TableCell>
                      <TableCell align="center">
                        {appointment?.user?.profile?.first_name}{" "}
                        {appointment.user?.profile?.last_name}
                      </TableCell>
                      <TableCell align="center">
                        {appointment?.bookingDate}
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        <div className="">
                          <span
                            className={`
                            text-[#00a152] 
                            w-24 py-1 rounded-xl   font-bold`}
                          >
                            {appointment?.slatTime}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        {appointment?.serialNo}
                      </TableCell>

                      {/* <TableCell align="center">
                        {appointment?.status}
                      </TableCell> */}
                      {/* <TableCell align="center">
                        <button className="px-6 py-1 rounded-full bg-red-100">
                          join Now
                        </button>
                      </TableCell> */}
                      <TableCell align="center">
                        <div className=" flex gap-4 justify-center items-center">
                          <Link
                            href={`/dashboard/Admin/appointment/${appointment?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <RemoveRedEyeIcon />
                          </Link>
                          <Link
                            href={`/dashboard/Admin/appointment/edit/${appointment?.id}`}
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

        <div className="mt-5  block lg:hidden sm:hidden  xl:hidden">
          {data?.map((appointment: any) => (
            <Accordion key={appointment?.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className=" flex gap-10">
                  <div className="  w-20">
                    <Typography>Appointment</Typography>
                  </div>

                  <div className="  flex gap-2  justify-between">
                    <div className="w-2"></div>
                    <div className=" flex gap-4 justify-center items-center">
                      <Link
                        href={`/dashboard/Admin/appointment/${appointment?.id}`}
                        className="text-blue-500 text-xl"
                      >
                        <RemoveRedEyeIcon />
                      </Link>
                      <Link
                        href={`/dashboard/Admin/appointment/edit/${appointment?.id}`}
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
                    data={appointment?.service?.title}
                    style="w-36"
                  />

                  <AccordionRow
                    rowName="Patient Name"
                    data={` ${appointment?.user?.profile?.first_name}
                    ${appointment.user?.profile?.last_name}`}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Appointment Date          "
                    data={appointment?.bookingDate}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Time"
                    data={
                      <div className="">
                        <span
                          className={`
                      text-[#00a152] 
                      w-24 py-1 rounded-xl   font-bold`}
                        >
                          {appointment?.slatTime}
                        </span>
                      </div>
                    }
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Serial No"
                    data={appointment?.serialNo}
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

export default ManageAppointmentPage;
