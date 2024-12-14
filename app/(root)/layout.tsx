"use client";
import { useDataStore } from "@/Store/UsersData";
import MobileNav from "@/components/mobileNav";
import SideBar from "@/components/sideBar";
import { getLoggedInUser } from "@/lib/user.actions";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Account } from "appwrite";
import { useEffect, useState } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "loju", lastName: "hi" };

  useEffect(() => {
    const data = window.localStorage.getItem("user-data");
    const user = data !== null ? JSON.parse(JSON.stringify(data)) : null;
    if (user == null) {
      redirect("/signIn");
    }
  }, []);

  return (
    <main className="flex flex-row w-full h-screen font-ibm-plex-serif">
      <SideBar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
