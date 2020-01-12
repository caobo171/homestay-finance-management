
import { useSelector } from "react-redux"
import { User, State } from "./types"

export const useCurrentUser = (): User | null=>{
    return useSelector((state: {
        user: State
    })=> state.user.currentUser)
}


export const useUserList = (): User[]=>{
    //@ts-ignore
    return useSelector((state: {user: State})=> [...state.user.listUser.values()])
}