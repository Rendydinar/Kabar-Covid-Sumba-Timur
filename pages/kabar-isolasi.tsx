import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { findIndex } from 'lodash';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import Badge from '../components/Badge';
import CardIsolasi from '../components/CardIsolasi';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import { getIsolasiData } from '../fetchData/getIsolasiData';
import { IIsolasi } from '../interfaces';
import { comparasionData } from '../utils';

interface IProps {
  data: any;
  dataYesterday: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '15px',
    },
    dateUpdate: {
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: 700,
      textDecoration: 'underline',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
      },
    },
    containerContent: {
      position: 'relative',
      padding: '0 130px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        padding: '0 10px',
      },
    },
    cardKasusAktif: {
      alignItems: 'center',
      position: 'relative',
      display: 'flex',
      fontSize: '20px',
      fontWeight: 600,
      textAlign: 'center',
      width: '180px',
      backgroundColor: '#D2F6C5',
      padding: '5px',
      borderRadius: '15px',
      color: '#111827',
      boxShadow:
        'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
      },
    },
    totalKasusAktif: {
      marginRight: '5px',
      fontSize: '26px',
      fontWeight: 'bold',
      color: '#e44933',
      [theme.breakpoints.down('sm')]: {
        fontSize: '22px',
      },
    },
    badge: {
      top: '0px !important',
      left: '90% !important',
    },
  })
);

const KabarIsolasi: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();
  const [totalKasusToday, setTotalKasusToday] = useState<number>(0);
  const [totalKasusYesterday, setTotalKasusYesterday] = useState<number>(0);

  useEffect(() => {
    let tempTotalKasus: number = 0;
    props.data.isolasi_terpusat.data.map((isolasi: IIsolasi) => {
      tempTotalKasus += isolasi.kasus_terkonfirmasi;
    });
    tempTotalKasus += props.data.rawat_rsud.terkonfirmasi;
    // tempTotalKasus += props.data.rawat_rsud.menunggu_hasil_pcr;
    tempTotalKasus += props.data.isolasi_mandiri.kasus_terkonfirmasi;
    setTotalKasusToday(tempTotalKasus);

    let tempTotalKasusYesterday: number = 0;
    props.dataYesterday.data.isolasi_terpusat.data.map((isolasi: IIsolasi) => {
      tempTotalKasusYesterday += isolasi.kasus_terkonfirmasi;
    });
    tempTotalKasusYesterday +=
      props.dataYesterday.data.rawat_rsud.terkonfirmasi;
    // tempTotalKasusYesterday += props.dataYesterday.data.rawat_rsud.menunggu_hasil_pcr;
    tempTotalKasusYesterday +=
      props.dataYesterday.data.isolasi_mandiri.kasus_terkonfirmasi;
    setTotalKasusYesterday(tempTotalKasusYesterday);
  }, []);

  const getComparasionIsolasiTerpusat = (
    placeName: string,
    total: number
  ): number => {
    const indexIsolasiYesterday = findIndex(props.data.isolasi_terpusat.data, {
      nama_tempat: placeName,
    });
    if (indexIsolasiYesterday != -1) {
      const isolasiYesterday =
        props.data.isolasi_terpusat.data[indexIsolasiYesterday];
      return comparasionData(total, isolasiYesterday.kasus_terkonfirmasi ?? 0);
    } else {
      return 0;
    }
  };

  return (
    <Layout>
      <Head>
        <meta name='og:keywords' content='Kabar Isolasi Covid-19 Sumba Timur' />
        <meta
          name='og:title'
          content='Kabar Covid Sumba Timur | Kabar Isolasi'
        />
        <meta
          property='og:site_name'
          content='Kabar Covid Sumba Timur | Kabar Isolasi'
        />
        <meta
          property='og:description'
          content='Informasi seputar isolasi passien covid-19 di Sumba Timur'
        />
        <meta name='twitter:title' content='Kabar Covid Sumba Timur' />
        <meta
          name='twitter:description'
          content='Informasi seputar isolasi passien covid-19 di Sumba Timur'
        />
        <meta
          property='og:url'
          content='https://kabar-covid-sumba-timur.vercel.app/kabar-isolasi'
        />
        <meta
          name='twitter:site'
          content='https://kabar-covid-sumba-timur.vercel.app/kabar-isolasi'
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

        <title>Kabar Covid Sumba Timur | Kabar Isolasi</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Jumbotron
        title='Kabar Isolasi'
        description='Informasi seputar isolasi passien covid-19 di Sumba Timur'
      />
      <div className={classes.root}>
        <Typography className={classes.dateUpdate}>
          Update Time: {props.data.date}
        </Typography>
        <div className={classes.containerContent}>
          <Typography className={classes.cardKasusAktif}>
            <span className={classes.totalKasusAktif}>{totalKasusToday}</span>{' '}
            Kasus Aktif
            <Badge
              total={comparasionData(totalKasusToday, totalKasusYesterday)}
              className={classes.badge}
            ></Badge>
          </Typography>

          <div
            style={{
              width: '100%',
            }}
          >
            {props.data.isolasi_terpusat.data.map(
              (isolasi: IIsolasi, index: number) => (
                <CardIsolasi
                  isolasi={isolasi}
                  key={index}
                  isolasiYesterday={getComparasionIsolasiTerpusat(
                    isolasi.nama_tempat,
                    isolasi.kasus_terkonfirmasi
                  )}
                  dateYesterday={props.dataYesterday.date}
                />
              )
            )}
            <CardIsolasi
              isolasi={props.data.rawat_rsud}
              isolasiYesterday={comparasionData(
                props.data.rawat_rsud.terkonfirmasi,
                props.dataYesterday.data.rawat_rsud.terkonfirmasi
              )}
              dateYesterday={props.dataYesterday.date}
            />
            <CardIsolasi
              isolasi={props.data.isolasi_mandiri}
              isolasiYesterday={comparasionData(
                props.data.isolasi_mandiri.kasus_terkonfirmasi,
                props.dataYesterday.data.isolasi_mandiri.kasus_terkonfirmasi
              )}
              dateYesterday={props.dataYesterday.date}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KabarIsolasi;

export const getServerSideProps = async () => {
  try {
    const responseGetIsolasiData: any = await getIsolasiData();
    return {
      props: {
        date: responseGetIsolasiData.date,
        data: responseGetIsolasiData.data,
        dataYesterday: responseGetIsolasiData.dataYesterday,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10800 seconds (3 hours)
    };
  } catch (err) {
    return {
      props: {
        date: '',
        data: null,
        dataYesterday: null,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10800 seconds (3 hours)
    };
  }
};
