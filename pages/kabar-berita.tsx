import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import { IBeritaCard } from '../interfaces';
import { getSortedPostsData } from '../lib/postsKabarBerita';
import CardBerita from '../components/CardBerita';

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
  allPostsData: IBeritaCard[];
}

const KabarBerita: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <Head>
        <meta name='og:keywords' content='Kabar Berita Covid-19 Sumba Timur' />
        <meta
          name='og:title'
          content='Kabar Covid Sumba Timur | Kabar Berita'
        />
        <meta
          property='og:site_name'
          content='Kabar Covid Sumba Timur | Kabar Berita'
        />
        <meta
          property='og:description'
          content='Informasi seputar berita & artikel covid-19 di Sumba Timur'
        />
        <meta name='twitter:title' content='Kabar Covid Sumba Timur' />
        <meta
          name='twitter:description'
          content='Informasi seputar berita & artikel covid-19 di Sumba Timur'
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
          content='https://kabar-covid-sumba-timur.vercel.app/kabar-berita'
        />
        <meta
          name='twitter:site'
          content='https://kabar-covid-sumba-timur.vercel.app/kabar-berita'
        />
        <title>Kabar Covid-19 Sumba Timur | Kabar Berita</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Jumbotron
          title='Kabar Berita'
          description='Informasi seputar berita & artikel covid-19 di Sumba Timur'
        />
        <div className={classes.root}>
          <ul>
            {props.allPostsData.map((berita: IBeritaCard, index: number) => (
              <li key={index}>
                <CardBerita key={index} berita={berita} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default KabarBerita;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData: allPostsData,
    },
  };
};
