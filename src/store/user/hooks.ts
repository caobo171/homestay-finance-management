
import { useSelector } from "react-redux"
import { User, State } from "./types"

export const useCurrentUser = (): User | null=>{
    return useSelector((state: {
        user: State
    })=> state.user.currentUser)
}


export const useUserList = (): User[]=>{
    return useSelector((state: {user: State})=> [...state.user.listUser.values()])
}

export const useUser  = (userId: string) =>{
    return useSelector((state: {user: State})=> state.user.listUser.get(userId));
}