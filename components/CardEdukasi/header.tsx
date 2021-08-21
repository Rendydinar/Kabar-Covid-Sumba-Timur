import { createStyles, makeStyles, Typography, Theme } from '@material-ui/core';
import React from 'react';
import { FaPen } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { ImNewspaper } from 'react-icons/im';
import { RiNewspaperFill } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { getDateFormated } from '../../utils/date';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      width: '100%',
    },
    titlePost: {
      fontSize: '18px',
      fontWeight: 700,
      marginBottom: '10px',
    },
    author: {
      fontSize: '14px',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    date: {
      fontSize: '14px',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
  })
);

interface IProps {
  title?: string;
  author: string;
  date: string;
  target: string[];
  sumber: string;
}

const Header: React.FC<IProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      {props.title ? (
        <Typography className={classes.titlePost}>{props.title}</Typography>
      ) : undefined}
      <Typography className={classes.author}>
        <FaPen size={14} /> {props.author}
      </Typography>
      <Typography className={classes.date}>
        <BiWorld size={14} /> {props.sumber}
      </Typography>
      <Typography className={classes.date}>
        <MdDateRange size={14} /> {getDateFormated(new Date(props.date))}
      </Typography>
      <div
        style={{
          display: 'flex',
          gap: '6px',
        }}
      >
        <FaUsers size={14} />
        <Typography>
          {props.target.map((item: string, index: number) => (
            <Typography
              key={index}
              style={{
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              {' - '} {item}
            </Typography>
          ))}
        </Typography>
      </div>
    </div>
  );
};

export default Header;
