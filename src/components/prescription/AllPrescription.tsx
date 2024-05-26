"use client";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import {
  useAllPrescriptionQuery,
  useDeletePrescriptionMutation,
} from "@/redux/api/prescriptionApi";
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
import Select from "react-select";
import { Days, Limit, PrescriptionSort } from "@/constants/donor";
import Link from "next/link";
import { Accordion, Pagination } from "@mui/material";
import { convertDate } from "@/helper/date";
import successMessage from "../shared/SuccessMassage";
import DeleteModal from "../dialog/Delete";
import errorMessage from "../shared/ErrrorMessage";
import LoadingSpinner from "@/utils/Loading";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionRow from "@/components/ui/AccordionRow";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useDebounced } from "@/redux/hooks";
interface PrescriptionProps {
  bread: {
    link: string;
    level: string;
    icons: React.ReactNode | React.ReactElement;
    color: string;
  }[];
  role?: string;
}
const AllPrescription = ({ bread, role }: PrescriptionProps) => {
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

  const { data, isLoading } = useAllPrescriptionQuery({ ...query });

  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };
  const [deleteprescription] = useDeletePrescriptionMutation();
  const deleteHandler = async () => {
    try {
      const res = await deleteprescription(deletedId).unwrap();
      if (res) {
        setOpen(false);
        successMessage({
          header: "Thank You",
          message: "prescription Delete Successfully",
        });
      } else {
        errorMessage({ message: "Something is wrong" });
        setOpen(false);
      }
      // console.log(deletedId);
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
      <h3 className=" mt-5 text-2xl">Manage Prescription Info</h3>
      <div className="mt-5 hidden  lg:block md:block xl:block">
        <div className="lg:flex  justify-between items-center">
          <div>
            <input
              placeholder="Search"
              onChange={(e: any) => setSearchTerm(e.target.value)}
              value={searchTerm}
              className=" lg:w-80 w-full h-12 border   p-5  rounded-full bg-[#30029010]  outline-none"
              type="text"
            />
          </div>

          <div className=" flex gap-3 lg:mt-0 mt-5">
            <div>
              {(sortBy || searchTerm) && (
                <div
                  onClick={() => clearSearchAndSortHandler()}
                  className=" mt-  cursor-pointer text-[#d1001c] w-12 flex justify-center items-center h-full bg-white border  rounded-lg"
                >
                  {" "}
                  <RefreshIcon />
                </div>
              )}
            </div>
            <Select
              className="w-36 "
              placeholder="filter"
              defaultValue={sortBy}
              onChange={(event: any) => setSortBy(event?.value)}
              options={PrescriptionSort}
            />
            <Select
              className="lg:w-20"
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
                    <TableCell align="center">Patient Name</TableCell>
                    <TableCell align="center">Appointment Name</TableCell>
                    <TableCell align="center">Prescription Title</TableCell>
                    <TableCell align="center">Create Date</TableCell>

                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.data?.map((prescription: any) => (
                    <TableRow
                      key={prescription?.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">
                        {prescription?.user?.profile?.first_name}{" "}
                        {prescription?.user?.profile?.last_name}
                      </TableCell>
                      <TableCell align="center">
                        {prescription?.appointment?.service?.title}
                      </TableCell>
                      <TableCell align="center">
                        {prescription?.title}
                      </TableCell>
                      <TableCell align="center">
                        {convertDate(prescription?.createdAt)}
                      </TableCell>
                      <TableCell align="center">
                        <div className=" flex gap-4 justify-center items-center">
                          <Link
                            href={`/dashboard/Admin/prescription/${prescription?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <RemoveRedEyeIcon />
                          </Link>
                          {/* <Link
                            href={`/dashboard/Doctor/prescription/edit/${prescription?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <BorderColorIcon />
                          </Link> */}
                          <button
                            onClick={() => handleClickOpen(prescription?.id)}
                            className="text-red-500 text-xl  cursor-pointer"
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      </TableCell>
                      {/* 
                      <TableCell align="center">
                        <div className=" flex gap-4 justify-center items-center">
                          <Link
                            href={`/dashboard/user/prescription/${prescription?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <RemoveRedEyeIcon />
                          </Link>
                          <Link
                            href={`/dashboard/${role}/prescription/${prescription?.id}`}
                            className="text-white bg-[#d1001c] px-2 py-1 rounded-full"
                          >
                            {" "}
                            Download Prescription
                          </Link>
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
        {open && (
          <DeleteModal
            open={open}
            deleteHandler={deleteHandler}
            handleClose={handleClose}
          />
        )}
      </div>
      <div className="mt-5 block lg:hidden sm:hidden  xl:hidden">
        {data?.data?.map((prescription: any) => (
          <Accordion key={prescription?.id}>
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
                      href={`/dashboard/Admin/prescription/${prescription?.id}`}
                      className="text-blue-500 text-xl"
                    >
                      <RemoveRedEyeIcon />
                    </Link>
                    {/* <Link
                            href={`/dashboard/Doctor/prescription/edit/${prescription?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <BorderColorIcon />
                          </Link> */}
                    <button
                      onClick={() => handleClickOpen(prescription?.id)}
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
                  rowName="Patient Name"
                  data={`  ${prescription?.user?.profile?.first_name}
                    ${prescription?.user?.profile?.last_name}`}
                  style="w-36"
                />
                <AccordionRow
                  rowName="Appointment Name"
                  data={prescription?.appointment?.service?.title}
                  style="w-36"
                />
                <AccordionRow
                  rowName="Prescription Title"
                  data={prescription?.title}
                  style="w-36"
                />
                <AccordionRow
                  rowName="Create Date"
                  data={convertDate(prescription?.createdAt)}
                  style="w-36"
                />
                {/* <AccordionRow
                  rowName="Download"
                  data={
                    <div className=" flex gap-4 justify-center items-center">
                      <Link
                        href={`/dashboard/${role}/prescription/${prescription?.id}`}
                        className="text-white bg-[#d1001c] px-4 py- rounded-full"
                      >
                        {" "}
                        Prescription
                      </Link>
                    </div>
                  }
                  style="w-36"
                /> */}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default AllPrescription;
