import { Firestore } from "../clientApp";

export const DATA_COVID_COLLECTION = Firestore.collection('/data-covid');
export const DATA_COVID_PER_KECATAMATAN_COLLECTION = Firestore.collection('/data-covid-perkecamatan');
export const TEMPAT_ZONA_MERAH_COLLECTION = Firestore.collection('/tempat-zona-merah');
export const APOTIK_RUMAH_SAKIT_COLLECTION = Firestore.collection('/apotik-rumah-sakit');
export const DATA_VAKSIN_COLLECTION = Firestore.collection('/data-vaksin');
export const BERITA_HARIAN_COLLECTION = Firestore.collection('/berita-harian');
export const TEMPAT_ISOLASI_COLLECTION = Firestore.collection('/tempat-isolasi');
