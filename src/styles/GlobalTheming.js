import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(278, 68%, 11%)',
      white: 'hsl(0, 0%, 100%)',
      lightGrayishViolet: 'hsl(270, 3%, 87%)',
      darkGrayishViolet: 'hsl(279, 6%, 55%)',
      veryDarkViolet: 'hsl(278, 68%, 11%)',
    },
  },
});

theme.typography.h2 = {
  color: theme.palette.primary.white,
  fontFamily: 'Space Grotesk, sans-serif',
  fontWeight: '500',
  fontSize: '18px'
}

theme.typography.h3 = {
  color: theme.palette.primary.white,
  fontFamily: 'Space Grotesk, sans-serif',
  fontWeight: '500'
}