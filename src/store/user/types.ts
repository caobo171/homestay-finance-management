export interface User {
    displayName: string | null,
    id: string,
    photoURL: string | null,
    email: string | null ,
    role?: 'admin' | 'root' | 'member',
    placeId: string
}


export interface State{
    currentUser: User | null,
    listUser: Map<string, User>
}