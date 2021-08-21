import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root:{},
    btnActionCard: {
      height: '40px',
      backgroundColor: '#99F3BD',
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
      fontSize: '14px',
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
  })
)
export default useStyles;
  