"use client";
import React, { useState } from "react";
import { DashBoardItem } from "./DashboardItem";

import { getUserInfo, logOut } from "@/services/auth.Services";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/Slice/user";

interface IUser {
  role: string;
}
export interface SidebarItem {
  icon: JSX.Element;
  link: string;
  level: string | JSX.Element;
}

const MenuItems = () => {
  const user: any = getUserInfo();
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   const fetchSideBarItem = async () => {
  //     const items = user && DashBoardItem(user?.role as string);
  //     setSideBarItem(items as SidebarItem[]);
  //   };

  //   fetchSideBarItem();
  // }, [user]);
  const handleLogout = () => {
    logOut();
    dispatch(setUser({ userId: null, email: null, role: null }));
  };
  return (
    <div className="  py-0">
      {DashBoardItem(user?.role as string)?.map(
        (sideBarItem: any, index: number) => (
          <div key={sideBarItem.level} className="py-1">
            <Link
              href={sideBarItem?.link}
              className={`${
                pathName == sideBarItem.link ? "bg-[#d1001c] text-white" : ""
              } px-5 flex gap-5 cursor-pointer    h-12 rounded-r-3xl`}
            >
              <div className="mt-3 sideBarItem-gray-500 ">
                {sideBarItem?.icon}
              </div>
              <div className="mt-3">
                <span>{sideBarItem?.level}</span>
              </div>
            </Link>
          </div>
        )
      )}
      <button
        onClick={() => handleLogout()}
        className="px-5 flex gap-5 cursor-pointer    h-12 rounded-r-3xl"
      >
        <div className="mt-3 sideBarItem-gray-500 ">
          <LogoutIcon />
        </div>
        <div className="mt-4">
          <span>LogOut</span>
        </div>
      </button>
    </div>
  );
};

export default MenuItems;
