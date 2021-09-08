import { Button, Grid, Link, Typography } from '@material-ui/core';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import sortBy from 'lodash/sortBy';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { ReactElement, useState, useEffect } from 'react';
import CardVaksin, {
  LoadingSkeletonCardVaksin,
} from '../components/CardVaksin';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';
import { MESSAGE_WHATSSAPP } from '../constant';
import { getDataVaksin } from '../fetchData/getDataVaksin';
import { AiOutlineReload } from 'react-icons/ai';
import { IVaksin } from '../interfaces';
import Skeleton from '@material-ui/lab/Skeleton';
import { Widgets } from '@material-ui/icons';

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
    btnMoreVaksin: {
      borderRadius: '10px',
      padding: '10px 8px',
      color: '#fff',
      backgroundColor: '#28DF99',
      '&:hover': {
        backgroundColor: '#28DF99',
      },
      marginTop: '30px',
    },
    containerInfoNoMoreVaksin: {
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
    titleNoMoreVaksin: {
      textAlign: 'center',
      fontSize: '24px',
      color: '#ffc107',
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
    descriptionNoMoreVaksin: {
      backgroundColor: 'rgb(232, 244, 253)',
      textAlign: 'center',
      borderRadius: '5px',
      padding: '15px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
  })
);
interface IProps {}

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

const KabarVaksin: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  const [dataVaksinFiltered, setDataVaksinFiltered] = useState<IVaksin[]>([]);
  const [isMoreVaksinData, setIsMoreVaksinData] = useState<boolean>(true);
  const [staticListDataVaksin, setStaticListDataVaksin] = useState<IVaksin[]>(
    []
  );
  const [listDataVaksinToShow, setListDataVaksinToShow] = useState<IVaksin[]>(
    []
  );
  const [isLoadingFecthDataVaksin, setIsLoadingFecthDataVaksin] =
    useState<boolean>(false);
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

  const handleLoadMoreVaksin = (): void => {
    const tempGetQnA = dataVaksinFiltered.slice(
      listDataVaksinToShow.length,
      dataVaksinFiltered.length
    );
    const tempResultMoreQnA: IVaksin[] = [
      ...listDataVaksinToShow,
      ...tempGetQnA.slice(0, 5),
    ];
    tempGetQnA.length >= 5
      ? setIsMoreVaksinData(true)
      : setIsMoreVaksinData(false);
    setListDataVaksinToShow(tempResultMoreQnA);
    // setIoadingLoadMoreQnA(false);
  };

  const handleChangeFaksinFilterType = (
    event: React.ChangeEvent<{ name?: string; value: string }>
  ) => {
    setIsMoreVaksinData(true);
    setSelectedFilterVaksinType(event.target.value);
    if (event.target.value === FILTER_VAKSIN_KEY.ONGOING) {
      const tempListVaksin: IVaksin[] = staticListDataVaksin.filter(
        (vaksin: IVaksin) => {
          const timeStampBerakrhir = vaksin?.waktu_berakhir_timestamp ?? 0;
          return (
            new Date().getTime() > vaksin.timestamp &&
            new Date().getTime() < timeStampBerakrhir
          );
        }
      );
      setDataVaksinFiltered(tempListVaksin);
      setListDataVaksinToShow(tempListVaksin.slice(0, 5));
      // setListDataVaksinToShow(tempListVaksin);
    } else if (event.target.value === FILTER_VAKSIN_KEY.FINISHED) {
      const tempListVaksin: IVaksin[] = staticListDataVaksin.filter(
        (vaksin: IVaksin) => {
          const timeStampBerakrhir = vaksin?.waktu_berakhir_timestamp ?? 0;
          return new Date().getTime() > timeStampBerakrhir;
        }
      );
      setDataVaksinFiltered(tempListVaksin);
      setListDataVaksinToShow(tempListVaksin.slice(0, 5));
      // setListDataVaksinToShow(tempListVaksin);
    } else if (event.target.value === FILTER_VAKSIN_KEY.COMMING_SOON) {
      const tempListVaksin: IVaksin[] = staticListDataVaksin.filter(
        (vaksin: IVaksin) => {
          return new Date().getTime() < vaksin.timestamp;
        }
      );
      setDataVaksinFiltered(tempListVaksin);
      setListDataVaksinToShow(tempListVaksin.slice(0, 5));
      // setListDataVaksinToShow(tempListVaksin);
    } else {
      setDataVaksinFiltered(staticListDataVaksin);
      setListDataVaksinToShow(staticListDataVaksin.slice(0, 5));
      // setListDataVaksinToShow(props.data);
    }
  };

  const handleFetchDataVaksin = async (): Promise<void> => {
    setIsLoadingFecthDataVaksin(true);
    try {
      let dataVaksin: IVaksin[] = [];
      let responseGetDataVaksin: any = await getDataVaksin();
      responseGetDataVaksin.map((vaksin: any) => {
        if (vaksin.data().isShow === true) {
          dataVaksin.push({
            ...vaksin.data(),
            id: vaksin.id,
          });
        }
      });
      dataVaksin = sortBy(dataVaksin, 'timestamp').reverse();
      setStaticListDataVaksin(dataVaksin);
      setListDataVaksinToShow(dataVaksin.slice(0, 5));
      setDataVaksinFiltered(dataVaksin);
    } catch (err) {
      // handle error fetch data vaksin
    }
    setIsLoadingFecthDataVaksin(false);
  };

  useEffect(() => {
    async function funcAsyncDefault() {
      await handleFetchDataVaksin();
    }
    funcAsyncDefault();
  }, []);

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
            {isLoadingFecthDataVaksin ? (
              <Grid container spacing={2} justifyContent='center'>
                {[0, 2, 3, 4, 5].map((item: number) => (
                  <Grid item key={item} xl={4} lg={4} md={4} sm={6} xs={12}>
                    <LoadingSkeletonCardVaksin />
                  </Grid>
                ))}
              </Grid>
            ) : listDataVaksinToShow.length === 0 ? (
              <div className={classes.containerEmptyVaksin}>
                <Typography className={classes.textInfoEmptyVaksin}>
                  Maaf jadwal vaksin yang kamu cari tidak tersedia 🥺
                </Typography>
                <Typography className={classes.descriptionNoMoreVaksin}>
                  Jika kamu mempunyai informasi Vaksin Covid-19 di Sumba Timur
                  silakan hubungi admin agar dimasukan ke dalam database{' '}
                  <Link
                    href={`https://api.whatsapp.com/send?phone=6282217971133&text=${MESSAGE_WHATSSAPP}`}
                    target='_blank'
                    rel='noopener'
                  >
                    WA Admin Untuk Memberikan Informasi Vaksin Covid-19
                  </Link>
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
            {listDataVaksinToShow.length > 0 &&
              (isMoreVaksinData ? (
                <Button
                  endIcon={<AiOutlineReload size={20} />}
                  className={classes.btnMoreVaksin}
                  onClick={handleLoadMoreVaksin}
                >
                  Lihat lebih banyak
                </Button>
              ) : (
                <div className={classes.containerInfoNoMoreVaksin}>
                  <Typography className={classes.titleNoMoreVaksin}>
                    Kamu telah melihat semua data vaksin untuk jadwal{' '}
                    <q
                      style={{ textTransform: 'capitalize', color: '#28DF99' }}
                    >
                      {selectedFilterVaksinType.split('_').join(' ')}
                    </q>{' '}
                    di database 🤗
                  </Typography>
                  <Typography className={classes.descriptionNoMoreVaksin}>
                    Jika kamu mempunyai informasi Vaksin Covid-19 di Sumba Timur
                    silakan hubungi admin agar dimasukan ke dalam database{' '}
                    <Link
                      href={`https://api.whatsapp.com/send?phone=6282217971133&text=${MESSAGE_WHATSSAPP}`}
                      target='_blank'
                      rel='noopener'
                    >
                      WA Admin Untuk Memberikan Informasi Vaksin Covid-19
                    </Link>
                  </Typography>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KabarVaksin;

// export const getStaticProps: GetStaticProps = async () => {
//   try {
//     let dataVaksin: IVaksin[] = [];
//     let responseGetDataVaksin: any = await getDataVaksin();
//     responseGetDataVaksin.map((vaksin: any) => {
//       if (vaksin.data().isShow === true) {
//         dataVaksin.push({
//           ...vaksin.data(),
//         });
//       }
//     });
//     dataVaksin = sortBy(dataVaksin, 'timestamp').reverse();
//     return {
//       props: {
//         success: true,
//         data: dataVaksin,
//       },
//       // Next.js will attempt to re-generate the page:
//       // - When a request comes in
//       // - At most once every 180 seconds (3 minutes)
//       revalidate: 180, // In seconds
//     };
//   } catch (err) {
//     return {
//       props: {
//         success: false,
//         data: [],
//       },
//       // Next.js will attempt to re-generate the page:
//       // - When a request comes in
//       // - At most once every 180 seconds (3 minutes)
//       revalidate: 180, // In seconds
//     };
//   }
// };
