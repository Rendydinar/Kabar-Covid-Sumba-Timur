import { getAllPostIds, getPostData } from '../../lib/postsKabarEdukasi';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/Layout';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { TiArrowBack } from 'react-icons/ti';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { shimmer, toBase64 } from '../../utils';
import Jumbotron from '../../components/Jumbotron';
import { IBerita, IEdukasi } from '../../interfaces';
import Header from '../../components/CardEdukasi/header';
import SharePost from '../../components/SharePost';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '10px 60px',
      [theme.breakpoints.down('sm')]: {
        padding: '10px   20px',
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
    date: {
      color: '#666',
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
  })
);

export default function Post({ postData }: { postData: IEdukasi }) {
  const classes = useStyles();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Layout>
      <Head>
        <meta
          name='og:keywords'
          content={`Kabar Covid Sumba Timur | ${postData.title}`}
        />
        <meta name='og:title' content={postData.title} />
        <meta property='og:site_name' content={postData.title} />
        <meta property='og:description' content={postData.description} />
        <meta name='twitter:title' content='Kabar Covid Sumba Timur' />
        <meta name='twitter:description' content={postData.description} />
        <meta
          property='og:url'
          content={`https://kabar-covid-sumba-timur.vercel.app/kabar-edukasi/${postData.id}`}
        />
        <meta
          name='twitter:site'
          content={`https://kabar-covid-sumba-timur.vercel.app/kabar-edukasi/${postData.id}`}
        />
        <meta property='og:image' content={postData.img} />
        <meta name='twitter:image:src' content={postData.img} />
        <meta property='og:image:width' content='1000' />
        <meta property='og:image:height' content='667' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image:alt' content='Kabar Covid Sumba Timur' />

        <title>
          Kabar Covid Sumba Timur | Kabar Edukasi | {postData.title}
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Jumbotron title='Kabar Edukasi' description='' />
      <div className={classes.root}>
        <IconButton
          onClick={handleBack}
          classes={{ label: classes.labelBtnBack }}
          className={classes.btnBack}
        >
          Kembali{'  '}
          <TiArrowBack />
        </IconButton>
        <article>
          <Typography className={classes.titlePost}>
            {postData.title}
          </Typography>
          <Header
            author={postData.author}
            date={postData.date}
            target={postData.target}
            sumber={postData.sumber}
          />
          <div className={classes.imageVaksinContainer}>
            <Image
              priority
              src={postData.img}
              alt={postData.title}
              layout='fill'
              className={'imageVaksin'}
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 700)
              )}`}
            />
          </div>
          <div
            className={classes.contentPost}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
        <SharePost link={postData.id} titlePost={postData.title} />
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData: {
        ...postData,
        link_site: params?.id,
      },
    },
  };
};
