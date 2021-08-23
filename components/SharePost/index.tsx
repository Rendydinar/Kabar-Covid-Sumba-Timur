import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoWhatsapp } from 'react-icons/io';
import { ImTwitter } from 'react-icons/im';
import { FaLinkedin } from 'react-icons/fa';
import { PUBLIC_PATH } from '../../constant';

interface IProps {
  link: string;
  titlePost: string;
}

const SharePost: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.titleSection}>Bagikan:</Typography>
      <div className={classes.wrapperSosialMediaShare}>
        <a
          href={`http://www.facebook.com/sharer.php?u=${PUBLIC_PATH}/kabar-berita/${props.link}`}
          target='_blank'
          rel='noopener'
        >
          <ImFacebook2 size={24} fill='#4267B2' />
        </a>
        <a
          href={`whatsapp://send?text=${PUBLIC_PATH}/kabar-berita/${props.link}`}
          // data-action='share/whatsapp/share'
        >
          <IoLogoWhatsapp size={24} fill='#25d366' />
        </a>
        <a
          href={`https://twitter.com/share?url=${PUBLIC_PATH}/kabar-berita/${props.link}&text=${props.titlePost}&hashtags=KabarCovidSumbaTimur`}
          target='_blank'
          rel='noopener'
        >
          <ImTwitter size={24} fill='#1da1f2' />
        </a>
        <a
          href={`http://www.linkedin.com/shareArticle?mini=true&url=${PUBLIC_PATH}/kabar-berita/${props.link}&title=${props.titlePost}&summary=${props.titlePost}&source=kabar-covid-sumba-timur.vercel.app/`}
          target='_blank'
          rel='noopener'
        >
          <FaLinkedin size={24} fill='#0077b5' />
        </a>
      </div>
    </div>
  );
};

export default SharePost;
