import { APOTIK_RUMAH_SAKIT_COLLECTION } from '../firebase/firestore/collection'

export const getApotikRumahSakit = new Promise((resolve, reject) => {
  APOTIK_RUMAH_SAKIT_COLLECTION
    .get()
    .then((docRef) => {
      resolve(docRef)
    })
    .catch((err) =>  {
      reject(err) 
    })
});