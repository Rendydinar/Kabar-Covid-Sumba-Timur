import { Button, SvgIcon, Typography } from '@material-ui/core';
import React, { ReactNode } from 'react';
import useStyles from './style';

interface IProps {
  icon: ReactNode;
  title: string;
  description: string;
  jobDescription: string[];
  linkToJoin: string;
}

const CardJoinKontribusi: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <SvgIcon>{props.icon}</SvgIcon>
      <Typography className={classes.cardTitle}>{props.title}</Typography>
      <Typography className={classes.cardInfo}>{props.description}</Typography>
      <ul>
        {props.jobDescription.map((jobDesc: string, index: number) => (
          <li key={index}>{jobDesc}</li>
        ))}
      </ul>
      <a href={props.linkToJoin} target='_blank' rel='noopener'>
        <Button>Gabung sekarang</Button>
      </a>
    </div>
  );
};

export default CardJoinKontribusi;
