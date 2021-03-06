import { Typography } from '@material-ui/core';
import React from 'react';
import { classNames } from '../../lib/classNames';
import useStyles from './styles';

interface IProps {
  title: string;
  description: string;
  classNameDescription?: string;
}

const Jumbotron: React.FC<IProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.sectionMonitoring}>
      <Typography className={classes.titleMonitoring}>{props.title}</Typography>
      <Typography
        className={classNames(
          classes.updateTimeMonitoring,
          props.classNameDescription
        )}
      >
        {props.description}
      </Typography>
    </div>
  );
};

export default Jumbotron;
