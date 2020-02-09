export enum ItemType {
    GENERAL = 'general',
    NOT_GENERAL = 'not_general'
}


export enum ItemFilterType{
    AVAILABLE = 'available',
    UN_AVAILABLE = 'unavailable'
}

export default interface Item {
    type: ItemType,
    name: string,
    id: string,
    postDate: number, // save the time we assume that action is executed in real
    remain: number,
    cost: number,
    unit: string,
    amount: number,
    actionDate: number, // save the time we create action 
    photoUrl?: string,
    userId: string,
    placeId: string,
}


export interface State {
    listItems: Map<string,Item>
}

