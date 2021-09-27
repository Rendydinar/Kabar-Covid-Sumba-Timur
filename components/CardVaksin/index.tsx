import { Box, Collapse, IconButton, Typography } from '@material-ui/core';
import Image from 'next/image';
import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import { IVaksin } from '../../interfaces';
import { classNames } from '../../lib/classNames';
import useStyles from './styles';
import { MdExpandMore } from 'react-icons/md';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Button } from '@material-ui/core';
import { getDateFormated } from '../../utils/date';
import { REPORT_INFO_VAKSIN_MESSAGE } from '../../constant';
import { shimmer, toBase64 } from '../../utils';
import Skeleton from '@material-ui/lab/Skeleton';
import Link from 'next/link';
import { Tooltip } from '@material-ui/core';
import { GoVerified } from 'react-icons/go';
import { GoUnverified } from 'react-icons/go';

interface IProps {
  vaksin: IVaksin;
}

const CardVaksin: React.FC<IProps> = (props) => {
  const [timeCountDown, setTimeCountDown] = useState<string>('');
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };
  const handleSendReport = (): void => {
    window.open(
      `https://api.whatsapp.com/send?phone=6282217971133&text=${REPORT_INFO_VAKSIN_MESSAGE}`,
      '_blank',
      'noopener noreferrer' // <- This is what makes it open in a new window.
    );
  };

  const longText =
    'Informasi jadwal vaksin ini sudah dikonfirmasi oleh pihak penyelenggara dan telah dinyatakan Benar';

  useEffect(() => {
    const now = new Date().getTime();
    if (props.vaksin.waktu_berakhir_timestamp) {
      if (
        now > props.vaksin.timestamp &&
        now < props.vaksin.waktu_berakhir_timestamp
      ) {
        setTimeCountDown('Sedang Berlangsung');
      } else if (now < props.vaksin.timestamp) {
        setTimeCountDown('Akan Berlangsung');
      } else if (now > props.vaksin.waktu_berakhir_timestamp) {
        setTimeCountDown('Sudah Selesai');
      }
    } else {
      setTimeCountDown('');
    }
  }, [props.vaksin]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.dateVaksin}>
          {`${getDateFormated(new Date(props.vaksin.timestamp))} ${
            new Date(props.vaksin.timestamp).getHours() < 10
              ? `0${new Date(props.vaksin.timestamp).getHours()}`
              : `${new Date(props.vaksin.timestamp).getHours()}`
          }:${
            new Date(props.vaksin.timestamp).getMinutes() < 10
              ? `0${new Date(props.vaksin.timestamp).getMinutes()}`
              : `${new Date(props.vaksin.timestamp).getMinutes()}`
          } WITA`}
        </Typography>
        <Typography
          className={classNames(
            classes.dateCountDownVaksin,
            timeCountDown === 'Sedang Berlangsung' && 'sedangBerlangsung',
            timeCountDown === 'Akan Berlangsung' && 'akanHadir',
            timeCountDown === 'Sudah Selesai' && 'sudahSelesai'
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
          layout='fill'
          className={'imageVaksin'}
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 700)
          )}`}
        />
      </div>
      <div className={classes.footer}>
        <Link href={`/kabar-vaksin/${props.vaksin.id}`}>
          <Button className={classes.btnBaca}>Informasi Selengkapnya</Button>
        </Link>
      </div>
      <Tooltip
        title={
          props.vaksin.is_verified
            ? 'Informasi jadwal vaksin ini sudah dikonfirmasi oleh pihak penyelenggara dan telah dinyatakan benar'
            : 'Informasi jadwal vaksin ini belum dikonfirmasi oleh pihak penyelenggara dan belum dapat dibuktikan kebenarannya'
        }
        arrow
      >
        <Button
          variant='outlined'
          startIcon={
            props.vaksin.is_verified ? (
              <GoVerified size={24} color='#1976d2' />
            ) : (
              <GoUnverified size={24} color='red' />
            )
          }
          style={{ margin: '10px 0px', width: '100%' }}
        >
          <Typography style={{ fontSize: 12 }}>
            {props.vaksin.is_verified
              ? 'Sudah dikonfirmasi oleh pihak penyelenggara'
              : 'Belum dikonfirmasi oleh pihak penyelenggara'}
          </Typography>
        </Button>
      </Tooltip>
    </div>
  );
};

export default CardVaksin;

interface IPropsLoadingSkeletonCardVaksin {}

export const LoadingSkeletonCardVaksin: React.FC<IPropsLoadingSkeletonCardVaksin> =
  (): ReactElement => {
    const classes = useStyles();

    return (
      <div className={classes.rootLoadingSkeleton}>
        <Box display='flex' justifyContent='space-between' gridGap={2}>
          <Skeleton variant='text' width='45%' height={30} />
          <Skeleton variant='text' width='40%' height={30} />
        </Box>
        <Box marginTop={2}>
          <Skeleton variant='rect' width='100%' height={300} />
        </Box>
        <Box>
          <Skeleton variant='text' height={50} width='100%' />
        </Box>
        <Box display='flex' justifyContent='space-between' gridGap={2}>
          <Skeleton variant='text' width={80} height={50} />
          <Skeleton variant='text' width={80} height={50} />
        </Box>
      </div>
    );
  };
