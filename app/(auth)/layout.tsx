import AuthForm from "@/components/AuthForm";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div
        style={{
          width: "70%",
          display: "flex",
          height: "100%",
          alignSelf: "center",
        }}
      >
        <Image
          src={"/icons/auth-image.svg"}
          width={200}
          height={200}
          alt="onboarding-image"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <ToastContainer autoClose={5000} />
    </section>
  );
}
