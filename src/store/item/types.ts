export default interface Item {
    type: 'general' | 'not_general',
    name: string,
    id: string,
    postDate: number,
    remain: number,
    cost: number,
    amount: number
}