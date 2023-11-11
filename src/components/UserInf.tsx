"use client";
import { useUser,UserButton } from "@clerk/nextjs";

import React from "react";

function UserInf() {
  const { user } = useUser();
  return !user ? (
    <button className="bg-blue-500 hover:opacity-90 rounded-lg text-white font-semibold px-5 py-3">
      Log in
    </button>
  ) : (
    <UserButton/>
  );
}

export default UserInf;
