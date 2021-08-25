import { Grid, Typography } from '@material-ui/core';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import sortBy from 'lodash/sortBy';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
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
      alignItems: 'center',
      flexDirection: 'column',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    selectedFilterVaksin: {
      textTransform: 'capitalize',
    },
    textInfoEmptyVaksin: {
      fontSize: '36px',
      textAlign: 'center',
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },
    containerEmptyVaksin: {
      marginTop: '70px',
    },
  })
);
interface IProps {
  data: IVaksin[];
  success: boolean;
  revalidate: number;
  fallback: boolean;
}

enum FILTER_VAKSIN_KEY {
  ALL_EVENT = 'semua',
  COMMING_SOON = 'akan_berlangsung',
  ONGOING = 'sedang_berlangsung',
  FINISHED = 'sudah_selesai',
}

interface IFilterVaksinType {
  key: FILTER_VAKSIN_KEY;
  label: string;
}

const KabarVaksin: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();
  const [listDataVaksinToShow, setListDataVaksinToShow] = useState<IVaksin[]>(
    props.data
  );
  const [selectedFilterVaksinType, setSelectedFilterVaksinType] =
    useState<string>(FILTER_VAKSIN_KEY.ALL_EVENT);
  const [filterVaksinType] = useState<IFilterVaksinType[]>([
    {
      key: FILTER_VAKSIN_KEY.COMMING_SOON,
      label: 'Akan Berlangsung',
    },
    {
      key: FILTER_VAKSIN_KEY.ONGOING,
      label: 'Sedang Berlangsung',
    },
    {
      key: FILTER_VAKSIN_KEY.FINISHED,
      label: 'Sudah Selesai',
    },
    {
      key: FILTER_VAKSIN_KEY.ALL_EVENT,
      label: 'Semua',
    },
  ]);

  const handleChangeFaksinFilterType = (
    event: React.ChangeEvent<{ name?: string; value: string }>
  ) => {
    setSelectedFilterVaksinType(event.target.value);
    if (event.target.value === FILTER_VAKSIN_KEY.ONGOING) {
      const tempListVaksin: IVaksin[] = props.data.filter((vaksin: IVaksin) => {
        const timeStampBerakrhir = vaksin?.waktu_berakhir_timestamp ?? 0;
        return (
          new Date().getTime() > vaksin.timestamp &&
          new Date().getTime() < timeStampBerakrhir
        );
      });
      setListDataVaksinToShow(tempListVaksin);
    } else if (event.target.value === FILTER_VAKSIN_KEY.FINISHED) {
      const tempListVaksin: IVaksin[] = props.data.filter((vaksin: IVaksin) => {
        const timeStampBerakrhir = vaksin?.waktu_berakhir_timestamp ?? 0;
        return new Date().getTime() > timeStampBerakrhir;
      });
      setListDataVaksinToShow(tempListVaksin);
    } else if (event.target.value === FILTER_VAKSIN_KEY.COMMING_SOON) {
      const tempListVaksin: IVaksin[] = props.data.filter((vaksin: IVaksin) => {
        return new Date().getTime() < vaksin.timestamp;
      });
      setListDataVaksinToShow(tempListVaksin);
    } else {
      setListDataVaksinToShow(props.data);
    }
  };

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

        <title>Kabar Covid Sumba Timur | Kabar Vaksin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Jumbotron
          title='Kabar Vaksin'
          description='Informasi seputar vaksin covid-19 di Sumba Timur'
        />
        <div className={classes.root}>
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor='age-native-label-placeholder'>
              Pilih Waktu Vaksin
            </InputLabel>
            <NativeSelect
              className={classes.selectedFilterVaksin}
              value={selectedFilterVaksinType}
              onChange={handleChangeFaksinFilterType}
              inputProps={{
                name: 'Pilih Waktu Vaksin',
                id: 'age-native-label-placeholder',
              }}
            >
              {filterVaksinType.map(
                (filterType: IFilterVaksinType, index: number) => (
                  <option value={filterType.key} key={index}>
                    {filterType.label}
                  </option>
                )
              )}
            </NativeSelect>
          </FormControl>
          <div className={classes.containerContent}>
            {listDataVaksinToShow.length === 0 ? (
              <div className={classes.containerEmptyVaksin}>
                <Typography className={classes.textInfoEmptyVaksin}>
                  Maaf jadwal vaksin yang kamu cari tidak tersedia
                </Typography>
                <Typography className={classes.textInfoEmptyVaksin}>
                  🥺
                </Typography>
              </div>
            ) : (
              <Grid container spacing={2} justifyContent='center'>
                {listDataVaksinToShow.map((vaksin: IVaksin, index: number) => (
                  <Grid item key={index}>
                    <CardVaksin vaksin={vaksin} key={index} />
                  </Grid>
                ))}
              </Grid>
            )}
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
      if (vaksin.data().isShow === true) {
        dataVaksin.push({
          ...vaksin.data(),
        });
      }
    });
    dataVaksin = sortBy(dataVaksin, 'timestamp').reverse();
    return {
      props: {
        success: true,
        data: dataVaksin,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 180 seconds (3 minutes)
      revalidate: 180, // In seconds
    };
  } catch (err) {
    return {
      props: {
        success: false,
        data: [],
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 180 seconds (3 minutes)
      revalidate: 180, // In seconds
    };
  }
};
