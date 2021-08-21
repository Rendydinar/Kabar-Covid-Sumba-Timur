import { Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import { IBeritaCard, IEdukasiCard } from '../../interfaces';
import { shimmer, toBase64 } from '../../utils';
import useStyles from './styles';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import Header from './header';

interface IProps {
  edukasi: IEdukasiCard;
}
const CardEdukasi: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header
        title={props.edukasi.title}
        author={props.edukasi.author}
        date={props.edukasi.date}
        target={props.edukasi.target}
        sumber={props.edukasi.sumber}
      />
      <div className={classes.imageVaksinContainer}>
        <Image
          priority
          src={props.edukasi.img}
          alt={props.edukasi.title}
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
          {props.edukasi.description}
        </Typography>
      </div>
      <div className={classes.footer}>
        <Link href={`/kabar-edukasi/${props.edukasi.id}`}>
          <Button className={classes.btnBaca}>Baca</Button>
        </Link>
      </div>
    </div>
  );
};

export default CardEdukasi;
