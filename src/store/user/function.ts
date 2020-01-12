import * as firebase from 'firebase'
import { User } from './types';
import store from 'store/store';
import * as actions from './action'


export const USERS_COLLECTION = 'users'
const CURRENT_USER_STORAGE_KEY = '@finance-user'

const getCurrentUserAsync = (id: string): Promise<User | null> => {

    return new Promise((resolve, reject) => {
        const ref = firebase.database().ref(`/users/${id}`);

        ref.once('value', async (snapshot: any) => {


            if (!snapshot || (snapshot && !snapshot.val())) {
                resolve(null)
            } else {
                const user: User = { id: id, ...snapshot.val() }
                resolve(user)
            }

        })
    })
}


const createUserFirebaseDatabase = (user: User) => {
    return firebase.database().ref(`/${USERS_COLLECTION}/${user.id}`).set(user)
}



export const login = async (storex = store) => {
    const provider = new firebase.auth.FacebookAuthProvider()
    const result = await firebase.auth().signInWithPopup(provider)


    console.log(result)
    if (result.user) {

        const user: User = {
            displayName: result.user.displayName,
            id: result.user.uid,
            photoURL: result.user.photoURL,
            email: result.user.email,
            placeId: '-1',
        }
        if (result.additionalUserInfo && result.additionalUserInfo.isNewUser) {
            await createUserFirebaseDatabase(user)
        }

        const userData = await getCurrentUserAsync(user.id)

        if(!userData){
           await createUserFirebaseDatabase(user)
        }

        if (userData) {
            await localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(userData))
            return storex.dispatch(actions.login(userData))
        } else {
            await localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(user))
            return storex.dispatch(actions.login(user))
        }


    } else {
        return storex.dispatch(actions.login(null))
    }
}


export const getCurrentUser = async (storex = store) => {
    const res = await localStorage.getItem(CURRENT_USER_STORAGE_KEY)

    if (res) {
        const user: User = JSON.parse(res)
        const userData = await getCurrentUserAsync(user.id)
        if (userData) {

            return storex.dispatch(actions.login({...user, ...userData}))
        } else {
            return storex.dispatch(actions.login(user))
        }

    } else {
        return storex.dispatch(actions.login(null))
    }
}




const getUsers = (): Promise<Map<string, User>> => {
    return new Promise((resolve, reject) => {
        let users = new Map<string, User>()
        const ref = firebase.database().ref(`/users`)


        ref.once('value', async (snapshots: any) => {
            await snapshots.forEach((snapshot: any) => {
                const id = snapshot.key;
                const user: User = { id, ...snapshot.val() }
                //   const user: User = snapshot._snapshot.value
                users = users.set(user.id, { id: user.id, ...user })
            })

            resolve(users)
        })
    })
}

export const getUserList = async (storex = store) => {
    const users = await getUsers()

    return storex.dispatch(actions.getAllUsers(users))
}

export const logout = async (storex = store)=>{
    await localStorage.removeItem(CURRENT_USER_STORAGE_KEY)

    await firebase.auth().signOut()

    return storex.dispatch(actions.login(null))
}