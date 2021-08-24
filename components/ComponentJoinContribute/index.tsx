import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

interface IProps {}

const ComponentJoinContribute: React.FC<IProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>
        Dengan memiliki inisiatif untuk membantu masyarakat Sumba Timur yang
        mencari informasi terkait Covid-19 baik itu{' '}
        <b>informasi jadwal vaksin</b>, <b>data covid harian</b>,{' '}
        <b>berita dari pemerintah daerah</b> dan <b>edukasi tentang Covid-19</b>
        .
      </Typography>
      <Typography>
        Kami mengajak kamu juga untuk menjadi bagian dari Tim Kami untuk
        membantu masyarakat Sumba Timur.
      </Typography>
      <div></div>
    </div>
  );
};

export default ComponentJoinContribute;
