import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {

    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,

    url: import.meta.env.VITE_APPWRITE_URL,

    databaseId : import.meta.env.VITE_APPWRITE_DATABASE_ID,

    storageId : import.meta.env.VITE_APPWRITE_STORAGE_ID,

    userCollectionId : import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,

    postCollectionId : import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,

    savesCollectionId : import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID
}

const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID

export const client = new Client();

// client.setProject(appwriteConfig.projectId);

// client.setEndpoint(appwriteConfig.url);

client.setProject("653fe1126ca7895e03fa");

client.setEndpoint("https://cloud.appwrite.io/v1");

export const account = new Account(client);

export const database = new Databases(client);

export const storage = new Storage(client);

export const avatar = new Avatars(client);