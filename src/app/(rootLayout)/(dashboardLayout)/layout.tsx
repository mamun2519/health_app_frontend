import DashboardLayout from "@/components/ui/DashboardLayout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard - Health Care",
  description: "Generated by create next app",
};

const DashboardRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default DashboardLayout;
