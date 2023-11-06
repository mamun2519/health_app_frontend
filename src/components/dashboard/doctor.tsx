"use client";
import {
  useDoctorActivityQuery,
  useDonorActivityQuery,
} from "@/redux/api/activityApi";
import { getTimeOfDayMessage } from "@/utils/DayMessage";
import LoadingSpinner from "@/utils/Loading";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionRow from "../ui/AccordionRow";
import MyBarChart from "../ui/BarChart";
import { convertDate } from "@/helper/date";
const DoctorActivity = () => {
  const { data, isLoading } = useDoctorActivityQuery({ limit: 100, page: 1 });
  console.log(data);
  const ServiceChartData = data?.top5MyServicePrice.map(
    (chart: any, index: number) => {
      return {
        name: `Service ${index + 1}`,
        Total_Amount: chart.price,
      };
    }
  );
  const WithdrawChart = data?.resentWithdraw.map(
    (chart: any, index: number) => {
      return {
        name: `Withdraw ${index + 1}`,
        Balance: chart.amount,
      };
    }
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="pl-2">
      <h4 className="text-xl">Hello Mr {data?.name} </h4>
      <p className="mt-1">{getTimeOfDayMessage()}</p>

      <div className=" grid lg:grid-cols-4 gap-5 grid-cols-2 mt-5 w-full">
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Current Balance</h3>
            <p className="text-2xl text-gray-800 mt-1 "> {data?.balance} BDT</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Total Sales</h3>
            <p className="text-2xl text-gray-800 mt-1 ">
              {" "}
              {data?.myTotalSales} BDT
            </p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Booked Appointment</h3>
            <p className="text-2xl text-gray-800 mt-1 "> {data?.appointment}</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Patient</h3>
            <p className="text-2xl text-gray-800 mt-1 ">
              {" "}
              {data?.patient} People
            </p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Total Service</h3>
            <p className="text-2xl text-gray-800   mt-1"> {data?.service}</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Donor Request</h3>
            <p className="text-2xl text-gray-800   mt-1">
              {" "}
              {data?.donorRequest}
            </p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm bg-[#30029010] flex justify-center  items-center px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Complete Donation</h3>
            <p className="text-2xl text-gray-800   mt-1">
              {" "}
              {data?.completeDonation}
            </p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm bg-[#30029010] flex justify-center  items-center px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Pending Withdraw</h3>
            <p className="text-2xl text-gray-800  mt-1">
              {data?.pendingWithdraw}
            </p>
          </div>
        </div>
      </div>

      <div className=" grid lg:grid-cols-2  grid-cols-1 gap-5 mt-20">
        <div>
          <h3 className="text-xl">My Top Five best Selling Service</h3>
          <div className="mt-5 border w-full h-full hidden  lg:block md:block xl:block  p-3 rounded-2xl">
            <Table sx={{ overflow: "hidden" }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#30029010 " }}>
                <TableRow>
                  <TableCell>Service name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Total Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.top5MyServicePrice?.map(
                  (service: any, index: number) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{service?.serviceName}</TableCell>
                      <TableCell>{service?.category}</TableCell>
                      <TableCell> {service?.price} BDT</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </div>
          <div className="mt-5 block lg:hidden sm:hidden  xl:hidden px-2">
            {data?.top5MyServicePrice?.map((service: any, index: number) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className=" flex gap-10">
                    <div className="  w-36">
                      <Typography>My Top Five best selling Service</Typography>
                    </div>

                    <div className="  flex gap-2  justify-between">
                      <div className="w-2"></div>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className=" h-full py-2  border-t">
                    <AccordionRow
                      rowName="Service Name"
                      data={service?.serviceName}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Category"
                      data={service?.category}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Total Amount"
                      data={`${service?.price} BDT`}
                      style="w-36"
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
        <div className="w-full ">
          <h3 className="text-xl"></h3>
          <div className="border h-full mt-12 flex  items-center py-10  px-3 rounded-2xl shadow">
            <MyBarChart
              width={530}
              height={250}
              data={ServiceChartData}
              keys="Total_Amount"
            />
          </div>
        </div>
      </div>

      <div className=" grid lg:grid-cols-2  grid-cols-1 gap-5 mt-20">
        <div>
          <h3 className="text-xl">My Recent Withdraw Record</h3>
          <div className="mt-5 border w-full hidden  lg:block md:block xl:block p-3 rounded-2xl h-full">
            <Table sx={{ overflow: "hidden" }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#30029010 " }}>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Withdraw Amount</TableCell>

                  <TableCell>Company Earn</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.resentWithdraw?.map((donor: any, index: number) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{convertDate(donor?.date)}</TableCell>
                    <TableCell>{donor?.amount} BDT</TableCell>
                    <TableCell>{donor?.companyEarn} BDT</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-5 block lg:hidden sm:hidden  xl:hidden px-2">
            {data?.resentWithdraw?.map((donor: any, index: number) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className=" flex gap-10">
                    <div className="  w-36">
                      <Typography>Resent Withdraw</Typography>
                    </div>

                    <div className="  flex gap-2  justify-between">
                      <div className="w-2"></div>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className=" h-full py-2  border-t">
                    <AccordionRow
                      rowName="Date"
                      data={convertDate(donor?.date)}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Withdraw Amount"
                      data={`${donor?.amount} BDT`}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Company Earn"
                      data={`${donor?.companyEarn} BDT`}
                      style="w-36"
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
        <div className="w-full ">
          <h3 className="text-xl"></h3>
          <div className="border h-full mt-12 flex  items-center py-10  px-3 rounded-2xl shadow">
            <MyBarChart
              width={530}
              height={250}
              data={WithdrawChart}
              keys="Balance"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorActivity;
