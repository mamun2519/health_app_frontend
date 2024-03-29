import { getErrorMessageByPropertyName } from "@/utils/Schema-validaiton";
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
  showPassword?: string;
}
const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  showPassword,
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
      render={({ field }) =>
        name == "donnetDate" ? (
          <>
            {label && <label>{label}</label>}
            <input
              type="date"
              placeholder="Chose Date"
              {...field}
              id={id}
              className={` lg:w-full w-full border-2 h-14 rounded px-4 outline-blue-500 ${size}  `}
            />
            <p className="text-red-500">{errorMessage}</p>
          </>
        ) : (
          <>
            <TextField
              {...field}
              id={id}
              label={label}
              //     variant="outlined"
              // color="secondary"
              placeholder={placeholder}
              type={showPassword === "password" ? "password" : "text"}
              autoFocus={true}
              className={`lg:w-full w-full outline-none ${size}`}
            />
            <p className="text-red-500">{errorMessage}</p>
          </>
        )
      }
    />
  );
};

export default FormInput;
