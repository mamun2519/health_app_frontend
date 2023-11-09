import DashboardDoctorServiceDetails from "@/components/doctorService/DashboardServiceDetails";

import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import PreviewIcon from "@mui/icons-material/Preview";
const AdminServiceDetailsPage = ({ params }: { params: { id: string } }) => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Admin/doctorService",
      level: "Manage Service",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Admin/doctorService",
      level: "Service Details",
      icons: <PreviewIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "#d1001c",
    },
  ];
  return (
    <div>
      <DashboardDoctorServiceDetails bread={bread} id={params?.id} />
    </div>
  );
};

export default AdminServiceDetailsPage;
