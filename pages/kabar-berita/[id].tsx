import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/Layout';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Date from '../../components/date';
import { IconButton } from '@material-ui/core';
import { TiArrowBack } from 'react-icons/ti';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { shimmer, toBase64 } from '../../utils';
import Jumbotron from '../../components/Jumbotron';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0 60px',
      [theme.breakpoints.down('sm')]: {
        padding: '0 20px',
      },
    },
    titlePost: {
      fontSize: '2rem',
      lineHeight: '1.3',
      fontWeight: 800,
      letterSpacing: '-0.05rem',
      margin: '1rem 0',
    },
    date: {
      color: '#666',
    },
    contentPost: {
      fontSize: 16,
    },
    imageVaksinContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  })
);

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    author: string;
    link_document: string;
    sumber: string;
    description: string;
    contentHtml: string;
    img: string;
    link_site?: string[] | undefined;
  };
}) {
  const classes = useStyles();
  const router = useRouter();

  // <!-- Untuk Twitter -->
  // <a href="https://twitter.com/share?url=https://dumetschool.com&text=Simple%20Share%20Buttons&hashtags=simplesharebuttons" target="_blank">
  //     <img src="https://www.kursuswebsite.org/wp-content/uploads/2017/03/twitter.png" alt="Twitter" />
  // </a>

  // <!-- Untuk Facebook -->
  // <a href="http://www.facebook.com/sharer.php?u=https://dumetschool.com" target="_blank">
  //     <img src="https://www.kursuswebsite.org/wp-content/uploads/2017/03/facebook.png" alt="Facebook" />
  // </a>

  // <!-- Untuk Whatsapp -->
  <a
    href='whatsapp://send?text=https://twitter.com/home'
    data-action='share/whatsapp/share'
  >
    Share via Whatsapp
  </a>;

  const handleBack = () => {
    router.back();
  };
  console.log('postData', postData);
  return (
    <Layout>
      <Head>
        <meta name='og:keywords' content='Kabar Isolasi Covid-19 Sumba Timur' />
        <meta name='og:title' content={postData.title} />
        <meta property='og:site_name' content={postData.title} />
        <meta property='og:description' content={postData.description} />
        <meta name='twitter:title' content='Kabar Covid Sumba Timur' />
        <meta name='twitter:description' content={postData.description} />
        <meta
          property='og:url'
          content='https://kabar-covid-sumba-timur.vercel.app/kabar-isolasi'
        />
        <meta
          name='twitter:site'
          content='https://kabar-covid-sumba-timur.vercel.app/kabar-isolasi'
        />
        <meta property='og:image' content={postData.img} />
        <meta name='twitter:image:src' content={postData.img} />
        <meta property='og:image:width' content='1000' />
        <meta property='og:image:height' content='667' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image:alt' content='Kabar Covid Sumba Timur' />

        <title>Kabar Covid Sumba Timur | {postData.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Jumbotron title='Kabar Berita' description='' />
      <div className={classes.root}>
        <IconButton onClick={handleBack}>
          <TiArrowBack />
        </IconButton>
        <article>
          <Typography className={classes.titlePost}>
            {postData.title}
          </Typography>
          <div className={classes.date}>
            <Date dateString={postData.date} />
          </div>
          <Typography className={classes.date}>{postData.author}</Typography>
          <div className={classes.imageVaksinContainer}>
            <Image
              priority
              src={postData.img}
              alt={postData.title}
              height={550}
              width={750}
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
