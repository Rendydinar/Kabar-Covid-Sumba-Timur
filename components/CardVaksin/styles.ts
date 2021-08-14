import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '620px',
    padding: '10px',
    backgroundColor: '#28DF99',
    borderRadius: '8px',
    boxShadow:
      'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
      width: '100%',
    },
  },
  dateVaksin: {
    fontSize: '24px',
    color: '#000',
    fontWeight: 'bold',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '5px',
      fontSize: '16px',
    },
  },
  dateCountDownVaksin: {
    fontSize: '24px',
    color: '#000',
    fontWeight: 'bold',
    borderRadius: '10px',
    backgroundColor: '#fff',
    padding: '5px',
    marginBottom: '10px',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    '&.timeout': {
      color: '#e44933',
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  footer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
    padding: '7px',
  },
  info: {
    fontSize: '16px',
    fontWeight: 600
  },

}));

export default useStyles;
