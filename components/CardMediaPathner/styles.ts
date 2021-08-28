import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: '20px'
      },
    },
    image: {

    },
    title: {
      
    }
  })
);

export default useStyles;
