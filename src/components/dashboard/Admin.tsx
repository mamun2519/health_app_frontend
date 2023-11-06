"use client";
import { useAdminActivityQuery } from "@/redux/api/activityApi";
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
import AccordionRow from "../ui/AccordionRow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import MyBarChart from "../ui/BarChart";
const AdminActivity = () => {
  const { data, isLoading } = useAdminActivityQuery({ limit: 100, page: 1 });
  console.log(data);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  const ChartData = data?.topService.map((chart: any, index: number) => {
    return {
      name: `Service ${index + 1}`,
      Total_Amount: chart.price,
    };
  });
  const DonorChartData = data?.topDonor.map((chart: any, index: number) => {
    return {
      name: `Donor ${index + 1}`,
      Total_Donation: chart.totalBloodDonatedQuantity,
    };
  });
  const WithdrawChart = data?.lastWithdraw.map((chart: any, index: number) => {
    return {
      name: `Withdraw ${index + 1}`,
      Balance: chart.amount,
    };
  });
  return (
    <div className="pl-2">
      <h4 className="text-xl">Hello Mr {data?.name} </h4>
      <p className="mt-1">{getTimeOfDayMessage()}</p>

      <div className=" grid lg:grid-cols-4 gap-5 grid-cols-2 mt-5 w-full">
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Total Sales</h3>
            <p className="text-2xl text-gray-800 mt-1 "> {data?.sales} BDT</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Total Earn</h3>
            <p className="text-2xl text-gray-800 mt-1 "> {data?.balance} BDT</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Complete Appointment</h3>
            <p className="text-2xl text-gray-800 mt-1 "> {data?.appointment}</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Doctor Service</h3>
            <p className="text-2xl text-gray-800 mt-1 "> {data?.service}</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
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

        <div className="h-28 w-full border rounded-lg shadow-sm bg-[#30029010] flex justify-center  items-center px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Doctor Account</h3>
            <p className="text-2xl text-gray-800   mt-1"> {data?.doctor}</p>
          </div>
        </div>
        <div className="h-28 w-full border rounded-lg shadow-sm bg-[#30029010] flex justify-center  items-center px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl">Donor Account</h3>
            <p className="text-2xl text-gray-800   mt-1"> {data?.bloodDonor}</p>
          </div>
        </div>
      </div>

      <div className=" grid lg:grid-cols-2  grid-cols-1 gap-5 mt-10">
        <div>
          <h3 className="text-xl">Top Five Selling Service</h3>
          <div className="mt-5 border w-full h-full hidden  lg:block md:block xl:block  p-3 rounded-2xl">
            <Table sx={{ overflow: "hidden" }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#30029010 " }}>
                <TableRow>
                  <TableCell>Doctor Name</TableCell>
                  <TableCell>Service name</TableCell>
                  <TableCell>Total Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.topService?.map((service: any, index: number) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{service?.doctorName}</TableCell>
                    <TableCell>{service?.serviceName}</TableCell>
                    <TableCell> {service?.price} BDT</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-5 block lg:hidden sm:hidden  xl:hidden px-2">
            {data?.topService?.map((service: any, index: number) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className=" flex gap-10">
                    <div className="  w-36">
                      <Typography>Top Five Service</Typography>
                    </div>

                    <div className="  flex gap-2  justify-between">
                      <div className="w-2"></div>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className=" h-full py-2  border-t">
                    <AccordionRow
                      rowName="Doctor Name	"
                      data={service?.doctorName}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Service Name"
                      data={service?.serviceName}
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
              data={ChartData}
              keys="Total_Amount"
            />
          </div>
        </div>
      </div>

      <div className=" grid lg:grid-cols-2  grid-cols-1 gap-5 mt-20">
        <div>
          <h3 className="text-xl">Top Five Donor</h3>
          <div className="mt-5 border w-full h-full hidden  lg:block md:block xl:block p-3 rounded-2xl">
            <Table sx={{ overflow: "hidden" }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#30029010 " }}>
                <TableRow>
                  <TableCell>Donor Name</TableCell>
                  <TableCell>Blood Group</TableCell>
                  <TableCell>total Donation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.topDonor?.map((donor: any, index: number) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{donor?.donorName}</TableCell>
                    <TableCell>{donor?.bloodGroup}</TableCell>
                    <TableCell> {donor?.totalBloodDonatedQuantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-5 block lg:hidden sm:hidden  xl:hidden px-2">
            {data?.topDonor?.map((donor: any, index: number) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className=" flex gap-10">
                    <div className="  w-36">
                      <Typography>Top Five Donar</Typography>
                    </div>

                    <div className="  flex gap-2  justify-between">
                      <div className="w-2"></div>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className=" h-full py-2  border-t">
                    <AccordionRow
                      rowName="donor Name	"
                      data={donor?.donorName}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Blood group"
                      data={donor?.bloodGroup}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="total Donation"
                      data={donor?.totalBloodDonatedQuantity}
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
              data={DonorChartData}
              keys="Total_Donation"
            />
          </div>
        </div>
      </div>

      <div className=" grid lg:grid-cols-2  grid-cols-1 gap-5 mt-20">
        <div>
          <h3 className="text-xl">Recent Withdraw</h3>
          <div className="mt-5 border w-full hidden  lg:block md:block xl:block p-3 rounded-2xl h-full">
            <Table sx={{ overflow: "hidden" }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#30029010 " }}>
                <TableRow>
                  <TableCell>Doctor Name</TableCell>

                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.lastWithdraw?.map((donor: any, index: number) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{donor?.name}</TableCell>
                    <TableCell>{donor?.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-5 block lg:hidden sm:hidden  xl:hidden px-2">
            {data?.lastWithdraw?.map((donor: any, index: number) => (
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
                      rowName="Doctor Name	"
                      data={donor?.name}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Amount"
                      data={donor?.amount}
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

export default AdminActivity;
