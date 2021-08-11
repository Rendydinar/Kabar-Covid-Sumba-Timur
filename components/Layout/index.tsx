import Head from 'next/head';
import React, { ReactNode } from 'react';
import Footer from '../Footer';

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = (props) => {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta name='og:title' content='Kabar Covid Sumba Timur' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
