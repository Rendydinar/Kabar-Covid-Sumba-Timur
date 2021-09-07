// @ts-nocheck
import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#28DF99',
    },
    // secondary: {
    //   main: '#ed4b82', //var(--color-mantis)
    // },
    // danger: {
    //   main: 'red', //var(--color-mantis)
    // },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920,
    },
  },
  overrides: {
    MuiDialog: {
      paperWidthXs: {
        maxWidth: '462px',
      },
      paperWidthSm: {
        maxWidth: '610px',
      },
      paperWidthMd: {
        maxWidth: '777px',
      },
    },
    MuiDataGrid: {
      root: {
        height: '100vh',
        colCell: {
          width: '100% !important',
          maxWidth: '100% !important',
          minWidth: 'auto !important',
        },
        cellLeft: {},
      },
      // colCellSortable: {},
    },
    MuiSnackbarContent: {
      root: {
        fontSize: '16px',
        // backgroundColor: 'var(--color-warning-3) !important',
        fontWeight: 600,
        color: '#fff',
      },
    },
    MuiButton: {
      containedPrimary: {
        // color: 'var(--color-mine-shaft)',
        // backgroundColor: 'var(--color-primary)',
        height: '44px',
        borderRadius: '5px',
        boxShadow: '0 0 black',
        '&:hover': {
          filter: 'brightness(93%)',
          // backgroundColor: 'var(--color-primary)',
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      label: {
        fontSize: '14px',
        fontWeight: 600,
        textAlign: 'right',
        textTransform: 'none',
        letterSpacing: '1px',
      },
    },
    MuiTextField: {
      root: {
        fontSize: '0.75rem',
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: '1.2rem',
      },
      colorSecondary: {
        color: 'white',
      },
    },
    MuiChip: {
      sizeSmall: {
        fontSize: '0.6rem',
      },
    },
    MuiTypography: {
      colorPrimary: {
        // color: 'var(--color-mine-shaft)',
      },
    },
    MuiBreadcrumbs: {
      ol: {
        color: 'var(--color-black)',
        fontSize: '14px',
        letterSpacing: '0.56px',
      },
      separator: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
    MuiInputBase: {
      input: {
        backgroundColor: 'transparent',
      },
    },
    MuiInput: {
      input: {
        backgroundColor: 'transparent',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: 'var(--font-primary)',
    h5: {
      fontWeight: 'bold',
    },
    h4: {
      // Used in Workspace for Parent Folder name (title)
      fontSize: '36px',
      fontWeight: 700,
      letterSpacing: '1.44px',
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '18px',
      letterSpacing: '0.72px',
      color: '#2C2B2B',
    },
    subtitle2: {
      fontSize: '20px',
      fontWeight: 600,
    },
    caption: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: 'var(--color-black)',
    },
  },
});

export default theme;