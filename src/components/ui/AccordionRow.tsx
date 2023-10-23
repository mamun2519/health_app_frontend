import { Typography } from "@mui/material";
import React from "react";
interface AccordionRowProps {
  style: string;
  data: string | number | React.ReactNode | React.ReactElement;
  rowName: string;
}
const AccordionRow = ({ style, data, rowName }: AccordionRowProps) => {
  return (
    <div className="  mt-1 w-full flex  flex-1 gap-3">
      <div className={`${style} text-[14px] `}>
        <p>{rowName}</p>
      </div>
      <div className="">
        <Typography className="text-[13px]">{data}</Typography>
      </div>
    </div>
  );
};

export default AccordionRow;
