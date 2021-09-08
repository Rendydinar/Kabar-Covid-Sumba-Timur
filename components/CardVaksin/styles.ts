import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '390px',
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
  rootLoadingSkeleton: {
    marginTop: '30px',
    padding: '10px',
    backgroundColor: '#28DF99',
    borderRadius: '8px',
    boxShadow:
      'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
    },
  },
  dateVaksin: {
    fontSize: '16px',
    color: '#111827',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  dateCountDownVaksin: {
    textAlign: 'center',
    fontSize: '16px',
    color: '#111827',
    fontWeight: 'bold',
    borderRadius: '10px',
    backgroundColor: '#fff',
    padding: '3px',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
    '&.sudahSelesai': {
      color: '#e44933',
    },
    '&.akanHadir': {
      color: '#e4a033',      
    },
    '&.sedangBerlangsung': {
      color: '#31be72',      
    }     
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    gap: '2px'
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
    fontWeight: 600,
    marginTop: '10px'
  },
  imageVaksinContainer: {
    width: '100%',
    '& > div':  {
      position: 'unset !important',
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  textInfoDescirption: {
    fontSize: '16px',
    fontWeight: 'normal',
    textTransform: 'capitalize',
  },
  btnActionCard: {
    height: '40px',
    backgroundColor: '#99F3BD',
  },
  btnActionCardReport: {
    height: '40px',
    backgroundColor: '#ef5350 !important',
  },
  containerCardAction: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderRadius: '10px',
    marginTop: '10px',
    marginBottom: '10px',
    justifyContent: 'space-between',
    gap: '10px'
  },
  labelBtnAction: {
    textTransform: 'capitalize',
    letterSpacing: 'normal',
    fontWeight: 600,
    color: '#000',
    fontSize: '14px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
  btnBaca: {
    backgroundColor: '#28DF99',    
    width: '100%',
  }
}));

export default useStyles;
