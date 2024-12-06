import AuthForm from "@/components/AuthForm";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";

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
        }}
      >
        <Image
          src={"/icons/auth-image.svg"}
          width={200}
          height={200}
          alt="onboarding-image"
          style={{ width: "100%", height: "50%" }}
        />
      </div>
    </section>
  );
}
