import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { USER_ROLE } from "@/enums/user";

const defaultSideBar = [
  {
    link: "/dashboard/User/profile",
    level: "Profile",
    icon: <InboxIcon></InboxIcon>,
  },
  // {
  //   link: "/",
  //   level: "Change Password",
  //   icon: <MailIcon></MailIcon>,
  // },
  // {
  //   link: "/",
  //   level: "My Activities",
  //   icon: <MailIcon></MailIcon>,
  // },
];
const userSideBar = [
  ...defaultSideBar,
  {
    link: "/dashboard/User/appointment",
    level: "Appointment",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/User/myDonorRequest",
    level: "Donor Request",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/User/joinDoctor",
    level: "Join Doctor",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/User/prescription",
    level: "Prescription",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/User/payment",
    level: "Payment Details",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/User/history",
    level: "History",
    icon: <InboxIcon></InboxIcon>,
  },
];
const bloodDonorSideBar = [
  {
    link: "/dashboard/BloodDonor/profile",
    level: "Profile",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/BloodDonor/myDonorRequest",
    level: "User Request",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/BloodDonor/myRequest",
    level: "My Request",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/BloodDonor/appointment",
    level: "Appointment",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/BloodDonor/joinDoctor",
    level: "Join Doctor",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/BloodDonor/prescription",
    level: "Prescription",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/BloodDonor/payment",
    level: "Payment Details",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/BloodDonor/history",
    level: "History",
    icon: <InboxIcon></InboxIcon>,
  },
];
const doctorSideBar = [
  {
    link: "/dashboard/Doctor/profile",
    level: "Profile",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/Doctor/appointment",
    level: "Booked Appointment",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/Doctor/myService",
    level: "My Service",
    icon: <InboxIcon></InboxIcon>,
  },
  // todo foture amplimention
  // {
  //   link: "/",
  //   level: "Service Offer",
  //   icon: <InboxIcon></InboxIcon>,
  // },
  // {
  //   link: "/",
  //   level: "Service Review",
  //   icon: <InboxIcon></InboxIcon>,
  // },
  {
    link: "/dashboard/Doctor/prescription",
    level: "Prescription",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/Doctor/googleMeet",
    level: "Google Meet",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/",
    level: "Donor Request",
    icon: <InboxIcon></InboxIcon>,
  },
  // feture amplemention
  {
    link: "/dashboard/Doctor/payment",
    level: "Payment",
    icon: <InboxIcon></InboxIcon>,
  },
  // {
  //   link: "/",
  //   level: "Withdraw",
  //   icon: <InboxIcon></InboxIcon>,
  // },
  {
    link: "/",
    level: "History",
    icon: <InboxIcon></InboxIcon>,
  },
  ,
];
const managerSideBar = [
  {
    link: "/dashboard/Admin/profile",
    level: "Profile",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/Admin/appointment",
    level: "Manage Appointment",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/Admin/doctorService",
    level: "Manage Service",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/Admin/donorRequest",
    level: "Manage Request",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/Admin/prescription",
    level: "Manage Prescription",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/Admin/payment",
    level: "Manage Payment",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/Admin/doctor",
    level: "Manage Doctor",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/Admin/donor",
    level: "Manage Donor",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/Admin/manageAdmin",
    level: "Manage Admin",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/dashboard/Admin/user",
    level: "Manage User",
    icon: <InboxIcon></InboxIcon>,
  },
  // {
  //   link: "/dashboard/Admin/appointment",
  //   level: "Withdraw",
  //   icon: <InboxIcon></InboxIcon>,
  // },
];

const superAdminSideBar = [
  {
    link: "/",
    level: "Company Balance",
    icon: <InboxIcon></InboxIcon>,
    toggle: false,
    // children: [
    //   {
    //     link: "/",
    //     level: "User",
    //     icon: <InboxIcon></InboxIcon>,
    //   },
    // ],
  },
  ...managerSideBar,
  {
    link: "/",
    level: "User",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/",
    level: "blood Donor",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/",
    level: "Doctor",
    icon: <InboxIcon></InboxIcon>,
  },
  {
    link: "/",
    level: "Admin",
    icon: <InboxIcon></InboxIcon>,
  },
];

export const DashBoardItem = (role: string) => {
  if (role == USER_ROLE.USER) return userSideBar;
  else if (role == USER_ROLE.BLOODDONOR) return bloodDonorSideBar;
  else if (role === USER_ROLE.DOCTOR) return doctorSideBar;
  else if (role === USER_ROLE.ADMIN) return managerSideBar;
  else if (role === USER_ROLE.SUPER_ADMIN) return superAdminSideBar;
  else {
    return [
      {
        link: "",
        level: "",
        icon: "",
      },
    ];
  }
};
