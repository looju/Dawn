"use client";
import AuthForm from "@/components/AuthForm";
import React, { useEffect } from "react";

export default function Page() {
  return (
    <section className="flex-center size-full max-sm:px-6 ">
      <AuthForm type="sign-in" />
    </section>
  );
}
