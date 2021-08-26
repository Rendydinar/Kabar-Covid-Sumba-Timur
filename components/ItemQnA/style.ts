import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root:{
      marginBottom: '20px',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '10px',
      },
    },
    btnActionCard: {
      backgroundColor: '#99F3BD',
      '&:hover': {
        backgroundColor: '#99F3BD',
      }
    },
    labelBtnAction: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    textLabelBtnAction: {
      textAlign: 'left',
      textTransform: 'capitalize',
      letterSpacing: 'normal',
      fontWeight: 600,
      color: '#263238',
      fontSize: '16px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
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
    description: {
      fontSize: '14px',
      marginTop: '5px',
    },
    titleListContent: {
      fontSize: '14px',
      marginTop: '5px',
      fontWeight: 700
    },
    sumber: {
      marginTop: '10px',
      fontWeight: 600,
      fontSize: '14px', 
    }
  })
)
export default useStyles;
  