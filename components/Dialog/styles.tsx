import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  closeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    // color: theme.palette.grey[500],
    '&.custom': {
      right: 0,
      top: 0,
    },
    '&.sentEmail': {
      backgroundColor: 'var(--color-primary)',
    },
    '&.sadIcon': {
      backgroundColor: 'var(--color-white)',
      borderRadius: 16,
    },
  },
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContent: {
    padding: 16,
    minHeight: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&.custom': {
      padding: '16px 55px 32px 55px',
      [theme.breakpoints.down('sm')]: {
        padding: '16px 30px 32px 30px',
      },
    },
  },
  dialogActions: {
    minHeight: 56,
    padding: 16,
    justifyContent: 'center',
  },
  dialogPaper: {
    minWidth: 318,
    '&.custom': {
      borderRadius: 16,
    },
    '&.sentEmail': {
      backgroundColor: 'var(--color-primary)',
    },
    '&.sadIcon': {
      borderRadius: 16,
    },
  },
}));

export default useStyles;
