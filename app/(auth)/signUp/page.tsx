"use client";
import { AlertBox } from "@/components/Alert";
import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/lib/user.actions";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import useLocalStorage from "use-local-storage";

export default async function Page() {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
}
