import { Client, Databases, Account } from "appwrite";

const id = process.env.DB_APPWRITEID;
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(id);

export const account = new Account(client);
export const databases = new Databases(client);
