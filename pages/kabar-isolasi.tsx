import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import CardIsolasi from '../components/CardIsolasi';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import { getIsolasiData } from '../fetchData/getIsolasiData';
import { IIsolasi } from '../interfaces';

interface IProps {
  data: any;
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
      padding: '0 130px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        padding: '0 10px',
      },
    },
    cardKasusAktif: {
      fontSize: '20px',
      fontWeight: 600,
      textAlign: 'center',
      width: '180px',
      backgroundColor: '#D2F6C5',
      padding: '5px',
      borderRadius: '15px',
      color: '#000',
      boxShadow:
        'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
      },
    },
    totalKasusAktif: {
      fontSize: '26px',
      fontWeight: 'bold',
      color: '#e44933',
      [theme.breakpoints.down('sm')]: {
        fontSize: '22px',
      },
    },
  })
);

const KabarIsolasi: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();
  const [totalKasus, setTotalKasus] = useState<number>(0);
  useEffect(() => {
    let tempTotalKasus: number = 0;
    props.data.data.isolasi_terpusat.data.map((isolasi: IIsolasi) => {
      tempTotalKasus += isolasi.kasus_terkonfirmasi;
    });
    tempTotalKasus += props.data.data.rawat_rsud.terkonfirmasi;
    // tempTotalKasus += props.data.data.rawat_rsud.menunggu_hasil_pcr;
    tempTotalKasus += props.data.data.isolasi_mandiri.kasus_terkonfirmasi;
    setTotalKasus(tempTotalKasus);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Kabar Isolasi</title>
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
            <span className={classes.totalKasusAktif}>{totalKasus}</span> Kasus
            Aktif
          </Typography>
          <div
            style={{
              width: '100%',
            }}
          >
            {props.data.data.isolasi_terpusat.data.map(
              (isolasi: IIsolasi, index: number) => (
                <CardIsolasi isolasi={isolasi} key={index} />
              )
            )}
            <CardIsolasi isolasi={props.data.data.rawat_rsud} />
            <CardIsolasi isolasi={props.data.data.isolasi_mandiri} />
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
        success: true,
        data: responseGetIsolasiData,
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
