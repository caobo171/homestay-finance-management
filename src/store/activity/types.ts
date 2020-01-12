export interface Activity {
    type: 'buy' | 'destroy' | 'use',
    item_id: string,
    user_id: string,
    amount: number,
    cost: number,
    time : number,
    photo?: string,
    influencers: string[],
    id: string
}

export interface State {
    listActivities: Map<string, Activity>
}