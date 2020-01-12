import  * as firebase from 'firebase'

import {ITEM_COLLECTION} from 'store/item/function'
import { ACTIVITY_COLLECTION } from 'store/activity/functions'
import Item from 'store/item/types'
import { updateItems } from 'store/item/function'
import { updateActivities } from 'store/activity/functions'
import { Activity } from 'store/activity/types'

class RealTimeSystem {
    async init (){
        const unsubscribe = await firebase.firestore().collection(ITEM_COLLECTION).onSnapshot({
            includeMetadataChanges: true
        }, async (doc: any )=>{

            let items = new Map<string,Item>()
            doc.docs.forEach((e:any)=> {
                items = items.set(e.id, {
                    id: e.id,
                    ...e.data()
                })
            } )

            console.log('realtime',items)

            updateItems(items)
            
        })
 

        const unsubscribe1 = await firebase.firestore().collection(ACTIVITY_COLLECTION).onSnapshot({
            includeMetadataChanges: true
        }, async (doc: any )=>{

            let activities = new Map<string,Activity>()
            doc.docs.forEach((e:any)=> {
                activities = activities.set(e.id, {
                    id: e.id,
                    ...e.data()
                })
            } )

            console.log('realtime',activities)

            updateActivities(activities)
        })
    }
}

export default new RealTimeSystem()