import { createAction } from "typesafe-actions"
import { User } from "./types"


export const login = createAction('user/login', 
(user: User | null ) => (user))<User | null >()


export const getAllUsers = createAction('user/getAllUsers',
(users: Map<string, User>)=> (users))<Map<string, User>>()


export const updateUser = createAction('user/update',
(user: User)=> (user))<User>()


export const setCurrentUser = createAction('user/setCurrentUser',
(user: User) => (user))<User>()