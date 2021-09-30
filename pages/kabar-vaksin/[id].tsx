import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { TiArrowBack } from 'react-icons/ti';
import Image from 'next/image';
import { shimmer, toBase64 } from '../../utils';
import Jumbotron from '../../components/Jumbotron';
import { IVaksin } from '../../interfaces';
import SharePost from '../../components/SharePost';
import { Fragment, useEffect, useState } from 'react';
import { DATA_VAKSIN_COLLECTION } from '../../firebase/firestore/collection';
import { getDateFormated } from '../../utils/date';
import { PUBLIC_PATH } from '../../constant';
import { classNames } from '../../lib/classNames';
import Skeleton from '@material-ui/lab/Skeleton';
import { Tooltip } from '@material-ui/core';
import { GoVerified } from 'react-icons/go';
import { GoUnverified } from 'react-icons/go';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '10px 60px',
      [theme.breakpoints.down('sm')]: {
        padding: '10px',
      },
    },
    titlePost: {
      fontSize: '24px',
      lineHeight: '1.3',
      fontWeight: 800,
      letterSpacing: '-0.05rem',
      margin: '1rem 0',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
      },
    },
    contentPost: {
      fontSize: 16,
    },
    imageVaksinContainer: {
      width: '100%',
      margin: '30px 0',
      '& > div': {
        position: 'unset !important',
      },
      [theme.breakpoints.down('sm')]: {
        margin: '20px 0',
      },
    },
    btnBack: {
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    labelBtnBack: {
      fontSize: '16px',
    },
    dateCountDownVaksin: {
      textAlign: 'center',
      fontSize: '16px',
      color: '#111827',
      fontWeight: 'bold',
      borderRadius: '10px',
      backgroundColor: '#fff',
      padding: '3px',
      boxShadow:
        'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
      '&.sudahSelesai': {
        color: '#e44933',
      },
      '&.akanHadir': {
        color: '#e4a033',
      },
      '&.sedangBerlangsung': {
        color: '#31be72',
      },
    },
  })
);

export default function KabarVaksinDetail() {
  const classes = useStyles();
  const router = useRouter();
  const { id }: any = router.query;
  const [dataVaksin, setDataVaksin] = useState<IVaksin>();
  const [isLoadingFetchData, setIsLoadingFetchData] = useState<boolean>(false);
  const [timeCountDown, setTimeCountDown] = useState<string>('');

  const handleBack = () => {
    router.push('/kabar-vaksin');
  };

  const getVaksin = async (): Promise<void> => {
    setIsLoadingFetchData(true);
    try {
      const responseGetDataVaksin: any = await DATA_VAKSIN_COLLECTION.doc(
        id
      ).get();
      if (responseGetDataVaksin.data().isShow) {
        setDataVaksin({
          ...responseGetDataVaksin.data(),
          id: responseGetDataVaksin.id,
          is_verified: responseGetDataVaksin.data().isVerified ?? false,
        });
        const now = new Date().getTime();
        if (responseGetDataVaksin.data().waktu_berakhir_timestamp) {
          if (
            now > responseGetDataVaksin.data().timestamp &&
            now < responseGetDataVaksin.data().waktu_berakhir_timestamp
          ) {
            setTimeCountDown('Sedang Berlangsung');
          } else if (now < responseGetDataVaksin.data().timestamp) {
            setTimeCountDown('Akan Berlangsung');
          } else if (
            now > responseGetDataVaksin.data().waktu_berakhir_timestamp
          ) {
            setTimeCountDown('Sudah Selesai');
          }
        } else {
          setTimeCountDown('');
        }
      }
    } catch (err) {
      // handle error
    }
    setIsLoadingFetchData(false);
  };

  useEffect(() => {
    async function asynFuncDefault() {
      await getVaksin();
    }
    asynFuncDefault();
  }, [router.query]);

  return (
    <Layout>
      <Head>
        <meta
          name='og:keywords'
          content={`Kabar Covid Sumba Timur | Kabar Vaksin`}
        />
        <meta name='og:title' content='Jadwal Vaksin Detail' />
        <meta
          property='og:site_name'
          content='Kabar Jadwal Vaksin Sumba Timur'
        />
        <meta
          property='og:description'
          content={dataVaksin?.keterangan ?? 'Detail informasi jadwal vaksin'}
        />
        <meta name='twitter:title' content='Kabar Covid Sumba Timur' />
        <meta
          name='twitter:description'
          content={dataVaksin?.keterangan ?? 'Detail informasi jadwal vaksin'}
        />
        <meta
          property='og:url'
          content={`https://kabar-covid-sumba-timur.vercel.app/kabar-vaksin/${id}`}
        />
        <meta
          name='twitter:site'
          content={`https://kabar-covid-sumba-timur.vercel.app/kabar-vaksin/${id}`}
        />
        <meta
          property='og:image'
          content={
            dataVaksin?.img_url ??
            'https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/assets%2Flarge-logo.png?alt=media&token=aa2f190e-2d4f-4bf7-998f-b57c23dfec6c'
          }
        />
        <meta
          name='twitter:image:src'
          content={
            dataVaksin?.img_url ??
            'https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/assets%2Flarge-logo.png?alt=media&token=aa2f190e-2d4f-4bf7-998f-b57c23dfec6c'
          }
        />
        <meta property='og:image:width' content='1000' />
        <meta property='og:image:height' content='667' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:image:alt'
          content='Kabar Jadwal Vaksin Sumba Timur'
        />

        <title>Kabar Covid Sumba Timur | Detail Informasi Jadwal Vaksi</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Jumbotron
        title='Kabar Kabar Vaksin'
        description='Detail informasi jadwal vaksin'
      />
      <div className={classes.root}>
        <IconButton
          onClick={handleBack}
          classes={{ label: classes.labelBtnBack }}
          className={classes.btnBack}
        >
          Kembali{'  '}
          <TiArrowBack />
        </IconButton>
        {isLoadingFetchData ? (
          <>
            <Box marginTop={2}>
              <Skeleton variant='rect' width='100%' height={300} />
            </Box>
            <Box display='flex' justifyContent='space-between' gridGap={2}>
              <Skeleton variant='text' width='45%' height={30} />
              <Skeleton variant='text' width='40%' height={30} />
            </Box>
            <Box marginTop={2}>
              <Skeleton variant='text' width='85%' />
              <Skeleton variant='text' width='80%' />
              <Skeleton variant='text' width='95%' />
            </Box>
            <Box marginTop={1}>
              <Skeleton variant='text' width='65%' />
            </Box>
            <Box>
              <Skeleton variant='text' width='65%' />
            </Box>
            <Box>
              <Skeleton variant='text' width='65%' />
            </Box>
            <Box marginTop={1}>
              <Skeleton variant='text' width='35%' />
              <Box marginLeft={2}>
                <Skeleton variant='text' width='55%' />
                <Skeleton variant='text' width='55%' />
                <Skeleton variant='text' width='55%' />
              </Box>
            </Box>
            <Box display='flex' justifyContent='space-between' gridGap={2}>
              <Skeleton variant='text' width={80} height={50} />
              <Skeleton variant='text' width={80} height={50} />
            </Box>
            <Box marginTop={2}>
              <Skeleton variant='rect' width='100%' height={300} />
            </Box>
          </>
        ) : dataVaksin ? (
          <article>
            <div className={classes.imageVaksinContainer}>
              <Image
                priority
                src={dataVaksin.img_url ?? ''}
                alt={'image banner'}
                layout='fill'
                className={'imageVaksin'}
                placeholder='blur'
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 700)
                )}`}
              />
            </div>
            <Tooltip
              title={
                dataVaksin.is_verified
                  ? 'Informasi jadwal vaksin ini sudah dikonfirmasi oleh pihak penyelenggara dan telah dinyatakan benar'
                  : 'Informasi jadwal vaksin ini belum dikonfirmasi oleh pihak penyelenggara dan belum dapat dibuktikan kebenarannya'
              }
              arrow
            >
              <Button
                variant='outlined'
                startIcon={
                  dataVaksin.is_verified ? (
                    <GoVerified size={24} color='#1976d2' />
                  ) : (
                    <GoUnverified size={24} color='red' />
                  )
                }
                style={{ margin: '10px 0px 20px 0', width: '100%' }}
              >
                <Typography style={{ fontSize: 12 }} align='left'>
                  {dataVaksin.is_verified
                    ? 'Sudah dikonfirmasi oleh pihak penyelenggara'
                    : 'Belum dikonfirmasi oleh pihak penyelenggara'}
                </Typography>
              </Button>
            </Tooltip>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <Typography variant='h5'>
                {`${getDateFormated(new Date(dataVaksin.timestamp))} ${
                  new Date(dataVaksin.timestamp).getHours() < 10
                    ? `0${new Date(dataVaksin.timestamp).getHours()}`
                    : `${new Date(dataVaksin.timestamp).getHours()}`
                }:${
                  new Date(dataVaksin.timestamp).getMinutes() < 10
                    ? `0${new Date(dataVaksin.timestamp).getMinutes()}`
                    : `${new Date(dataVaksin.timestamp).getMinutes()}`
                } WITA`}
              </Typography>
              <Typography
                className={classNames(
                  classes.dateCountDownVaksin,
                  timeCountDown === 'Sedang Berlangsung' && 'sedangBerlangsung',
                  timeCountDown === 'Akan Berlangsung' && 'akanHadir',
                  timeCountDown === 'Sudah Selesai' && 'sudahSelesai'
                )}
              >
                {timeCountDown}
              </Typography>
            </div>
            <Typography variant='h6'>Keterangan:</Typography>
            <Typography variant='body2'>{dataVaksin.keterangan}</Typography>
            <Typography variant='h6'>Waktu:</Typography>
            <Typography variant='body2'>
              {getDateFormated(new Date(dataVaksin.timestamp))}
              {' - '}
              {getDateFormated(
                new Date(dataVaksin?.waktu_berakhir_timestamp ?? 0)
              )}
            </Typography>
            <Typography variant='h6'>Sumber:</Typography>
            <Typography variant='body2'>{dataVaksin.sumber}</Typography>
            <Typography variant='h6'>Jenis Vaksin:</Typography>
            <Typography variant='body2'>{dataVaksin.jenis_vaksin}</Typography>
            <Typography variant='h6'>Kouta:</Typography>
            <Typography variant='body2'>
              {dataVaksin.kouta !== 0
                ? `${dataVaksin.kouta} Orang`
                : 'Tidak diketahui'}
            </Typography>
            <Typography variant='h6'>Kewajiban:</Typography>
            {dataVaksin?.kewajiban?.length === 0
              ? 'Tidak diketahui'
              : dataVaksin?.kewajiban?.map(
                  (kewajiban: string, index: number) => (
                    <Typography key={index} variant='body2'>
                      {'- '}
                      {kewajiban}
                    </Typography>
                  )
                )}
            <div style={{ marginTop: '20px' }}>
              {dataVaksin.place_maps ? (
                dataVaksin.place_maps.map((placeMap: string, index: number) => (
                  <Fragment key={index}>
                    <div dangerouslySetInnerHTML={{ __html: placeMap }} />
                    <br />
                    <br />
                  </Fragment>
                ))
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: dataVaksin.place_map ?? '',
                  }}
                />
              )}
            </div>
            <SharePost
              link={`${PUBLIC_PATH}/kabar-vaksin/${id}`}
              titlePost='Informasi jadwal vaksinasi Sumba Timur'
            />
          </article>
        ) : (
          <Typography variant='h6'>
            Jadwal informasi vaksin tidak ditemukan
          </Typography>
        )}
      </div>
    </Layout>
  );
}
