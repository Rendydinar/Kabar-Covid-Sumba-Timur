import { Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import { IBeritaCard } from '../../interfaces';
import { classNames } from '../../lib/classNames';
import { shimmer, toBase64 } from '../../utils';
import useStyles from './styles';
import { Button } from '@material-ui/core';
import { getDateFormated } from '../../utils/date';
import Link from 'next/link';

interface IProps {
  berita: IBeritaCard;
}

const CardBerita: React.FC<IProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.titlePost}>
          {props.berita.title}
        </Typography>
        <Typography className={classes.author}>
          {props.berita.author}
        </Typography>
        <Typography className={classes.date}>
          {getDateFormated(new Date(props.berita.date))}
        </Typography>
      </div>
      <div className={classes.imageVaksinContainer}>
        <Image
          priority
          src={props.berita.img}
          alt={props.berita.title}
          layout='fill'
          className={'imageVaksin'}
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 700)
          )}`}
        />
      </div>
      <div className={classes.content}>
        <Typography className={classes.description}>
          {props.berita.description}
        </Typography>
      </div>
      <div className={classes.footer}>
        <Link href={`/kabar-berita/${props.berita.id}`}>
          <Button>Baca</Button>
        </Link>
      </div>
    </div>
  );
};

export default CardBerita;
