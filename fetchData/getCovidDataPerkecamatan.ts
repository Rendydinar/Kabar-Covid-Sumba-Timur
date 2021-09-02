import moment from 'moment';
import { DATA_COVID_PER_KECATAMATAN_COLLECTION } from '../firebase/firestore/collection';
import { IKecamatan, IKelurahan } from '../interfaces';
import { convertMetaDateToJavascriptDateFormated } from '../utils/date';


const processKelurahan = async (kecamatan: any, lastUpdatedData:string):Promise<IKelurahan[]> => {
  const dataKelurahan:IKelurahan[] = []
  const RESPONSE_GET_DATA_KELURAHAN = await DATA_COVID_PER_KECATAMATAN_COLLECTION.doc('data').collection(`${lastUpdatedData}`).doc(`${kecamatan.data().name}`).collection('kelurahan').get()
  RESPONSE_GET_DATA_KELURAHAN.forEach((kelurahan) => {
    dataKelurahan.push({
      name: kelurahan.data().name,
      total: kelurahan.data().total,
      isShow:  kelurahan.data().isShow??false,
      isDesa:  kelurahan.data().isDesa??false
    });
  });

  return dataKelurahan;
}

const processDataKecamatan = (data:any, lastUpdatedData:string) => new Promise(async(resolve) => {
  const dataKecamatan:IKecamatan[] = [];
  for(let index = 0; index < data.docs.length; index++) {
    const kelurahan  = await processKelurahan(data.docs[index],lastUpdatedData)     
    dataKecamatan.push({
      name:  data.docs[index].data().name,
      kelurahan: kelurahan,
      isShow: data.docs[index].data().isShow??false

    });
  }
  resolve(dataKecamatan)
});

const handleGetDataYesterday = (stringDateNow: string) => new Promise(async(resolve) => {
  let StopGetYesterdayData:boolean = false;
  let dataCovidYesterday:any = {}
  let yesterday = new Date(convertMetaDateToJavascriptDateFormated(stringDateNow));
  let counterLooping = 0;

  // looping to find data covid yesterday
  while(!StopGetYesterdayData) {
    counterLooping+=1;
    yesterday.setDate(yesterday.getDate()-1)
    const RESPONSE_GET_DATA_PERKECAMATAN = await DATA_COVID_PER_KECATAMATAN_COLLECTION.doc('data').collection(`${moment(yesterday).format("DD-MM-YYYY")}`).get();

    if(RESPONSE_GET_DATA_PERKECAMATAN.docs) {
      // data yesterday exists
      const dataKecamatanProcessed = await processDataKecamatan(RESPONSE_GET_DATA_PERKECAMATAN, `${moment(yesterday).format("DD-MM-YYYY")}`);
      dataCovidYesterday = {
        date: moment(yesterday).format("DD-MM-YYYY"),
        data: dataKecamatanProcessed
      }
      StopGetYesterdayData=true
    } else {
      // data yesterdat not exist, loop again
      yesterday = new Date(moment(yesterday).format("MM-DD-YYYY"))
    }
  
    if(counterLooping > 100) {
      // stop looping
      StopGetYesterdayData=true
    }

    resolve(dataCovidYesterday)
  }
});


export const getCovidDataPerkecamatan = () => new Promise(async(resolve, reject) => {
  try {
    const lastUpdate = await DATA_COVID_PER_KECATAMATAN_COLLECTION.doc('data').get();
    const lastUpdatedData = lastUpdate?.data()?.last_update??""
    const RESPONSE_GET_DATA_PERKECAMATAN = await DATA_COVID_PER_KECATAMATAN_COLLECTION.doc('data').collection(`${lastUpdatedData}`).get();
    const dataKecamatanProcessed = await processDataKecamatan(RESPONSE_GET_DATA_PERKECAMATAN, lastUpdatedData);

    const dataYesterday:any = await handleGetDataYesterday(lastUpdatedData)

    resolve({
      date: lastUpdatedData,
      data: dataKecamatanProcessed,
      dataYesterday: dataYesterday
    })
  } catch (err) {
    reject(err) 
  }
});

