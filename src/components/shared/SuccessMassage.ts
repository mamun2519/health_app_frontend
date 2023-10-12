import * as React from "react";
import Alert from "@mui/material/Alert";
import Swal from "sweetalert2";

export default function successMessage({
  message,
  header,
}: {
  message: string;
  header: string;
}) {
  return Swal.fire(header, message, "success");
}
