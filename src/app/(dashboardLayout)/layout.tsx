import DashboardLayout from "@/components/ui/DashboardLayout";

const DashboardRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default DashboardLayout;
