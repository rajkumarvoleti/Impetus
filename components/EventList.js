import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

export default function EventList({ setCurrIdx }) {
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
      cursor: "pointer",
    },
  };

  const events = [
    "CADathon",
    "Yantra Search",
    "Heatovation",
    "Scrapyard",
    "Quizzical",
    "Death Race",
    "Valorant",
    "Fun",
  ];

  return (
    <Box sx={styles}>
      <Box>
        <Typography variant="h1">Events</Typography>
        {events.map((eve, idx) => {
          return (
            <Typography onClick={() => setCurrIdx(idx)} key={eve} variant="h4">
              {eve}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
}
