import {
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import { LINK_FEEDBACK, MESSAGE_WHATSSAPP } from '../constant';
import { useTrail, animated as a } from 'react-spring';
import DataMediaPathner from '../data/mediaPathner.json';
import CardMediaPathner from '../components/CardMediaPathner';

interface IProps {
  data: any;
}

const items = [
  'Pemerintah Kabupaten Sumba Timur',
  'Kodim 1601/Sumba Timur',
  'Polres Sumba Timur',
  'Satgas COVID-19',
];
const config = { mass: 5, tension: 2000, friction: 200 };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '30px',
      padding: '0 40px',
      [theme.breakpoints.down('sm')]: {
        padding: '0 10px',
      },
    },
    titleSection: {
      fontSize: '26px',
      fontWeight: 600,
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
      },
    },
    descriptionSection: {
      fontSize: '14px',
      marginTop: '10px',
      marginBottom: '25px',
    },
    itemContact: {
      fontSize: '14px',
      marginTop: '5px',
      fontWeight: 600,
    },
    textInfoShare: {
      fontSize: '16px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
    textTerimakasihBtn: {
      boxShadow:
        'rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px',
      fontSize: '18px',
      marginTop: '10px',
      marginBottom: '25px',
      fontWeight: 700,
      '&:hover': {
        cursor: 'pointer',
      },
    },
    containerMediaPathner: {
      marginTop: '40px',
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        gap: '15px',
      },
    },
    thanksText: {
      marginBottom: '25px',
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
    },
  })
);

const Tentang: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  const [toggle, set] = useState(false);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 150 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Layout>
      <Head>
        <meta name='og:keywords' content='Tentang Kami' />
        <meta
          name='og:title'
          content='Kabar Covid Sumba Timur | Tentang Kami'
        />
        <meta
          property='og:site_name'
          content='Kabar Covid Sumba Timur | Tentang'
        />
        <meta
          property='og:description'
          content='Tentang Kabar Covid-19 Sumba Timur'
        />
        <meta name='twitter:title' content='Kabar Covid Sumba Timur' />
        <meta
          name='twitter:description'
          content='Tentang Kabar Covid-19 Sumba Timur'
        />
        <meta
          property='og:url'
          content='https://kabar-covid-sumba-timur.vercel.app/tentang-kami'
        />
        <meta
          name='twitter:site'
          content='https://kabar-covid-sumba-timur.vercel.app/tentang-kami'
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

        <title>Kabar Covid Sumba Timur | Tentang Kami</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Jumbotron
          title='Tentang Kami'
          description='Tentang Kabar Covid-19 Sumba Timur'
        />
        <div className={classes.root}>
          <Typography className={classes.titleSection}>
            Tentang Kabar Covid Sumba Timur
          </Typography>
          <Typography className={classes.descriptionSection}>
            Kabar Covid Sumba Timur adalah Situs Non-Official yang menampilkan
            informasi seputar COVID-19 Di Daerah Sumba Timur & Sekitarnya,
            selain informasi covid-19 situs ini juga menampilkan informasi
            seputar vaksin covid-19 & informasi seputar isolasi passien covid-19
            di Sumba Timur.
          </Typography>
          <Typography className={classes.descriptionSection}>
            Kabar Covid Sumba Timur dibangun atas dasar inisiatif masyarakat
            Sumba Timur untuk berbagi informasi dan saling membantu bagi
            masyarakat yang membutuhkan informasi seputar Covid-19 baik itu
            informasi jadwal vaksin, data covid harian, berita dari pemerintah
            daerah dan edukasi tentang Covid-19 (dalam pengerjaan).
          </Typography>
          <Typography className={classes.titleSection}>
            Sumber Kabar Covid Sumba Timur ?{' '}
          </Typography>
          <Typography className={classes.descriptionSection}>
            Sumber informasi yang ada di situs ini di peroleh dari Akun Resmi
            Facebook{' '}
            <Link
              href='https://www.facebook.com/dinkes.timur'
              target='_blank'
              rel='noopener'
            >
              Posko Covid Sumba Timur
            </Link>
          </Typography>
          <Typography className={classes.descriptionSection}>
            Untuk informasi Vaksin Covid-19 sendiri diperoleh dari pencarian /
            informasi yang beredar. Untuk itu jika kamu mempunyai informasi
            Vaksin Covid-19 di Sumba Timur silakan hubungi admin{' '}
            <Link
              href={`https://api.whatsapp.com/send?phone=6282217971133&text=${MESSAGE_WHATSSAPP}`}
              target='_blank'
              rel='noopener'
            >
              WA Admin Untuk Memberikan Informasi Vaksin Covid-19
            </Link>
            . Kami yakin setiap informasi yang kamu berikan sangat membantu
            masyarakat Sumba Timur agar mendapatkan Vaksin sehingga Pandemi
            Covid-19 bisa cepat selesai terkhususnya untuk Kabupaten Sumba
            Timur.
          </Typography>
          <Typography className={classes.descriptionSection}>
            Kami juga hadir dengan <b>Kabar Berita</b> yang menampilkan
            informasi seputar berita & artikel covid-19 di Sumba Timur. Kabar
            Berita sendiri ditulis oleh Kami/Kontributor yang bersedia untuk
            menjadi bagian dari kami. Dengan hadirnya Kabar Berita kami berharap
            Masyarakat Sumba Timur & Sekitarnya dapat mengetahui
            informasi-informasi penting yang dikerluarkan oleh pemerintah
            terlebih khsusus Pemerintah Kabupaten Sumba Timur seperti Surat
            Edaran, Surat Keputusan, dan lain sebagainya. Informasi yang
            diperoleh dari Kabar Berita didapat dari hasil pencarian oleh
            kontribusi relawan kemudian akan di edit oleh Tim Redaksi sebelum di
            publish, untuk itu jika ada Kabar Berita yang{' '}
            <b>belum terverivikasi</b> kami belum dapat memastikan apakah Sumber
            yang didapatkan valid atau tidak
          </Typography>
          <Typography className={classes.descriptionSection}>
            Adapun <b>Kabar Edukasi</b> yang kami fokuskan untuk saling bantu
            menyebarkan informasi yang benar ke sesama masyarakat, memberikan
            pengetahuan tentang bagaimana pentingnya menjaga kesehatan dimasa
            pandemi agar masyarkat Sumba Timur mematuhi protokol kesehatan &
            Melawan hoax terkait informasi Covid-19 yang beredar
          </Typography>
          <div>
            <Typography
              className={classes.textTerimakasihBtn}
              onClick={() => set((state) => !state)}
            >
              Terimaksih Untuk
            </Typography>

            <div
              className={classes.containerMediaPathner}
              onClick={() => set((state) => !state)}
            >
              {toggle
                ? trail.map(({ x, height, ...rest }: any, index) => (
                    <a.div
                      key={items[index]}
                      style={{
                        ...rest,
                        transform: x.interpolate(
                          (x: any) => `translate3d(0,${x}px,0)`
                        ),
                      }}
                    >
                      <a.div style={{ height }}>
                        <CardMediaPathner
                          pathner={DataMediaPathner.data[index]}
                        />
                      </a.div>
                    </a.div>
                  ))
                : trail.map(({ x, height, ...rest }: any, index) => (
                    <a.div
                      key={items[index]}
                      style={{
                        ...rest,
                        transform: x.interpolate(
                          (x: any) => `translate3d(0,${x}px,0)`
                        ),
                      }}
                    >
                      <a.div style={{ height }}></a.div>
                    </a.div>
                  ))}
            </div>

            <Typography className={classes.thanksText}>
              Yang sudah saling berbagi informasi
            </Typography>

            {/* <Typography className={classes.mediaPather}>
              Dinas Kesehatan Sumba Timur
            </Typography>
            <Typography className={classes.mediaPather}>
              Posko Covid Waingapu
            </Typography>
            <Typography className={classes.mediaPather}>
              Kodim 1601/Sumba Timur
            </Typography>
            <Typography className={classes.mediaPather}>
              Polres Sumba Timur
            </Typography>

            <Typography className={classes.descriptionSection}>
              Yang sudah saling berbagi informasi
            </Typography> */}
          </div>
          <Typography className={classes.titleSection}>Kontak</Typography>
          <Typography className={classes.itemContact}>
            Whatsapp:{' '}
            <Link
              href='https://api.whatsapp.com/send?phone=6282217971133&text=Hallo'
              target='_blank'
              rel='noopener'
            >
              082217971133
            </Link>
          </Typography>
          <Typography className={classes.itemContact}>
            Email: r3ndydinar@gmail.com
          </Typography>
          <Typography
            className={classes.titleSection}
            style={{ marginTop: '25px' }}
          >
            Umpan Balik
          </Typography>
          <Typography className={classes.descriptionSection}>
            Jika kamu mempunyai Umpan Balik / Feedback silakan mengisi form
            berikut:{' '}
            <Link href={LINK_FEEDBACK} target='_blank' rel='noopener'>
              Link Umpan Balik
            </Link>
          </Typography>
          <Alert severity='info'>
            <Typography className={classes.textInfoShare}>
              Anda bebas menggunakan dan menyebarluaskan informasi yang ada
              dalam website ini.
            </Typography>
          </Alert>
        </div>
      </div>
    </Layout>
  );
};

export default Tentang;

export const getServerSideProps = async () => {
  return {
    props: {
      data: {},
    },
  };
};
