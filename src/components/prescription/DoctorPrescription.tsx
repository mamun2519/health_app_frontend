"use client";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import {
  useDeletePrescriptionMutation,
  useDoctorPrescriptionQuery,
  useUserPrescriptionQuery,
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
import { Days, Limit } from "@/constants/donor";
import Link from "next/link";
import { Pagination } from "@mui/material";
import { convertDate } from "@/helper/date";
import successMessage from "../shared/SuccessMassage";
import DeleteModal from "../dialog/Delete";
interface PrescriptionProps {
  bread: {
    link: string;
    level: string;
    icons: React.ReactNode | React.ReactElement;
    color: string;
  }[];
  role?: string;
}
const DoctorPrescription = ({ bread, role }: PrescriptionProps) => {
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

  const { data } = useDoctorPrescriptionQuery({ ...query });
  console.log(data);
  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };
  const [deletePrescription] = useDeletePrescriptionMutation();
  const deleteHandler = async () => {
    try {
      const res = await deletePrescription(deletedId);
      console.log(res);
      if (res) {
        setOpen(false);
        successMessage({
          header: "Thank You",
          message: "prescription Delete Successfully",
        });
      }
      // console.log(deletedId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">My Prescription Info</h3>
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
                    <TableCell align="center">Patient Name</TableCell>
                    <TableCell align="center">Appointment Name</TableCell>
                    <TableCell align="center">Prescription Title</TableCell>
                    <TableCell align="center">Create Date</TableCell>

                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((prescription: any) => (
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
                            href={`/dashboard/Doctor/prescription/${prescription?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <RemoveRedEyeIcon />
                          </Link>
                          <Link
                            href={`/dashboard/Doctor/prescription/edit/${prescription?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <BorderColorIcon />
                          </Link>
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
    </div>
  );
};

export default DoctorPrescription;