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

const FromTimePicker = ({
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
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {label && <label>{label}</label>}
            <input
              type="time"
              placeholder="Chose Date"
              {...field}
              id={id}
              className=" w-full border-2 h-14 rounded px-4 outline-blue-500"
            />
          </>
        )}
      />
    </div>
  );
};

export default FromTimePicker;
