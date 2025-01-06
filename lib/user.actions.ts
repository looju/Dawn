"use server";
import { SignUpParams } from "@/types";
import { createAdminClient, createSessionClient } from "./AppWriteConfig";
import { ID } from "node-appwrite";
import { parseStringify } from "./utils";
import { useDataStore } from "@/Store/UsersData";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signIn = async (email: string, password: string) => {
  try {
    const { account } = await createAdminClient();
    const user = await account.createEmailPasswordSession(email, password);
    console.log(user, "user from server");
    return parseStringify(user);
  } catch (error) {
    console.log(error, "error signing in");
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
    console.log(newUser, "new user data");
    return parseStringify(newUser);
  } catch (error) {
    console.log(error, "error signing up");
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    console.log(error, "error returning user");
    return null;
  }
}

export async function signOut() {
  const { account } = await createSessionClient();

  (await cookies()).delete("appwrite-session");
  await account.deleteSession("current");

  redirect("/signUp");
}
