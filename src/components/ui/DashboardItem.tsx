import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { USER_ROLE } from "@/enums/user";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import PaidIcon from "@mui/icons-material/Paid";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import BusinessIcon from "@mui/icons-material/Business";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
const defaultSideBar = [
  {
    link: "/dashboard/User/profile",
    level: "Profile",
    icon: <AccountBoxIcon></AccountBoxIcon>,
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
    icon: <BreakfastDiningIcon></BreakfastDiningIcon>,
  },
  {
    link: "/dashboard/User/myDonorRequest",
    level: "Donor Request",
    icon: <RecordVoiceOverIcon></RecordVoiceOverIcon>,
  },
  {
    link: "/dashboard/User/joinDoctor",
    level: "Join Doctor",
    icon: <PersonPinCircleIcon></PersonPinCircleIcon>,
  },
  {
    link: "/dashboard/User/prescription",
    level: "Prescription",
    icon: <MedicalServicesIcon></MedicalServicesIcon>,
  },
  {
    link: "/dashboard/User/payment",
    level: "Payment Details",
    icon: <PaidIcon></PaidIcon>,
  },
  {
    link: "/dashboard",
    level: "My Activities",
    icon: <PendingActionsIcon></PendingActionsIcon>,
  },
  {
    link: "/dashboard/User/history",
    level: "History",
    icon: <RestorePageIcon></RestorePageIcon>,
  },
];
const bloodDonorSideBar = [
  {
    link: "/dashboard/BloodDonor/profile",
    level: "Profile",
    icon: <AccountBoxIcon></AccountBoxIcon>,
  },
  {
    link: "/dashboard/BloodDonor/myDonorRequest",
    level: "Blood Request",
    icon: <RecordVoiceOverIcon></RecordVoiceOverIcon>,
  },
  {
    link: "/dashboard/BloodDonor/myRequest",
    level: "My Request",
    icon: <RecentActorsIcon></RecentActorsIcon>,
  },
  {
    link: "/dashboard/BloodDonor/appointment",
    level: "Appointment",
    icon: <BreakfastDiningIcon></BreakfastDiningIcon>,
  },
  {
    link: "/dashboard/BloodDonor/joinDoctor",
    level: "Join Doctor",
    icon: <PersonPinCircleIcon></PersonPinCircleIcon>,
  },
  {
    link: "/dashboard/BloodDonor/prescription",
    level: "Prescription",
    icon: <MedicalServicesIcon></MedicalServicesIcon>,
  },
  {
    link: "/dashboard/BloodDonor/payment",
    level: "Payment Details",
    icon: <PaidIcon></PaidIcon>,
  },
  {
    link: "/dashboard",
    level: "My Activities",
    icon: <PendingActionsIcon></PendingActionsIcon>,
  },
  {
    link: "/dashboard/BloodDonor/history",
    level: "History",
    icon: <RestorePageIcon></RestorePageIcon>,
  },
];
const doctorSideBar = [
  {
    link: "/dashboard/Doctor/profile",
    level: "Profile",
    icon: <AccountBoxIcon></AccountBoxIcon>,
  },
  {
    link: "/dashboard/Doctor/appointment",
    level: "Booked Appointment",
    icon: <BreakfastDiningIcon></BreakfastDiningIcon>,
  },
  {
    link: "/dashboard/Doctor/myService",
    level: "My Service",
    icon: <MonitorHeartIcon></MonitorHeartIcon>,
  },

  {
    link: "/dashboard/Doctor/serviceOffer",
    level: "Service Offer",
    icon: <BusinessIcon></BusinessIcon>,
  },
  // todo foture amplimention

  // {
  //   link: "/",
  //   level: "Service Review",
  //   icon: <InboxIcon></InboxIcon>,
  // },
  {
    link: "/dashboard/Doctor/prescription",
    level: "Prescription",
    icon: <MedicalServicesIcon></MedicalServicesIcon>,
  },
  {
    link: "/dashboard/Doctor/googleMeet",
    level: "Google Meet",
    icon: <JoinFullIcon></JoinFullIcon>,
  },
  {
    link: "/dashboard/Doctor/myDonorRequest",
    level: "Donor Request",
    icon: <RecordVoiceOverIcon></RecordVoiceOverIcon>,
  },
  // feture amplemention
  {
    link: "/dashboard/Doctor/payment",
    level: "Payment",
    icon: <PaidIcon></PaidIcon>,
  },
  {
    link: "/dashboard/Doctor/withdraw",
    level: "Withdraw",
    icon: <PublishedWithChangesIcon></PublishedWithChangesIcon>,
  },
  {
    link: "/dashboard",
    level: "My Activities",
    icon: <PendingActionsIcon></PendingActionsIcon>,
  },
  {
    link: "/",
    level: "History",
    icon: <RestorePageIcon></RestorePageIcon>,
  },
  ,
];
const managerSideBar = [
  {
    link: "/dashboard/Admin/profile",
    level: "Profile",
    icon: <AccountBoxIcon></AccountBoxIcon>,
  },
  {
    link: "/dashboard/Admin/appointment",
    level: "Manage Appointment",
    icon: <BreakfastDiningIcon></BreakfastDiningIcon>,
  },
  {
    link: "/dashboard/Admin/doctorService",
    level: "Manage Service",
    icon: <MonitorHeartIcon></MonitorHeartIcon>,
  },
  {
    link: "/dashboard/Admin/donorRequest",
    level: "Manage Request",
    icon: <ManageAccountsIcon></ManageAccountsIcon>,
  },
  {
    link: "/dashboard/Admin/prescription",
    level: "Manage Prescription",
    icon: <MedicalServicesIcon></MedicalServicesIcon>,
  },
  {
    link: "/dashboard/Admin/payment",
    level: "Manage Payment",
    icon: <PaidIcon></PaidIcon>,
  },
  {
    link: "/dashboard/Admin/withdraw",
    level: "Manage Withdraw",
    icon: <PublishedWithChangesIcon></PublishedWithChangesIcon>,
  },
  {
    link: "/dashboard/Admin/doctor",
    level: "Manage Doctor",
    icon: <PeopleAltIcon></PeopleAltIcon>,
  },
  {
    link: "/dashboard/Admin/donor",
    level: "Manage Donor",
    icon: <AccountCircleIcon></AccountCircleIcon>,
  },
  {
    link: "/dashboard",
    level: "Activities",
    icon: <PendingActionsIcon></PendingActionsIcon>,
  },
];

const superAdminSideBar = [
  ...managerSideBar,
  {
    link: "/dashboard/Admin/manageAdmin",
    level: "Manage Admin",
    icon: <AdminPanelSettingsIcon></AdminPanelSettingsIcon>,
  },
  {
    link: "/dashboard/Admin/user",
    level: "Manage User",
    icon: <AdminPanelSettingsIcon></AdminPanelSettingsIcon>,
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
