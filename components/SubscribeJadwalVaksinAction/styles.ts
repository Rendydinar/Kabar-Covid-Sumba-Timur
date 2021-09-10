import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) => createStyles({
  root: {
    marginBottom: '20px',
  },
  textActionSubscribe: {
    fontWeight: 'bold',
    color: 'red',
  },

}));

export default useStyles;
