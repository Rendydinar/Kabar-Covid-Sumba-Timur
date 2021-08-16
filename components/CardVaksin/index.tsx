import { Collapse, IconButton, Typography } from '@material-ui/core';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IVaksin } from '../../interfaces';
import { classNames } from '../../lib/classNames';
import useStyles from './styles';
import { MdExpandMore } from 'react-icons/md';
import { Button } from '@material-ui/core';

interface IProps {
  vaksin: IVaksin;
}

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const CardVaksin: React.FC<IProps> = (props) => {
  const [timeCountDown, setTimeCountDown] = useState<string>('');
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };

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

      if (props.vaksin.waktu_berakhir_timestamp) {
        if (now > props.vaksin.waktu_berakhir_timestamp) {
          clearInterval(getTime);
          setTimeCountDown('Sudah Sedang Berlangsung');
        } else if (distance < 0) {
          clearInterval(getTime);
          setTimeCountDown('Sudah Selesai');
        } else {
          setTimeCountDown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
      } else {
        if (distance < 0) {
          clearInterval(getTime);
          setTimeCountDown('Sudah Selesai');
        } else {
          setTimeCountDown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
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
      <div className={classes.footer}>
        {(props.vaksin.keterangan || props.vaksin.sumber) && (
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
        {props.vaksin.kouta && (
          <>
            <Typography className={classes.info}>Kouta:</Typography>
            <Typography className={classes.textInfoDescirption}>
              {props.vaksin.kouta}
              {' Orang'}
            </Typography>
          </>
        )}

        {props.vaksin.kewajiban && (
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
        {props.vaksin.place_map && (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#99F3BD',
                width: 'fit-content',
                borderRadius: '10px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              <Button onClick={handleExpandClick}>
                <Typography style={{ fontWeight: 600 }}>
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
            </div>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <div
                dangerouslySetInnerHTML={{ __html: props.vaksin.place_map }}
              />
            </Collapse>
          </>
        )}
      </div>
    </div>
  );
};

export default CardVaksin;
