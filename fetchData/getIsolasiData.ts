import moment from 'moment';
import { DATA_ISOLASI_COLLECTION } from '../firebase/firestore/collection';
import { convertMetaDateToJavascriptDateFormated } from '../utils/date';

export const getIsolasiData =  () => new Promise(async(resolve, reject) => {
  try {
    const lastUpdate = await DATA_ISOLASI_COLLECTION.doc('data').get();
    const lastUpdatedData = lastUpdate?.data()?.last_update??""
    const responseGetDataIsolasiRawatRSUD = await DATA_ISOLASI_COLLECTION.doc('data').collection(`${lastUpdatedData}`).doc('rawat_rsud').get();
    const responseGetDataIsolasiTerpusat = await DATA_ISOLASI_COLLECTION.doc('data').collection(`${lastUpdatedData}`).doc('isolasi_terpusat').get();
    const responseGetDataIsolasiMandiri = await DATA_ISOLASI_COLLECTION.doc('data').collection(`${lastUpdatedData}`).doc('isolasi_mandiri').get();

    const handleGetDataYesterday = (stringDateNow: string) => new Promise(async(resolve) => {
      let StopGetYesterdayData:boolean = false;
      let dataIsolasiYesterday:any = {}
      let yesterday = new Date(convertMetaDateToJavascriptDateFormated(stringDateNow));
      let counterLooping = 0;

      // looping to find data covid yesterday
      while(!StopGetYesterdayData) {
        counterLooping+=1;
        yesterday.setDate(yesterday.getDate()-1)
        const responseGetDataIsolasiRawatRSUD = await DATA_ISOLASI_COLLECTION.doc('data').collection(`${moment(yesterday).format("DD-MM-YYYY")}`).doc('rawat_rsud').get();
        const responseGetDataIsolasiTerpusat = await DATA_ISOLASI_COLLECTION.doc('data').collection(`${moment(yesterday).format("DD-MM-YYYY")}`).doc('isolasi_terpusat').get();
        const responseGetDataIsolasiMandiri = await DATA_ISOLASI_COLLECTION.doc('data').collection(`${moment(yesterday).format("DD-MM-YYYY")}`).doc('isolasi_mandiri').get();
        
        if(responseGetDataIsolasiRawatRSUD.exists || responseGetDataIsolasiTerpusat.exists || responseGetDataIsolasiMandiri.exists) {
          // data yesterday exists
          dataIsolasiYesterday = {
            date: moment(yesterday).format("DD-MM-YYYY"),
            data: {
              rawat_rsud: responseGetDataIsolasiRawatRSUD.data(),
              isolasi_terpusat: responseGetDataIsolasiTerpusat.data(),
              isolasi_mandiri: responseGetDataIsolasiMandiri.data(),          
            }  
          }
          StopGetYesterdayData=true
        } else {
          // data yesterdat not exist, loop again
          yesterday = new Date(moment(yesterday).format("MM-DD-YYYY"))
        }
        if(counterLooping > 100) {
          // stop looping
          // give dummy data
          dataIsolasiYesterday = {
            date: moment(yesterday).format("DD-MM-YYYY"),
            data: {
              rawat_rsud: null,
              isolasi_terpusat: [],
              isolasi_mandiri: 0,          
            }  
          }
          StopGetYesterdayData=true
        }
      }
      resolve(dataIsolasiYesterday)
    });

    const dataYesterday:any = await handleGetDataYesterday(lastUpdatedData)

    resolve({
      date: lastUpdatedData,
      data: {
        rawat_rsud: responseGetDataIsolasiRawatRSUD.data(),
        isolasi_terpusat: responseGetDataIsolasiTerpusat.data(),
        isolasi_mandiri: responseGetDataIsolasiMandiri.data(),
      },
      dataYesterday: dataYesterday
    })
  } catch (err) {
    reject(err) 
  }
});
