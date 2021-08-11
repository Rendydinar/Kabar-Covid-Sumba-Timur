import { TEMPAT_ZONA_MERAH_COLLECTION } from '../firebase/firestore/collection';

export const getTempatZonaMerah = new Promise((resolve, reject) => {
  TEMPAT_ZONA_MERAH_COLLECTION
    .get()
    .then((docRef) => {
      resolve(docRef)
    })
    .catch((err) =>  {
      reject(err) 
    })
});