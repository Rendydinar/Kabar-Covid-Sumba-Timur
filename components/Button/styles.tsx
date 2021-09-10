import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    height: theme.spacing(5.375),
    minWidth: theme.spacing(17.625),
    borderRadius: theme.spacing(1),
    boxShadow: 'var(--box-shadow-primary)',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'filter 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    verticalAlign: 'middle',
    '&:disabled': {
      backgroundColor: '#e8e8e8',
      cursor: 'default',
      pointerEvents: 'none',
    },
    '&:hover': {
      filter: 'brightness(93%)',
      '@media (hover: none)': {
        filter: 'brightness(100%)',
      },
    },
    '&hover': {
      backgroundColor: 'transparent',
    },
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  fullRounded: {
    borderRadius: '999px',
  },
  disableElevation: {
    boxShadow: 'none',
  },
  label: {
    display: 'inherit',
    fontSize: theme.spacing(2),
    fontWeight: 600,
    fontFamily: 'var(--font-primary)',
    alignItems: 'inherit',
    justifyContent: 'inherit',
  },
  fontSizeInherit: {
    fontSize: 'inherit',
  },
  colorPrimary: {
    backgroundColor: '#28DF99',
  },
  colorSecondary: {
    backgroundColor: 'var(--color-mantis)',
  },
  colorDanger: {
    backgroundColor: 'var(--color-flamingo)',
  },
  colorGrey: {
    backgroundColor: '#e8e8e8',
  },
  colorWhite: {
    backgroundColor: 'var(--color-white)',
  },
  colorDangerOutlined: {
    backgroundColor: 'transparent',
    border: '1px solid #F04848',
    borderRadius: '8px',
  },
  textColorDark: {
    color: 'var(--color-mine-shaft)',
  },
  textColorLight: {
    color: 'white',
  },
  textColorDanger: {
    color: '#F04848',
  },
  startIcon: {
    display: 'inherit',
    marginRight: theme.spacing(1),
  },
  endIcon: {
    display: 'inherit',
    marginLeft: theme.spacing(1),
  },
  loadingSpinner: {},
  iconBtn: {
    '&.noPadding': {
      padding: 0,
    },
    '&.hideHoverEffect': {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
}));

export default useStyles;
