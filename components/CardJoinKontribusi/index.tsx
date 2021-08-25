import { Button, Collapse, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { IJoinKontributor } from '../../interfaces';
import useStyles from './style';

interface IProps {
  kontributor: IJoinKontributor;
}

const CardJoinKontribusi: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const [openDetail, setOpenDetail] = useState<boolean>(false);

  const toogleOpenDetail = () => {
    setOpenDetail(!openDetail);
  };

  const handleGoToBtnJoin = () => {
    window.open(props.kontributor.linkToJoin, '_blank');
  };

  return (
    <div className={classes.card}>
      <span className={classes.spanIcon}>{props.kontributor.icon}</span>
      <Typography className={classes.cardTitle}>
        {props.kontributor.title}
      </Typography>
      <Typography className={classes.cardInfo}>
        {props.kontributor.description}
      </Typography>
      <div className={classes.containerBtnAction}>
        <Button
          fullWidth
          className={classes.btnJoin}
          classes={{ label: classes.labelBtnJoin }}
          onClick={handleGoToBtnJoin}
        >
          Gabung sekarang
        </Button>
      </div>
      <Collapse
        in={openDetail}
        timeout='auto'
        unmountOnExit
        className={classes.containerCollapse}
      >
        <ul>
          <Typography className={classes.titleJob}>Uraian Tugas: </Typography>
          {props.kontributor.jobDescription.map(
            (jobDesc: string, index: number) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: ' 6px',
                  marginBottom: '10px',
                }}
              >
                <span>✔️</span>
                {jobDesc}
              </li>
            )
          )}
        </ul>
      </Collapse>
      <div className={classes.containerBtnAction}>
        <Button
          fullWidth
          onClick={toogleOpenDetail}
          endIcon={openDetail ? <MdExpandLess /> : <MdExpandMore />}
        >
          Lihat Detail{' '}
        </Button>
      </div>
    </div>
  );
};

export default CardJoinKontribusi;
