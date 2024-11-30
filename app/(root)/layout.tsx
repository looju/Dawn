import SideBar from "@/components/sideBar";
import type { Metadata } from "next";
import localFont from "next/font/local";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "loju", lastName: "hi" };
  return (
    <main className="flex flex-row w-full h-screen font-ibm-plex-serif">
      <SideBar user={loggedIn} />
      {children}
    </main>
  );
}
