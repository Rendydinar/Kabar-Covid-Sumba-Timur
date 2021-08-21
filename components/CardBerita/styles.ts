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
  titlePost: {

  },
  author:{},
  date:{},
  description: {},
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
  content: {

  },
  imageVaksinContainer: {
    width: '100%',
    '& > div':  {
      position: 'unset !important',
    }
  }
}));

export default useStyles;
