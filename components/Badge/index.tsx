import { Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { classNames } from '../../lib/classNames';
import useStyles from './styles';

interface IProps {
  total: number;
  className?: string;
}

const Badge: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();

  return (
    <div
      className={classNames(
        props.className,
        classes.root,
        props.total > 0 ? 'red' : 'green'
      )}
    >
      <Typography variant='h6' className={classes.total}>
        {props.total > 0 ? '+ ' : props.total !== 0 && '- '}
        {Math.abs(props.total)}
      </Typography>
    </div>
  );
};

export default Badge;
