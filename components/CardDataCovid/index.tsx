import { Typography } from '@material-ui/core';
import React, { ReactNode } from 'react';
import useStyles from './style';
import { comparasionData } from '../../utils/index';

interface IProps {
  icon?: ReactNode | any;
  title: string;
  totalNow: number;
  totalYesterday: number;
  dateYesterday: string;
}

const CardDataCovid: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Typography className={classes.cardIcon}>{props.icon}</Typography>
      <Typography className={classes.cardTitle}>{props.title}</Typography>
      <div>
        <Typography className={classes.cardInfo}>
          <span className={classes.cardTotalKasus}>{props.totalNow}</span>
          Orang
        </Typography>
        <Typography>
          {comparasionData(props.totalNow, props.totalYesterday)}
        </Typography>
        <Typography>{props.dateYesterday}</Typography>s
      </div>
    </div>
  );
};

export default CardDataCovid;
