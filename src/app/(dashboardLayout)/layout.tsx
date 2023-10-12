import DashboardLayout from "@/components/ui/DashboardLayout";
import React from "react";

const DashboardRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Navbar />            {children} */}

      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default DashboardLayout;
