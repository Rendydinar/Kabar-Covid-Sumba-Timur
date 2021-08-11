import { DATA_VAKSIN_COLLECTION } from '../firebase/firestore/collection';

export const getDataVaksin = () => {
    const response = DATA_VAKSIN_COLLECTION
        .get()
        .then((docRef) => {
          return docRef.docs
        })
        .catch((err) =>  {
          return err.message
        })
        return response
}
