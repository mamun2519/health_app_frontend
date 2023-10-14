import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
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
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          {label && <label>{label}</label>}
          <input
            type="date"
            placeholder="Chose Date"
            {...field}
            id={id}
            className=" w-full border-2 h-14 rounded px-4 outline-blue-500"
          />
        </>
      )}
    />
  );
};

export default SelectDate;
