
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) => createStyles({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  root: {
    margin: '20px 0',
  },
  cardContentContainer: {
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '20px 0',
    padding: '10px 0px 10px 15px',
    border: 'solid 0.1px #F6F7D4',
    borderRadius: '10px',
    boxShadow:
      'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      fontWeight: 'bold',
    },

  },
  cardKasus: {
    fontWeight: 700,
    color: '#388e3c',
  },
  totalKasus: {
    color: '#e44933',
  },
  kasusSedangDiProses: {
    fontWeight: 700,
    color: '#ffb74d',
  }
}));

export default useStyles;