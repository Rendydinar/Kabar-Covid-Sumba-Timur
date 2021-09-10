import { DATA_SUBSCRIBE_JADWAL_VAKSIN_COLLECTION } from "../firebase/firestore/collection";
import { IFormSubscribe } from "../interfaces";
import cryptoRandomString from 'crypto-random-string';

export const subscribeJadwalVaksin = (dataSubscribe: IFormSubscribe) => new Promise(async(resolve, reject) => {
  try {
    DATA_SUBSCRIBE_JADWAL_VAKSIN_COLLECTION.add({
      username: dataSubscribe.username,
      token: cryptoRandomString(10),
      phoneNumber: dataSubscribe.phoneNumber,
      isSubscription: true,
      createdAt: new Date()
    });
    resolve(true)
  } catch(err) {
    reject(err)
  }
});

