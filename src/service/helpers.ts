import * as firebase from 'firebase'
import uuid from 'uuid'
export const formatMoney = (money: number )=>{

    return (Number(money.toFixed(0))).toLocaleString('vi-VN',{style:'currency', currency: 'VND'})
    
}


export const now = ()=>{
    return firebase.firestore.Timestamp.now().seconds*1000
}


export const uploadImage = async (file: File)=>{

    const fileTypes =  file.type.split('/');
    const storageRef = firebase.storage().ref().child(
        `items/${file.name}${uuid().substr(0,6)}.${fileTypes[fileTypes.length -1]}`
    )

    await storageRef.put(file)

    const result = await  storageRef.getDownloadURL()


    return result

}