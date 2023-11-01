import {

    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery

} from '@tanstack/react-query';
import { CreateuserAccount, signInAccount } from '../appwrite/api';
import { INewUser } from '@/types';

export const useCreateuserAccount = () => {

    return useMutation({

        mutationFn: ( user : INewUser) => CreateuserAccount(user)
    })
}

export const useSignInAccount = () => {

    return useMutation({

        mutationFn: ( user : {
            email : string,
            password : string
        }) => signInAccount(user)
    })
}