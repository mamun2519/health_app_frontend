"use client";
import { useDonorActivityQuery } from "@/redux/api/activityApi";
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
const BloodDonorActivity = () => {
  const { data, isLoading } = useDonorActivityQuery({ limit: 100, page: 1 });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  const donationBerChart = data?.myCompleteDonation.map(
    (chart: any, index: number) => {
      return {
        name: `Donation ${index + 1}`,
        complete: chart.total,
      };
    }
  );
  return (
    <div className="pl-2">
      <h4 className="text-xl">Hello Mr {data?.name} </h4>
      <p className="mt-1">{getTimeOfDayMessage()}</p>

      <div className=" grid lg:grid-cols-4 gap-5 grid-cols-2 mt-5 w-full">
        <div className="h-28 w-full border rounded-lg shadow-sm flex justify-center  items-center bg-[#30029010] px-2">
          <div className="text-center">
            <h3 className=" m lg:text-xl ">Booking Appointment</h3>
            <p className="text-2xl text-gray-800 mt-1 ">
              {" "}
              {data?.bookingAppointment}
            </p>
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
            <h3 className=" m lg:text-xl">Last Schedule</h3>
            <p className=" text-gray-800  mt-1">{data?.schedule?.date}</p>
            <p className=" text-gray-800  ">{data?.schedule?.schedule}</p>
          </div>
        </div>
      </div>
      <div className=" grid lg:grid-cols-2  grid-cols-1 gap-5 mt-20">
        <div>
          <h3 className="text-xl">Resent My Complete Donation</h3>
          <div className="mt-5 border w-full h-full hidden  lg:block md:block xl:block  p-3 rounded-2xl">
            <Table sx={{ overflow: "hidden" }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#30029010 " }}>
                <TableRow>
                  <TableCell>Requester Name</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Total Beg</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.myCompleteDonation?.map(
                  (service: any, index: number) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{service?.requestUserName}</TableCell>
                      <TableCell>{service?.location}</TableCell>
                      <TableCell> {service?.total} </TableCell>
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
                      <Typography>Resent Complete Donation</Typography>
                    </div>

                    <div className="  flex gap-2  justify-between">
                      <div className="w-2"></div>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className=" h-full py-2  border-t">
                    <AccordionRow
                      rowName="Requester Name"
                      data={service?.requestUserName}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Location"
                      data={service?.location}
                      style="w-36"
                    />
                    <AccordionRow
                      rowName="Total Beg"
                      data={`${service?.total} `}
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
          <div className="border h-full mt-12 lg:flex  items-center py-10  lg:px-3 rounded-2xl shadow">
            <div className=" hidden lg:block md:block xl:block">
              {" "}
              <MyBarChart
                width={530}
                height={250}
                data={donationBerChart}
                keys="complete"
              />
            </div>
            <div className=" block lg:hidden md:hidden xl:hidden">
              {" "}
              <MyBarChart
                width={280}
                height={250}
                data={donationBerChart}
                keys="complete"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodDonorActivity;
