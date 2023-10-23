"use client";
import React, { useEffect, useState } from "react";
import { DashBoardItem } from "./DashboardItem";
import MyLink from "./MyLink";
import { getUserInfo, logOut } from "@/services/auth.Services";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarItem {
  icon: JSX.Element;
  link: string;
  level: string | JSX.Element;
}

const MenuItems = () => {
  const [sideBarItem, setSideBarItem] = useState<SidebarItem[]>([]);

  const user: any = getUserInfo();
  const pathName = usePathname();
  console.log(pathName);
  useEffect(() => {
    const fetchSideBarItem = async () => {
      const items = DashBoardItem(user?.role);
      setSideBarItem(items as SidebarItem[]);
    };

    fetchSideBarItem();
  }, []);

  return (
    <div className=" ">
      {sideBarItem?.map((sideBarItem: any, index: number) => (
        <div key={sideBarItem.level} className="py-1">
          <div
            className={`${
              pathName == sideBarItem.link ? "bg-[#d1001c] text-white" : ""
            } px-5 flex gap-5 cursor-pointer    h-12 rounded-r-3xl`}
          >
            <div className="mt-3 sideBarItem-gray-500 ">
              {sideBarItem?.icon}
            </div>
            <div className="mt-3">
              <Link href={sideBarItem?.link}>{sideBarItem?.level}</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
