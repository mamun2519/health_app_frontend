"use client";
import React, { useEffect, useState } from "react";
import { DashBoardItem } from "./DashboardItem";
import MyLink from "./MyLink";
import { getUserInfo, logOut } from "@/services/auth.Services";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface SidebarItem {
  icon: JSX.Element;
  link: string;
  level: string | JSX.Element;
}

const MenuItems = () => {
  const [sideBarItem, setSideBarItem] = useState<SidebarItem[]>([]);
  const router = useRouter();
  const user: any = getUserInfo();

  useEffect(() => {
    const fetchSideBarItem = async () => {
      const items = DashBoardItem(user?.role);
      setSideBarItem(items as SidebarItem[]);
    };

    fetchSideBarItem();
  }, []);
  console.log(router);

  return (
    <div>
      {sideBarItem?.map((sideBarItem: any, index: number) => (
        <div key={sideBarItem.level}>
          <div className="px-5 flex gap-5 cursor-pointer">
            <div className="mt-5  sideBarItem-gray-500">
              {sideBarItem?.icon}
            </div>
            <div className="mt-5">
              <Link href={sideBarItem?.link} passHref>
                {sideBarItem?.level}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
