import {
  Button,
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import { IEdukasiCard, IQnA } from '../interfaces';
import { getSortedPostsData } from '../lib/postsKabarEdukasi';
import CardEdukasi from '../components/CardEdukasi';
import DataQnA from '../data/qna.json';
import Skeleton from '@material-ui/lab/Skeleton';
import ItemQnA from '../components/ItemQnA';
import { MESSAGE_WHATSSAPP_TO_JOIN_IN_TEAM_QNA } from '../constant';
import { classNames } from '../lib/classNames';

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
    titleSection: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#fff',
      margin: '10px 0',
      backgroundColor: '#28DF99',
      width: 'fit-content',
      padding: '5px',
      borderRadius: '8px',
      boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
        padding: '3px',
      },
    },
    containerSection: {
      margin: '30px 0',
      [theme.breakpoints.down('sm')]: {
        margin: '15px 0',
      },
      '&.sectionQnA': {
        marginTop: '50px',
      },
    },
    descriptionJombotron: {
      fontSize: '20px',
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
    containerInfoNoMoreQnA: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '30px',
      backgroundColor: '#e8f5e9',
      padding: '20px 0',
      [theme.breakpoints.down('sm')]: {
        padding: '15px 10px',
      },
    },
    titleNoMoreQnA: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: '10px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
      },
    },
    labelLinkJoinQnA: {
      fontSize: '16px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
    descriptionNoMoreQnA: {
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
    btnMoreQnA: {
      backgroundColor: '#28DF99',
      marginTop: '30px',
    },
  })
);

interface IProps {
  allPostsData: IEdukasiCard[];
}

const KabarEdukasi: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();
  const [dataQnA, setDataQnA] = useState<IQnA[]>(DataQnA.data.slice(0, 8));
  const [isMoreQnA, setIsMoreQnA] = useState<boolean>(true);
  const [loadingLoadMoreQnA, setIoadingLoadMoreQnA] = useState<boolean>(false);

  const handleMoreQnA = (): void => {
    setIoadingLoadMoreQnA(true);
    const tempGetQnA: IQnA[] = DataQnA.data.slice(dataQnA.length, 8);
    const tempResultMoreQnA: IQnA[] = [...dataQnA, ...tempGetQnA];
    tempGetQnA.length >= 8 ? setIsMoreQnA(true) : setIsMoreQnA(false);
    setDataQnA(tempResultMoreQnA);
    setIoadingLoadMoreQnA(false);
  };

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
        <title>Kabar Covid Sumba Timur | Kabar Edukasi</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Jumbotron
          title='Kabar Edukasi'
          description='Kumpulan informasi COVID-19, tips menjaga kesehatan selama pandemi, vaksinasi, hingga penanganan jika Anda terkonfirmasi positif COVID-19 yang disesuaikan dengan kondisi di Sumba Timur.'
          classNameDescription={classes.descriptionJombotron}
        />
        <div className={classes.root}>
          <div className={classes.containerSection}>
            <Typography className={classes.titleSection}>
              Artikel Edukasi
            </Typography>
            {/* <ul>
              {props.allPostsData.map(
                (edukasi: IEdukasiCard, index: number) => (
                  <li key={index}>
                    <CardEdukasi key={index} edukasi={edukasi} />
                  </li>
                )
              )}
            </ul> */}
          </div>
          <div className={classNames(classes.containerSection, 'sectionQnA')}>
            <Typography className={classes.titleSection}>Q n A</Typography>
            <ul>
              {dataQnA.map((qna: IQnA, index: number) => (
                <li key={index}>
                  <ItemQnA qna={qna} />
                </li>
              ))}
              {loadingLoadMoreQnA
                ? [0, 1, 2].map((item: number) => (
                    <Skeleton
                      variant='rect'
                      height={60}
                      style={{ width: '100%' }}
                      key={item}
                    />
                  ))
                : undefined}
              {isMoreQnA ? (
                <Button className={classes.btnMoreQnA} onClick={handleMoreQnA}>
                  Lihat lebih banyak
                </Button>
              ) : (
                <div className={classes.containerInfoNoMoreQnA}>
                  <Typography className={classes.titleNoMoreQnA}>
                    Maaf, kami kehabisan Q n A 🤗
                  </Typography>
                  <Typography className={classes.descriptionNoMoreQnA}>
                    Maukan kamu bergabung untuk memberikan Q n A kepada
                    masyarakat Sumba Timur ?{' '}
                  </Typography>
                  <Link
                    href={`https://api.whatsapp.com/send?phone=6282217971133&text=${MESSAGE_WHATSSAPP_TO_JOIN_IN_TEAM_QNA}`}
                    target='_blank'
                    rel='noopener'
                    className={classes.labelLinkJoinQnA}
                  >
                    Ya Saya Ingin Bergabung Sebagai Tim QnA
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KabarEdukasi;

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData: allPostsData,
//     },
//   };
// };
