import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  labelContainer: {
    display: 'flex',
    marginBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  inputLabel: {
    position: 'initial',
    color: 'var(--color-mine-shaft)',
    fontSize: 16,
    fontWeight: 600,
    transform: 'none',
    letterSpacing: 0.32,
    [theme.breakpoints.down('xs')]: {
      fontSize: 11,
    },
    '&.Mui-focused': {
      color: 'var(--color-mine-shaft)',
    },
  },
  charCounter: {
    fontSize: 12,
    fontWeight: 700,
    [theme.breakpoints.down('xs')]: {
      fontSize: 8,
    },
  },
  textRed: {
    color: 'var(--color-warning-1)',
  },
  hintText: {
    marginBottom: 5,
    color: 'var(--color-black)',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 0.32,
    [theme.breakpoints.down('xs')]: {
      fontSize: 8,
    },
  },
  rootInput: {
    width: '100%',
    borderRadius: 8,
    fontFamily: 'var(--font-primary)',
  },

  rootInputFilled: {
    backgroundColor: 'var(--color-gallery)',
    '&.MuiAutocomplete-inputRoot[class*="MuiFilledInput-root"]': {
      padding: 0,
      paddingLeft: 16,
      paddingRight: '16px !important',
      fontSize: 14,
    },
  },

  rootInputNoFill: {
    backgroundColor: 'transparent',
    '&.Mui-focused': {
      backgroundColor: 'transparent',
    },
    '&.MuiAutocomplete-inputRoot[class*="MuiFilledInput-root"]': {
      padding: 0,
      paddingLeft: 16,
      paddingRight: '16px !important',
      fontSize: 14,
    },
  },
  input: {
    padding: 8,
    [theme.breakpoints.down('xs')]: {
      padding: 5,
      fontSize: 11,
    },
    '&::placeholder': {
      fontSize: '14px',
      color: 'var(--color-grey-4)',
      opacity: 1,
      // padding: 8,
    },
  },
  rootInputOutlined: {
    backgroundColor: 'white',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-mine-shaft)',
    },
    '&.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      padding: 0,
      paddingLeft: 16,
      paddingRight: '16px !important',
      fontSize: 14,
    },
  },
  errorText: {
    marginTop: 5,
    color: 'var(--color-warning-1)',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 0.32,
    [theme.breakpoints.down('xs')]: {
      fontSize: 8,
    },
  },
}));

export default useStyles;
