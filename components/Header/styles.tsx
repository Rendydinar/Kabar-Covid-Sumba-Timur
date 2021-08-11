import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      width: '60px !important',
      height: '60px !important',
    },
    header: {
      backgroundColor: '#28DF99',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: '0 20px',
      [theme.breakpoints.down('md')]: {
        padding: '0 10px',
      },
    },
    headerContent: {
      padding: '15px 0',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        padding: '10px 0',
      },
    },
    headerTitle: {
      textAlign: 'center',
      fontWeight: 700,
      fontSize: 24,
      [theme.breakpoints.down('md')]: {
        fontSize: 22,
      },
    },
    headerDescription: {
      textAlign: 'center',
      fontWeight: 600,
      [theme.breakpoints.down('md')]: {
        fontSize: 14,
      },
    },
  })
);

export default useStyles;
