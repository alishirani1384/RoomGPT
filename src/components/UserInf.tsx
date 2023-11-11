"use client";
import { useUser,UserButton } from "@clerk/nextjs";
import Link from "next/link";

import React from "react";

function UserInf() {
  const { user } = useUser();
  return !user ? (
    <Link href={"/room"} className="bg-blue-500 hover:opacity-90 rounded-lg text-white font-semibold px-5 py-3">
      Log in
    </Link>
  ) : (
    <UserButton/>
  );
}

export default UserInf;
