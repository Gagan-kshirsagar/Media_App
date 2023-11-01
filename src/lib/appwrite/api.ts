import { ID } from 'appwrite';

import { INewUser } from "@/types";

import { account, appwriteConfig, avatar, database } from './config';
import { Query } from '@tanstack/react-query';

export async function CreateuserAccount(user:INewUser){

    try {
        const newAccount = await account.create(

            ID.unique(),
            user.email,
            user.password,
            user.name

        )

        if(!newAccount) throw Error;

        const avatarUrl = avatar.getInitials(user.name);

        const newUser = await saveUserToDB({

            accountId : newAccount.$id,

            name : newAccount.name,

            email : newAccount.email,

            username : user.username,

            imageUrl : avatarUrl,

        });

        return newUser;


    } catch (error) {

        console.log(error);

        return error;
    }
}

export async function saveUserToDB( user : {

    accountId : string;
    email : string;
    name : string;
    imageUrl : URL;
    username : string;
}){

    try {
        
        const newUser = await database.createDocument(

            "6541421e1a9f346516aa",
            "654142721d4bc91ff027",
            ID.unique(),
            user,
        )

        return newUser;

    } catch (error) {
        console.log(error);
    }
}

export async function signInAccount(user : { email : string, password : string }){

    try {
        
        const session = await account.createEmailSession(user.email, user.password);

    } catch (error) {
        console.log(error);
    }
}

export async function getCurrentUser(){

    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await database.listDocuments(

            appwriteConfig.databaseId,

            appwriteConfig.userCollectionId,
            
            [Query.equal('account', currentAccount.$id)]
        )

        if(!currentUser) throw Error;


        return currentUser.documents[0];
        
    } catch (error) {
        console.log(error);
    }
}