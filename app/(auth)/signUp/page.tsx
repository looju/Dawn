import { AlertBox } from "@/components/Alert";
import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/lib/user.actions";
import React from "react";

export default async function Page() {
  const user = await getLoggedInUser();
  console.log(user, "lll");
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
}
