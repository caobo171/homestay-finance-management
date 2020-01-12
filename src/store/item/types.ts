export default interface Item {
    type: 'general' | 'not_general',
    name: string,
    id: string,
    postDate: number, // save the time we assume that action is executed in real
    remain: number,
    cost: number,
    unit: string,
    amount: number,
    actionDate: number, // save the time we create action 
    photoUrl?: string,
    userId: string
}


export interface State {
    listItems: Map<string,Item>
}