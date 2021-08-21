import { Typography } from '@material-ui/core';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IVaksin } from '../../interfaces';
import { classNames } from '../../lib/classNames';
import { shimmer, toBase64 } from '../../utils';
import useStyles from './styles';

interface IProps {
  vaksin: IVaksin;
}

const CardVaksin: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.dateVaksin}>
          {props.vaksin.date}
        </Typography>
      </div>
      <div className={classes.imageVaksinContainer}>
        <Image
          priority
          src={props.vaksin.img_url}
          alt={props.vaksin.date}
          // height={700}
          // width={700}
          layout='fill'
          className={'imageVaksin'}
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 700)
          )}`}
        />
      </div>
      <div>
        <Typography></Typography>
      </div>
    </div>
  );
};

export default CardVaksin;
