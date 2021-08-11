import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import CardIsolasi from '../components/CardIsolasi';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import { IIsolasi } from '../interfaces';

interface IProps {
  data: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '15px',
    },
    dateUpdate: {
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: 700,
      textDecoration: 'underline',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
      },
    },
    containerContent: {
      padding: '0 130px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        padding: '0 10px',
      },
    },
    cardKasusAktif: {
      fontSize: '20px',
      fontWeight: 600,
      textAlign: 'center',
      width: '180px',
      backgroundColor: '#D2F6C5',
      padding: '5px',
      borderRadius: '15px',
      color: '#000',
      boxShadow:
        'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
      },
    },
    totalKasusAktif: {
      fontSize: '26px',
      fontWeight: 'bold',
      color: '#e44933',
      [theme.breakpoints.down('sm')]: {
        fontSize: '22px',
      },
    },
  })
);

const KabarIsolasi: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();
  const [totalKasus, setTotalKasus] = useState<number>(0);

  useEffect(() => {
    let tempTotalKasus: number = 0;
    props.data.data.isolasi_terpusat.map((isolasi: IIsolasi) => {
      tempTotalKasus += isolasi.kasus_terkonfirmasi;
    });
    tempTotalKasus += props.data.data.rawat_rsud.terkonfirmasi;
    // tempTotalKasus += props.data.data.rawat_rsud.menunggu_hasil_pcr;
    tempTotalKasus += props.data.data.isolasi_mandiri.kasus_terkonfirmasi;
    setTotalKasus(tempTotalKasus);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Kabar Isolasi</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Jumbotron
        title='Kabar Isolasi'
        description='Informasi seputar isolasi passien covid-19 di Sumba Timur'
      />
      <div className={classes.root}>
        <Typography className={classes.dateUpdate}>
          Update Time: {props.data.date}
        </Typography>
        <div className={classes.containerContent}>
          <Typography className={classes.cardKasusAktif}>
            <span className={classes.totalKasusAktif}>{totalKasus}</span> Kasus
            Aktif
          </Typography>
          <div
            style={{
              width: '100%',
            }}
          >
            {props.data.data.isolasi_terpusat.map(
              (isolasi: IIsolasi, index: number) => (
                <CardIsolasi isolasi={isolasi} key={index} />
              )
            )}
            <CardIsolasi isolasi={props.data.data.rawat_rsud} />
            <CardIsolasi isolasi={props.data.data.isolasi_mandiri} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KabarIsolasi;

export const getServerSideProps = async () => {
  // const { username } = params
  // const profile = await getProfileData(username)
  // if (!profile) {
  //   return { notFound: true }
  // }
  // return { props: { data: { username, profile } } }
  const DATA_TEMPAT_ISOLASI = {
    date: '09 Agustus 2021',
    data: {
      isolasi_terpusat: [
        {
          name: 'Hotel Cendana',
          kasus_terkonfirmasi: 18,
          place_map:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2338.6806839756823!2d120.24042339777667!3d-9.665963754783158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c9cafcc1d31d1%3A0x112c9679ee76d579!2sHotel%20Cendana!5e0!3m2!1sen!2sid!4v1628663618958!5m2!1sen!2sid" width="600" height="450" style="border:0;width: 100%;" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
          name: 'Mr. Home STAY',
          kasus_terkonfirmasi: 13,
          place_map:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7866.579450029883!2d120.26327837427606!3d-9.656267072349271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c9beca7038273%3A0x3a05c33be4cf773!2sMr.R%20Homestay!5e0!3m2!1sen!2sid!4v1628662506035!5m2!1sen!2sid" width="600" height="450" style="border:0;width: 100%;" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
          name: 'Penginapan BPK. Daud',
          kasus_terkonfirmasi: 8,
          place_map: `<p style="font-size:20px;font-weight:bold;text-align:center;">Lokasih Belum Ditemukan</p>`,
        },
        // total hitung sendiri
      ],
      rawat_rsud: {
        name: 'RSUD Umbu Rara Meha',
        terkonfirmasi: 34,
        menunggu_hasil_pcr: 12,
        place_map:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1625354387356!2d120.24512234980207!3d-9.667150104795256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c9b75c5fa215d%3A0xc486e7e14cccd2ba!2sGeneral%20Hospital%20Umbu%20Rara%20Meha!5e0!3m2!1sen!2sid!4v1628673597032!5m2!1sen!2sid" width="600" height="450" style="border:0;width:100%;" allowfullscreen="" loading="lazy"></iframe>',
        // total hitung sendiri
      },
      isolasi_mandiri: {
        name: 'Isolasi Mandiri',
        kasus_terkonfirmasi: 1052,
        place_map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1006478.5240914322!2d119.69821692748275!3d-9.803521940972132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c873732f163bd%3A0xfe853c7a788faabb!2sEast%20Sumba%20Regency%2C%20East%20Nusa%20Tenggara!5e0!3m2!1sen!2sid!4v1628674532800!5m2!1sen!2sid" width="600" height="450" style="border:0;width:100%;" allowfullscreen="" loading="lazy"></iframe>`,
      },
    },
  };

  return {
    props: {
      data: DATA_TEMPAT_ISOLASI,
    },
  };
};
