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
import { Days, Limit, OfferSort } from "@/constants/donor";
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
  useDeleteServiceMutation,
  useDoctorServiceQuery,
} from "@/redux/api/doctorServiceApi";
import errorMessage from "@/components/shared/ErrrorMessage";
import LoadingSpinner from "@/utils/Loading";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionRow from "@/components/ui/AccordionRow";
import {
  useDeleteServiceOfferMutation,
  useDoctorServiceOfferQuery,
} from "@/redux/api/serviceOfferApi";
import { convertDate } from "@/helper/date";
import RefreshIcon from "@mui/icons-material/Refresh";
const DoctorServiceOfferPage = () => {
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
      link: "/dashboard/Doctor/serviceOffer",
      level: "Service Offer",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];
  const { data, isLoading } = useDoctorServiceOfferQuery({ ...query });

  const [deleteServiceOffer] = useDeleteServiceOfferMutation();
  const deleteHandler = async () => {
    try {
      const res = await deleteServiceOffer(deletedId).unwrap();
      // console.log(deletedId);
      if (res) {
        setOpen(false);
        successMessage({
          header: "Thank You",
          message: "Service Offer Delete Successfully",
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

  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Service Offer Information</h3>

      <div className="mt-5">
        <div className="lg:flex  justify-end items-center ">
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
              options={OfferSort}
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
                href="/dashboard/Doctor/serviceOffer/create"
                className="  lg:w-32 w-36 h-10 rounded-2xl border flex justify-center items-center bg-[#d1001c] text-white font-medium  "
              >
                Create Offer
              </Link>
            </div>
          </div>
          <div className="block lg:hidden xl:hidden  md:hidden mt-4 ">
            <Link
              href="/dashboard/Doctor/serviceOffer/create"
              className="  lg:w-32 w-36 h-10 rounded-2xl border flex justify-center items-center bg-[#d1001c] text-white font-medium  "
            >
              Create Offer
            </Link>
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
                    <TableCell align="center">Service Name</TableCell>
                    <TableCell align="center">Offer Title</TableCell>
                    <TableCell align="center">Discount</TableCell>
                    <TableCell align="center">Promo Code</TableCell>
                    <TableCell align="center">Expire Date</TableCell>
                    <TableCell align="center">Status</TableCell>

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
                      <TableCell align="center">
                        {service?.service?.title}
                      </TableCell>
                      <TableCell align="center">
                        {service?.offerTitle}
                      </TableCell>
                      <TableCell align="center">{service?.discount}</TableCell>
                      <TableCell align="center">
                        {" "}
                        {service?.promoCode}
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        {convertDate(service?.expireDate)}
                      </TableCell>
                      <TableCell align="center">
                        <span
                          className={`
                          ${service?.status == "Expired" && "text-[#d1001c] "}
                          ${
                            service?.status == "Active" && "text-[#00a152] "
                          } py-1 rounded-xl   font-bold`}
                        >
                          {service?.status}
                        </span>{" "}
                      </TableCell>
                      <TableCell align="center">
                        <div className=" flex gap-4 justify-center items-center">
                          <Link
                            href={`/dashboard/Doctor/serviceOffer/edit/${service?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <BorderColorIcon />
                          </Link>
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
                        href={`/dashboard/Doctor/serviceOffer/edit/${service?.id}`}
                        className="text-blue-500 text-xl"
                      >
                        <BorderColorIcon />
                      </Link>
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
                    rowName="Service Name"
                    data={service?.service?.title}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Title"
                    data={`${service?.offerTitle}`}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Discount"
                    data={service?.discount}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Promo Code"
                    data={`${service?.promoCode}`}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Expire Date"
                    data={convertDate(service?.expireDate)}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Status"
                    data={
                      <span
                        className={`
                      ${service?.status == "Expired" && "text-[#d1001c] "}
                      ${
                        service?.status == "Active" && "text-[#00a152] "
                      } py-1 rounded-xl   font-bold`}
                      >
                        {service?.status}
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

export default DoctorServiceOfferPage;
