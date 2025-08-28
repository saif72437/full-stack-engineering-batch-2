import { Client, Account, ID } from "appwrite";


export const VITE_APPWRITE_PROJECT_ID = "68b08fdd000db2818a14"
export const VITE_APPWRITE_PROJECT_NAME = "Blog app"
export const VITE_APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1"


export const client = new Client()
    .setProject(VITE_APPWRITE_PROJECT_ID); // Your project ID

export const account = new Account(client);