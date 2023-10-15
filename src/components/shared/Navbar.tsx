import Link from "next/link";
import React from "react";
import LogoutBtn from "../ui/LogoutBtn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
const Navbar = () => {
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
            Smart Halt Care
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Blood Donor</a>
            </li>
            <li>
              <a>Doctor</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <a>Request Donor</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className=" px-8 flex gap-4">
            <span className="text-red-500  text-2xl">
              {" "}
              <ShoppingCartIcon />
            </span>
            <span className="text-red-500 text-2xl">
              <CircleNotificationsIcon />
            </span>
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
