"use client";
import React, { useEffect, useState } from "react";
import { DashBoardItem } from "./DashboardItem";

import { getUserInfo } from "@/services/auth.Services";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IUser {
  role: string;
}
export interface SidebarItem {
  icon: JSX.Element;
  link: string;
  level: string | JSX.Element;
}

const MenuItems = () => {
  const [sideBarItem, setSideBarItem] = useState<SidebarItem[]>([]);

  const user: any = getUserInfo();
  const pathName = usePathname();

  // useEffect(() => {
  //   const fetchSideBarItem = async () => {
  //     const items = user && DashBoardItem(user?.role as string);
  //     setSideBarItem(items as SidebarItem[]);
  //   };

  //   fetchSideBarItem();
  // }, [user]);

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
    </div>
  );
};

export default MenuItems;
