import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '500px',
      padding: '20px 50px',
      borderWidth: '20px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: '15px 25px',
      },
    },
    form: {
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: '30px',
    },
    btnSubmit: {
      marginTop: '40px !important',
      '&.disable': {
        backgroundColor: '#e8e8e8',
      },
      '&.active': {
        backgroundColor: '#28DF99',
      }
    },
    dialogContent: {
      padding: '0px 45px 40px 45px',
      '&.success': {
        backgroundColor: '#28DF99'
      }
    },  
    containerDioalog: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 40,
    },
    closeButton: {
      position: 'absolute',
      right: 10,
      top: 13,
      padding: 0,
      // color: theme.palette.grey[500],
      '&.custom': {
        right: 0,
        top: 0,
      },
      '&:focus': {
        backgroundColor: 'transparent',
      },
    },
    iconDialogContent: {
      marginBottom: 20,
    },
    textInfo: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#555555',
      marginBottom: 8,
      lineHeight: '38px',
      textAlign: 'center',
      '&.success': {
        color: '#fff',
      }  
    },
    textMessage: {
      fontSize: 14,
      fontWeight: 'normal',
      color: '#3c3c3c',
      marginBottom: 9,
      lineHeight: '19px',
      textAlign: 'center',
      '&.success': {
        color: '#fff',
      }
    },
    dialogSuccess: {
      backgroundColor: '#F47573'
    },
    userIcon: {
      width: 340,
      height: 340
    },
    imgUser: {
      borderRadius: '100%'
    },
    textiField: {
      height: '45px'
    }
  })
);

export default useStyles;