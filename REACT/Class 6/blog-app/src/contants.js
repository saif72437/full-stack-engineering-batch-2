import { Client, Account, ID } from "appwrite";

// export const VITE_APPWRITE_PROJECT_ID = "68b08fdd000db2818a14"
// export const VITE_APPWRITE_PROJECT_NAME = "Blog app"
// export const VITE_APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1"

export const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // env se endpoint le raha hai

  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // env se project id le raha hai

export const account = new Account(client);

export async function getCurrentUserData() {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    console.log(error);
    return;
  }
}
