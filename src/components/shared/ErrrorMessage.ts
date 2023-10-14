import * as React from "react";
import Alert from "@mui/material/Alert";
import Swal from "sweetalert2";

export default function errorMessage({ message }: { message: string }) {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
}
