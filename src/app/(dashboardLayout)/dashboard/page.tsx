"use client";
import AdminActivity from "@/components/dashboard/Admin";
import BloodDonorActivity from "@/components/dashboard/BloodDonor";
import UserDashboard from "@/components/dashboard/User";
import DoctorActivity from "@/components/dashboard/doctor";
import DashboardLayout from "@/components/ui/DashboardLayout";
import { USER_ROLE } from "@/enums/user";
import { getUserInfo } from "@/services/auth.Services";
import React from "react";

const DashboardPage = () => {
  const user: any = getUserInfo();

  return (
    <div>
      {user?.role === USER_ROLE.USER && <UserDashboard />}
      {user?.role === USER_ROLE.BLOODDONOR && <BloodDonorActivity />}
      {user?.role === USER_ROLE.DOCTOR && <DoctorActivity />}
      {user?.role === USER_ROLE.ADMIN ||
        (user?.role === USER_ROLE.SUPER_ADMIN && <AdminActivity />)}
    </div>
  );
};

export default DashboardPage;
