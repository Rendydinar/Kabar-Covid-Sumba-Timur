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
    <div className={classes.root}>
      <div className={classes.cardContentContainer}>
        <div>
          <Typography className={classes.cardTitle}>
            {props.isolasi.nama_tempat}
          </Typography>
          {props.isolasi.kasus_terkonfirmasi && (
            <Typography className={classes.cardKasus}>
              <span className={classes.totalKasus}>
                {props.isolasi.kasus_terkonfirmasi} Kasus
              </span>{' '}
              Terkonfirmasi
            </Typography>
          )}
          {props.isolasi.terkonfirmasi && (
            <Typography className={classes.cardKasus}>
              <span className={classes.totalKasus}>
                {props.isolasi.terkonfirmasi} Kasus
              </span>{' '}
              Terkonfirmasi
            </Typography>
          )}
          {props.isolasi.menunggu_hasil_pcr && (
            <Typography className={classes.kasusSedangDiProses}>
              <span className={classes.totalKasus}>
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
