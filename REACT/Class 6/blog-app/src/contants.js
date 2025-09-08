import { Client, Account, ID, TablesDB } from "appwrite";


export const VITE_APPWRITE_PROJECT_ID = "68b08fdd000db2818a14"
export const VITE_APPWRITE_PROJECT_NAME = "Blog app"
export const VITE_APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1"


export const client = new Client()
   .setEndpoint(VITE_APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(VITE_APPWRITE_PROJECT_ID); // Your project ID

export const account = new Account(client);

export const tablesDB = new TablesDB(client);


export async function getCurrentUserData(){
    try {
      const user = await account.get()
      return user
    } catch (error) {
        console.log(error);
        return;
        
    }

  }