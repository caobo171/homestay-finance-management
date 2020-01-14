
export enum ActivityType {
    BUY = 'buy',
    DESTROY = 'destroy',
    USE =  'use',
    PAY = 'pay'
}

export interface Activity {
    type: ActivityType,
    item_id: string,
    user_id: string,
    amount: number,
    cost: number,
    time : number,
    photo?: string,
    influencers: string[],
    id: string, 
    name: string,
    actionDate: number,
}

export interface State {
    listActivities: Map<string, Activity>
}
