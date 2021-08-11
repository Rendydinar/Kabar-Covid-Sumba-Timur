import { Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useStyles from './styles';

interface IProps {}

const Header: React.FC<IProps> = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Image
            priority
            src='/images/lambang-sumba-timur.png'
            height={60}
            width={60}
            alt='lambang-sumba-timur'
            className={classes.icon}
          />
        </a>
      </Link>
      <div className={classes.headerContent}>
        <Typography className={classes.headerTitle}>
          Kabar Covid Sumba Timur
        </Typography>
        <Typography className={classes.headerDescription}>
          Situs yang menampilkan seputar informasi COVID-19 Di Daerah Sumba
          Timur & Sekitarnya
        </Typography>
      </div>
    </header>
  );
};

export default Header;
