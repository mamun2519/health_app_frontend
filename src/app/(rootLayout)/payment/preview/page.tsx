import PreviewPageComponent from "@/components/payment/PreviewPageComponent";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Preview - Health Care",
  description: "Generated by create next app",
};
const PreviewPage = () => {
  return (
    <div>
      <PreviewPageComponent />
    </div>
  );
};

export default PreviewPage;
