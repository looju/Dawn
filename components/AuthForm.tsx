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

const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const formSchema = z.object({
    Email: z.string().email().min(2, {
      message: "Email is incomplete",
    }),
    Password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: "",
      Password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                ? "Welcome back! Please Enter your details"
                : "Please Enter your details"}
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
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Email address"
                        {...field}
                      />
                    </FormControl>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "right",
                      }}
                    >
                      <FormMessage
                        style={{
                          color: "#ff0000",
                          fontSize: 12,
                        }}
                      />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Password" {...field} />
                    </FormControl>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "right",
                      }}
                    >
                      <FormMessage
                        style={{
                          color: "#ff0000",
                          fontSize: 12,
                        }}
                      />
                    </div>
                  </FormItem>
                )}
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Emaill</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Email address"
                        {...field}
                      />
                    </FormControl>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "right",
                      }}
                    >
                      <FormMessage
                        style={{
                          color: "#ff0000",
                          fontSize: 12,
                        }}
                      />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Password" {...field} />
                    </FormControl>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "right",
                      }}
                    >
                      <FormMessage
                        style={{
                          color: "#ff0000",
                          fontSize: 12,
                        }}
                      />
                    </div>
                  </FormItem>
                )}
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
