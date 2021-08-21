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
  const [timeCountDown, setTimeCountDown] = useState<string>('');
  const classes = useStyles();

  useEffect(() => {
    const getTime = setInterval(() => {
      const now = new Date().getTime();
      const distance = props.vaksin.timestamp - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(getTime);
        setTimeCountDown('Sudah Selesai');
      } else {
        setTimeCountDown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(getTime);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.dateVaksin}>
          {props.vaksin.date}
        </Typography>
        <Typography
          className={classNames(
            classes.dateCountDownVaksin,
            timeCountDown === 'Sudah Selesai' && 'timeout'
          )}
        >
          {timeCountDown}
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
      {(props.vaksin.keterangan || props.vaksin.sumber) && (
        <div className={classes.footer}>
          {props.vaksin.keterangan && (
            <Typography className={classes.info}>
              Keterangan: {props.vaksin.keterangan}
            </Typography>
          )}
          {props.vaksin.sumber && (
            <Typography className={classes.info}>
              Sumber: {props.vaksin.sumber}
            </Typography>
          )}
        </div>
      )}
    </div>
  );
};

export default CardVaksin;
