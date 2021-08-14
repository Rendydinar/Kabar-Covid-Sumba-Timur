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
        {/* Favicon Icon */}
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='57x57'
          href='/apple-touch-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='114x114'
          href='/apple-touch-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='72x72'
          href='/apple-touch-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='144x144'
          href='/apple-touch-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='60x60'
          href='/apple-touch-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='120x120'
          href='/apple-touch-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='76x76'
          href='/apple-touch-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='152x152'
          href='/apple-touch-icon-152x152.png'
        />
        <link
          rel='icon'
          type='image/png'
          href='/favicon-196x196.png'
          sizes='196x196'
        />
        <link
          rel='icon'
          type='image/png'
          href='/favicon-96x96.png'
          sizes='96x96'
        />
        <link
          rel='icon'
          type='image/png'
          href='/favicon-32x32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href='/favicon-16x16.png'
          sizes='16x16'
        />
        <link
          rel='icon'
          type='image/png'
          href='/favicon-128.png'
          sizes='128x128'
        />
        <meta name='application-name' content='&nbsp;' />
        <meta name='msapplication-TileColor' content='#FFFFFF' />
        <meta name='msapplication-TileImage' content='mstile-144x144.png' />
        <meta name='msapplication-square70x70logo' content='mstile-70x70.png' />
        <meta
          name='msapplication-square150x150logo'
          content='mstile-150x150.png'
        />
        <meta
          name='msapplication-wide310x150logo'
          content='mstile-310x150.png'
        />
        <meta
          name='msapplication-square310x310logo'
          content='mstile-310x310.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='theme-color' content='#28DF99' />

        <meta property='og:type' content='website' />

        <meta
          property='og:image'
          content='https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/assets%2Flarge-logo.png?alt=media&token=aa2f190e-2d4f-4bf7-998f-b57c23dfec6c'
        />
        <meta property='og:image:width' content='1000' />
        <meta property='og:image:height' content='667' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:image:src'
          content='https://firebasestorage.googleapis.com/v0/b/kabar-covid-sumba-timur.appspot.com/o/assets%2Flarge-logo.png?alt=media&token=aa2f190e-2d4f-4bf7-998f-b57c23dfec6c'
        />
        <meta name='twitter:image:alt' content='Kabar Covid Sumba Timur' />
        <meta
          name='google-site-verification'
          content='ou8SFQ1GL_Y2KaAsYebqCH7UF3ICgauDWGzXT0Gooio'
        />
      </Head>
      <main
        style={{
          minHeight: '100vh',
        }}
      >
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
