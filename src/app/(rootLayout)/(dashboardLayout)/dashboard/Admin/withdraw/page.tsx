"use client";

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
import { Limit, WithdrawSort, WithdrawStatus } from "@/constants/donor";

import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import HomeIcon from "@mui/icons-material/Home";

import DeleteModal from "@/components/dialog/Delete";
import successMessage from "@/components/shared/SuccessMassage";

import errorMessage from "@/components/shared/ErrrorMessage";
import LoadingSpinner from "@/utils/Loading";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionRow from "@/components/ui/AccordionRow";

import {
  useAcceptedWithdrawMutation,
  useAllWithdrawQuery,
  useDeleteWithdrawMutation,
} from "@/redux/api/withdrawApi";

import ModelSelectInput from "@/components/dialog/ModeSelectInput";
import Form from "@/components/Form/FormProvider";

import SelectInput from "@/components/Form/SelectInput";
import { SubmitHandler } from "react-hook-form";
import RefreshIcon from "@mui/icons-material/Refresh";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
const ManageWithdrawPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(10);
  const [open, setOpen] = useState(false);
  const [deletedId, setDeleteId] = useState("");
  const [OpenChangeStatus, SetOpenChangeStatus] = useState(false);
  const [statusId, setStatusId] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleClickOpen = (id: string) => {
    setOpen(true);
    setDeleteId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleStatusChangeClickOpen = (id: string) => {
    SetOpenChangeStatus(true);
    setStatusId(id);
  };

  const handleStatusChangeClose = () => {
    SetOpenChangeStatus(false);
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
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/withdraw",
      level: "Manage Withdraw",
      icons: <PublishedWithChangesIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];
  const { data, isLoading } = useAllWithdrawQuery({ ...query });

  const [deleteWithdraw] = useDeleteWithdrawMutation();
  const deleteHandler = async () => {
    try {
      const res = await deleteWithdraw(deletedId).unwrap();

      if (res) {
        setOpen(false);
        successMessage({
          header: "Thank You",
          message: "Withdraw Request Delete Successfully",
        });
      } else {
        setOpen(false);
        errorMessage({ message: "Something is wrong" });
      }
    } catch (error) {
      setOpen(false);

      errorMessage({ message: data?.error });
    }
  };

  const [acceptedWithdraw] = useAcceptedWithdrawMutation();

  const PaymentAcceptedHandler: SubmitHandler<{ status: string }> = async (
    value
  ) => {
    const data = {
      status: value.status,
      id: statusId,
    };

    try {
      const res = await acceptedWithdraw({ data }).unwrap();

      if (res) {
        successMessage({
          header: "Thank You",
          message: `Withdraw  ${value.status} Successfully!`,
        });
        SetOpenChangeStatus(false);
      }
    } catch (error: any) {
      SetOpenChangeStatus(false);
      errorMessage({ message: error?.data });
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>

      <div className=" grid lg:grid-cols-4 gap-5 grid-cols-2 mt-5">
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Pending Balance</h3>
            <p className="text-2xl text-gray-800 mt-1 ">
              {" "}
              {data?.data
                ?.filter((obj: { status: string }) => obj.status === "Pending")
                .reduce(
                  (total: any, obj: { amount: number }) =>
                    Number(total) + Number(obj.amount),
                  0
                )}{" "}
              BDT
            </p>
          </div>
        </div>

        <div className="h-28 w-full border rounded-lg shadow-sm bg-[#30029010] flex justify-center  items-center px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Complete Withdraw</h3>
            <p className="text-2xl text-gray-800   mt-1">
              {
                data?.data?.filter(
                  (pending: { status: string }) => pending.status == "Complete"
                ).length
              }
            </p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm bg-[#30029010] flex justify-center  items-center px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Pending Withdraw</h3>
            <p className="text-2xl text-gray-800  mt-1">
              {
                data?.data?.filter(
                  (pending: { status: string }) => pending.status == "Pending"
                ).length
              }
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className=" lg:flex justify-between items-center">
          <h3 className=" mt-5 lg:text-2xl text-xl">Recent Withdraw Request</h3>
          <div className=" flex gap-3 lg:mt-0 mt-2">
            <div>
              {sortBy && (
                <div
                  onClick={() => setSortBy("")}
                  className=" mt-  cursor-pointer text-[#d1001c] w-12 flex justify-center items-center h-10 bg-white border  rounded-lg"
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
              options={WithdrawSort}
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
        <div className="mt-5 h-[500px]  hidden  lg:block md:block xl:block">
          <TableContainer component={Paper}>
            <div className="w-56  lg:w-full ">
              <Table
                sx={{ minWidth: 650, overflow: "hidden" }}
                aria-label="simple table"
              >
                <TableHead sx={{ backgroundColor: "#30029010 " }}>
                  <TableRow>
                    <TableCell align="center"> Name</TableCell>
                    <TableCell align="center">Account No</TableCell>
                    <TableCell align="center">Balance</TableCell>
                    <TableCell align="center">Company Earn</TableCell>
                    <TableCell align="center">Receive Type</TableCell>
                    <TableCell align="center">Status</TableCell>

                    <TableCell align="center">Conform</TableCell>
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
                        {service?.doctor?.user?.profile?.first_name}{" "}
                        {service?.doctor?.user?.profile?.last_name}
                      </TableCell>
                      <TableCell align="center">{service?.number}</TableCell>
                      <TableCell align="center">
                        {service?.amount} BDT
                      </TableCell>
                      <TableCell align="center">
                        {service?.companyEarn} BDT
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        {service?.paymentReciveType}
                      </TableCell>
                      <TableCell align="center">
                        <span
                          className={`${
                            service?.status == "Cancel" && " text-[#2979ff]"
                          }
                          ${service?.status == "Pending" && "text-[#d1001c] "}
                          ${
                            service?.status == "Complete" && "text-[#00a152] "
                          } py-1 rounded-xl   font-bold`}
                        >
                          {service?.status}
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <button
                          onClick={() =>
                            handleStatusChangeClickOpen(service?.id)
                          }
                          className="px-4 py-1 rounded-xl bg-[#d1001c] text-white"
                        >
                          Accepted Now
                        </button>
                      </TableCell>
                      <TableCell align="center">
                        <div className=" flex gap-4 justify-center items-center">
                          {/* <Link
                            href={`/dashboard/Doctor/withdraw/edit/${service?.id}`}
                            className="text-blue-500 text-xl"
                          >
                            <BorderColorIcon />
                          </Link> */}
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
                    <div className="w-20"></div>
                    <div className=" flex gap-4 justify-end items-center">
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
                    rowName="name"
                    data={`${service?.doctor?.user?.profile?.first_name}
                    ${service?.doctor?.user?.profile?.last_name}`}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Account No"
                    data={service?.number}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Balance"
                    data={`${service?.amount} BDT`}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Company Earn"
                    data={`${service?.companyEarn} BDT`}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Receive Type"
                    data={service?.paymentReciveType}
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Status"
                    data={
                      <span
                        className={`${
                          service?.status == "Cancel" && " text-[#2979ff]"
                        }
                      ${service?.status == "Pending" && "text-[#d1001c] "}
                      ${
                        service?.status == "Complete" && "text-[#00a152] "
                      } py-1 rounded-xl   font-bold`}
                      >
                        {service?.status}
                      </span>
                    }
                    style="w-36"
                  />
                  <AccordionRow
                    rowName="Conform"
                    data={
                      <button
                        onClick={() => handleStatusChangeClickOpen(service?.id)}
                        className="px-2 py-1 rounded-xl bg-[#d1001c] text-white"
                      >
                        Accepted Now
                      </button>
                    }
                    style="w-36"
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        {OpenChangeStatus && (
          <ModelSelectInput
            open={OpenChangeStatus}
            handleClose={handleStatusChangeClose}
            text="Withdraw Status"
          >
            <Form submitHandler={PaymentAcceptedHandler}>
              <div className="w-96">
                <SelectInput
                  name="status"
                  label="Status"
                  options={WithdrawStatus}
                />

                <div className=" h-12 bg-red-500 text-white w-full flex justify-center items-center rounded-xl mt-4">
                  <button className="w-full" type="submit">
                    Conform Now
                  </button>
                </div>
              </div>
            </Form>
          </ModelSelectInput>
        )}
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

export default ManageWithdrawPage;
