export interface User {
    displayName: string | null,
    id: string,
    photoURL: string ,
    email: string | null ,
    role?: 'admin' | 'root' | 'member',
    placeId: string,
    token?: string
}


export interface State{
    currentUser: User | null,
    listUser: Map<string, User>
}