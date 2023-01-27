import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

export default function EventList() {
  const theme = useTheme();

  const styles = {
    position: "fixed",
    height: "100vh",
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    alignItems: "center",
    justifyContent: "center",
    "div h1": {
      fontSize: "48px",
      fontWeight: "400",
      margin: "20px 0",
    },
    "div h4": {
      pl: "42px",
      fontSize: "16px",
      margin: "10px 0",
    },
  };

  return (
    <Box sx={styles}>
      <Box>
        <Typography variant="h1">Events</Typography>
        <Typography variant="h4">CADathon</Typography>
        <Typography variant="h4">Yantra Search</Typography>
        <Typography variant="h4">Heatovation</Typography>
        <Typography variant="h4">Scrapyard</Typography>
        <Typography variant="h4">Quizzical suspect</Typography>
        <Typography variant="h4">Death race</Typography>
        <Typography variant="h4">Valorant</Typography>
        <Typography variant="h4">Fun Bunkers</Typography>
      </Box>
    </Box>
  );
}
