"use client";
import { AuthFormProps } from "@/types";
import React, { useState } from "react";
import Image from "next/image";

const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState(null);
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <div className="flex flex-row items-center">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo"
            className="max-xl:w-11 hover:cursor-pointer"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </div>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type == "sign-in" ? "Log In" : "Sign Up"}
            <p className="text-16 font-light text-gray-600">
              {user
                ? "Link your account to get started"
                : type == "sign-in"
                ? "Welcome back! Please Enter your details"
                : "Please Enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/*plaidlink */}</div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default AuthForm;
