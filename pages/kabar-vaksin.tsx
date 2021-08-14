import { createStyles, makeStyles, Theme } from '@material-ui/core';
import sortBy from 'lodash/sortBy';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import CardVaksin from '../components/CardVaksin';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import { getDataVaksin } from '../fetchData/getDataVaksin';
import { IVaksin } from '../interfaces';

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
  data: IVaksin[];
  success: boolean;
  revalidate: number;
  fallback: boolean;
}

const KabarVaksin: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <Head>
        <meta name='og:keywords' content='Kabar Vaksin Covid-19 Sumba Timur' />
        <meta
          name='og:title'
          content='Kabar Covid Sumba Timur | Kabar Vaksin'
        />
        <meta
          property='og:site_name'
          content='Kabar Covid Sumba Timur | Kabar Vaksin'
        />
        <meta
          property='og:description'
          content='Informasi seputar vaksin covid-19 di Sumba Timur'
        />
        <meta name='twitter:title' content='Kabar Covid Sumba Timur' />
        <meta
          name='twitter:description'
          content='Informasi seputar vaksin covid-19 di Sumba Timur'
        />
        <meta
          property='og:url'
          content='https://kabar-covid-sumba-timur.vercel.app/kabar-vaksin'
        />
        <meta
          name='twitter:site'
          content='https://kabar-covid-sumba-timur.vercel.app/kabar-vaksin'
        />
        <title>Kabar Covid-19 Sumba Timur | Kabar Vaksin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Jumbotron
          title='Kabar Vaksin'
          description='Informasi seputar vaksin covid-19 di Sumba Timur'
        />
        <div className={classes.root}>
          <div className={classes.containerContent}>
            {props.data.map((vaksin: IVaksin, index: number) => (
              <CardVaksin vaksin={vaksin} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KabarVaksin;

export const getStaticProps: GetStaticProps = async () => {
  try {
    let dataVaksin: IVaksin[] = [];
    let responseGetDataVaksin: any = await getDataVaksin();
    responseGetDataVaksin.map((vaksin: any) => {
      dataVaksin.push({
        ...vaksin.data(),
      });
    });
    dataVaksin = sortBy(dataVaksin, 'timestamp').reverse();
    return {
      props: {
        success: true,
        data: dataVaksin,
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
