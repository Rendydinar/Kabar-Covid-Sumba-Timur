import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
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
    },
    headerContent: {
      padding: '15px 0',
      width: '100%',
    },
    headerTitle: {
      textAlign: 'center',
      fontWeight: 700,
      fontSize: 24,
    },
    headerDescription: {
      textAlign: 'center',
      fontWeight: 600,
      fontSize: 16,
    },
  })
);

export default useStyles;
