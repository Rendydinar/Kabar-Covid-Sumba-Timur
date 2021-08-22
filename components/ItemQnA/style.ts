import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root:{},
    btnActionCard: {
      height: '40px',
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
      textTransform: 'capitalize',
      letterSpacing: 'normal',
      fontWeight: 600,
      color: '#000',
      fontSize: '16px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '13px',
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
    sumber: {
      marginTop: '10px',
      fontWeight: 600,
      fontSize: '14px', 
    }
  })
)
export default useStyles;
  