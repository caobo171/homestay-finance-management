import * as firebase from 'firebase'
import { User } from './types';
import store from 'store/store';
import * as actions from './action'
import axios from 'axios'
import { LIGACY_SERVER_KEY } from 'env';
import CurrentUser from 'service/CurrentUser';


export const USERS_COLLECTION = 'users'
export const CURRENT_USER_STORAGE_KEY = '@finance-user'

export const DEFAULT_USER_IMAGE  = 'https://xmindnet.s3.amazonaws.com/img/default-avatar-m5.png'

export const FAKE_USER: User = {
    displayName: 'Fake User',
    id: '-1',
    photoURL: DEFAULT_USER_IMAGE ,
    email: "fake@fake.com" ,
    role:'member',
    placeId: '-1'
}

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


export const  sendNotification = async (user:User, body:string, title:string)=>{


    if(user.token){
        const options = {
            "to" : user.token,
            "notification" : {
                "body" : body,
                "title": title,
                "icon": "/firebase-logo.png"
            }
           }
        return await axios.post('https://fcm.googleapis.com/fcm/send',options,{
            headers:{
                'Content-Type':'application/json',
                'Authorization': LIGACY_SERVER_KEY
            }
        })
    }
}

export const updateUserToken = async (user:User, token:string)=>{

    let updates:any = {};
    updates[`/${USERS_COLLECTION}/${user.id}/token`] = token;
    return firebase.database().ref().update(updates)
}

export const updateUserPlace = async (user:User, placeId:string)=>{

    let updates:any = {};
    updates[`/${USERS_COLLECTION}/${user.id}/placeId`] = placeId;
    return firebase.database().ref().update(updates)
}


export const login = async (storex = store) => {
    const provider = new firebase.auth.FacebookAuthProvider()
    const result = await firebase.auth().signInWithPopup(provider)


    if (result.user) {

        const user: User = {
            displayName: result.user.displayName,
            id: result.user.uid,
            photoURL: result.user.photoURL ? result.user.photoURL: '',
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
        return await storex.dispatch(actions.login(null))
    }
}


export const getCurrentUser = async (storex = store) => {
    const res = await localStorage.getItem(CURRENT_USER_STORAGE_KEY)

    if (res) {
        const user: User = JSON.parse(res)
        const userData = await getCurrentUserAsync(user.id)
        if (userData) {



            await storex.dispatch(actions.login({...user, ...userData}))
            localStorage.setItem(CURRENT_USER_STORAGE_KEY,JSON.stringify({...user, ...userData}))
            return userData
        } else {
            await storex.dispatch(actions.login(user))
            localStorage.setItem(CURRENT_USER_STORAGE_KEY,JSON.stringify(user))
            return user
        }

    } else {
        await storex.dispatch(actions.login(null))
        return null
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


    return await storex.dispatch(actions.getAllUsers(users))
}




export const logout = async (storex = store)=>{
    await localStorage.removeItem(CURRENT_USER_STORAGE_KEY)
    CurrentUser.logout()
    await firebase.auth().signOut()

    return await storex.dispatch(actions.login(null))
}