import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    position: 'absolute',
    borderRadius: '7px',
    padding: '2px',
    width: '40px',
    top: '-25px',
    left: '-8px',
    '&.green': {
      backgroundColor: '#22C55E',
    },
    '&.red': {
      backgroundColor: '#EF4444',      
    }
  },
  total: {
    color: '#fff',
    fontSize: '12px',
    textAlign: 'center'
  }
}))

export default useStyles;