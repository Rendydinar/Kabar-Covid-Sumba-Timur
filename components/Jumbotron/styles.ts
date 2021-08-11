import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  sectionMonitoring: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px 0',
    backgroundColor: '#99F3BD',
  },
  titleMonitoring: {
    fontSize: '26px',
    fontWeight: 700,
  },
  updateTimeMonitoring: {
    fontSize: '16px',
    fontWeight: 600,
  },
}));

export default useStyles;
