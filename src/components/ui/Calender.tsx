import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar() {
  return (
    <div className=" border bg-white  shadow-sm mt-2">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar />
      </LocalizationProvider>
    </div>
  );
}
