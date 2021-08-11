import { DATA_COVID_PER_KECATAMATAN_COLLECTION } from '../firebase/firestore/collection';

export const getCovidDataPerkecamatan = new Promise((resolve, reject) => {
  DATA_COVID_PER_KECATAMATAN_COLLECTION
    .get()
    .then((docRef) => {
      resolve(docRef)
    })
    .catch((err) =>  {
      reject(err) 
    })
});