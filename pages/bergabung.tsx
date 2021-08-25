import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import CardJoinKontribusi from '../components/CardJoinKontribusi';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import LIST_TIM_TO_JOIN from '../data/rekruttim';
import { IJoinKontributor } from '../interfaces';

interface IProps {
  data: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0 40px',
      [theme.breakpoints.down('sm')]: {
        padding: '0 10px',
      },
    },
    containerGridJoinContributor: {
      marginTop: '30px',
    },
    containerInfo: {
      backgroundColor: '#fafafa',
      display: 'flex',
      flexDirection: 'column',
      gap: '11px',
      padding: '25px 100px',
      [theme.breakpoints.down('sm')]: {
        padding: '10px 20px',
      },
    },
  })
);

const Bergabung: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <Head>
        <meta name='og:keywords' content='Bergabung' />
        <meta name='og:title' content='Kabar Covid Sumba Timur | Bergabung' />
        <meta
          property='og:site_name'
          content='Kabar Covid Sumba Timur | Bergabung'
        />
        <meta
          property='og:description'
          content='Bergabung Denga Kami Di Tim Kabar Covid Sumba Timur'
        />
        <meta name='twitter:title' content='Kabar Covid Sumba Timur' />
        <meta
          name='twitter:description'
          content='Bergabung Kabar Covid Sumba Timur'
        />
        <meta
          property='og:url'
          content='https://kabar-covid-sumba-timur.vercel.app/bergabung'
        />
        <meta
          name='twitter:site'
          content='https://kabar-covid-sumba-timur.vercel.app/bergabung'
        />

        <meta
          property='og:image'
          content='https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/assets%2FGroup%2020.png?alt=media&token=82020dd2-4d31-4bb4-931c-f5287d0ab683'
        />
        <meta
          name='twitter:image:src'
          content='https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/assets%2FGroup%2020.png?alt=media&token=82020dd2-4d31-4bb4-931c-f5287d0ab683'
        />
        <meta property='og:image:width' content='1000' />
        <meta property='og:image:height' content='667' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image:alt' content='Kabar Covid Sumba Timur' />

        <title>Kabar Covid Sumba Timur | Bergabung</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Jumbotron title='Bergabung' description='Bergabung Dengan Kami' />
        <div className={classes.containerInfo}>
          <Typography align='left' variant='body2'>
            Dengan memiliki inisiatif untuk membantu masyarakat Sumba Timur yang
            mencari informasi terkait Covid-19 baik itu{' '}
            <b>informasi jadwal vaksin</b>, <b>data covid harian</b>,{' '}
            <b>berita dari pemerintah daerah</b> dan{' '}
            <b>edukasi tentang Covid-19</b>.
          </Typography>
          <Typography align='left' variant='body2'>
            Kami mengajak kamu juga untuk menjadi bagian dari Tim Kami untuk
            membantu masyarakat Sumba Timur lewat karya-karya yang bisa kamu
            berikan.
          </Typography>
        </div>
        <div className={classes.root}>
          <Grid
            container
            spacing={2}
            className={classes.containerGridJoinContributor}
            justifyContent='center'
          >
            {LIST_TIM_TO_JOIN.map(
              (kontributor: IJoinKontributor, index: number) => (
                <Grid item key={index}>
                  <CardJoinKontribusi key={index} kontributor={kontributor} />
                </Grid>
              )
            )}
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default Bergabung;
