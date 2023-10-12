"use client";
import { logOut, loggedIn } from "@/services/auth.Services";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LogoutBtn = () => {
  const [user, setUser] = useState<boolean | null>(null);
  useEffect(() => {
    setUser(loggedIn());
  }, [user]);

  return (
    <div>
      {user == true ? (
        <button
          onClick={() => logOut()}
          className=" bg-[#d1001c] text-white px-8 py-2 rounded-lg font-medium"
        >
          Logout
        </button>
      ) : (
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
