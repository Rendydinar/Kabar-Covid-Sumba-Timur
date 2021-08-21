import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      marginTop: '50px',
      [theme.breakpoints.down('sm')]: {
        marginTop: '30px',
      },
    },
    wrapperSosialMediaShare: {
      display: 'flex',
      marginTop: '5px',
      gap: '15px'
    }
  })
)
export default useStyles;
  