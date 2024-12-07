"use server";

import { SignUpParams } from "@/types";
import { createAdminClient, createSessionClient } from "./AppWriteConfig";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { parseStringify } from "./utils";

export const signIn = async (email: string, password: string) => {
  try {
    const data = await account.createEmailPasswordSession(email, password);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error, "error signing up");
  }
};

export const signUp = async (userData: SignUpParams) => {
  try {
    const { account } = await createAdminClient();

    const newUser = await account.create(
      ID.unique(),
      userData.email,
      userData.password,
      `${userData.firstName} ${userData.lastName}`
    );
    const session = await account.createEmailPasswordSession(
      userData.email,
      userData.password
    );

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUser);
  } catch (error) {
    console.log(error, "error signing up");
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}