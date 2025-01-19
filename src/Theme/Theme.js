import { createTheme, ThemeProvider } from '@mui/material/styles';

const Theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          outlined: {
            borderRadius: "155px",
            borderColor: "white",  // Apply border color globally
            color: "white",        // Apply text color globally
            '&:hover': {
              borderColor: "pink", // Apply hover effect globally
              color: "pink",      
            },
          },
        },
      },
    },
  });
  

  export default Theme;