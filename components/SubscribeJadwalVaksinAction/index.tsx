import { Typography, Link } from '@material-ui/core';
import React, { ReactElement } from 'react';
import {
  MESSAGE_WHATSSAPP_TO_STOP_SUBSCRIPTION_JADWAL_VAKSIN,
  MESSAGE_WHATSSAPP_TO_REPORT_KAWAL_VAKSIN,
} from '../../constant';
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
      <Typography variant='h6'>Bantuan</Typography>
      <ul
        style={{
          listStyle: 'auto',
          marginLeft: '30px',
        }}
      >
        <li>
          <Typography variant='body2'>
            Punya masalah terkait langganan Kawal Jadwal Vaksin ?{' '}
            <Link
              className={classes.textActionSubscribe}
              href={`https://api.whatsapp.com/send?phone=6282217971133&text=${MESSAGE_WHATSSAPP_TO_REPORT_KAWAL_VAKSIN}`}
              target='_blank'
              rel='noopener'
            >
              Laporkan Masalah
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant='body2'>
            <Link
              className={classes.textActionSubscribe}
              href={`https://api.whatsapp.com/send?phone=6282217971133&text=${MESSAGE_WHATSSAPP_TO_STOP_SUBSCRIPTION_JADWAL_VAKSIN}`}
              target='_blank'
              rel='noopener'
            >
              Berhenti Langganan
            </Link>
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default SubscribeJadwalVaksinAction;
