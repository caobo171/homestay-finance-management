
import { useSelector } from "react-redux"
import { User, State } from "./types"
import { FAKE_USER } from "./function"
import CurrentUser from "service/CurrentUser"

export const useCurrentUser = (): User | null=>{
    return useSelector((state: {
        user: State
    })=> state.user.currentUser)
}


export const useUserList = (): User[]=>{
    return useSelector((state: {user: State})=> [...state.user.listUser.values()].filter(user=> user.placeId === CurrentUser.placeId))
}


export const useAllUsers = (): User[]=>{
    return useSelector((state: {user: State})=> [...state.user.listUser.values()])
}

export const useUser  = (userId: string) =>{
    return useSelector((state: {user: State})=> state.user.listUser.get(userId) || FAKE_USER);
}


export const useUserByPlaceid = (placeId: string) => {
    return useSelector((state: {user: State})=> [...state.user.listUser.values()].filter(e=> e.placeId === placeId))
}


export const useRemainUsers = (pickedUsers: User[] , type? : 'all' | 'place')=>{

    const pickedUserIds = pickedUsers.map(e=> e.id)
    const placeUsers = useUserList()

    const allUsers = useAllUsers()

    if(type && type=='all') {
        return allUsers.filter(user=> pickedUserIds.indexOf(user.id) === -1 )

    }else{
        return placeUsers.filter(user=> pickedUserIds.indexOf(user.id) === -1 )
    }
    

}