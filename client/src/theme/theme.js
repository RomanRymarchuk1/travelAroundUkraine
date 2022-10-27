import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0499DD',
    },
    secondary: {
      main: '#FFC700',
    },

    text: {
      primary: '#282828',
    },
  },
});

const appliedTheme = createTheme({
  breakpoints: {
    values: {
      sx: 0,
      mobile: 380,
      tablet: 610,
      laptop: 1024,
      desktop: 1200,
    },
  },

  typography: {
    fontFamily: 'Montserrat, sans-serif',

    h2: {
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '22px',
      color: theme.palette.primary.main,
    },

    h3: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '29px',
      color: theme.palette.primary.main,
    },

    body1: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
      color: theme.palette.text.primary,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
        variant: 'contained',
      },

      styleOverrides: {
        root: {
          background: 'linear-gradient(92.71deg, #0499DD 0%, #17C1BC 100%)',
          padding: '16px 53px',
          borderRadius: '60px',
          fontSize: '14px',
          fontWeight: 700,
          lineHeight: '17px',
          '&:hover': {
            color: theme.palette.secondary.main,
            background: 'linear-gradient(92.71deg, #0685bf 0%, #15a19d 100%)',
          },
        },
      },
    },

    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
      },
    },

    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        fixed: true,
      },
    },
  },
});

export default appliedTheme;
