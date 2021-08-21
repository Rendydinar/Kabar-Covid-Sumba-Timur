import { Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import { IBeritaCard } from '../../interfaces';
import { shimmer, toBase64 } from '../../utils';
import useStyles from './styles';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import Header from './header';

interface IProps {
  berita: IBeritaCard;
}
const CardBerita: React.FC<IProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header
        title={props.berita.title}
        author={props.berita.author}
        date={props.berita.date}
        type={props.berita.type}
        sumber={props.berita.sumber}
      />
      <div className={classes.imageVaksinContainer}>
        <Image
          priority
          src={props.berita.img}
          alt={props.berita.title}
          layout='fill'
          className={'imageBeritaCard'}
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
          <Button className={classes.btnBaca}>Baca</Button>
        </Link>
      </div>
    </div>
  );
};

export default CardBerita;
