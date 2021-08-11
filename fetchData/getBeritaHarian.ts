import { BERITA_HARIAN_COLLECTION } from '../firebase/firestore/collection';

export const getBeritaHarian = new Promise((resolve, reject) => {
  BERITA_HARIAN_COLLECTION
    .get()
    .then((docRef) => {
      resolve(docRef)
    })
    .catch((err) =>  {
      reject(err) 
    })
});