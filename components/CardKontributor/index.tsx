import { Typography } from '@material-ui/core';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { ImFacebook2, ImTwitter } from 'react-icons/im';
import { IKontributor } from '../../interfaces';
import { classNames } from '../../lib/classNames';
import { shimmer, toBase64 } from '../../utils';
import useStyles from './style';

interface IProps {
  contributor: IKontributor;
}

const CardKontributor: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Image
        priority
        src={props.contributor.img_url}
        alt={props.contributor.name}
        height={150}
        objectFit='cover'
        objectPosition='center'
        width={150}
        className={classes.imgContributor}
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 700))}`}
      />
      <Typography className={classes.name}>{props.contributor.name}</Typography>
      <Typography className={classes.position}>
        {props.contributor.position}
      </Typography>
      <div className={classes.containerSosialMedia}>
        {props.contributor.facebook ? (
          <a href={props.contributor.facebook} target='_blank' rel='noopener'>
            <ImFacebook2 size={20} fill='#bdbdbd' />
          </a>
        ) : undefined}
        {props.contributor.twitter ? (
          <a href={props.contributor.twitter} target='_blank' rel='noopener'>
            <ImTwitter size={20} fill='#bdbdbd' />
          </a>
        ) : undefined}
        {props.contributor.instagram ? (
          <a href={props.contributor.instagram} target='_blank' rel='noopener'>
            <AiFillInstagram size={20} fill='#bdbdbd' />
          </a>
        ) : undefined}
      </div>
      {props.contributor.bio ? (
        <div
          className={classes.bio}
          dangerouslySetInnerHTML={{ __html: props.contributor.bio }}
        />
      ) : (
        <Typography className={classNames(classes.bio, 'noBio')}>
          Bio belum diisi
        </Typography>
      )}
    </div>
  );
};

export default CardKontributor;
