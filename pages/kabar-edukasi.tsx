import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import { IEdukasiCard, IQnA } from '../interfaces';
import { getSortedPostsData } from '../lib/postsKabarEdukasi';
import CardEdukasi from '../components/CardEdukasi';
import DataQnA from '../data/qna.json';
import ItemQnA from '../components/ItemQnA';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0 40px',
      [theme.breakpoints.down('sm')]: {
        padding: '0 10px',
      },
    },
    containerContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })
);

interface IProps {
  allPostsData: IEdukasiCard[];
}

const KabarEdukasi: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();
  console.log(props);
  return (
    <Layout>
      <Head>
        <meta name='og:keywords' content='Kabar Edukasi Covid-19 Sumba Timur' />
        <meta
          name='og:title'
          content='Kabar Covid Sumba Timur | Kabar Edukasi'
        />
        <meta
          property='og:site_name'
          content='Kabar Covid Sumba Timur | Kabar Edukasi'
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
        <title>Kabar Covid-19 Sumba Timur | Kabar Edukasi</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Jumbotron
          title='Kabar Edukasi'
          description='Kumpulan informasi COVID-19, tips menjaga kesehatan selama pandemi, vaksinasi, hingga penanganan jika Anda terkonfirmasi positif COVID-19 yang disesuaikan dengan kondisi di Sumba Timur.'
        />
        <div className={classes.root}>
          <div>
            <Typography>Artikel Edukasi</Typography>
            <ul>
              {props.allPostsData.map(
                (edukasi: IEdukasiCard, index: number) => (
                  <li key={index}>
                    <CardEdukasi key={index} edukasi={edukasi} />
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <Typography>Q n A</Typography>
            <ul>
              {DataQnA.data.map((qna: IQnA, index: number) => (
                <li key={index}>
                  <ItemQnA qna={qna} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KabarEdukasi;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData: allPostsData,
    },
  };
};
