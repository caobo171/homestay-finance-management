import {User} from 'store/user/types'
import {CURRENT_USER_STORAGE_KEY} from 'store/user/function'

class CurrentUserClass{
    __currentUser: User| undefined  ;

    get user(){
        return this.__currentUser
    }

    get placeId(){
        return this.__currentUser? this.__currentUser.placeId: '-2'
    }

    async init(){
        const res = await localStorage.getItem(CURRENT_USER_STORAGE_KEY)
        this.__currentUser = res ? JSON.parse(res): undefined
    }

    async logout(){
        this.__currentUser = undefined
    }
}


const CurrentUser = new  CurrentUserClass()

export default CurrentUser;