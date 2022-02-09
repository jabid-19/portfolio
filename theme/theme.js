import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#BD7045",
      contrastText: "#fff",
    },

    secondary: {
      main: "#16151d",
      contrastText: "#fff",
    },
    background: {
      default: "#040404",
    },
  },

  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },

  // fontColor: 'white',
  // spacing: 8,
});

export default theme;
