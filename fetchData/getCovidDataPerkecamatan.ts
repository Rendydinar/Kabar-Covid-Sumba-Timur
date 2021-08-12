import { DATA_COVID_PER_KECATAMATAN_COLLECTION } from '../firebase/firestore/collection';
import { IKecamatan, IKelurahan } from '../interfaces';

const processData = (data:any, lastUpdatedData:string) => new Promise(async(resolve) => {
  const dataKecamatan:IKecamatan[] = [];
  let dataKelurahan:IKelurahan[] = [];
  data.forEach(async(kecamatan:any) => {
    const RESPONSE_GET_DATA_KELURAHAN = await DATA_COVID_PER_KECATAMATAN_COLLECTION.doc('data').collection(`${lastUpdatedData}`).doc(`${kecamatan.data().name}`).collection('kelurahan').get()
    RESPONSE_GET_DATA_KELURAHAN.forEach((kelurahan) => {
      dataKelurahan.push({
        name: kelurahan.data().name,
        total: kelurahan.data().total
      });
    });
    dataKecamatan.push({
      name:  kecamatan.data().name,
      kelurahan: dataKelurahan
    });
    dataKelurahan = [];
    resolve(dataKecamatan)
  })

})

export const getCovidDataPerkecamatan = () => new Promise(async(resolve, reject) => {

  try {
    const lastUpdate = await DATA_COVID_PER_KECATAMATAN_COLLECTION.doc('data').get();
    const lastUpdatedData = lastUpdate?.data()?.last_update??""
    const RESPONSE_GET_DATA_PERKECAMATAN = await DATA_COVID_PER_KECATAMATAN_COLLECTION.doc('data').collection(`${lastUpdatedData}`).get();
    const dataKecamatanProcessed = await processData(RESPONSE_GET_DATA_PERKECAMATAN, lastUpdatedData)
    resolve({
      date: lastUpdatedData,
      data: dataKecamatanProcessed
    })
  } catch (err) {
    reject(err.message) 
  }
});

