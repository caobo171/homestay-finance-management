import * as firebase from 'firebase'

export const formatMoney = (money: number )=>{

    return (Number(money.toFixed(0))).toLocaleString('vi-VN',{style:'currency', currency: 'VND'})
    
}


export const now = ()=>{
    return firebase.firestore.Timestamp.now().seconds*1000
}