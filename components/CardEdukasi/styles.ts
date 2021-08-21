import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '390px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow:
      'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
      width: '100%',
    },
  },
  description: {
    fontSize: '14px',
  },
  footer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  content: {

  },
  imageVaksinContainer: {
    width: '100%',
    '& > div':  {
      position: 'unset !important',
    }
  },
  btnBaca: {
    backgroundColor: '#28DF99',    
  }
}));

export default useStyles;