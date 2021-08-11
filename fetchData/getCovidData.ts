import { DATA_COVID_COLLECTION } from '../firebase/firestore/collection';

export const getCovidData = new Promise((resolve, reject) => {
  DATA_COVID_COLLECTION
    .get()
    .then((docRef) => {
      resolve(docRef)
    })
    .catch((err) =>  {
      reject(err) 
    })
});