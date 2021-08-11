import { TEMPAT_ISOLASI_COLLECTION } from '../firebase/firestore/collection';

export const getTempatIsolasi = new Promise((resolve, reject) => {
  TEMPAT_ISOLASI_COLLECTION
    .get()
    .then((docRef) => {
      resolve(docRef)
    })
    .catch((err) =>  {
      reject(err) 
    })
});