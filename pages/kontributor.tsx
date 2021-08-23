import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import DataKontributor from '../data/kontributor.json';
import { IKontributor } from '../interfaces';
import CardKontributor from '../components/CardKontributor';

interface IProps {
  data: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '30px',
      padding: '0 40px',
      [theme.breakpoints.down('sm')]: {
        padding: '0 10px',
      },
    },
  })
);

const Tentang: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <meta name='og:keywords' content='Kontributor' />
        <meta name='og:title' content='Kabar Covid Sumba Timur | Kontributor' />
        <meta
          property='og:site_name'
          content='Kabar Covid Sumba Timur | Kontributor'
        />
        <meta
          property='og:description'
          content='Kontributor Kabar Covid-19 Sumba Timur'
        />
        <meta name='twitter:title' content='Kabar Covid Sumba Timur' />
        <meta
          name='twitter:description'
          content='Kontributor Kabar Covid-19 Sumba Timur'
        />
        <meta
          property='og:url'
          content='https://kabar-covid-sumba-timur.vercel.app/kontributor'
        />
        <meta
          name='twitter:site'
          content='https://kabar-covid-sumba-timur.vercel.app/kontributor'
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

        <title>Kabar Covid-19 Sumba Timur | Kontributor</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Jumbotron
          title='Kontributor'
          description='Kontributor Kabar Covid-19 Sumba Timur'
        />
        <div className={classes.root}>
          <Grid container spacing={2} justifyContent='center'>
            {DataKontributor.data.map(
              (kontributor: IKontributor, index: number) => (
                <Grid item key={index}>
                  <CardKontributor contributor={kontributor} />
                </Grid>
              )
            )}
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default Tentang;
