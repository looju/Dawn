import MobileNav from "@/components/mobileNav";
import SideBar from "@/components/sideBar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "loju", lastName: "hi" };
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
