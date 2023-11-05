"use client";
import { authKey } from "@/constants/storageKey";
import { setUser } from "@/redux/Slice/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getUserInfo, logOut, loggedIn } from "@/services/auth.Services";
import { getFromLocalStorage } from "@/utils/local-storage";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LogoutBtn = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const userData = getFromLocalStorage(authKey);

  if (userData) {
    const { userId, email, role } = getUserInfo() as {
      userId: string;
      email: string;
      role: string;
    };

    dispatch(setUser({ userId, email, role }));
  }

  const handleLogout = () => {
    logOut();
    dispatch(setUser({ userId: null, email: null, role: null }));
  };
  return (
    <div>
      {!user.role && (
        //   <button
        //     onClick={() => handleLogout()}
        //     className=" bg-[#d1001c] text-white px-8 py-2 rounded-lg font-medium"
        //   >
        //     Logout
        //   </button>
        // ) : (
        <Link
          href="/login"
          className=" bg-[#d1001c] text-white px-8 py-2 rounded-lg font-medium"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default LogoutBtn;
