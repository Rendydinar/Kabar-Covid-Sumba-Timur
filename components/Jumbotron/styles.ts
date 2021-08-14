import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) => createStyles({
  sectionMonitoring: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '15px 10px',
    backgroundColor: '#99F3BD',
  },
  titleMonitoring: {
    fontSize: '26px',
    textAlign: 'center',
    fontWeight: 600,
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
    },
},
  updateTimeMonitoring: {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 600,
    // textDecoration: 'underline'
  },
}));

export default useStyles;
