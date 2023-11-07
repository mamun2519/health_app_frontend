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
  TextField,
  Typography,
} from "@mui/material";
import Select from "react-select";
import { Days, DoctorServiceSort, Limit } from "@/constants/donor";
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
  useAllServiceQuery,
  useDeleteServiceMutation,
  useDoctorServiceQuery,
} from "@/redux/api/doctorServiceApi";
import errorMessage from "@/components/shared/ErrrorMessage";
import LoadingSpinner from "@/utils/Loading";

import AccordionDetails from "@mui/material/AccordionDetails";
import RefreshIcon from "@mui/icons-material/Refresh";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionRow from "@/components/ui/AccordionRow";
import { useDebounced } from "@/redux/hooks";
const ManageDoctorServicePage = () => {
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
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Admin/doctorService",
      level: "Manage Service",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];
  const { data, isLoading } = useAllServiceQuery({ ...query });

  const [deleteService] = useDeleteServiceMutation();
  const deleteHandler = async () => {
    try {
      const res = await deleteService(deletedId).unwrap();
      // console.log(deletedId);
      if (res) {
        setOpen(false);
        successMessage({
          header: "Thank You",
          message: "Service Delete Successfully",
        });
      } else {
        setOpen(false);
        errorMessage({ message: "Something is wrong" });
      }
    } catch (error) {
      setOpen(false);
      console.log(error);
      errorMessage({ message: "Something is wrong" });
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
      <h3 className=" mt-5 text-2xl">Manage Service Info</h3>

      <div className="mt-5">
        <div className="lg:flex  justify-between items-center">
          <div>
            <input
              onChange={(e: any) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Search"
              className=" lg:w-80 h-12 border   p-5  rounded-full bg-[#30029010]  outline-none"
              type="text"
            />
          </div>
          <div className=" flex gap-3 mt-5 lg:mt-0">
            <div>
              {(sortBy || searchTerm) && (
                <div
                  onClick={() => clearSearchAndSortHandler()}
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
              options={DoctorServiceSort}
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
                href="/dashboard/Doctor/myService/create"
                className="  lg:w-32 w-20 h-10 rounded-2xl border flex justify-center items-center bg-[#d1001c] text-white font-medium  "
              >
                Create
              </Link>
            </div>
          </div>
          <div className="block lg:hidden xl:hidden  md:hidden mt-5">
            <Link
              href="/dashboard/Doctor/myService/create"
              className="  lg:w-32 w-36 h-10 rounded-2xl border flex justify-center items-center bg-[#d1001c] text-white font-medium  "
            >
              Create service
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
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Start And End Time</TableCell>
                    <TableCell align="center">Duration</TableCell>

                    {/* <TableCell align="center">Joint Doctor</TableCell> */}
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.data?.map((service: any) => (
                    <TableRow
                      key={service?.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{service?.title}</TableCell>
                      <TableCell align="center">{service?.price} BDT</TableCell>
                      <TableCell align="center">
                        {" "}
                        {service?.serviceSalt.startTime} TO{" "}
                        {service?.serviceSalt.endTime}
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        <span
                          className="      text-[#00a152]  
                            w-24 py-1 rounded-xl    font-bold"
                        >
                          {service?.serviceSalt.duration} Minutes
                        </span>
                      </TableCell>

                      {/* <TableCell align="center">
                        <button className="px-6 py-1 rounded-full bg-red-100">
                          join Now
                        </button>
                      </TableCell> */}
                      <TableCell align="center">
                        <div className=" flex gap-4 justify-center items-center">
                          <Link
                            href={`/dashboard/Admin/doctorService/${service?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <RemoveRedEyeIcon />
                          </Link>
                          <Link
                            href={`/dashboard/Admin/doctorService/edit/${service?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <BorderColorIcon />
                          </Link>
                          <button
                            onClick={() => handleClickOpen(service?.id)}
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
          {data?.data?.map((service: any) => (
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
                      <Link
                        href={`/dashboard/Admin/doctorService/${service?.id}`}
                        className="text-blue-500 text-xl"
                      >
                        <RemoveRedEyeIcon />
                      </Link>
                      <Link
                        href={`/dashboard/Admin/doctorService/edit/${service?.id}`}
                        className="text-blue-500 text-xl"
                      >
                        <BorderColorIcon />
                      </Link>
                      <button
                        onClick={() => handleClickOpen(service?.id)}
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
                    data={service?.title}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Price"
                    data={`${service?.price} BDT`}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Start And End Time"
                    data={`${service?.serviceSalt.startTime} TO
                    ${service?.serviceSalt.endTime}`}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Duration"
                    data={
                      <span
                        className="      text-[#00a152]  
                      w-24 py-1 rounded-xl    font-bold"
                      >
                        {service?.serviceSalt.duration} Minutes
                      </span>
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

export default ManageDoctorServicePage;
