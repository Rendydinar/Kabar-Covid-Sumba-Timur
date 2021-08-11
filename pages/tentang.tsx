import { Typography } from '@material-ui/core';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import Jumbotron from '../components/Jumbotron';
import Layout from '../components/Layout';

interface IProps {
  data: any;
}

const Tentang: React.FC<IProps> = (): ReactElement => {
  return (
    <Layout>
      <Head>
        <title>Tentang</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Jumbotron
          title='Tentang'
          description='Tentang Kabar Covid-19 Sumba Timur'
        />
        <div>
          <Typography>Halaman Ini Masih Dalam Pengembangan</Typography>
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
