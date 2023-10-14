"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import NextLink from "next/link"; // Import Next.js Link component

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.log(event.target);
  console.info("You clicked a breadcrumb.");
}
interface IBoard {
  link: string;
  level: string;
  icons: React.ReactElement | React.ReactNode;
  color: string;
}

export default function IconBreadcrumbs({
  boreadcrumbs,
}: {
  boreadcrumbs: IBoard[];
}) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {boreadcrumbs?.map((item: IBoard, index) => (
          <Link
            key={index}
            component={NextLink}
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color={item.color}
            href={item.link}
          >
            {item?.icons}
            {item.level}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}
