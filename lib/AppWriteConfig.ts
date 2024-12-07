"use server";
import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_APPWRITE_PROJECTID!);

  const session = (await cookies()).get("appwrite-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_APPWRITE_PROJECTID!)
    .setKey(process.env.NEXT_APIKEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get Users() {
      return new Users(client);
    },
  };
}