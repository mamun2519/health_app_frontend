import { getErrorMessageByPropertyName } from "@/utils/Schema-validaiton";
import { TextField } from "@mui/material";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useFormContext } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
interface IInput {
  name: string;
  type?: string;
  size?: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}
const SelectDate = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* Configure DatePicker with the DateFnsUtils date adapter */}
            <>
              <DatePicker
                {...field}
                label={label}
                className="w-full"
                // inputFormat="MM/dd/yyyy" // Customize the date format as needed
                // placeholder={placeholder || "Choose Date"} // Use the provided placeholder or a default value
                // renderInput={(params: any) => <input {...params} />}
              />
              <p className="text-red-500">{errorMessage}</p>
            </>
          </LocalizationProvider>
        </>
      )}
    />
  );
};

export default SelectDate;
