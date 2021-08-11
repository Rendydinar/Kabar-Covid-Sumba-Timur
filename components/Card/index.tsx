import { Typography } from '@material-ui/core';
import React, { ReactNode } from 'react';
import useStyles from './style';

interface IProps {
  icon?: ReactNode | any;
  title: string;
  total: number;
}

const Card: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Typography className={classes.cardIcon}>{props.icon}</Typography>
      <Typography className={classes.cardTitle}>{props.title}</Typography>
      <Typography className={classes.cardInfo}>
        <span className={classes.cardTotalKasus}>{props.total}</span>
        Orang
      </Typography>
    </div>
  );
};

export default Card;
