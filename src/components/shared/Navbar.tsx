"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LogoutBtn from "../ui/LogoutBtn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Notification from "../ui/Notificaiton";
import { getFromLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";
import { getUserInfo } from "@/services/auth.Services";
import { setUser } from "@/redux/Slice/user";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const userData: any = getFromLocalStorage(authKey);

  if (userData) {
    const { userId, email, role } = getUserInfo() as {
      userId: string;
      email: string;
      role: string;
    };

    dispatch(setUser({ userId, email, role }));
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="  bg-[#30029010]">
      <div className="navbar     max-w-7xl mx-auto">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <p>
              {" "}
              He<span className="text-[#d1001c]">alth</span> Care
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/bloodDonor/all">Blood Donor</Link>
            </li>
            <li>
              <Link href="/doctor">Doctor</Link>
            </li>
            <li>
              <Link href="/doctor/service">Service</Link>
            </li>

            {user?.role && (
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            )}

            {/* <li>
              <a>Request Donor</a>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className=" px-8 flex gap-4 ">
            {user?.role && (
              <div>
                <Notification
                  anchorEl={anchorEl}
                  setAnchorEl={setAnchorEl}
                  open={open}
                  handleClick={handleClick}
                  handleClose={handleClose}
                />
              </div>
            )}
            {/* <div className="text-[#d1001c]  ">
              {" "}
              <div className="h-10 w-10 relative cursor-pointer">
                <div>
                  <span className="text-3xl ">
                    <CircleNotificationsIcon />
                  </span>

                  <span className="bg-white w-6 h-6 rounded-full absolute text-center  right-[1px]   ">
                    {cart?.length}
                  </span>
                </div>
              </div>
            </div> */}
          </div>
          <div>
            <LogoutBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
