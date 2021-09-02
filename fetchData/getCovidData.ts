import moment from 'moment';
import { DATA_COVID_COLLECTION } from '../firebase/firestore/collection';
import { convertMetaDateToJavascriptDateFormated } from '../utils/date';

export const getCovidData =  () => new Promise(async(resolve, reject) => {
  try {
    const lastUpdate = await DATA_COVID_COLLECTION.doc('data').get();
    const lastUpdatedData = lastUpdate?.data()?.last_update??""
    const dataTotalCovid = await DATA_COVID_COLLECTION.doc('data').collection(`${lastUpdatedData}`).doc('positif_covid').collection('data').doc('data_total').get();  
    const penambahanKasusHarian = await DATA_COVID_COLLECTION.doc('data').collection(`${lastUpdatedData}`).doc('positif_covid').collection('data').doc('penambahan_kasus_harian').get();
    const rapidAntigen = await DATA_COVID_COLLECTION.doc('data').collection(`${lastUpdatedData}`).doc('rapid_antigen').get();
    const tcmPcr = await DATA_COVID_COLLECTION.doc('data').collection(`${lastUpdatedData}`).doc('tcm_pcr').get();

    let yesterdayDate:string = "";
    const handleGetDataYesterday = (stringDateNow: string) => new Promise(async(resolve) => {
      let StopGetYesterdayData:boolean = false;
      let dataCovidYesterday:any = {}
      let yesterday = new Date(convertMetaDateToJavascriptDateFormated(stringDateNow));
      let counterLooping = 0;

      // looping to find data covid yesterday
      while(!StopGetYesterdayData) {
        counterLooping+=1;
        yesterday.setDate(yesterday.getDate()-1)
        const dataTotalCovid = await DATA_COVID_COLLECTION.doc('data').collection(`${moment(yesterday).format("DD-MM-YYYY")}`).doc('positif_covid').collection('data').doc('data_total').get();  
        const penambahanKasusHarian = await DATA_COVID_COLLECTION.doc('data').collection(`${moment(yesterday).format("DD-MM-YYYY")}`).doc('positif_covid').collection('data').doc('penambahan_kasus_harian').get();
        const rapidAntigen = await DATA_COVID_COLLECTION.doc('data').collection(`${moment(yesterday).format("DD-MM-YYYY")}`).doc('rapid_antigen').get();
        const tcmPcr = await DATA_COVID_COLLECTION.doc('data').collection(`${moment(yesterday).format("DD-MM-YYYY")}`).doc('tcm_pcr').get();
    
        if(dataTotalCovid.exists) {
          // data yesterday exists
          yesterdayDate = moment(yesterday).format("DD-MM-YYYY");
          dataCovidYesterday = {
            rapid_antigen: rapidAntigen.data(),
            tcm_pcr: tcmPcr.data(),
            positif_covid: {
              ...dataTotalCovid.data(),
              penambahan_kasus_harian: penambahanKasusHarian.data(),
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
          dataCovidYesterday = {
            rapid_antigen: { positif: 0, negatif: 0 },
            tcm_pcr: { positif: 0, negatif: 0 },
            positif_covid: {
              total_positif: 0,
              total_meninggal: 0,
              total_sembuh: 0,
              total_dirawat: 0,
              penambahan_kasus_harian: { pcr_tcm: 0, antigen: 0 }
            }        
          }
          StopGetYesterdayData=true
        }
      }
      resolve(dataCovidYesterday)
    });

    const dataYesterday:any = await handleGetDataYesterday(lastUpdatedData)

    resolve({
      date: lastUpdatedData,
      data: {
        rapid_antigen: rapidAntigen.data(),
        tcm_pcr: tcmPcr.data(),
        positif_covid: {
          ...dataTotalCovid.data(),
          penambahan_kasus_harian: penambahanKasusHarian.data(),
        },
        dataYesterday: {
          date: yesterdayDate, 
          data: dataYesterday
        }
      }
    })
  } catch (err) {
    reject(err) 
  }
});
