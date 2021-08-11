import { Typography } from '@material-ui/core';
import sortBy from 'lodash/sortBy';
import Head from 'next/head';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import { getDataVaksin } from '../fetchData/getDataVaksin';
import { IVaksin } from '../interfaces';
import { createStyles, makeStyles } from '@material-ui/core';
import { ContactSupportOutlined } from '@material-ui/icons';
import { GetStaticProps } from 'next';

const useStyles = makeStyles(() =>
  createStyles({
    imgVaksin: {
      width: '400px',
      height: '400px',
    },
  })
);
interface IProps {
  data: IVaksin[];
  success: boolean;
  revalidate: number;
  fallback: boolean;
}

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const KabarVaksin: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();
  console.log('props', props);
  return (
    <Layout>
      <Head>
        <title>Kabar Vaksin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Jumbotron
          title='Kabar Vaksin'
          description='Informasi seputar vaksin covid-19 di Sumba Timur'
        />
        <div
          style={{
            padding: '0 40px',
          }}
        >
          <div
            style={{
              marginTop: '30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {props.data.map((vaksin: IVaksin, index: number) => (
              <div key={index}>
                <Typography
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '10px',
                    color: '#28DF99',
                  }}
                >
                  {vaksin.date}
                </Typography>
                <Image
                  priority
                  src={vaksin.img_url}
                  alt={vaksin.date}
                  height={750}
                  width={600}
                  placeholder='blur'
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475)
                  )}`}
                  className={classes.imgVaksin}
                />
              </div>
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
    let responseGetDataVaksin = await getDataVaksin();
    console.log('responseGetDataVaksin', responseGetDataVaksin);
    responseGetDataVaksin.map((vaksin: any) => {
      dataVaksin.push({
        date: vaksin.data().date,
        img_url: vaksin.data().img_url,
        timestamp: vaksin.data().timestamp,
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
