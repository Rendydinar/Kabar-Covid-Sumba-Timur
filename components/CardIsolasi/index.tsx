import { Collapse, IconButton, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { IIsolasi } from '../../interfaces';
import { classNames } from '../../lib/classNames';
import useStyles from './styles';

interface IProps {
  isolasi: IIsolasi;
}

const CardIsolasi: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        margin: '20px 0',
      }}
    >
      <div
        style={{
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px 0',
          padding: '10px 0px 10px 15px',
          border: 'solid 0.1px #F6F7D4',
          borderRadius: '10px',
          boxShadow:
            'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
        }}
      >
        <div>
          <Typography
            style={{
              fontSize: '20px',
              fontWeight: 600,
            }}
          >
            {props.isolasi.name}
          </Typography>
          {props.isolasi.kasus_terkonfirmasi && (
            <Typography
              style={{
                fontWeight: 700,
                color: '#388e3c',
              }}
            >
              <span
                style={{
                  color: '#e44933',
                }}
              >
                {props.isolasi.kasus_terkonfirmasi} Kasus
              </span>{' '}
              Terkonfirmasi
            </Typography>
          )}
          {props.isolasi.terkonfirmasi && (
            <Typography
              style={{
                fontWeight: 700,
                color: '#388e3c',
              }}
            >
              <span
                style={{
                  color: '#e44933',
                }}
              >
                {props.isolasi.terkonfirmasi} Kasus
              </span>{' '}
              Terkonfirmasi
            </Typography>
          )}
          {props.isolasi.menunggu_hasil_pcr && (
            <Typography
              style={{
                fontWeight: 700,
                color: '#ffb74d',
              }}
            >
              <span
                style={{
                  color: '#e44933',
                }}
              >
                {props.isolasi.menunggu_hasil_pcr} Kasus
              </span>{' '}
              Menunggu Hasil PCR
            </Typography>
          )}
        </div>
        <div>
          <IconButton
            className={classNames(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <MdExpandMore />
          </IconButton>
        </div>
      </div>

      <Collapse in={expanded} timeout='auto' unmountOnExit>
        {' '}
        <div dangerouslySetInnerHTML={{ __html: props.isolasi.place_map }} />
      </Collapse>
    </div>
  );
};

export default CardIsolasi;
