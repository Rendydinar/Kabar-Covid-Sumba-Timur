import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      width: '35%',
      // height: '180px',
      borderRadius: '10px',
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },    
    },
    media: {
      height: 140,
    },
    cardInfo: {
      fontSize: '24px',
      fontWeight: 600,
      color: '#607d8b',
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
    containerTotal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }
  })
)
export default useStyles;
  