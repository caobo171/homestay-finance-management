import * as firebase from 'firebase'
import uuid from 'uuid'
import { ActivityType, Activity } from 'store/activity/types'
export const formatMoney = (money: number) => {

    return (Number(money.toFixed(0))).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })

}


export const now = () => {
    return firebase.firestore.Timestamp.now().seconds * 1000
}


export const isToday = (date: Date)=>{
    let startTime = new Date(date)
    let endTime = new Date(date)
    const nowTime = now()
    startTime.setHours(0)
    endTime.setHours(23)

    return nowTime > startTime.getTime() && nowTime < endTime.getTime()
}

export const uploadImage = async (file: File) => {

    const fileTypes = file.type.split('/');
    const storageRef = firebase.storage().ref().child(
        `items/${file.name}${uuid().substr(0, 6)}.${fileTypes[fileTypes.length - 1]}`
    )

    await storageRef.put(file)

    const result = await storageRef.getDownloadURL()


    return result

}


export function getDaysInMonth(nowDate: Date) {


    var date = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
    var days = [];
    while (date.getMonth() === nowDate.getMonth()) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    let firstDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
    while (firstDate.getDay() !== 1) {
        firstDate.setDate(firstDate.getDate() - 1);
        days.unshift(new Date(firstDate))
    }
    return days;
}


export const countMoney = (activities: Activity[]) => {
    let cost = 0;
    for (let i = 0; i < activities.length; i++) {
        const act = activities[i]
        const lengthInfluencers = act.influencers.length
        switch (act.type) {
            case ActivityType.BUY:
                cost = cost - (lengthInfluencers > 0 ? act.cost / lengthInfluencers : act.cost)
                break;
            case ActivityType.PAY:
                cost = cost - act.cost
                break;
            case ActivityType.DESTROY:
                cost = cost + (lengthInfluencers > 0 ? act.cost / lengthInfluencers : act.cost)
            case ActivityType.USE:
                cost = cost + (lengthInfluencers > 0 ? act.cost / lengthInfluencers : act.cost)
        }
    }

    return cost
}

export const reformatString  = (text: String)=>{
    return text
    .replace(/\s/g, '')
    .toLowerCase()
    .replace(/[aăâáạàãảảắặẵaậấẫẩậ]/g,'a')
    .replace(/[ơởớợỡởỏòóõọ]/g,'o')
    .replace(/[êểếệễểẻèéeẹ]/g, 'e')
    .replace(/[ưửữựứừúùúụủ]/g, 'u')
    .replace(/[íịĩíì]/g, 'i')
    .replace(/[ỹỳýỵỷ]/g, 'y')

}