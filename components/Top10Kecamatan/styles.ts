import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  rowTitle: {
    fontWeight: 700,
    fontSize: '16px'
  },
  root: {
    marginTop: '20px',
    padding: '0 40px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
    },
  },
  tabelCellTotal: {
    color: '#e44933',
    fontWeight: 'bold',
    fontSize: '16px',
    position: 'relative',
    // paddingRight: '55px !important'
  },
  badge: {
    top: '6px !important',
    left: '100% !important',
  }
}));

export default useStyles;
