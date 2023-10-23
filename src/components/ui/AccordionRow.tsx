import { Typography } from "@mui/material";
import React from "react";
interface AccordionRowProps {
  style: string;
  data: string | number;
  rowName: string;
}
const AccordionRow = ({ style, data, rowName }: AccordionRowProps) => {
  return (
    <div className=" flex mt-1">
      <div className={`${style}`}>
        <Typography>{rowName}</Typography>
      </div>
      <div className="">
        <Typography className="">{data}</Typography>
      </div>
    </div>
  );
};

export default AccordionRow;
