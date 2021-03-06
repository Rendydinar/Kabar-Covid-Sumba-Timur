import Slider from '@farbenmeer/react-spring-slider';
import {
  createStyles,
  Divider,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import sortBy from 'lodash/sortBy';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardDataCovid from '../components/CardDataCovid';
import DataCovidPerkecamatan from '../components/DataCovidPerkecamatan';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import Top10Kecamatan from '../components/Top10Kecamatan';
import { getCovidData } from '../fetchData/getCovidData';
import { getCovidDataPerkecamatan } from '../fetchData/getCovidDataPerkecamatan';
import { IKecamatan, IKelurahan } from '../interfaces';
import { ICombinedState } from '../provider/redux/store';
import {
  actionHideSubscriptionPopup,
  actionShowSubscriptionPopup,
} from '../provider/redux/Subscription/SubscriptionActions';
import { ISubscriptionState } from '../provider/redux/Subscription/SubscriptionReducer';

interface IReduxState {
  subscription: ISubscriptionState;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sliderContainer: {
      height: '80vh',
    },
    typeMonitoring: {
      fontSize: '30px',
      fontWeight: 700,
      textAlign: 'center',
      [theme.breakpoints.down('md')]: {
        fontSize: '22px',
      },
    },
    wrapper: {
      marginTop: '15px',
      padding: '0 30px',
      [theme.breakpoints.down('md')]: {
        padding: '0 10px',
      },
    },
    containerTypeMonitoring: {
      padding: '0 125px',
      margin: '30px 0',
      [theme.breakpoints.down('md')]: {
        padding: '0 50px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
    monitoringTitle: {
      backgroundColor: '#F0FDF4',
      padding: '5px',
      borderTopRightRadius: '8px',
      borderTopLeftRadius: '8px',
      fontSize: '24px',
      fontWeight: 500,
      textTransform: 'uppercase',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
      },
    },
    monitoringSectionContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        gap: '10px',
      },
    },
    divider: {
      width: '100%',
      marginTop: '10px',
    },
    lineTypeMonitoring: {
      width: '100%',
      marginBottom: '15px',
      height: '5px',
      // background: 'rgb(64,255,72)',
      background:
        'linear-gradient(0deg, rgba(64,255,72,1) 8%, rgba(86,243,82,1) 15%, rgba(123,223,99,1) 40%, rgba(105,233,91,1) 46%, rgba(65,253,45,1) 95%)',
    },
  })
);
interface IProps {
  data: any;
  yesterdayData: any;
}

const images = [
  'https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/assets%2Fcovid19.png?alt=media&token=7fff4ed4-df18-42ac-8e46-30bbd82b7a56',
  'https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/assets%2F3m-covid.png?alt=media&token=63eb8f5b-4171-42a8-b561-dc5d967baad2',
  'https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/assets%2Fpresiden-jokowi-disuntik-vaksin-corona-covid-19.jpeg?alt=media&token=e6334922-78c8-441b-b737-fcd5d28faaee',
  'https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/assets%2Fisolasi_mandiri.jpg?alt=media&token=1b205a78-fa83-4c05-a33d-90d31c99e8fc',
];

const imageStyle = (src: string) => ({
  backgroundImage: `url(${src})`,
  height: '100%',
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

const Home: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { subscription } = useSelector<ICombinedState, IReduxState>((state) => {
    return {
      subscription: state.subscription,
    };
  });

  // useEffect(() => {
  //   if (subscription.isShow) {
  //     alert('show popup subscription kawal vaksin');
  //     dispatch(actionHideSubscriptionPopup());
  //   } else {
  //     dispatch(actionShowSubscriptionPopup());
  //   }
  // }, []);

  return (
    <Layout>
      <Head>
        <meta name='og:keywords' content='Kabar Covid Sumba Timur' />
        <meta name='og:title' content='Kabar Covid Sumba Timur' />
        <meta property='og:site_name' content='Kabar Covid Sumba Timur' />
        <meta
          property='og:description'
          content='Situs yang menampilkan seputar informasi COVID-19 Di Daerah Sumba Timur & Sekitarnya'
        />
        <meta name='twitter:title' content='Kabar Covid Sumba Timur' />
        <meta
          name='twitter:description'
          content='Situs yang menampilkan seputar informasi COVID-19 Di Daerah Sumba Timur & Sekitarnya'
        />
        <meta
          property='og:url'
          content='https://kabar-covid-sumba-timur.vercel.app/'
        />

        <meta
          name='twitter:site'
          content='https://kabar-covid-sumba-timur.vercel.app/'
        />
        <meta
          property='og:image'
          content='https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/assets%2Flarge-logo.png?alt=media&token=aa2f190e-2d4f-4bf7-998f-b57c23dfec6c'
        />
        <meta
          name='twitter:image:src'
          content='https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/assets%2Flarge-logo.png?alt=media&token=aa2f190e-2d4f-4bf7-998f-b57c23dfec6c'
        />
        <meta property='og:image:width' content='1000' />
        <meta property='og:image:height' content='667' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image:alt' content='Kabar Covid Sumba Timur' />

        <title>Kabar Covid Sumba Timur</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className={classes.sliderContainer}>
        <Slider activeIndex={1} slidesAtOnce={1} auto={6000} hasBullets>
          {images.map((image, index) => (
            <div key={index} draggable='false' style={imageStyle(image)} />
          ))}
        </Slider>
      </div>
      <div>
        <Jumbotron
          title='Data Monitoring Harian'
          description={`Update: ${props.data.date}`}
        />
        {/* Sampel Dikirim / Diperiksa */}
        <div className={classes.wrapper}>
          <Typography className={classes.typeMonitoring}>
            Sampel Dikirim / Diperiksa
          </Typography>
          {/* TCM / PCR */}
          <div className={classes.containerTypeMonitoring}>
            <Typography className={classes.monitoringTitle}>
              TCM / PCR
            </Typography>
            <Divider className={classes.lineTypeMonitoring} />
            <div className={classes.monitoringSectionContainer}>
              <CardDataCovid
                icon='????'
                title='Positif TCM/PCR'
                totalNow={
                  props.data.data_covid_sumba_timur.data.tcm_pcr.positif
                }
                totalYesterday={
                  props.yesterdayData.data_covid_sumba_timur.data.tcm_pcr
                    .positif
                }
                dateYesterday={props.yesterdayData.date}
                description='Data positif hasil test TCM/PCR covid-19 di Sumba Timur'
              />
              <CardDataCovid
                icon='????'
                title='Negatif TCM/PCR'
                totalNow={
                  props.data.data_covid_sumba_timur.data.tcm_pcr.negatif
                }
                totalYesterday={
                  props.yesterdayData.data_covid_sumba_timur.data.tcm_pcr
                    .negatif
                }
                dateYesterday={props.yesterdayData.date}
                description='Data negatif hasil test TCM/PCR covid-19 di Sumba Timur'
              />
              <CardDataCovid
                title='Total Test TCM/PCR'
                totalNow={
                  props.data.data_covid_sumba_timur.data.tcm_pcr.positif +
                  props.data.data_covid_sumba_timur.data.tcm_pcr.negatif
                }
                totalYesterday={
                  props.yesterdayData.data_covid_sumba_timur.data.tcm_pcr
                    .positif +
                  props.yesterdayData.data_covid_sumba_timur.data.tcm_pcr
                    .negatif
                }
                dateYesterday={props.yesterdayData.date}
                description='Data total test TCM/PCR covid-19 di Sumba Timur'
              />
            </div>
          </div>
          {/* Rapid Antigen */}
          <div className={classes.containerTypeMonitoring}>
            <Typography className={classes.monitoringTitle}>
              Rapid Antigen
            </Typography>
            <Divider className={classes.lineTypeMonitoring} />
            <div className={classes.monitoringSectionContainer}>
              <CardDataCovid
                icon='????'
                title='Positif Rapid Antigen'
                totalNow={
                  props.data.data_covid_sumba_timur.data.rapid_antigen.positif
                }
                totalYesterday={
                  props.yesterdayData.data_covid_sumba_timur.data.rapid_antigen
                    .positif
                }
                dateYesterday={props.yesterdayData.date}
                description='Data positif hasil test Rapid Antigen covid-19 di Sumba Timur'
              />

              <CardDataCovid
                icon='????'
                title='Negatif Rapid Antigen'
                totalNow={
                  props.data.data_covid_sumba_timur.data.rapid_antigen.negatif
                }
                totalYesterday={
                  props.yesterdayData.data_covid_sumba_timur.data.rapid_antigen
                    .negatif
                }
                dateYesterday={props.yesterdayData.date}
                description='Data negatif hasil test Rapid Antigen covid-19 di Sumba Timur'
              />
              <CardDataCovid
                title='Total Test Rapid Antigen'
                totalNow={
                  props.data.data_covid_sumba_timur.data.rapid_antigen.positif +
                  props.data.data_covid_sumba_timur.data.rapid_antigen.negatif
                }
                totalYesterday={
                  props.yesterdayData.data_covid_sumba_timur.data.rapid_antigen
                    .positif +
                  props.yesterdayData.data_covid_sumba_timur.data.rapid_antigen
                    .negatif
                }
                dateYesterday={props.yesterdayData.date}
                description='Data total test Rapid Antigen covid-19 harian di Sumba Timur'
              />
            </div>
          </div>
        </div>
        <Divider className={classes.divider} />

        {/* Positif Covid-19 */}
        <div className={classes.wrapper}>
          <Typography className={classes.typeMonitoring}>
            Positif Covid-19
          </Typography>
          <div className={classes.containerTypeMonitoring}>
            <Typography className={classes.monitoringTitle}>
              Penambahan Kasus Hari Ini
            </Typography>
            <Divider className={classes.lineTypeMonitoring} />
            <div className={classes.monitoringSectionContainer}>
              <CardDataCovid
                title='Antigen'
                totalNow={
                  props.data.data_covid_sumba_timur.data.positif_covid
                    .penambahan_kasus_harian.antigen
                }
                totalYesterday={
                  props.yesterdayData.data_covid_sumba_timur.data.positif_covid
                    .penambahan_kasus_harian.antigen
                }
                dateYesterday={props.yesterdayData.date}
                description='Data penambahan kasus positif covid-19 harian melalui hasil test Rapid Antigen di Sumba Timur'
              />
              <CardDataCovid
                title='PCR / TCM'
                totalNow={
                  props.data.data_covid_sumba_timur.data.positif_covid
                    .penambahan_kasus_harian.pcr_tcm
                }
                totalYesterday={
                  props.yesterdayData.data_covid_sumba_timur.data.positif_covid
                    .penambahan_kasus_harian.pcr_tcm
                }
                dateYesterday={props.yesterdayData.date}
                description='Data penambahan kasus positif covid-19 harian melalui hasil test PCR/TCM Antigen di Sumba Timur'
              />
            </div>
          </div>
          <div className={classes.containerTypeMonitoring}>
            <Typography className={classes.monitoringTitle}>
              Data Total Positif
            </Typography>
            <Divider className={classes.lineTypeMonitoring} />
            <div className={classes.monitoringSectionContainer}>
              <CardDataCovid
                icon='????'
                title='Total Positif'
                totalNow={
                  props.data.data_covid_sumba_timur.data.positif_covid
                    .total_positif
                }
                totalYesterday={
                  props.yesterdayData.data_covid_sumba_timur.data.positif_covid
                    .total_positif
                }
                dateYesterday={props.yesterdayData.date}
                description='Data total kasus positif covid-19 di Sumba Timur'
              />
              <CardDataCovid
                icon='????'
                title='Total Dirawat'
                totalNow={
                  props.data.data_covid_sumba_timur.data.positif_covid
                    .total_dirawat
                }
                totalYesterday={
                  props.yesterdayData.data_covid_sumba_timur.data.positif_covid
                    .total_dirawat
                }
                dateYesterday={props.yesterdayData.date}
                description='Data total passien covid-19 yang dirawat di Sumba Timur'
              />
              <CardDataCovid
                icon='????'
                title='Total Sembuh'
                totalNow={
                  props.data.data_covid_sumba_timur.data.positif_covid
                    .total_sembuh
                }
                totalYesterday={
                  props.yesterdayData.data_covid_sumba_timur.data.positif_covid
                    .total_sembuh
                }
                dateYesterday={props.yesterdayData.date}
                description='Data total passien sembuh covid-19 di Sumba Timur'
              />
              <CardDataCovid
                icon='????'
                title='Total Meninggal'
                totalNow={
                  props.data.data_covid_sumba_timur.data.positif_covid
                    .total_meninggal
                }
                totalYesterday={
                  props.yesterdayData.data_covid_sumba_timur.data.positif_covid
                    .total_meninggal
                }
                dateYesterday={props.yesterdayData.date}
                description='Data total passien meninggal covid-19 di Sumba Timur'
              />
            </div>
          </div>
        </div>
      </div>

      <DataCovidPerkecamatan
        dataPerkecamatan={props.data.data_covid_perkecamatan_sumba_timur}
        dataPerkecamatanYesterday={
          props.yesterdayData.data_covid_perkecamatan_sumba_timur
        }
        dataPerKelurahanYesterday={props.yesterdayData.data_kelurahan_yesterday}
      />
      <Top10Kecamatan
        top10Kelurahan={props.data.top_10_kelurahan_kasus_covid}
        dateYesterday={
          props.yesterdayData.data_covid_perkecamatan_sumba_timur.date
        }
        dataPerKelurahanYesterday={props.yesterdayData.data_kelurahan_yesterday}
      />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const responseGetCovidData: any = await getCovidData();
    const responseGetCovidDataPerkecamatan: any =
      await getCovidDataPerkecamatan();
    let listkelurahan: IKelurahan[] = [];
    responseGetCovidDataPerkecamatan.data.map((kecamatan: IKecamatan) => {
      kecamatan.kelurahan.map((kelurahan) => {
        listkelurahan.push(kelurahan);
      });
    });
    listkelurahan = sortBy(listkelurahan, 'total').reverse();

    const dataKelurahanYesterday: IKelurahan[] = [];
    responseGetCovidDataPerkecamatan.dataYesterday.data.map(
      (kecamatan: IKecamatan) => {
        kecamatan.kelurahan.map((kelurahan) => {
          dataKelurahanYesterday.push(kelurahan);
        });
      }
    );

    return {
      props: {
        data: {
          date: responseGetCovidData.date,
          data_covid_sumba_timur: responseGetCovidData,
          data_covid_perkecamatan_sumba_timur: {
            date: responseGetCovidDataPerkecamatan.date,
            data: responseGetCovidDataPerkecamatan.data,
          },
          top_10_kelurahan_kasus_covid: listkelurahan.slice(0, 10),
        },
        yesterdayData: {
          date: responseGetCovidData.data.dataYesterday.date,
          data_covid_sumba_timur: responseGetCovidData.data.dataYesterday,
          data_covid_perkecamatan_sumba_timur:
            responseGetCovidDataPerkecamatan.dataYesterday,
          data_kelurahan_yesterday: dataKelurahanYesterday,
        },
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 3600 seconds (1 hours)
      revalidate: 3600, // In seconds
    };
  } catch (err) {
    return {
      props: {
        success: false,
        data: [],
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 3600 seconds (1 hours)
      revalidate: 3600, // In seconds
    };
  }
};
