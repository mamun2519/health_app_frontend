"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { SetStateAction, useState } from "react";
import { formatDateToYYYYMMDD } from "@/utils/DateConvater";

export default function BasicDateCalendar({ handleDateSelect }: any) {
  return (
    <div className=" border bg-white  shadow-sm mt-2">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar onChange={handleDateSelect} />
      </LocalizationProvider>
      {/* <p>Selected Date: {selectedDate ? selectedDate.toISOString() : "None"}</p> */}
    </div>
  );
}
