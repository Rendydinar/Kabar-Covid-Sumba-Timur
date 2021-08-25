import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    card: {
      padding: '15px 20px',
      width: '350px',
      height: 'auto',
      minHeight: '300px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      // display: 'flex',
      // flexDirection: 'column',
      // justifyContent: 'space-between',
      boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: '10px 15px',
      },
    },
    spanIcon: {
      display: 'flex',
      justifyContent: 'center',
    },
    cardTitle: {
      fontSize: '24px',
      margin: '10px 0',
      fontWeight: 800,      
      color: '#28DF99',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
      },
    },
    cardInfo: {
      fontSize: '14px',
      textAlign: 'justify',
    },
    btnJoin: {
      margin: '20px',
      backgroundColor: '#28DF99',
      borderRadius: '10px',
      boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
      // textDecoration: 'none',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#28DF99',
      }
    },
    labelBtnJoin: {
      color: '#fff',
      fontWeight: 800,      
      fontSize: '16px'
    },
    btnSeeMore: {

    },
    containerBtnAction: {
      display: 'flex',
      justifyContent: 'center',
    },
    containerCollapse: {
      margin: '20px 0'
    },
    titleJob: {
      fontSize: '16px',
      fontWeight: 'bold'
    }
    
  })
)
export default useStyles;
  