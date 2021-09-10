import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import FormSubscribeJadwalVaksin from '../components/FormSubscribeJadwalVaksin';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import SubscribeJadwalVaksinAction from '../components/SubscribeJadwalVaksinAction';
import { shimmer, toBase64 } from '../utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0 40px',
      [theme.breakpoints.down('sm')]: {
        padding: '0 10px',
      },
    },
    descriptionJombotron: {
      fontSize: '20px',
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
    imageVaksinContainer: {
      width: '100%',
      '& > div': {
        position: 'unset !important',
      },
    },
    containerFormSubscribe: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      margin: '20px 0 50px 0',
    },
    containerInfo: {
      [theme.breakpoints.down('sm')]: {
        // marginTop: '40px',
      },
    },
    containerGrid: {
      marginTop: '10px',
    },
  })
);

interface IProps {}

const KabarEdukasi: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <Head>
        <meta
          name='og:keywords'
          content='Kawal Jadwal Vaksin Covid-19 Sumba Timur'
        />
        <meta
          name='og:title'
          content='Kabar Covid Sumba Timur | Kawal Jadwal Vaksin'
        />
        <meta
          property='og:site_name'
          content='Kabar Covid Sumba Timur | Kawal Jadwal Vaksin'
        />
        <meta
          property='og:description'
          content='Kumpulan informasi COVID-19, tips menjaga kesehatan selama pandemi, vaksinasi, hingga penanganan jika Anda terkonfirmasi positif COVID-19 yang disesuaikan dengan kondisi di Sumba Timur.'
        />
        <meta name='twitter:title' content='Kabar Covid Sumba Timur' />
        <meta
          name='twitter:description'
          content='Kumpulan informasi COVID-19, tips menjaga kesehatan selama pandemi, vaksinasi, hingga penanganan jika Anda terkonfirmasi positif COVID-19 yang disesuaikan dengan kondisi di Sumba Timur.'
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

        <meta
          property='og:url'
          content='https://kabar-covid-sumba-timur.vercel.app/kabar-edukasi'
        />
        <meta
          name='twitter:site'
          content='https://kabar-covid-sumba-timur.vercel.app/kabar-edukasi'
        />
        <title>Kabar Covid Sumba Timur | Kawal Jadwal Vaksin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Jumbotron
          title='Kawal Jadwal Vaksin'
          description='Dapatkan informasi jadwal vaksinasi Covid-19 di Sumba Timur melalui pesan yang dikirimkan ke Whatsapp kamu'
          classNameDescription={classes.descriptionJombotron}
        />
        <div className={classes.root}>
          <Grid container spacing={2} className={classes.containerGrid}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className={classes.imageVaksinContainer}>
                <Image
                  priority
                  src='/images/alexander-shatov-whatsapp-illustration-unsplash.jpg'
                  alt='Whatsapp-Illustration'
                  layout='fill'
                  className={'imageBanner'}
                  placeholder='blur'
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 700)
                  )}`}
                />
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className={classes.containerInfo}>
                <Typography variant='h5'>Kawal Jadwal Vaksin</Typography>
                <Typography variant='body2'>
                  Kawal Jadwal Vaksin adalah Fitur baru Kabar Covid Sumba Timur
                  yang mengirimkan pesan whatsapp secara otomatis kepada
                  masyarakat terkait informasi jadwal vaksin.
                </Typography>
                <Typography variant='body2'>
                  Kawal Jadwal Vaksin adalah Fitur baru Kabar Covid Sumba Timur
                  yang mengirimkan pesan whatsapp secara otomatis kepada
                  masyarakat terkait informasi jadwal vaksin.
                </Typography>
                <Typography variant='body2'>
                  Kawal Jadwal Vaksin adalah Fitur baru Kabar Covid Sumba Timur
                  yang mengirimkan pesan whatsapp secara otomatis kepada
                  masyarakat terkait informasi jadwal vaksin.
                </Typography>
                <Typography variant='body2'>
                  Kawal Jadwal Vaksin adalah Fitur baru Kabar Covid Sumba Timur
                  yang mengirimkan pesan whatsapp secara otomatis kepada
                  masyarakat terkait informasi jadwal vaksin.
                </Typography>
                <Typography variant='body2'>
                  Kawal Jadwal Vaksin adalah Fitur baru Kabar Covid Sumba Timur
                  yang mengirimkan pesan whatsapp secara otomatis kepada
                  masyarakat terkait informasi jadwal vaksin.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <div style={{ marginTop: '40px' }}>
            <Typography variant='h5'>
              Formulir Langganan Kawal Jadwal Vaksin
            </Typography>
            <div className={classes.containerFormSubscribe}>
              <FormSubscribeJadwalVaksin />
            </div>
          </div>
          <SubscribeJadwalVaksinAction />
          <div>
            <Typography variant='h5'>
              Bagaimana Cara Bekerja ? (Howw 🤔)
            </Typography>
            {/* <div className={classes.imageVaksinContainer}> */}
            <Image
              priority
              src='/images/flow-kawal-kabar-vaksin.png'
              alt='flow-kawal-kabar-vaksin'
              width={740}
              height={690}
              // layout='fill'
              // className={'imageBanner'}
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 700)
              )}`}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KabarEdukasi;
