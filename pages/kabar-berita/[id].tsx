import { GetStaticPaths, GetStaticProps } from 'next';
import { Head } from 'next/document';
import Date from '../../components/date';
import Layout from '../../components/Layout';
import {
  getAllKabarBeritaIds,
  getKabarBeritaData,
} from '../../lib/kabar-berita';

interface IProps {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}

const KabarBerita: React.FC<IProps> = (props) => {
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
        <title>{props.postData.title}</title>
      </Head>
      <article>
        <h1>{props.postData.title}</h1>
        <div>
          <Date dateString={props.postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default KabarBerita;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllKabarBeritaIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getKabarBeritaData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
