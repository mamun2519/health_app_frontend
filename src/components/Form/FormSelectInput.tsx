"use client";
import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";

interface IOptions {
  value: string;
  label: string;
}
interface IInput {
  name: string;
  type?: string;
  size?: string;
  options?: IOptions[];
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}

export default function FormSelectInput({
  name,
  type,
  size,
  options,
  id,
  placeholder,
  validation,
  label,
}: IInput) {
  const { control } = useFormContext();

  return (
    <>
      {label && <label>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Select
            id={id}
            className={`${size}`}
            defaultValue={value}
            onChange={onChange}
            options={options}
          />
        )}
      ></Controller>
    </>
  );
}
