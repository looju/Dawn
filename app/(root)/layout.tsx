import { useDataStore } from "@/Store/UsersData";
import MobileNav from "@/components/mobileNav";
import SideBar from "@/components/sideBar";
import { getLoggedInUser } from "@/lib/user.actions";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Account } from "appwrite";
// import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [user, setUser] = useState<[] | null>(null);
  // const [storeUser, setStoredUser] = useLocalStorage("user", null);
  // if (!storeUser) redirect("/signIn");

  let storeUser = {};

  return (
    <main className="flex flex-row w-full h-screen font-ibm-plex-serif">
      <SideBar user={storeUser} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={storeUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
