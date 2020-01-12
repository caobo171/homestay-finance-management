import {User } from 'store/user/types'
import Item from 'store/item/types'
export const FAKE_CURRENT_USER: User = {
    displayName: 'Nguyễn Văn Cao',
    id: '1',
    photoURL: 'https://lh3.googleusercontent.com/-ICuwm7u81b8/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdBYoq8CLpFam3ck9b1GOuj3dFvdg.CMID/s64-c/photo.jpg',
    email: 'caobo1712000@gmail.com' ,
    role: 'member',
    placeId: '2'
}

export const FAKEITEM_DATA: Item[] = [
    {
        type: 'not_general',
        name: 'Thịt lợn',
        id: '1',
        postDate: 1578285889603,
        remain: 0.2,
        cost: 150000,
        amount: 0.5,
        actionDate:1578285889603,
        unit:'kg',
        userId: '1'
    },
    {
        type: 'not_general',
        name: 'Bắp cải',
        id: '2',
        postDate: 1578285889603,
        remain: 0.1,
        cost: 15000,
        amount: 0.4,
        actionDate:1578285889603,
        unit:'kg',
        userId: '1'
    },
]
