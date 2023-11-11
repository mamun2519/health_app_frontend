import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type IAccordingProps = {
  name: string;
  message: string;
};
export default function BasicAccordion({ name, message }: IAccordingProps) {
  return (
    <div className="pt-1">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{message}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
