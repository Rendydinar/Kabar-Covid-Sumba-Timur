import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    card: {
      width: '35%',
      height: '180px',
      backgroundColor: '#28DF99',
      borderRadius: '10px',
      boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
      justifyContent: 'center',
      flexDirection: 'column',
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        width: '145px'
      },
    },
    cardIcon: {
      fontSize: '50px',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '40px',
      },
    },
    cardTitle: {
      fontSize: '26px',
      fontWeight: 800,      
      color: '#e44933',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '22px',
      },
    },
    cardInfo: {
      fontSize: '24px',
      fontWeight: 600,
      color: '#fff',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
      },
    },
    cardTotalKasus:{
      color: '#374151',
      fontWeight: 'bold',
      marginRight: '3px',
    },
  })
)
export default useStyles;
  