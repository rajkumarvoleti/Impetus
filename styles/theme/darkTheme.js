import { createTheme } from "@mui/material/styles";

let darkTheme = createTheme();

darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    h1: {
      fontFamily: "Rowdies",
      fontSize: "36px",
      letterSpacing: "0.2px",
      fontWeight: "900",
    },
    h2: {
      fontFamily: "Jost",
      fontSize: "40px",
      [darkTheme.breakpoints.down("md")]: {
        fontSize: "35px",
      },
      [darkTheme.breakpoints.down("md")]: {
        fontSize: "30px",
      },
      letterSpacing: "1.5px",
      fontWeight: "700",
    },
    h3: {
      fontFamily: "Jost",
      fontSize: "25px",
    },
    h4: {
      fontFamily: "Jost",
      fontSize: "22px",
    },
    p: {
      fontFamily: "Jost",
      fontSize: "18px",
    },
    a: {
      fontFamily: "Jost",
      fontSize: "16px",
    },
  },
});

export default darkTheme;
