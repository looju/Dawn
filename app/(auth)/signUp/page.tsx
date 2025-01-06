"use client";
import { AlertBox } from "@/components/Alert";
import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/lib/user.actions";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default async function Page() {
  // useEffect(() => {
  //   const data = window.localStorage.getItem("user-data");
  //   const user = data !== null ? JSON.parse(JSON.stringify(data)) : null;
  //   if (user !== null) {
  //     redirect("/");
  //   }
  // }, []);
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
}
