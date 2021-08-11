import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) => createStyles({
  rowTitle: {
    fontWeight: 700,
    fontSize: '16px'
  },
  containerContent:{
    marginTop: '20px',
    padding: '0 40px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
    },
  }
}));

export default useStyles;
