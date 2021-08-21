import { Button, Collapse, IconButton, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { IQnA } from '../../interfaces';
import useStyles from './style';
import { MdExpandMore } from 'react-icons/md';
import { classNames } from '../../lib/classNames';

interface IProps {
  qna: IQnA;
}

const ItemQnA: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <Button
        onClick={handleExpandClick}
        className={classes.btnActionCard}
        classes={{
          label: classes.labelBtnAction,
        }}
        fullWidth
        endIcon={
          <IconButton
            className={classNames(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <MdExpandMore />
          </IconButton>
        }
      >
        <Typography className={classes.textLabelBtnAction}>
          {props.qna.title}
        </Typography>
      </Button>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <Typography>{props.qna.content}</Typography>
        <Typography>{props.qna.sumber}</Typography>
      </Collapse>
    </div>
  );
};

export default ItemQnA;
