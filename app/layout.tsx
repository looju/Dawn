import type { Metadata } from "next";
import localFont from "next/font/local";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const ibmFont = localFont({
  src: "./fonts/IBMPlexSerif-Medium.ttf",
  variable: "--ibm-plex-serif",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Dawn",
  description:
    "Dawn is a sleek,modern banking solution for everything you need",
  keywords: ["banking", "finance", "modern", "transfers"],
  applicationName: "Dawn",
  icons: {
    icon: "./icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ibmFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
