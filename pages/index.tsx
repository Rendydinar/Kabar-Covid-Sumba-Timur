import Slider from '@farbenmeer/react-spring-slider';
import { Divider, Typography } from '@material-ui/core';
import sortBy from 'lodash/sortBy';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import Card from '../components/Card';
import DataCovidPerkecamatan from '../components/DataCovidPerkecamatan';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import Top10Kecamatan from '../components/Top10Kecamatan';
import { IKecamatan, IKelurahan } from '../interfaces';
import { getHariIni } from '../utils/date';
import { createStyles, makeStyles } from '@material-ui/core';
import { GetStaticProps } from 'next';

const s = makeStyles(() =>
  createStyles({
    sliderContainer: {
      height: '80vh',
    },
    typeMonitoring: {
      fontSize: '26px',
      fontWeight: 700,
      textAlign: 'center',
    },
    containerTypeMonitoring: {
      padding: '0 125px',
    },
    monitoringTitle: {
      fontSize: '20px',
      fontWeight: 700,
      textTransform: 'uppercase',
      textDecoration: 'underline',
    },
    monitoringSectionContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      justifyContent: 'center',
      alignItems: 'center',
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
  const classes = s();

  return (
    <Layout>
      <Head>
        <title>Kabar Covid Sumba Timur</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
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
            {images.map((image) => (
              <div key={image} draggable='false' style={imageStyle(image)} />
            ))}
          </Slider>
        </div>
        <div>
          <Jumbotron
            title='Data Monitoring Harian'
            description={`Update: ${getHariIni()}`}
          />
          {/* Sampel Dikirim / Diperiksa */}
          <div
            style={{
              marginTop: '15px',
              padding: '0 30px',
            }}
          >
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
                    props.data.data_covid_sumba_timur.data.rapid_antigen
                      .positif +
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
      </main>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  // const { username } = params
  // const profile = await getProfileData(username)
  // if (!profile) {
  //   return { notFound: true }
  // }
  // return { props: { data: { username, profile } } }
  const DATA_COVID_SUMBA_TIMUR = {
    date: '08-08-2021',
    data: {
      tcm_pcr: {
        positif: 2663,
        negatif: 4317,
        // data total otomatis
      },
      rapid_antigen: {
        positif: 2446,
        negatif: 13459,
        // data total otomatis
      },
      positif_covid: {
        penambahan_kasus_harian: {
          antigen: 49,
          pcr_tcm: 2,
        },
        total_positif: 4251,
        total_dirawat: 1073,
        total_sembuh: 3093,
        total_meninggal: 85,
        // data grafik otomatis
      },
    },
  };

  const DATA_COVID_PERKECAMATAN_SUMBA_TIMUR = {
    date: '08-08-2021',
    data: [
      {
        name: 'Kota',
        kelurahan: [
          {
            name: 'hambala',
            total: 84,
          },
          {
            name: 'kambajawa',
            total: 233,
          },
          {
            name: 'matawai',
            total: 63,
          },
          {
            name: 'kamalaputi',
            total: 45,
          },
          {
            name: 'mbatakapidu',
            total: 14,
          },
          {
            name: 'pambotanjara',
            total: 2,
          },
        ],
      },
      {
        name: 'kambera',
        kelurahan: [
          {
            name: 'prailiu',
            total: 122,
          },
          {
            name: 'kambaniru',
            total: 44,
          },
          {
            name: 'wangga',
            total: 100,
          },
          {
            name: 'malumbi',
            total: 3,
          },
          {
            name: 'mauhau',
            total: 2,
          },
          {
            name: 'lambanapu',
            total: 17,
          },
          {
            name: 'mauliru',
            total: 5,
          },
        ],
      },
    ],
    // dan seterusnya ...
  };

  const DATA_TEMPAT_ISOLASI = {
    date: '08-08-2021',
    data: {
      rawat_rsud: {
        terkonfirmasi: 35,
        menunggu_hasil_pcr: 10,
        // total (kasus) isi otomatis
      },
      isolasi_terpusat: [
        {
          nama_tempat: 'Hotel Cendana',
          kasus_terkonfirmasi: 19, // kasus terkonfirmasi
        },
        {
          nama_tempat: 'Mr. Home Stay',
          kasus_terkonfirmasi: 14, // kasus terkonfirmasi
        },
        {
          nama_tempat: 'Penginapan BPK. Daud',
          kasus_terkonfirmasi: 8, // kasus terkonfirmasi
        },
      ],
      isolasi_mandiri: 997, // kasus
    },
  };

  let listkelurahan: IKelurahan[] = [];
  DATA_COVID_PERKECAMATAN_SUMBA_TIMUR.data.map((kecamatan: IKecamatan) => {
    kecamatan.kelurahan.map((kelurahan) => {
      listkelurahan.push(kelurahan);
    });
  });
  listkelurahan = sortBy(listkelurahan, 'total').reverse();

  return {
    props: {
      data: {
        data_covid_sumba_timur: DATA_COVID_SUMBA_TIMUR,
        data_covid_perkecamatan_sumba_timur:
          DATA_COVID_PERKECAMATAN_SUMBA_TIMUR,
        data_tempat_isolasi: DATA_TEMPAT_ISOLASI,
        top_10_kelurahan_kasus_covid: listkelurahan.slice(0, 10),
      },
    },
  };
};
