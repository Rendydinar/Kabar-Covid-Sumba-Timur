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

        {/* {(props.vaksin.keterangan || props.vaksin.sumber) && (
          <>
            {props.vaksin.keterangan && (
              <>
                <Typography className={classes.info}>Keterangan:</Typography>
                <Typography className={classes.textInfoDescirption}>
                  {props.vaksin.keterangan}
                </Typography>
              </>
            )}
            {props.vaksin.sumber && (
              <>
                <Typography className={classes.info}>Sumber:</Typography>
                <Typography className={classes.textInfoDescirption}>
                  {props.vaksin.sumber}
                </Typography>
              </>
            )}
          </>
        )}
        {props.vaksin.jenis_vaksin && (
          <>
            <Typography className={classes.info}>Jenis Vaksin:</Typography>
            <Typography className={classes.textInfoDescirption}>
              {props.vaksin.jenis_vaksin}
            </Typography>
          </>
        )}
        {props.vaksin.kouta && props.vaksin.kouta !== 0 ? (
          <>
            <Typography className={classes.info}>Kouta:</Typography>
            <Typography className={classes.textInfoDescirption}>
              {props.vaksin.kouta}
              {' Orang'}
            </Typography>
          </>
        ) : (
          <></>
        )}

        {props.vaksin.kewajiban && props.vaksin.kewajiban.length > 0 && (
          <>
            <Typography className={classes.info}>Kewajiban:</Typography>
            {props.vaksin.kewajiban.map((kewajiban: string, index: number) => (
              <Typography key={index} className={classes.textInfoDescirption}>
                {'- '}
                {kewajiban}
              </Typography>
            ))}
          </>
        )}
        {(props.vaksin.place_map || props.vaksin.place_maps) && (
          <>
            <div className={classes.containerCardAction}>
              <Button
                onClick={handleExpandClick}
                className={classes.btnActionCard}
              >
                <Typography className={classes.labelBtnAction}>
                  Lokasi Vaksin
                </Typography>
                <IconButton
                  className={classNames(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <MdExpandMore />
                </IconButton>
              </Button>
              <Button
                onClick={handleSendReport}
                className={classes.btnActionCardReport}
              >
                <Typography className={classes.labelBtnAction}>
                  Lapor Kesalahan
                </Typography>
                <IconButton>
                  <RiErrorWarningLine />
                </IconButton>
              </Button>
            </div>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              {props.vaksin.place_maps ? (
                props.vaksin.place_maps.map(
                  (placeMap: string, index: number) => (
                    <Fragment key={index}>
                      <div dangerouslySetInnerHTML={{ __html: placeMap }} />
                      <br />
                      <br />
                    </Fragment>
                  )
                )
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.vaksin.place_map ?? '',
                  }}
                />
              )}
            </Collapse>
          </>
        )} */}
      </div>
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
        <Box marginTop={2}>
          <Skeleton variant='text' width='85%' />
          <Skeleton variant='text' width='80%' />
          <Skeleton variant='text' width='95%' />
        </Box>
        <Box marginTop={1}>
          <Skeleton variant='text' width='65%' />
        </Box>
        <Box>
          <Skeleton variant='text' width='65%' />
        </Box>
        <Box>
          <Skeleton variant='text' width='65%' />
        </Box>
        <Box marginTop={1}>
          <Skeleton variant='text' width='35%' />
          <Box marginLeft={2}>
            <Skeleton variant='text' width='55%' />
            <Skeleton variant='text' width='55%' />
            <Skeleton variant='text' width='55%' />
          </Box>
        </Box>
        <Box display='flex' justifyContent='space-between' gridGap={2}>
          <Skeleton variant='text' width={80} height={50} />
          <Skeleton variant='text' width={80} height={50} />
        </Box>
      </div>
    );
  };
