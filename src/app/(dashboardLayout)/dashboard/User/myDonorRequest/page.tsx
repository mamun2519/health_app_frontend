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
import errorMessage from "@/components/shared/ErrrorMessage";
const MyDonorRequest = () => {
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

  const { data } = useGetMyUserDonorDataQuery({ ...query });
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
      link: "/dashboard/User/myDonorRequest",
      level: "Donor Request",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "text.primary",
    },
  ];

  const deleteHandler = async () => {
    try {
      const res = await deleteDonorRequest(deletedId).unwrap();
      // console.log(deletedId);
      if (res) {
        setOpen(false);
        successMessage({
          header: "Thank You",
          message: "Donor Request Delete Successfully",
        });
      } else {
        setOpen(false);
        errorMessage({ message: "Something is wrong" });
      }
    } catch (error: any) {
      setOpen(false);
      errorMessage({ message: "Something is wrong" });
      console.log(error);
    }
  };

  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={boread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">My Donor Requested Info</h3>
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
                      <TableCell align="center">{donor?.status}</TableCell>
                      <TableCell align="center">
                        <div className=" flex gap-4 justify-center items-center">
                          <Link
                            href={`/dashboard/User/myDonorRequest/${donor?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <RemoveRedEyeIcon />
                          </Link>
                          <Link
                            href={`/dashboard/User/myDonorRequest/edit/${donor?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <BorderColorIcon />
                          </Link>
                          <button
                            onClick={() => handleClickOpen(donor?.id)}
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
