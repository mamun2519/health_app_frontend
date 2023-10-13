import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import { Controller, useFormContext } from "react-hook-form";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));
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

export default function SelectInput({
  name,
  type,
  size,
  id,
  placeholder,
  validation,
  options,
  label,
}: IInput) {
  const [age, setAge] = React.useState("");
  const handleChange = (event: { target: { value: string } }) => {
    setAge(event.target.value);
  };
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <FormControl className="w-full" variant="standard">
            <InputLabel id="demo-customized-select-label">{label}</InputLabel>
            <Select
              //    {...field}
              //   id={id}
              //    label={label}
              //     variant="outlined"
              // color="secondary"
              placeholder={placeholder}
              autoFocus={true}
              //    className={`w-full outline-none ${size}`}
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={value}
              onChange={onChange}
              //   placeholder="Select CAtegory"
              input={<BootstrapInput />}
            >
              {options?.map((op, i) => (
                <MenuItem key={i} value={op.value}>
                  {op.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      ></Controller>
    </div>
  );
}
