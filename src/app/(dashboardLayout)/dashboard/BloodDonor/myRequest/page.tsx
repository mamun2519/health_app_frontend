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
import { Pagination, TextField } from "@mui/material";
import Select from "react-select";
import { Days, DonorRequestSort, Limit } from "@/constants/donor";
import Link from "next/link";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import DeleteModal from "@/components/dialog/Delete";
import successMessage from "@/components/shared/SuccessMassage";
import LoadingSpinner from "@/utils/Loading";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionRow from "@/components/ui/AccordionRow";
import RefreshIcon from "@mui/icons-material/Refresh";
const MyDonorRequest = () => {
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
  const { data, isLoading } = useGetMyUserDonorDataQuery({ ...query });

  const [deleteDonorRequest] = useDeleteDonorRequestMutation();

  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };
  const boread = [
    {
      link: "/",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/BloodDonor/myRequest",
      level: "Donor Request",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];

  const deleteHandler = async () => {
    try {
      await deleteDonorRequest(deletedId);
      // console.log(deletedId);
      setOpen(false);
      successMessage({
        header: "Thank You",
        message: "Donor Request Delete Successfully",
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
      <IconBreadcrumbs boreadcrumbs={boread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">My Donor Requested Info</h3>
      <div className="mt-5">
        <div className="lg:flex  justify-end items-center">
          {/* <div>
            <input
              placeholder="Search"
              className=" lg:w-80 h-12 border   p-5  rounded-full bg-[#30029010]  outline-none"
              type="text"
            />
          </div> */}

          <div className=" flex gap-3  lg:mt-0 mt-5">
            <Select
              className="w-36 "
              placeholder="filter"
              defaultValue={sortBy}
              onChange={(event: any) => setSortBy(event?.value)}
              options={DonorRequestSort}
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
        <div className="mt-5 hidden  lg:block md:block xl:block">
          <TableContainer component={Paper}>
            <div className="w-56  lg:w-full ">
              <Table
                sx={{ minWidth: 650, overflow: "hidden" }}
                aria-label="simple table"
              >
                <TableHead sx={{ backgroundColor: "#30029010 " }}>
                  <TableRow>
                    <TableCell align="center">Donor Name</TableCell>
                    <TableCell align="center">Blood Group</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Request Date</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((donor: any) => (
                    <TableRow
                      key={donor.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">
                        {`${donor?.donor?.user?.profile?.first_name}
                    ${donor?.donor?.user?.profile?.last_name}`}
                      </TableCell>
                      <TableCell align="center">
                        {donor?.donor?.user?.profile?.blood_group}
                      </TableCell>
                      <TableCell align="center">{donor?.quantity}</TableCell>

                      <TableCell align="center">{donor?.donnetDate}</TableCell>
                      <TableCell align="center">
                        {" "}
                        <span
                          className={`${
                            donor?.status == "Cancel" && " text-[#2979ff]"
                          }
                  ${donor?.status == "Pending" && "text-[#d1001c] "}
                  ${donor?.status == "Completed" && "text-[#00a152] "}
                  ${donor?.status == "Accepted" && "text-[#8a317a]"} 
                  py-1 rounded-xl   font-bold`}
                        >
                          {donor?.status}
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <div className=" flex gap-4 justify-center items-center">
                          <Link
                            href={`/dashboard/BloodDonor/myRequest/${donor?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <RemoveRedEyeIcon />
                          </Link>
                          <Link
                            href={`/dashboard/BloodDonor/myRequest/edit/${donor?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <BorderColorIcon />
                          </Link>
                          <button
                            onClick={() => handleClickOpen(donor?.id)}
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
          {data?.map((donor: any) => (
            <Accordion key={data?.id}>
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
                    <div className="lg:w-2"></div>
                    <div className=" flex gap-1 justify-center items-center">
                      <Link
                        href={`/dashboard/BloodDonor/myRequest/${donor?.id}`}
                        className="text-blue-500 text-xl"
                      >
                        <RemoveRedEyeIcon />
                      </Link>
                      <Link
                        href={`/dashboard/BloodDonor/myRequest/edit/${donor?.id}`}
                        className="text-blue-500 text-xl"
                      >
                        <BorderColorIcon />
                      </Link>
                      <button
                        onClick={() => handleClickOpen(donor?.id)}
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
                    rowName="Donor Name"
                    data={`${donor?.donor?.user?.profile?.first_name}
  ${donor?.donor?.user?.profile?.last_name}`}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Blood Group"
                    data={donor?.donor?.user?.profile?.blood_group}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Quantity"
                    data={donor?.quantity}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Request Date"
                    data={donor?.donnetDate}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Status"
                    data={
                      <span
                        className={`${
                          donor?.status == "Cancel" && " text-[#2979ff]"
                        }
                  ${donor?.status == "Pending" && "text-[#d1001c] "}
                  ${donor?.status == "Completed" && "text-[#00a152] "}
                  ${donor?.status == "Accepted" && "text-[#8a317a]"} 
                  py-1 rounded-xl   font-bold`}
                      >
                        {donor?.status}
                      </span>
                    }
                    style="w-36"
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>

      {open && (
        <DeleteModal
          open={open}
          deleteHandler={deleteHandler}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default MyDonorRequest;
