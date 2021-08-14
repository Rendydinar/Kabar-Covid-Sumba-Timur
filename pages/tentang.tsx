import {
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import { LINK_FEEDBACK, MESSAGE_WHATSSAPP } from '../constant';

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

    titleSection: {
      fontSize: '26px',
      fontWeight: 600,
    },
    descriptionSection: {
      fontSize: '1.2rem',
      marginTop: '10px',
      marginBottom: '25px',
    },
    itemContact: {
      fontSize: '1.2rem',
      marginTop: '5px',
      fontWeight: 600,
    },
    // root: {
    //   padding: '0 40px',
    //   [theme.breakpoints.down('sm')]: {
    //     padding: '0 10px',
    //   },
    // },
    // containerContent: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    // },
  })
);

const Tentang: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <meta name='og:keywords' content='Tentang' />
        <meta name='og:title' content='Kabar Covid Sumba Timur | Tentang' />
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
          content='https://kabar-covid-sumba-timur.vercel.app/tentang'
        />
        <meta
          name='twitter:site'
          content='https://kabar-covid-sumba-timur.vercel.app/tentang'
        />
        <title>Kabar Covid-19 Sumba Timur | Tentang</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Jumbotron
          title='Tentang'
          description='Tentang Kabar Covid-19 Sumba Timur'
        />
        <div className={classes.root}>
          <Typography className={classes.titleSection}>
            Tentang Kabar Covid Sumba Timur
          </Typography>
          <Typography className={classes.descriptionSection}>
            Kabar Covid Sumba Timur adalah Situs yang menampilkan seputar
            informasi COVID-19 Di Daerah Sumba Timur & Sekitarnya, selain
            informasi covid-19 situs ini juga menampilkan informasi seputar
            vaksin covid-19 & informasi seputar isolasi passien covid-19 di
            Sumba Timur
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
        </div>
      </div>
    </Layout>
  );
};

export default Tentang;

export const getServerSideProps = async () => {
  // const { username } = params
  // const profile = await getProfileData(username)
  // if (!profile) {
  //   return { notFound: true }
  // }
  // return { props: { data: { username, profile } } }
  return {
    props: {
      data: {},
    },
  };
};
