import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) => createStyles({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    padding: '5px',

  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  thNo: {
    display: 'flex',
    alignItems: 'center',
    width: '50px'
  }
}));

export default useStyles;
