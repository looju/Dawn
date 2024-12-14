"use client";
import { AuthFormProps } from "@/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Transition } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ID, Models } from "appwrite";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import CustomInput from "./CustomInput";
import { signIn, signUp } from "@/lib/user.actions";
import { AlertBox } from "./Alert";
import clsx from "clsx";
import { cn } from "@/lib/utils";

const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState<Models.Session | null | string>(null);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState<"Success" | "Error" | "Warning">("Success");
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email().min(2, {
      message: "Email is incomplete",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

  const signUpformSchema = z.object({
    email: z.string().email().min(2, {
      message: "Email is incomplete",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    firstName: z.string().min(2, { message: "First name is required" }),
    lastName: z.string().min(2, { message: "Last name is required" }),
    address1: z.string().min(2, {
      message: "Please enter a proper address",
    }),
    state: z.string().min(2, {
      message: "Please enter a proper state",
    }),
    city: z.string().min(2, {
      message: "Please enter the city name",
    }),
    postalCode: z.string().min(2, { message: "Please enter a postal code" }),
    dateOfBirth: z.string().min(2, { message: "Invalid date of birth" }),
    ssn: z.string().min(2, { message: "Please enter a valid SSN" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signUpForm = useForm<z.infer<typeof signUpformSchema>>({
    resolver: zodResolver(signUpformSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address1: "",
      state: "",
      ssn: "",
      postalCode: undefined,
      dateOfBirth: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    await signIn(values.email, values.password)
      .then((res) => {
        if (res != null) {
          setShowAlert(true);
          setInfo("Success");
          setUser(JSON.stringify(res));
          setMessage(`Welcome back ${res.name}`);
        } else {
          setShowAlert(true);
          setInfo("Error");
          setMessage("Please try again");
          setLoading(false);
          setTimeout(() => setShowAlert(false), 3000);
        }
      })
      .catch((error) => {
        console.log(error);
        setShowAlert(true);
        setInfo("Error");
        setMessage("An unexpected error occured.");
        setLoading(false);
        setTimeout(() => setShowAlert(false), 3000);
      });
  }

  async function onSignUpSubmit(values: z.infer<typeof signUpformSchema>) {
    setLoading2(true);
    const user = await signUp(values);
    if (user !== null) {
      setUser(JSON.stringify(user));
      setShowAlert(true);
      setMessage("Account successfully created");
      setInfo("Success");
      setLoading2(false);
    } else {
      setShowAlert(true);
      setInfo("Error");
      setMessage("An unexpected error occured.");
      setLoading2(false);
      setTimeout(() => setShowAlert(false), 3000);
    }
  }

  useEffect(() => {
    const data = window.localStorage.getItem("user-data");
    const user = data !== null ? JSON.parse(data) : null;
    if (user !== null) {
      router.push("/");
    }
  }, [user]);
  return (
    <section className="auth-form  max-md:px-6">
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

          {showAlert && <AlertBox message={message} info={info} />}
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
                name="email"
                label="Email"
                placeholder="Enter your Email address"
                form={form}
                type={"email"}
              />
              <CustomInput
                name="password"
                label="Password"
                placeholder="Enter your Password"
                form={form}
                type={"password"}
              />
              <Button
                type="submit"
                style={{ width: "100%" }}
                className="bg-bankGradient text-white"
                disabled={loading}
              >
                {loading && <Loader2 className="animate-spin" />}
                {loading ? "Please wait..." : " Log in"}
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
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  form={signUpForm}
                  type={"text"}
                />
                <CustomInput
                  name="lastName"
                  label="Last Name"
                  placeholder="Simon"
                  form={signUpForm}
                  type={"text"}
                />
              </div>
              <CustomInput
                name="city"
                label="City"
                placeholder="Enter your city"
                form={signUpForm}
                type={"text"}
              />
              <CustomInput
                name="address1"
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
                  name="state"
                  label="State"
                  placeholder="ex:Lagos"
                  form={signUpForm}
                  type={"text"}
                />
                <CustomInput
                  name="postalCode"
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
                  name="dateOfBirth"
                  label="Date of Birth"
                  placeholder="YYYY-MM-DD"
                  form={signUpForm}
                  type={"date"}
                />
                <CustomInput
                  name="ssn"
                  label="SSN"
                  placeholder="ex:221"
                  form={signUpForm}
                  type={"text"}
                />
              </div>
              <CustomInput
                name="email"
                label="Email"
                placeholder="Enter your Email address"
                form={signUpForm}
                type={"email"}
              />
              <CustomInput
                name="password"
                label="Password"
                placeholder="Enter your Password"
                form={signUpForm}
                type={"password"}
              />
              <Button
                type="submit"
                style={{ width: "100%" }}
                className="bg-bankGradient text-white"
                disabled={loading2}
              >
                {loading2 && <Loader2 className="animate-spin" />}
                {loading2 ? "Please wait..." : " Sign in"}
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
