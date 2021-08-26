import { Button, Collapse, IconButton, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { IQnA, IContentQnA } from '../../interfaces';
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
        <div
          style={{
            padding: '10px 5px',
          }}
        >
          {props.qna.type === 'general' ? (
            <>
              <Typography className={classes.description}>
                {props.qna.content}
              </Typography>
              <Typography className={classes.sumber}>
                Sumber: {props.qna.sumber}
              </Typography>
            </>
          ) : props.qna.type === 'only-list' ? (
            <>
              <div>
                {props.qna.content_list.map(
                  (content: string, index: number) => (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                      key={index}
                    >
                      <span
                        style={{
                          fontSize: '10px',
                        }}
                      >
                        ⚫️
                      </span>
                      <Typography className={classes.description}>
                        {content}
                      </Typography>
                    </div>
                  )
                )}
              </div>
              <Typography className={classes.sumber}>
                Sumber: {props.qna.sumber}
              </Typography>
            </>
          ) : props.qna.type === 'content-list-content' ? (
            <>
              {props.qna.content_list_content.map(
                (content: IContentQnA, index: number) => (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '5px',
                    }}
                    key={index}
                  >
                    <span
                      style={{
                        fontSize: '10px',
                      }}
                    >
                      ⚫️
                    </span>
                    <div>
                      <Typography className={classes.titleListContent}>
                        {content.title}
                      </Typography>
                      <Typography className={classes.description} key={index}>
                        {content.content}
                      </Typography>
                    </div>
                  </div>
                )
              )}
              <Typography className={classes.sumber}>
                Sumber: {props.qna.sumber}
              </Typography>
            </>
          ) : (
            <>
              <Typography className={classes.description}>
                {props.qna.content}
              </Typography>
              <Typography className={classes.sumber}>
                Sumber: {props.qna.sumber}
              </Typography>
            </>
          )}
        </div>
      </Collapse>
    </div>
  );
};

export default ItemQnA;
