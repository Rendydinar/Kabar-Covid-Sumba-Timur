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
import React, { ReactElement } from 'react';
import Card from '../components/Card';
import DataCovidPerkecamatan from '../components/DataCovidPerkecamatan';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import Top10Kecamatan from '../components/Top10Kecamatan';
import { getCovidData } from '../fetchData/getCovidData';
import { getCovidDataPerkecamatan } from '../fetchData/getCovidDataPerkecamatan';
import { IKecamatan, IKelurahan } from '../interfaces';
import { getHariIni } from '../utils/date';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sliderContainer: {
      height: '80vh',
    },
    typeMonitoring: {
      fontSize: '26px',
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
      [theme.breakpoints.down('md')]: {
        padding: '0 50px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
    monitoringTitle: {
      fontSize: '20px',
      fontWeight: 700,
      textTransform: 'uppercase',
      textDecoration: 'underline',
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
  })
);
interface IProps {
  data: any;
}

const images = [
  'https://images.pexels.com/photos/3740695/pexels-photo-3740695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/3740446/pexels-photo-3740446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

const imageStyle = (src: string) => ({
  backgroundSize: 'cover',
  backgroundImage: `url(${src})`,
  height: '100%',
  width: '100%',
});

const Home: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>Kabar Covid Sumba Timur</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className={classes.sliderContainer}>
        <Slider
          activeIndex={1}
          slidesAtOnce={1}
          auto={6000}
          hasBullets
          // BulletComponent={BulletComponent}
          // ArrowComponent={ArrowComponent}
          // onSlideChange={onSlideChange}
          // setSlideCustom={setSlideCustom}
        >
          {images.map((image, index) => (
            <div key={index} draggable='false' style={imageStyle(image)} />
          ))}
        </Slider>
      </div>
      <div>
        <Jumbotron
          title='Data Monitoring Harian'
          description={`Update: ${getHariIni()}`}
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
            <div className={classes.monitoringSectionContainer}>
              <Card
                icon='😟'
                title='Positif'
                total={props.data.data_covid_sumba_timur.data.tcm_pcr.positif}
              />
              <Card
                icon='😊'
                title='Negatif'
                total={props.data.data_covid_sumba_timur.data.tcm_pcr.negatif}
              />
              <Card
                title='Total'
                total={
                  props.data.data_covid_sumba_timur.data.tcm_pcr.positif +
                  props.data.data_covid_sumba_timur.data.tcm_pcr.negatif
                }
              />
            </div>
          </div>
          {/* Rapid Antigen */}
          <div className={classes.containerTypeMonitoring}>
            <Typography className={classes.monitoringTitle}>
              Rapid Antigen
            </Typography>
            <div className={classes.monitoringSectionContainer}>
              <Card
                icon='😟'
                title='Positif'
                total={
                  props.data.data_covid_sumba_timur.data.rapid_antigen.positif
                }
              />
              <Card
                icon='😊'
                title='Negatif'
                total={
                  props.data.data_covid_sumba_timur.data.rapid_antigen.negatif
                }
              />
              <Card
                title='Total'
                total={
                  props.data.data_covid_sumba_timur.data.rapid_antigen.positif +
                  props.data.data_covid_sumba_timur.data.rapid_antigen.negatif
                }
              />
            </div>
          </div>
        </div>
        <Divider className={classes.divider} />

        {/* Positif Covid-19 */}
        <div
          style={{
            marginTop: '15px',
            padding: '0 30px',
            // paddingBottom: '50pc',
          }}
        >
          <Typography className={classes.typeMonitoring}>
            Positif Covid-19
          </Typography>
          <div className={classes.containerTypeMonitoring}>
            <Typography className={classes.monitoringTitle}>
              Penambahan Kasus Hari Ini
            </Typography>
            <div className={classes.monitoringSectionContainer}>
              <Card
                title='Antigen'
                total={
                  props.data.data_covid_sumba_timur.data.positif_covid
                    .penambahan_kasus_harian.antigen
                }
              />
              <Card
                title='PCR / TCM'
                total={
                  props.data.data_covid_sumba_timur.data.positif_covid
                    .penambahan_kasus_harian.pcr_tcm
                }
              />
            </div>
          </div>
          <div className={classes.containerTypeMonitoring}>
            <Typography className={classes.monitoringTitle}>
              Data Total Positif
            </Typography>
            <div className={classes.monitoringSectionContainer}>
              <Card
                icon='😟'
                title='Total Positif'
                total={
                  props.data.data_covid_sumba_timur.data.positif_covid
                    .total_positif
                }
              />
              <Card
                icon='🤒'
                title='Total Dirawat'
                total={
                  props.data.data_covid_sumba_timur.data.positif_covid
                    .total_dirawat
                }
              />
              <Card
                icon='😃'
                title='Total Sembuh'
                total={
                  props.data.data_covid_sumba_timur.data.positif_covid
                    .total_sembuh
                }
              />
              <Card
                icon='😢'
                title='Total Meninggal'
                total={
                  props.data.data_covid_sumba_timur.data.positif_covid
                    .total_meninggal
                }
              />
            </div>
          </div>
        </div>
      </div>

      <DataCovidPerkecamatan
        dataPerkecamatan={props.data.data_covid_perkecamatan_sumba_timur}
      />
      <Top10Kecamatan
        top10Kelurahan={props.data.top_10_kelurahan_kasus_covid}
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

    return {
      props: {
        data: {
          data_covid_sumba_timur: responseGetCovidData,
          data_covid_perkecamatan_sumba_timur: responseGetCovidDataPerkecamatan,
          top_10_kelurahan_kasus_covid: listkelurahan.slice(0, 10),
        },
      },
    };
  } catch (err) {
    return {
      props: {
        success: false,
        data: [],
      },
    };
  }
};
