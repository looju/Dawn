"use server";

import { SignUpParams } from "@/types";
import { account } from "./AppWriteConfig";

export const signIn = async (email: string, password: string) => {
  try {
    const data = await account.createEmailPasswordSession(email, password);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error, "error signing up");
  }
};

export const signUp = async (userData: any) => {
  try {
    const data = await account.create();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error, "error signing up");
  }
};
