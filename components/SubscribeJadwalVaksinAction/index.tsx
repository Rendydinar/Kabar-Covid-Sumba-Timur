import { Typography, Link } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { MESSAGE_WHATSSAPP } from '../../constant';
import useStyles from './styles';

interface IProps {}

const SubscribeJadwalVaksinAction: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  // const [openDialogStopSubscribe, setOpenDialogStopSubscribe] =
  //   useState<boolean>(false);
  // const [openDialogReportSubscribe, setOpenDialogReportSubscribe] =
  //   useState<boolean>(false);

  // const handleOpenDialogReport = () => {
  //   setOpenDialogReportSubscribe(true);
  // };
  // const handleOpenDialogStopSubscribe = () => {
  //   setOpenDialogStopSubscribe(true);
  // };

  return (
    <div className={classes.root}>
      <Typography variant='body1'>
        * Punya masalah terkait langganan Kawal Jadwal Vaksin ?{' '}
        <Link
          className={classes.textActionSubscribe}
          href={`https://api.whatsapp.com/send?phone=6282217971133&text=${MESSAGE_WHATSSAPP}`}
          target='_blank'
          rel='noopener'
        >
          Laporkan Masalah
        </Link>
      </Typography>
      <Typography variant='body1'>
        *{' '}
        <Link
          className={classes.textActionSubscribe}
          href={`https://api.whatsapp.com/send?phone=6282217971133&text=${MESSAGE_WHATSSAPP}`}
          target='_blank'
          rel='noopener'
        >
          Berhenti Langganan
        </Link>
      </Typography>
    </div>
  );
};

export default SubscribeJadwalVaksinAction;
