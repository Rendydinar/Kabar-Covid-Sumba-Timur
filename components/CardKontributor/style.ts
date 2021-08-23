import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    card: {
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '25px',
    },
    imgContributor:{
      borderRadius: '100%'
    },
    name:{
      marginTop:'30px',
      color: '#28DF99',
      fontSize: '22px',
      fontWeight: 700,
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
        marginTop:'20px',
      },  
    },
    position:{
      fontSize: '16px',
      margin:"5px 0",
      fontWeight: 600,
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },  
    },
    containerSosialMedia:{
      display: 'flex',
      marginTop: '15px',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px',
      [theme.breakpoints.down('sm')]: {
        marginTop: '10px',
      },  
    },
    bio:{
      fontSize: '14px',
      marginTop: '20px',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        marginTop: '10px',
      },  
    }
  })
)
export default useStyles;
  