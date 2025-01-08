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
import useLocalStorage from "use-local-storage";
import { firstNames, lastNames } from "@/constants";
import React from "react";

export const PageContext = React.createContext(null);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState({});
  const [loggedInUser] = useLocalStorage<any>("user", null);
  if (!loggedInUser) redirect("/signIn");

  return (
    <PageContext.Provider value={user}>
      <main className="flex flex-row w-full h-screen font-ibm-plex-serif">
        <SideBar user={loggedInUser} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
            <div>
              <MobileNav user={loggedInUser} />
            </div>
          </div>
          {children}
        </div>
      </main>
    </PageContext.Provider>
  );
}
