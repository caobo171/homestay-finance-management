

export default interface HomeStay {
   name: string,
   description: string,
   id: string ,
   photoUrl: string
}


export  const FAKE_IMAGE_HOMESTAY = 'https://q-cf.bstatic.com/images/hotel/max1024x768/174/174379346.jpg'

export interface State {
    listHomeStay: Map<string,HomeStay>
}
