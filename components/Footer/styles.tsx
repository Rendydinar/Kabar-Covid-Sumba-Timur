import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      paddingBottom: '10px',
    },
    containerBottomNavigationAction: {
      justifyContent: 'space-around',
      height: '40px',
      padding: '40px 130px',
      backgroundColor: 'transparent',
      borderTop: 'solid .5px var(--color-muted)',
      [theme.breakpoints.down('sm')]: {
        padding: '30px 30px',
      },
    },
    labelBottomNavigationAction: {
      opacity: '1 !important',
      [theme.breakpoints.down('sm')]: {
        fontSize: '10px',
      },
    },
    footer: {
      // marginTop: "12px",
      backgroundColor: '#28DF99',
      textAlign: 'center',
      height: 'auto',
      fontSize: '14px',
      color: '#fff',
      fontWeight: 650,
      padding: '25px',
      [theme.breakpoints.down('sm')]: {
        height: 'auto',
        fontSize: '12px',
        color: '#fff',
        // marginTop: "12px",
      },
    },
    rootBottomNavigationAction: {
      flex: 1,
      minWidth: '20px',
      maxWidth: '88px',
      padding: '6px 12px 8px',
      transition:
        'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      height: '100%',
    },
    linkDevelop: {
      fontSize: '14px',
      fontWeight: 800,
      color: '#000000',
      textTransform: 'capitalize',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
    },
    list: {
      width: '350px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        width: '300px',
      },
    },
    fullList: {
      width: 'auto',
    },
    selectedNavigation: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '11px !important',
      },
    },
    containerList: {
      padding: '0 40px',
      paddingTop: '20px',
      [theme.breakpoints.down('sm')]: {
        padding: '0 20px',
        paddingTop: '20px',
      },
    },
    linkDonation: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '10px',
      width: '131px',
      marginLeft: 'auto',
      fontSize: '14px',
      fontWeight: 800,
      color: '#000000',
      textTransform: 'capitalize',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
    },
  })
);

export default useStyles;
