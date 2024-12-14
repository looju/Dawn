"use client";
import { useDataStore } from "@/Store/UsersData";
import AuthForm from "@/components/AuthForm";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const data = window.localStorage.getItem("user-data");
    const user = data !== null ? JSON.parse(JSON.stringify(data)) : null;
    if (user !== null) {
      redirect("/");
    }
  }, []);
  return (
    <section className="flex-center size-full max-sm:px-6 ">
      <AuthForm type="sign-in" />
    </section>
  );
}
