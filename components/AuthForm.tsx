"use client";
import { AuthFormProps } from "@/types";
import React, { useState } from "react";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import CustomInput from "./CustomInput";

const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formSchema = z.object({
    Email: z.string().email().min(2, {
      message: "Email is incomplete",
    }),
    Password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

  const signUpformSchema = z.object({
    Email: z.string().email().min(2, {
      message: "Email is incomplete",
    }),
    Password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    FirstName: z.string().min(2, { message: "First name is required" }),
    LastName: z.string().min(2, { message: "Last name is required" }),
    Address: z.string().min(2, {
      message: "Please enter a proper address",
    }),
    State: z.string().min(2, {
      message: "Please enter a proper state",
    }),
    PostalCode: z.number().min(2, { message: "Please enter a postal code" }),
    DOB: z.date({ message: "Invalid date of birth" }),
    SSN: z.string().min(2, { message: "Please enter a valid SSN" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: "",
      Password: "",
    },
  });

  const signUpForm = useForm<z.infer<typeof signUpformSchema>>({
    resolver: zodResolver(signUpformSchema),
    defaultValues: {
      Email: "",
      Password: "",
      FirstName: "",
      LastName: "",
      Address: "",
      State: "",
      SSN: "",
      PostalCode: undefined,
      DOB: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    console.log(values);
    setLoading(false);
  }

  function onSignUpSubmit(values: z.infer<typeof signUpformSchema>) {
    setLoading(true);
    //do something
    setLoading(false);
  }
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
                ? "Welcome back! Please enter your details"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/*plaidlink */}</div>
      ) : type == "sign-in" ? (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomInput
                name="Email"
                label="Email"
                placeholder="Enter your Email address"
                form={form}
                type={"email"}
              />
              <CustomInput
                name="Password"
                label="Password"
                placeholder="Enter your Password"
                form={form}
                type={"password"}
              />
              <Button
                type="submit"
                style={{ width: "100%" }}
                className="bg-bankGradient text-white"
              >
                Submit
              </Button>
            </form>
          </Form>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            Don't have an account?{" "}
            <p
              style={{ marginLeft: 5 }}
              className="text-bankGradient hover:cursor-pointer"
              onClick={() => router.push("/signUp")}
            >
              Sign up
            </p>
          </div>
        </>
      ) : type == "sign-up" ? (
        <>
          <Form {...signUpForm}>
            <form
              onSubmit={signUpForm.handleSubmit(onSignUpSubmit)}
              className="space-y-8"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <CustomInput
                  name="FirstName"
                  label="First Name"
                  placeholder="John"
                  form={signUpForm}
                  type={"text"}
                />
                <CustomInput
                  name="LastName"
                  label="Last Name"
                  placeholder="Simon"
                  form={signUpForm}
                  type={"text"}
                />
              </div>
              <CustomInput
                name="Address"
                label="Address"
                placeholder="Enter your specific address"
                form={signUpForm}
                type={"text"}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <CustomInput
                  name="State"
                  label="State"
                  placeholder="ex:Lagos"
                  form={signUpForm}
                  type={"text"}
                />
                <CustomInput
                  name="PostalCode"
                  label="Postal Code"
                  placeholder="ex:11877"
                  form={signUpForm}
                  type={"text"}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <CustomInput
                  name="DOB"
                  label="Date of Birth"
                  placeholder="YYYY-MM-DD"
                  form={signUpForm}
                  type={"date"}
                />
                <CustomInput
                  name="SSN"
                  label="SSN"
                  placeholder="ex:221"
                  form={signUpForm}
                  type={"text"}
                />
              </div>
              <CustomInput
                name="Email"
                label="Email"
                placeholder="Enter your Email address"
                form={signUpForm}
                type={"email"}
              />
              <CustomInput
                name="Password"
                label="Password"
                placeholder="Enter your Password"
                form={signUpForm}
                type={"password"}
              />
              <Button
                type="submit"
                style={{ width: "100%" }}
                className="bg-bankGradient text-white"
              >
                Submit
              </Button>
            </form>
          </Form>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            Already have an account?{" "}
            <p
              style={{ marginLeft: 5 }}
              className="text-bankGradient hover:cursor-pointer"
              onClick={() => router.push("/signIn")}
            >
              Log in
            </p>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default AuthForm;
