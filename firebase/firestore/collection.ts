import { Firestore } from "../clientApp";

export const DATA_COVID_COLLECTION = Firestore.collection('/data-covid');
export const DATA_COVID_PER_KECATAMATAN_COLLECTION = Firestore.collection('/data-covid-perkecamatan');
export const DATA_VAKSIN_COLLECTION = Firestore.collection('/data-vaksin');
export const DATA_ISOLASI_COLLECTION = Firestore.collection('/data-isolasi');
export const DATA_SUBSCRIBE_JADWAL_VAKSIN_COLLECTION = Firestore.collection('/subscribe-jadwal-vaksin');

