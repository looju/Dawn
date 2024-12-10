"use client";
import { useDataStore } from "@/Store/UsersData";
import AuthForm from "@/components/AuthForm";
import { redirect } from "next/navigation";
import React from "react";

export default function Page() {
  const data = localStorage.getItem("user-data");
  const user = data !== null ? JSON.parse(data) : null;
  if (user == null) {
    redirect("/");
  }
  return (
    <section className="flex-center size-full max-sm:px-6 ">
      <AuthForm type="sign-in" />
    </section>
  );
}
