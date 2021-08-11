import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: '35%',
      height: '180px',
      backgroundColor: '#28DF99',
      borderRadius: '10px',
      boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
      justifyContent: 'center',
      flexDirection: 'column',
      display: 'flex'
    },
    cardIcon: {
      fontSize: '50px',
      textAlign: 'center',
    },
    cardTitle: {
      fontSize: '26px',
      fontWeight: 800,      color: '#e44933',
      textAlign: 'center',
    },
    cardInfo: {
      fontSize: '24px',
      fontWeight: 600,
      textAlign: 'center'
    },
    cardTotalKasus:{
      fontWeight: 'bold',
    },
  })
)
export default useStyles;
  