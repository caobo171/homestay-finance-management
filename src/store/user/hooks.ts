
import { useSelector } from "react-redux"
import { User, State } from "./types"
import { FAKE_USER } from "./function"

export const useCurrentUser = (): User | null=>{
    return useSelector((state: {
        user: State
    })=> state.user.currentUser)
}


export const useUserList = (): User[]=>{
    return useSelector((state: {user: State})=> [...state.user.listUser.values()])
}

export const useUser  = (userId: string) =>{
    return useSelector((state: {user: State})=> state.user.listUser.get(userId) || FAKE_USER);
}


export const useRemainUsers = (pickedUsers: User[])=>{

    const pickedUserIds = pickedUsers.map(e=> e.id)
    return useSelector((state: {user: State})=> 
    [...state.user.listUser.values()].filter(user=> pickedUserIds.indexOf(user.id) === -1 )
    
    
    )
}